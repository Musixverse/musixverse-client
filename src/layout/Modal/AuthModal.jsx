const { Fragment, useState, useEffect, useRef, useContext } = require("react");
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMoralis } from "react-moralis";
const { Transition } = require("@headlessui/react");
import { addPolygonNetwork } from "../../utils/smart-contract/functions";
import logoBlack from "../../../public/logo-black.svg";
import logoWhite from "../../../public/logo-white.svg";
import { DISCORD_SUPPORT_CHANNEL_INVITE_LINK } from "../../config/constants";
import RequiredAsterisk from "../RequiredAsterisk";
import LoadingContext from "../../../store/loading-context";
import StatusContext from "../../../store/status-context";

export default function AuthModal({ isOpen = "", onClose = "" }) {
	const router = useRouter();
	const { authenticate, isAuthenticated, isWeb3Enabled, enableWeb3, Moralis } = useMoralis();
	const [, setLoading] = useContext(LoadingContext);
	const [, , , setError] = useContext(StatusContext);
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

	const magicLogin = async () => {
		if (!isAuthenticated) {
			await authenticate({
				provider: "magicLink",
				email: emailRef.current.value,
				apiKey: process.env.NEXT_PUBLIC_MAGICLINK_API_KEY,
				network: "mumbai",
			})
				.then(function (user) {
					if (user) {
						closeModal();
						if (router.pathname === "/") router.push("/mxcatalog/new-releases");
					}
				})
				.catch(function (error) {
					console.log("Magic authentication error:", error);
				});
		}
	};

	/**
	 * 1) Connect to a Evm
	 * 2) Request message to sign using the Moralis Auth Api of moralis (handled on server)
	 * 3) Login via parse using the signed message (verification handled on server via Moralis Auth Api)
	 */
	const handleMetamaskAuth = async () => {
		setLoading(true);
		try {
			await addPolygonNetwork();
			// Enable web3 to get user address and chain
			if (!isWeb3Enabled) {
				await enableWeb3({ provider: "metamask" });
			}
			const { account, chainId } = Moralis;

			if (!account) {
				setLoading(false);
				setError({
					title: "Connection failed",
					message: "No connected account was found",
					showErrorBox: true,
				});
				return;
			}
			if (!chainId) {
				setLoading(false);
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
						await fetch("/api/auth/login", {
							method: "post",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({ currentUser: user }),
						}).then(() => {
							closeModal();
							if (router.pathname === "/") router.push("/mxcatalog/new-releases");
						});
					}
					setLoading(false);
				})
				.catch(function (error) {
					console.log("Metamask authentication error:", error);
					setLoading(false);
				});
		} catch (error) {
			setLoading(false);
			console.error(error);
		}
		setLoading(false);
	};

	const handleWalletconnectAuth = async () => {
		setLoading(true);
		try {
			// Enable web3 to get user address and chain
			if (!isWeb3Enabled) {
				await enableWeb3({ provider: "walletconnect" });
			}
			const { account, chainId } = Moralis;

			if (!account) {
				setLoading(false);
				setError({
					title: "Connection failed",
					message: "No connected account was found",
					showErrorBox: true,
				});
				return;
			}
			if (!chainId) {
				setLoading(false);
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
						await fetch("/api/auth/login", {
							method: "post",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({ currentUser: user }),
						}).then(() => {
							closeModal();
							if (router.pathname === "/") router.push("/mxcatalog/new-releases");
						});
					}
					setLoading(false);
				})
				.catch(function (error) {
					console.log("WalletConnect authentication error:", error);
					setLoading(false);
				});
		} catch (error) {
			setLoading(false);
			console.error(error);
		}
		setLoading(false);
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
										<p className="text-[10px] text-gray-400 mt-8 sm:mt-36 pr-14">
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
											{/* <button
												onClick={() => setMagicFormOpen(true)}
												className="w-full bg-light-200 hover:bg-light-300 dark:bg-dark-800 dark:hover:bg-[#000] rounded-lg flex items-center p-4 text-sm"
											>
												<Image src="/assets/magic.svg" alt="Magic Logo" width="35" height="35" />
												<div className="flex justify-between items-center w-full">
													<span className="ml-4">Magic</span>
													<span className="ml-2 text-xl">
														<i className="fa-solid fa-arrow-right-long"></i>
													</span>
												</div>
											</button> */}
										</div>
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
									<div className="sm:w-3/5">
										<form onSubmit={magicLogin}>
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
