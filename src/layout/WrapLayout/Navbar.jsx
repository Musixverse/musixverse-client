import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/router";
import logoBlack from "../../../public/logo-black.svg";
import logoWhite from "../../../public/logo-white.svg";

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const { authenticate, isAuthenticated, logout, user } = useMoralis();
    const router = useRouter();

    const [watchWeb3AuthModal, setWatchWeb3AuthModal] = useState(false);

    var checkWeb3AuthModalTimeout;
    useEffect(() => {
        checkWeb3AuthModalTimeout = setTimeout(changeWeb3AuthModalVisibility, 100);
    }, [watchWeb3AuthModal]);

    function changeWeb3AuthModalVisibility() {
        if (typeof window !== "undefined" && document.getElementById("w3a-modal")) {
            document.getElementById("w3a-modal").style.zIndex = "500";
            clearTimeout(checkWeb3AuthModalTimeout);
        }
    }

    const handleLogin = async () => {
        setWatchWeb3AuthModal(true);
        await authenticate({
            provider: "web3Auth",
            clientId: process.env.NEXT_PUBLIC_WEB3_AUTH_CLIENT_ID,
            theme: theme === "light" ? "light" : "dark",
            chainId: 0x13881,
            appLogo:
                theme === "light"
                    ? "https://musixverse.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-black.ab1ae84f.svg&w=256&q=75"
                    : "https://musixverse.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-white.510d7439.svg&w=256&q=75",
            loginMethodsOrder: ["google", "facebook", "twitter", "github", "linkedin", "discord", "apple", "email_passwordless"],
            signingMessage: "Musixverse Authentication",
        });
    };

    const handleLogout = async () => {
        if (router.pathname !== "/") router.push("/", undefined, { shallow: true });
        await logout();
    };

    return (
        <nav className="navbar">
            <div className="flex flex-wrap items-center justify-between w-full max-w-[1920px] px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
                <Link href="/">
                    <a href="#" className="flex">
                        {theme === "light" ? (
                            <Image src={logoBlack} alt="MXV Logo" width="70" height="70" />
                        ) : (
                            <Image src={logoWhite} alt="MXV Logo" width="70" height="70" />
                        )}
                    </a>
                </Link>

                {/* <div className="hidden w-full ml-auto md:block md:w-auto" id="mobile-menu"></div> */}

                <div className="block ml-auto">
                    <ul className="flex flex-row items-center text-xs font-medium md:space-x-8 md:mt-0 sm:text-sm">
                        <li>
                            <div className="flex items-center justify-center text-xs rounded text-search-200 bg-light-100 dark:text-search-300 dark:bg-search-200">
                                <div className="flex overflow-hidden border rounded dark:border-dark-100">
                                    <input
                                        type="text"
                                        className="px-4 py-2 w-60 border-1 border-light-300 bg-search-100 dark:text-search-300 dark:bg-search-200 focus:outline-none"
                                        placeholder="Search items, and accounts"
                                    />
                                    <button className="flex items-center justify-center px-4 border-l border-light-300 dark:border-dark-100 bg-search-100 dark:bg-search-200">
                                        <svg
                                            className="w-4 h-4 text-search-200 dark:text-search-300"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </li>
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
                                href="/cfh/cfb"
                                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:text-primary-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Musixverse Community
                            </Link>
                        </li>
                        <li className="hover:text-primary-200">
                            <Link
                                href="/library"
                                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:text-primary-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Library
                            </Link>
                        </li>
                        <li className="hover:text-primary-200">
                            <Link
                                href="/trending"
                                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:text-primary-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Trending
                            </Link>
                        </li>
                        <li className="ml-2">
                            <button
                                aria-label="Toggle Dark Mode"
                                type="button"
                                className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-[#bdbdbd] dark:hover:bg-zinc-800"
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    className="w-6 h-6 text-gray-800 dark:text-gray-200"
                                >
                                    {theme === "dark" ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                        />
                                    )}
                                </svg>
                            </button>
                        </li>
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
                                    {theme === "dark" ? (
                                        <Image src="https://img.icons8.com/nolan/512/apple-settings.png" width="35" height="35" />
                                    ) : (
                                        <Image src="https://img.icons8.com/ios/500/000000/apple-settings.png" width="35" height="35" />
                                    )}
                                </a>
                                <ul
                                    className="absolute right-0 left-auto z-10 hidden float-left py-2 m-0 mt-1 text-left list-none border-none rounded-lg shadow-lg dropdown-menu min-w-[150px] bg-light-100 bg-clip-padding group-hover:block"
                                    aria-labelledby="dropdownMenuButton2"
                                >
                                    {isAuthenticated && user ? (
                                        <button
                                            className="w-full px-4 py-2 font-medium text-gray-700 transition-all bg-transparent border-b cursor-pointer border-light-300 hover:bg-primary-100 hover:text-light-100"
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
                                        <div className="px-4 py-2 text-gray-700 bg-transparent border-b border-light-300 hover:bg-primary-100 hover:text-light-100">
                                            <a
                                                className="block w-full text-sm dropdown-item whitespace-nowrap hover:bg-primary-100 active:bg-primary-100"
                                                href="#"
                                                onClick={handleLogin}
                                            >
                                                Sign Up / Log In
                                            </a>
                                        </div>
                                    )}
                                    <li></li>
                                    {user && isAuthenticated && (
                                        <li>
                                            <Link href={`/profile/${user.attributes.username}`}>
                                                <div className="block w-full px-4 py-2 text-sm text-gray-700 bg-transparent cursor-pointer dropdown-item whitespace-nowrap hover:bg-gray-100">
                                                    Profile
                                                </div>
                                            </Link>
                                        </li>
                                    )}
                                    {user && isAuthenticated && (
                                        <li>
                                            <Link href="/settings/profile-settings">
                                                <div className="block w-full px-4 py-2 text-sm text-gray-700 bg-transparent cursor-pointer dropdown-item whitespace-nowrap hover:bg-gray-100">
                                                    Settings
                                                </div>
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-primary-100 to-primary-300"></div>
        </nav>
    );
};

export default Navbar;
