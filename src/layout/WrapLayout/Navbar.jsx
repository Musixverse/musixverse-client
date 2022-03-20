import { useMoralis } from "react-moralis";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import logoBlack from "../../../public/logo-black.svg";
import logoWhite from "../../../public/logo-white.svg";

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const { authenticate, isAuthenticated, logout, user } = useMoralis();

    if (typeof window !== "undefined" && document.getElementById("w3a-modal")) {
        document.getElementById("w3a-modal").style.zIndex = "500";
    }

    const handleLogin = async () => {
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

    return (
        <nav className="navbar">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link href="/">
                    <a href="#" className="flex">
                        {theme === "light" ? (
                            <Image src={logoBlack} alt="MXV Logo" width="70" height="70" />
                        ) : (
                            <Image src={logoWhite} alt="MXV Logo" width="70" height="70" />
                        )}
                    </a>
                </Link>

                <div className="hidden w-full ml-auto md:block md:w-auto" id="mobile-menu"></div>

                <div className="hidden ml-auto md:block">
                    <ul className="flex flex-col items-center md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
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
                        <li className="hover:text-primary-200">
                            <Link
                                href="/"
                                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded hover:text-primary-100 md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="hover:text-primary-200">
                            <Link
                                href="/library"
                                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:text-primary-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Library
                            </Link>
                        </li>
                        <li className="hover:text-primary-200">
                            <Link
                                href="/trending"
                                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:text-primary-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Trending
                            </Link>
                        </li>
                        <li className="hover:text-primary-200">
                            <Link
                                href="/profile"
                                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:text-primary-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Profile
                            </Link>
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
                                    className="absolute right-0 left-auto z-10 hidden float-left py-2 m-0 mt-1 text-left list-none border-none rounded-lg shadow-lg dropdown-menu min-w-max bg-light-100 bg-clip-padding group-hover:block"
                                    aria-labelledby="dropdownMenuButton2"
                                >
                                    {isAuthenticated && user ? (
                                        <button
                                            className="w-full px-4 py-2 font-medium text-gray-700 transition-all bg-transparent border-b cursor-pointer border-light-300 hover:bg-primary-100 hover:text-light-100"
                                            onClick={() => logout()}
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
                                    <li>
                                        <Link href="/profile">
                                            <div className="block w-full px-4 py-2 text-sm text-gray-700 bg-transparent cursor-pointer dropdown-item whitespace-nowrap hover:bg-gray-100">
                                                Profile
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/profile/settings">
                                            <div className="block w-full px-4 py-2 text-sm text-gray-700 bg-transparent cursor-pointer dropdown-item whitespace-nowrap hover:bg-gray-100">
                                                Settings
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <a
                                            className="block w-full px-4 py-2 text-sm text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
                                            href="#"
                                        >
                                            <div className="flex">
                                                Night mode
                                                <div className="form-check form-switch">
                                                    <input
                                                        id="theme-switcher"
                                                        className="float-right w-10 h-5 align-top bg-no-repeat bg-contain rounded-full shadow-sm appearance-none cursor-pointer form-check-input bg-light-300 dark:bg-primary-100 focus:outline-none"
                                                        type="checkbox"
                                                        role="switch"
                                                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                                        defaultChecked={theme === "dark"}
                                                    />
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
