import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import logoBlack from "../../../public/logo-black.svg";
import logoWhite from "../../../public/logo-white.svg";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import { loadTransak } from "../../utils/TransakOnRamp";
import { Magic } from "magic-sdk";

const Navbar = ({ authModalOpen, setAuthModalOpen }) => {
	const { theme, setTheme } = useTheme();
	const { isAuthenticated, logout, user, Moralis } = useMoralis();
	const router = useRouter();
	const [balance, setBalance] = useState(0);

	useEffect(() => {
		const fetchBalance = async () => {
			try {
				const options = { chain: process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK_ID };
				const _balance = await Moralis.Web3API.account.getNativeBalance(options);
				const _balanceAmount = parseFloat(_balance.balance) / 10 ** 18 === 0 ? "0" : parseFloat(_balance.balance) / 10 ** 18;
				setBalance(_balanceAmount > 0 ? _balanceAmount.toFixed(2) : 0);
			} catch (error) {
				console.log("ERROR-", error);
			}
		};
		if (user) {
			fetchBalance();
		}
	}, [user, Moralis.Web3API.account]);

	const { data: avatarUrl } = useMoralisCloudFunction("fetchUserAvatarFromAddress", { address: user ? user.attributes.ethAddress : null });

	let truncatedName;
	if (user && user.attributes.name) {
		truncatedName = user.attributes.name ?? "";
		if (user.attributes.name && user.attributes.name.length > 10) {
			truncatedName = truncatedName.substring(0, 8) + "...";
		}
	}

	let truncatedWalletAddress;
	if (user && user.attributes.ethAddress) {
		truncatedWalletAddress = user.attributes.ethAddress.substring(0, 10) + "..." + user.attributes.ethAddress.substring(36, 42);
	}

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
		if (user.attributes.authMethod === "magicLink" || magicUser) {
			const magic = new Magic(process.env.NEXT_PUBLIC_MAGICLINK_API_KEY);
			await magic.user.logout();
		}
		await logout();
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
		// router.reload(window.location.pathname);
	};

	const [clientWindowHeight, setClientWindowHeight] = useState("");
	const customStyles = "lg:top-0 lg:rounded-b-[50px]";
	const handleScroll = () => {
		setClientWindowHeight(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	if (clientWindowHeight > 50) {
		customStyles = "lg:rounded-full lg:mt-2 lg:shadow-lg";
	}

	return (
		<div className="absolute flex justify-center w-screen">
			<div className="w-full fixed z-40 max-w-[1920px] lg:px-16 xl:px-20 2xl:px-36">
				<nav className={"navbar duration-500 ease-in mx-auto " + customStyles}>
					<div className="flex flex-wrap items-center justify-start w-full pl-7 sm:pl-9 pr-16 lg:px-16 py-2">
						<Link href="/">
							<a href="#" className="flex">
								{theme === "dark" ? <Image src={logoWhite} alt="MXV Logo" width="75" /> : <Image src={logoBlack} alt="MXV Logo" width="75" />}
							</a>
						</Link>

						{/* Internal links */}
						<div className="hidden ml-10 lg:block">
							<ul className="flex flex-row items-center font-medium md:text-base md:space-x-3 xl:space-x-6 md:mt-0 sm:text-sm">
								{/* <li className="hidden hover:text-primary-600 md:block">
									<Link
										href="/"
										className="py-2 pl-3 pr-4 text-white rounded hover:text-primary-500 md:bg-transparent md:p-0 dark:text-white"
										aria-current="page"
									>
										Home
									</Link>
								</li> */}
								<li className="hover:text-primary-600">
									<Link
										href="/mxcatalog/new-releases"
										className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:text-primary-500 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
									>
										Mx Catalog
									</Link>
								</li>
								<li className="hover:text-primary-600">
									<Link
										href="/mxlyrics"
										className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:text-primary-500 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
									>
										Mx Lyrics
									</Link>
								</li>
								{user && user.attributes.isArtist && (
									<li className="hover:text-primary-600">
										<Link
											href="/create-nft"
											className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:text-primary-500 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
										>
											Create
										</Link>
									</li>
								)}
								<li className="hover:text-primary-600">
									<Link
										href="/help-center"
										className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:text-primary-500 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
									>
										Resources
									</Link>
								</li>
							</ul>
						</div>

						<div className="hidden ml-auto md:block">
							<ul className="flex flex-row items-center text-sm font-medium md:space-x-8 lg:space-x-3 xl:space-x-6 md:mt-0 sm:text-sm">
								{/* Search bar */}
								{/* TODO: hidden for beta */}
								{/* <li className="hidden xl:block">
									<div className="search-box">
										<input className="search-text" type="text" placeholder="Search items, collections and accounts" />
										<a href="#" className="search-btn">
											<i className="fas fa-search"></i>
										</a>
									</div>
								</li> */}

								{/* Notification button */}
								{/* <li className="hidden lg:block">
									<button className="flex items-center relative justify-center text-lg p-2.5 rounded-full bg-search-100 dark:bg-search-200 text-dark-800 dark:text-white">
										Notification icon - when notification is ON
										<i className="fa fa-bell"></i>
										Notification icon - when notification is OFF
										<i className="fa fa-bell-slash"></i>

										Notification badge
										<div className="bg-red-600 rounded-full w-1.5 h-1.5 absolute top-1/3 right-1/4" />
									</button>
								</li> */}
								{/* Toggle theme button */}
								<li>
									<button
										aria-label="Toggle Dark Mode"
										type="button"
										className={`flex items-center justify-between w-full " + ${user && isAuthenticated ? "" : "rounded-b-xl py-1"} `}
										onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
									>
										<div className="flex items-center justify-center w-10 h-10 rounded-full bg-search-100 dark:bg-search-200 hover:bg-[#bdbdbd] dark:hover:bg-dark-600">
											{theme === "dark" ? (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													stroke="currentColor"
													className="w-6 h-6 text-gray-800 dark:text-gray-200"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
													/>
												</svg>
											) : (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													stroke="currentColor"
													className="w-6 h-6 text-gray-800 dark:text-gray-200"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
													/>
												</svg>
											)}
										</div>
									</button>
								</li>

								{/* Dropdowm Menu */}
								<li className="hidden md:block">
									<ul className="relative group dropdown">
										<a
											className="flex items-center dropdown-toggle hidden-arrow"
											href="#"
											id="dropdownMenuButton2"
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											{isAuthenticated && user.attributes.name ? (
												<div className="flex items-center justify-center px-4 py-2 text-sm rounded-full bg-search-100 dark:bg-search-200">
													<span className="mr-4">{truncatedName}</span>
													{avatarUrl ? <Image src={avatarUrl} alt="avatar" width="24" height="24" className="rounded-full" /> : null}
												</div>
											) : !user ? (
												<div
													onClick={() => setAuthModalOpen(true)}
													className="flex items-center justify-center px-10 py-2 text-base font-semibold rounded-full bg-search-100 dark:bg-search-200"
												>
													Connect wallet
												</div>
											) : (
												<div className="flex items-center justify-center px-4 py-2 text-sm rounded-full bg-search-100 dark:bg-search-200">
													<span className="mr-4">User</span>
													{avatarUrl ? <Image src={avatarUrl} alt="avatar" width="24" height="24" className="rounded-full" /> : null}
												</div>
											)}
										</a>

										<ul
											className="absolute right-0 left-auto z-10 hidden text-sm font-medium float-left m-0 text-left list-none border-none rounded-xl shadow-lg dropdown-menu min-w-[250px] 
											backdrop-blur-[40px] backdrop-brightness-200 bg-[rgba(255,255,255)] dark:bg-[rgba(19,19,19)] dark:backdrop-blur-[24px] dark:backdrop-brightness-105
											bg-clip-padding group-hover:block"
											aria-labelledby="dropdownMenuButton2"
										>
											<li>
												{isAuthenticated && user && (
													<Link href="/settings/profile-settings" passHref={true}>
														<div className="flex flex-col px-4 pt-3 pb-2 cursor-pointer rounded-t-xl hover:bg-gray-100 dark:hover:bg-dark-600">
															<div className="flex items-center justify-between w-full bg-transparent rounded-t-xl dropdown-item whitespace-nowrap active:bg-transparent active:dark:text-light-100">
																<div>
																	<p>Wallet Address</p>
																	<p>{truncatedWalletAddress}</p>
																</div>
																{avatarUrl ? (
																	<Image
																		src={avatarUrl}
																		alt={user.walletAddress}
																		width={40}
																		height={40}
																		objectFit="contain"
																		className="rounded-lg"
																	/>
																) : null}
															</div>
															<p className="mt-1">
																Balance:&nbsp;&nbsp;
																<Image src={"/assets/matic-logo.svg"} width={12} height={12} alt="matic logo" /> {balance}
																&nbsp;MATIC
															</p>
														</div>
													</Link>
												)}
											</li>
											{user && isAuthenticated && user.attributes.email && (
												<li>
													<Link href={`/profile/${user.attributes.username}`} passHref={true}>
														<div className="block w-full px-4 py-2 bg-transparent cursor-pointer dropdown-item whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-600">
															Profile
														</div>
													</Link>
												</li>
											)}
											{user && isAuthenticated && user.attributes.email && (
												<li>
													<Link href="/settings/profile-settings" passHref={true}>
														<div className="block w-full px-4 py-2 bg-transparent cursor-pointer dropdown-item whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-600">
															Settings
														</div>
													</Link>
												</li>
											)}
											{user && isAuthenticated && user.attributes.email && (
												<li>
													<div
														onClick={() => loadTransak(user)}
														className="block w-full px-4 py-2 bg-transparent cursor-pointer dropdown-item whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-600"
													>
														Buy MATIC&nbsp;&nbsp;
														<Image src={"/assets/matic-logo.svg"} width={14} height={14} alt="matic logo" />
													</div>
												</li>
											)}

											{user && isAuthenticated && user.attributes.email && (
												<li>
													<Link href="/settings/account-help" passHref={true}>
														<div className="block w-full px-4 py-2 bg-transparent cursor-pointer dropdown-item whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-600">
															Account Help
														</div>
													</Link>
												</li>
											)}
											{user && isAuthenticated && (
												<li>
													<Link href="/contact-us" passHref={true}>
														<div className="block w-full px-4 py-2 bg-transparent cursor-pointer dropdown-item whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-600">
															Contact Us
														</div>
													</Link>
												</li>
											)}

											{/* Logout Button */}
											<li>
												{isAuthenticated && user ? (
													<button
														className="w-full px-4 pt-2 pb-3 font-medium transition-all bg-transparent cursor-pointer rounded-b-xl dark:border-light-300 hover:bg-gray-100 dark:hover:bg-dark-600"
														onClick={handleLogout}
													>
														<Link
															className="block w-full text-sm dropdown-item whitespace-nowrap hover:bg-primary-500 active:bg-primary-500"
															href="#"
														>
															Sign out
														</Link>
													</button>
												) : (
													<span></span>
												)}
											</li>
										</ul>
									</ul>
								</li>
							</ul>
						</div>

						{/* Hamburger Menu */}
						<HamburgerMenu avatarUrl={avatarUrl} truncatedName={truncatedName} />
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
