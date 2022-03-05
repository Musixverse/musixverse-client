import { useMoralis } from "react-moralis";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import logoBlack from "../../../public/logo-black.svg";
import logoWhite from "../../../public/logo-white.svg";
import ErrorBox from "../Modal/ErrorBox";

const Navbar = ({ showErrorBox, setShowErrorBox }) => {
    const { theme, setTheme } = useTheme();
    const { authenticate, isAuthenticated, authError, logout, user } = useMoralis();

    if (typeof window !== "undefined") {
        if (document.getElementById("w3a-modal")) {
            document.getElementById("w3a-modal").style.zIndex = "500";
        }
    }

    const handleLogin = async () => {
        authenticate({
            provider: "web3Auth",
            clientId: process.env.NEXT_PUBLIC_WEB3_AUTH_CLIENT_ID,
            theme: theme === "light" ? "light" : "dark",
            chainId: 0x13881,
            appLogo:
                theme === "light"
                    ? "https://musixverse.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-black.ab1ae84f.svg&w=256&q=75"
                    : "https://musixverse.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-white.510d7439.svg&w=256&q=75",
            loginMethodsOrder: ["google", "facebook", "twitter", "github", "linkedin", "discord", "apple", "email_passwordless"],
        });
    };

    return (
        <nav className="navbar">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link href="/">
                    <a href="#" className="flex">
                        {theme === "light" ? (
                            <Image src={logoBlack} alt="MXV Logo" width="70" height="70" />
                        ) : (
                            <Image src={logoWhite} alt="MXV Logo" width="70" height="70" />
                        )}
                    </a>
                </Link>

                <div className="hidden w-full md:block md:w-auto ml-auto" id="mobile-menu"></div>

                <div className="flex ml-auto">
                    <ul className="flex items-center flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <div className="text-xs rounded text-search-200 bg-light-100 dark:text-search-300 dark:bg-search-200 flex items-center justify-center">
                                <div className="border dark:border-dark-100 rounded overflow-hidden flex">
                                    <input
                                        type="text"
                                        className="w-60 px-4 py-2 border-1 border-light-300 bg-search-100 dark:text-search-300 dark:bg-search-200 focus:outline-none"
                                        placeholder="Search items, and accounts"
                                    />
                                    <button className="flex items-center justify-center px-4 border-l border-light-300 dark:border-dark-100 bg-search-100 dark:bg-search-200">
                                        <svg
                                            className="h-4 w-4 text-search-200 dark:text-search-300"
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
                                className="block py-2 pr-4 pl-3 text-white bg-blue-700 hover:text-primary-100 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="hover:text-primary-200">
                            <Link
                                href="#"
                                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-primary-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Library
                            </Link>
                        </li>
                        <li className="hover:text-primary-200">
                            <Link
                                href="#"
                                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-primary-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Trending
                            </Link>
                        </li>
                        <li className="hover:text-primary-200">
                            <Link
                                href="/profile"
                                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-primary-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <ul className="group dropdown relative">
                                <a
                                    className="dropdown-toggle flex items-center hidden-arrow"
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
                                    className="dropdown-menu min-w-max absolute hidden bg-light-100 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none left-auto right-0 group-hover:block z-10"
                                    aria-labelledby="dropdownMenuButton2"
                                >
                                    {isAuthenticated && user ? (
                                        <button
                                            className="w-full py-2 px-4 border-b border-light-300 font-medium bg-transparent text-gray-700 hover:bg-primary-100 hover:text-light-100 cursor-pointer transition-all"
                                            onClick={() => logout()}
                                        >
                                            <Link
                                                className="dropdown-item text-sm block w-full whitespace-nowrap hover:bg-primary-100 active:bg-primary-100"
                                                href="#"
                                            >
                                                Logout
                                            </Link>
                                        </button>
                                    ) : (
                                        <div className="py-2 px-4 border-b border-light-300 bg-transparent text-gray-700 hover:bg-primary-100 hover:text-light-100">
                                            <a
                                                className="dropdown-item text-sm block w-full whitespace-nowrap hover:bg-primary-100 active:bg-primary-100"
                                                href="#"
                                                onClick={handleLogin}
                                            >
                                                Sign up/ Login
                                            </a>
                                        </div>
                                    )}
                                    <li></li>
                                    <li>
                                        <Link href="/profile">
                                            <div className="dropdown-item cursor-pointer text-sm py-2 px-4 block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                                                Profile
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/profile/settings">
                                            <div className="dropdown-item cursor-pointer text-sm py-2 px-4 block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                                                Settings
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item text-sm py-2 px-4 block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                            href="#"
                                        >
                                            <div className="flex">
                                                Night mode
                                                <div className="form-check form-switch">
                                                    <input
                                                        id="theme-switcher"
                                                        className="form-check-input appearance-none w-10 float-right rounded-full h-5 align-top bg-light-300 dark:bg-primary-100  bg-no-repeat bg-contain focus:outline-none cursor-pointer shadow-sm"
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

                {authError && <ErrorBox title={"Auth failed!"} message={authError.message} showErrorBox={true} setShowErrorBox={setShowErrorBox} />}
            </div>
        </nav>
    );
};

export default Navbar;
