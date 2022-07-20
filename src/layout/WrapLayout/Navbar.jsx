import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import logoBlack from "../../../public/logo-black.svg";
import logoWhite from "../../../public/logo-white.svg";

const Navbar = ({ authModalOpen, setAuthModalOpen }) => {
    const { theme, setTheme } = useTheme();
    const { isAuthenticated, logout, user } = useMoralis();
    const router = useRouter();

    const { data: avatarUrl } = useMoralisCloudFunction("fetchUserAvatarFromAddress", { address: user ? user.attributes.ethAddress : null });

    let truncatedName;
    if (user) {
        truncatedName = user.attributes.name ?? "";
        if (user.attributes.name && user.attributes.name.length > 10) {
            truncatedName = truncatedName.substring(0, 8) + "...";
        }
    }

    let truncatedWalletAddress;
    if (user) {
        truncatedWalletAddress = user.attributes.ethAddress.substring(0, 10) + "..." + user.attributes.ethAddress.substring(36, 42);
    }

    const handleLogout = async () => {
        if (router.pathname !== "/") router.push("/", undefined, { shallow: true });
        await logout();
    };

    const [clientWindowHeight, setClientWindowHeight] = useState("");
    const customStyles = "top-0 rounded-b-[50px]";
    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    if (clientWindowHeight > 50) {
        customStyles = "rounded-full top-2.5 shadow-lg";
    }

    return (
        <div className="absolute flex justify-center w-screen">
            <nav className={"navbar duration-300 ease-in mx-auto " + customStyles}>
                <div className="flex flex-wrap items-center justify-center w-full px-16 py-2">
                    <Link href="/">
                        <a href="#" className="flex">
                            {theme === "light" ? <Image src={logoBlack} alt="MXV Logo" width="75" /> : <Image src={logoWhite} alt="MXV Logo" width="75" />}
                        </a>
                    </Link>

                    {/* Internal links */}
                    <div className="block ml-10">
                        <ul className="flex flex-row items-center font-medium md:text-base md:space-x-8 md:mt-0 sm:text-sm">
                            <li className="hidden hover:text-primary-200 md:block">
                                <Link
                                    href="/"
                                    className="py-2 pl-3 pr-4 text-white rounded hover:text-primary-100 md:bg-transparent md:p-0 dark:text-white"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="hover:text-primary-200">
                                <Link
                                    href="/marketplace/new-releases"
                                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:text-primary-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    New Releases
                                </Link>
                            </li>
                            <li className="hover:text-primary-200">
                                <Link
                                    href="/marketplace/explore"
                                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:text-primary-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Explore
                                </Link>
                            </li>
                            <li className="hover:text-primary-200">
                                <Link
                                    href="/create-nft"
                                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:text-primary-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Create
                                </Link>
                            </li>
                            <li className="hover:text-primary-200">
                                <Link
                                    href="/cfh/cfb"
                                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:text-primary-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Community
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="block ml-auto">
                        <ul className="flex flex-row items-center text-sm font-medium md:space-x-8 md:mt-0 sm:text-sm">
                            {/* Search bar */}
                            <li>
                                {/* <div className="flex items-center justify-center text-xs rounded text-dark-200 dark:text-white">
                                    <div className="flex overflow-hidden border rounded-full dark:border-dark-100">
                                        <button className="flex items-center justify-center px-4 border-l border-light-300 dark:border-dark-100 bg-search-100 dark:bg-search-200">
                                            <svg
                                                className="w-4 h-4 dark:text-white"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                            </svg>
                                        </button>
                                        <input
                                            type="text"
                                            className="px-4 py-2 w-72 border-1 border-light-300 bg-search-100 dark:text-search-300 dark:bg-search-200 focus:outline-none"
                                            placeholder="Search items, collections and accounts"
                                        />
                                    </div>
                                </div> */}
                                <div className="search-box">
                                    <input className="search-text" type="text" placeholder="Search items, collections and accounts" />
                                    <a href="#" className="search-btn">
                                        <i className="fas fa-search"></i>
                                    </a>
                                </div>
                            </li>

                            {/* Notification button */}
                            <li>
                                <button className="flex items-center relative justify-center text-lg p-2.5 rounded-full bg-search-100 dark:bg-search-200 text-dark-200 dark:text-white">
                                    {/* Notification icon - when notification is ON */}
                                    <i className="fa fa-bell"></i>
                                    {/* Notification icon - when notification is OFF */}
                                    {/* <i className="fa fa-bell-slash"></i> */}

                                    {/* Notification badge */}
                                    <div className="bg-red-600 rounded-full w-1.5 h-1.5 absolute top-1/3 right-1/4" />
                                </button>
                            </li>

                            {/* Dropdowm Menu */}
                            <li>
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
                                        ) : (
                                            <div
                                                onClick={() => setAuthModalOpen(true)}
                                                className="flex items-center justify-center px-10 py-2 text-base font-semibold rounded-full bg-search-100 dark:bg-search-200"
                                            >
                                                Sign Up / Log In
                                            </div>
                                        )}
                                    </a>

                                    <ul
                                        className="absolute right-0 left-auto z-10 hidden text-sm font-medium float-left m-0 text-left list-none border-none rounded-xl shadow-lg dropdown-menu min-w-[250px] 
                                        backdrop-blur-[40px] backdrop-brightness-200 bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(19,19,19,0.4)] dark:backdrop-blur-[24px] dark:backdrop-brightness-105
                                        bg-clip-padding group-hover:block"
                                        aria-labelledby="dropdownMenuButton2"
                                    >
                                        <li>
                                            {isAuthenticated && user ? (
                                                <div className="flex items-center justify-between w-full rounded-t-xl px-4 py-3 bg-transparent cursor-pointer dropdown-item whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-200">
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
                                            ) : (
                                                <div className="px-4 py-3 rounded-t-xl bg-transparent hover:bg-primary-100 hover:text-light-100">
                                                    <a
                                                        className="block w-full dropdown-item whitespace-nowrap hover:bg-primary-100 active:bg-primary-100"
                                                        href="#"
                                                        onClick={() => setAuthModalOpen(true)}
                                                    >
                                                        Sign Up / Log In
                                                    </a>
                                                </div>
                                            )}
                                        </li>
                                        {user.attributes.email && isAuthenticated && (
                                            <li>
                                                <Link href={`/profile/${user.attributes.username}`} passHref={true}>
                                                    <div className="block w-full px-4 py-2 bg-transparent cursor-pointer dropdown-item whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-200">
                                                        Profile
                                                    </div>
                                                </Link>
                                            </li>
                                        )}
                                        {user.attributes.email && isAuthenticated && (
                                            <li>
                                                <Link href="/settings/profile-settings" passHref={true}>
                                                    <div className="block w-full px-4 py-2 bg-transparent cursor-pointer dropdown-item whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-200">
                                                        Settings
                                                    </div>
                                                </Link>
                                            </li>
                                        )}
                                        {user.attributes.email && isAuthenticated && (
                                            <li>
                                                <Link href="/settings/notifications-settings" passHref={true}>
                                                    <div className="block w-full px-4 py-2 bg-transparent cursor-pointer dropdown-item whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-200">
                                                        Notification Settings
                                                    </div>
                                                </Link>
                                            </li>
                                        )}
                                        {user && isAuthenticated && (
                                            <li>
                                                <Link href="/settings/account-help" passHref={true}>
                                                    <div className="block w-full px-4 py-2 bg-transparent cursor-pointer dropdown-item whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-200">
                                                        Account Help
                                                    </div>
                                                </Link>
                                            </li>
                                        )}
                                        {user && isAuthenticated && (
                                            <li>
                                                <Link href="/contact-us" passHref={true}>
                                                    <div className="block w-full px-4 py-2 bg-transparent cursor-pointer dropdown-item whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-200">
                                                        Contact Us
                                                    </div>
                                                </Link>
                                            </li>
                                        )}

                                        {/* Toggle theme button */}
                                        <li>
                                            <button
                                                aria-label="Toggle Dark Mode"
                                                type="button"
                                                className={`flex items-center justify-between w-full px-4 hover:bg-gray-100 dark:hover:bg-dark-200 " + ${
                                                    user && isAuthenticated ? "" : "rounded-b-xl py-1"
                                                } `}
                                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                            >
                                                {theme === "dark" ? <p>Switch to Light mode</p> : <p>Switch to Dark mode</p>}
                                                <div className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#bdbdbd] dark:hover:bg-dark-200">
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
                                                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
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
                                                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                                            />
                                                        </svg>
                                                    )}
                                                </div>
                                            </button>
                                        </li>
                                        {/* Logout Button */}
                                        <li>
                                            {isAuthenticated && user ? (
                                                <button
                                                    className="w-full px-4 pt-2 pb-3 rounded-b-xl font-medium transition-all bg-transparent cursor-pointer dark:border-light-300 hover:bg-gray-100 dark:hover:bg-dark-200"
                                                    onClick={handleLogout}
                                                >
                                                    <Link
                                                        className="block w-full text-sm dropdown-item whitespace-nowrap hover:bg-primary-100 active:bg-primary-100"
                                                        href="#"
                                                    >
                                                        Logout
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
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
