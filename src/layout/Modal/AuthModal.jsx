const { Fragment, useState, useEffect, useRef, useContext } = require("react");
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMoralis } from "react-moralis";
const { Transition } = require("@headlessui/react");
import { Magic } from "magic-sdk";
import { addPolygonNetwork } from "../../utils/smart-contract/functions";
import { isEmailValid, isEmailValidAndAvailableForMagicLogin } from "../../utils/Validate";
import logoBlack from "../../../public/logo-black.svg";
import logoWhite from "../../../public/logo-white.svg";
import LoadingContext from "../../../store/loading-context";
import StatusContext from "../../../store/status-context";
import AuthModalContext from "../../../store/authModal-context";
import MagicWeb3Connector from "../../components/Auth/MagicWeb3Connector";

export default function AuthModal({ isOpen = "", onClose = "" }) {
	const router = useRouter();
	const { authenticate, isAuthenticated, isWeb3Enabled, enableWeb3, Moralis, logout } = useMoralis();
	const [, setLoading] = useContext(LoadingContext);
	const [, , , setError] = useContext(StatusContext);
	const [, setAuthModalOpen] = useContext(AuthModalContext);
	const [isModalOpen, setIsModalOpen] = useState(isOpen);
	const [magicFormOpen, setMagicFormOpen] = useState(false);
	const emailRef = useRef(null);

	const { theme } = useTheme();

	useEffect(() => {
		setIsModalOpen(isModalOpen);
		if (!isModalOpen) {
			document.documentElement.style.overflow = "auto";
		} else {
			document.documentElement.style.overflow = "hidden";
		}
	}, [isModalOpen]);

	useEffect(() => {
		setIsModalOpen(isOpen);
	}, [isOpen]);

	const handleChange = () => {
		setIsModalOpen(!isModalOpen);
	};

	const displayAuthMethods = () => {
		setMagicFormOpen(false);
	};

	const closeModal = () => {
		if (!magicFormOpen) {
			handleChange();
			onClose();
		} else displayAuthMethods();
	};

	// To log out user who authenticated using Magiclink
	const [magicUser, setMagicUser] = useState(null);
	useEffect(() => {
		async function getMagicUser() {
			try {
				const magic = new Magic(process.env.NEXT_PUBLIC_MAGICLINK_API_KEY);
				await magic.user.getMetadata().then((_magicUser) => {
					if (_magicUser && _magicUser.email) {
						setMagicUser(_magicUser);
					}
				});
			} catch (e) {}
		}
		getMagicUser();
	}, []);
	const handleLogout = async () => {
		if (router.pathname != "/") router.push("/");
		await logout();
		if (magicUser) {
			const magic = new Magic(process.env.NEXT_PUBLIC_MAGICLINK_API_KEY);
			await magic.user.logout();
		}
		if (window.localStorage.walletconnect) {
			window.localStorage.removeItem("walletconnect");
		}
		await fetch("/api/auth/logout", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({}),
		});
	};
	const magicLogin = async () => {
		if (!isAuthenticated) {
			setLoading({
				status: true,
				message: "Getting you into Musixverse...",
			});

			const emailCheck = await isEmailValid(emailRef.current.value);
			if (emailCheck.status === false) {
				setError({
					title: emailCheck.title || "Invalid credentials!",
					message: emailCheck.message,
					showErrorBox: true,
				});
				emailRef.current.focus();
				setLoading({
					status: false,
				});
				return;
			}

			// Enable web3 to get user address and chain
			await enableWeb3({
				throwOnError: true,
				// provider: "magicLink",
				connector: MagicWeb3Connector,
				email: emailRef.current.value,
				apiKey: process.env.NEXT_PUBLIC_MAGICLINK_API_KEY,
				network: "mainnet",
			});

			const { account, chainId } = Moralis;
			if (!account) {
				throw new Error("Connecting to chain failed, as no connected account was found");
			}
			if (!chainId) {
				throw new Error("Connecting to chain failed, as no connected chain was found");
			}

			// Get message to sign from the auth api
			const { message } = await Moralis.Cloud.run("requestMessage", {
				address: account,
				chain: parseInt(chainId, 16),
				networkType: "evm",
			});

			try {
				// Authenticate and login via parse
				await authenticate({
					signingMessage: message,
					throwOnError: true,
					// provider: "magicLink",
					connector: MagicWeb3Connector,
					email: emailRef.current.value,
					apiKey: process.env.NEXT_PUBLIC_MAGICLINK_API_KEY,
					network: "mainnet",
				})
					.then(async function (user) {
						if (user) {
							if (!user.attributes.email) {
								// EMAIL CHECK
								const emailCheck = await isEmailValidAndAvailableForMagicLogin(emailRef.current.value);
								if (emailCheck.status === false) {
									setError({
										title: emailCheck.title || "Invalid credentials!",
										message: emailCheck.message,
										showErrorBox: true,
									});
									emailRef.current.focus();
									await handleLogout();
									setLoading({
										status: false,
									});
									return;
								}
								await Moralis.Cloud.run("magicAuthSetUserEmail", { email: emailRef.current.value, userId: user.id });
							}
							setAuthModalOpen(false);
							await fetch("/api/auth/login", {
								method: "post",
								headers: {
									"Content-Type": "application/json",
								},
								body: JSON.stringify({ currentUser: user }),
							}).then(() => {
								closeModal();
								if (router.pathname === "/") router.replace("/mxcatalog/new-releases");
								setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
							});
						}
					})
					.catch(function (error) {
						console.error("MagicLink authentication error:", error);
						setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
					});
			} catch (error) {
				console.error("MagicLink authentication error:", error);
				setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
			}
		}
	};

	/**
	 * 1) Connect to a Evm
	 * 2) Request message to sign using the Moralis Auth Api of moralis (handled on server)
	 * 3) Login via parse using the signed message (verification handled on server via Moralis Auth Api)
	 */
	const handleMetamaskAuth = async () => {
		setLoading({
			status: true,
			message: "Please approve the login from your wallet...",
		});
		try {
			await addPolygonNetwork();
			// Enable web3 to get user address and chain
			if (!isWeb3Enabled) {
				await enableWeb3({ provider: "metamask" });
			}
			const { account, chainId } = Moralis;

			if (!account) {
				setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
				setError((prevState) => ({
					...prevState,
					title: "Auth failed! Metamask not found",
					message: (
						<>
							Please download Metamask by clicking here-{" "}
							<a href="https://metamask.io/download/" target="_blank" rel="noopener noreferrer">
								https://metamask.io/download/
							</a>
							. If you&apos;re on a mobile device, please login using WalletConnect.
						</>
					),
					showErrorBox: true,
				}));
				return;
			}
			if (!chainId) {
				setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
				setError({
					title: "Connection failed",
					message: "No connected chain was found",
					showErrorBox: true,
				});
				return;
			}

			// Get message to sign from the auth api
			const { message } = await Moralis.Cloud.run("requestMessage", {
				address: account,
				chain: parseInt(chainId, 16),
				networkType: "evm",
			});

			// Authenticate and login via parse
			await authenticate({
				signingMessage: message,
			})
				.then(async function (user) {
					if (user) {
						closeModal();
						await fetch("/api/auth/login", {
							method: "post",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({ currentUser: user }),
						}).then(() => {
							if (router.pathname === "/") router.push("/mxcatalog/new-releases");
							setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
						});
					}
				})
				.catch(function (error) {
					console.log("Metamask authentication error:", error);
					setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
				});
		} catch (error) {
			setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
			console.error(error);
		}
		setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
	};

	const handleWalletconnectAuth = async () => {
		setLoading({
			status: true,
			message: "Please approve the login from your wallet...",
		});
		try {
			// Enable web3 to get user address and chain
			if (!isWeb3Enabled) {
				await enableWeb3({ provider: "walletconnect" });
			}
			const { account, chainId } = Moralis;

			if (!account) {
				setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
				setError({
					title: "Connection failed",
					message: "No connected account was found",
					showErrorBox: true,
				});
				return;
			}
			if (!chainId) {
				setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
				setError({
					title: "Connection failed",
					message: "No connected chain was found",
					showErrorBox: true,
				});
				return;
			}

			// Get message to sign from the auth api
			const { message } = await Moralis.Cloud.run("requestMessage", {
				address: account,
				chain: parseInt(chainId, 16),
				networkType: "evm",
			});

			// Authenticate and login via parse
			await authenticate({
				provider: "walletconnect",
				chainId: process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK_ID === "137" ? 137 : "",
				signingMessage: message,
			})
				.then(async function (user) {
					if (user) {
						closeModal();
						await fetch("/api/auth/login", {
							method: "post",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({ currentUser: user }),
						}).then(() => {
							if (router.pathname === "/") router.push("/mxcatalog/new-releases");
							setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
						});
					}
				})
				.catch(function (error) {
					console.log("WalletConnect authentication error:", error);
					setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
				});
		} catch (error) {
			setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
			console.error(error);
		}
		setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
	};

	return (
		<>
			<Transition show={isModalOpen}>
				<Transition.Child
					as={Fragment}
					enter="transition-all duration-200"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-all duration-200"
					leaveTo="opacity-0"
					leaveFrom="opacity-100"
				>
					<div style={{ zIndex: "50" }} onClick={() => handleChange()} className="w-full h-full left-0 top-0 bg-black/80 backdrop-blur fixed" />
				</Transition.Child>
				<Transition.Child
					as={Fragment}
					enter="transition-all duration-200"
					enterFrom="opacity-0 scale-75"
					enterTo="opacity-100 scale-100"
					leave="transition-all duration-200"
					leaveTo="opacity-0 scale-75"
					leaveFrom="opacity-100 scale-100"
				>
					<div style={{ zIndex: "50" }} className="flex justify-center items-center h-full w-full fixed">
						<div className="max-w-[48rem] sm:w-[80vw] w-11/12 p-4 pl-10 pb-12 bg-white dark:bg-dark-600 rounded-lg">
							<div className="w-full flex justify-between">
								<div className="w-full flex flex-col justify-start items-start">
									{theme === "dark" ? (
										<Image src={logoWhite} alt="MXV Logo" width="80" height="80" />
									) : (
										<Image src={logoBlack} alt="MXV Logo" width="80" height="80" />
									)}
								</div>
								<div
									onClick={() => closeModal()}
									className="w-8 h-8 flex justify-center items-center rounded-lg transition-all duration-200 cursor-pointer hover:bg-zinc-500/20 "
								>
									<i className="fa-solid fa-xmark"></i>
								</div>
							</div>

							{!magicFormOpen ? (
								<div className="w-full flex flex-col sm:flex-row sm:space-x-4 mt-4 pr-4">
									<div className="sm:w-2/5">
										<div className="text-xl font-semibold font-primary">Jump into Musixverse!</div>
										<p className="text-sm mt-4 pr-14">Select your wallet from the options to get started.</p>
										<p className="text-[10px] text-gray-400 mt-8 sm:mt-48 pr-14">
											Connecting your wallet is the simplest way to log in to the world of Web3!
										</p>
									</div>
									<div className="sm:w-3/5 mt-4 sm:-mt-10">
										<div className="text-sm">Available Wallets</div>
										<div className="mt-6 w-full space-y-4">
											<button
												onClick={() => handleMetamaskAuth()}
												className="w-full bg-light-200 hover:bg-light-300 dark:bg-dark-800 dark:hover:bg-[#000] rounded-lg flex items-center p-4 text-sm"
											>
												<Image src="/assets/metamask.png" alt="Metamask Logo" width="40" height="40" />
												<div className="flex justify-between items-center w-full">
													<span className="ml-4">Metamask</span>
													<span className="ml-2 text-xl">
														<i className="fa-solid fa-arrow-right-long"></i>
													</span>
												</div>
											</button>
											<button
												onClick={() => handleWalletconnectAuth()}
												className="w-full bg-light-200 hover:bg-light-300 dark:bg-dark-800 dark:hover:bg-[#000] rounded-lg flex items-center p-4 text-sm"
											>
												<Image src="/assets/walletconnect.png" alt="WalletConnect Logo" width="40" height="40" />
												<div className="flex justify-between items-center w-full">
													<span className="ml-4">WalletConnect</span>
													<span className="ml-2 text-xl">
														<i className="fa-solid fa-arrow-right-long"></i>
													</span>
												</div>
											</button>
											<button
												onClick={() => setMagicFormOpen(true)}
												className="w-full bg-light-200 hover:bg-light-300 dark:bg-dark-800 dark:hover:bg-[#000] rounded-lg flex items-center p-4 text-sm"
											>
												<i className="fa-regular fa-envelope text-[2rem] ml-1 text-dark-500 dark:text-light-300"></i>
												<div className="flex justify-between items-center w-full">
													<span className="ml-4">Email</span>
													<span className="ml-2 text-xl">
														<i className="fa-solid fa-arrow-right-long"></i>
													</span>
												</div>
											</button>
										</div>
										<p className="text-[14px] text-gray-400 mt-6 sm:mt-10">
											Having problems setting up your wallet? Follow this&nbsp;
											<Link href={"https://medium.com/@musixverse/how-to-set-up-a-crypto-wallet-metamask-477be25c0f5f"} passHref>
												<a target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600">
													guide
												</a>
											</Link>
											.
										</p>
									</div>
								</div>
							) : (
								<div className="w-full flex flex-col sm:flex-row mt-4 pr-4">
									<div className="sm:w-2/5">
										<div className="text-xl font-semibold font-primary">Jump into Musixverse!</div>
										<p className="text-sm mt-4 pr-14">Please enter your email to proceed.</p>
										<p className="text-[10px] text-gray-400 mt-8 sm:mt-36 pr-14">
											Connecting your wallet is the simplest way to log in to the world of Web3!
										</p>
									</div>
									<div className="sm:w-3/5 mt-4 sm:mt-0">
										<form
											onSubmit={(e) => {
												e.preventDefault();
												magicLogin();
											}}
										>
											<p className="text-sm dark:text-light-200 mb-2">Email Address*</p>
											<input
												type="email"
												ref={emailRef}
												className="w-full p-2 border-2 border-gray-500 rounded-md shadow-sm outline-none focus:border-primary-500 text-sm"
												required
											/>
											<div className="flex justify-end mt-12">
												<button
													type="submit"
													className="flex justify-center items-center space-x-3 bg-primary-500 hover:bg-primary-600 text-[14px] text-light-100 py-2 px-6 rounded-lg font-primary font-semibold max-w-[210px]"
												>
													Submit
													<span className="ml-2 text-xl">
														<i className="fa-solid fa-arrow-right-long"></i>
													</span>
												</button>
											</div>
										</form>
									</div>
								</div>
							)}
						</div>
					</div>
				</Transition.Child>
			</Transition>
		</>
	);
}
