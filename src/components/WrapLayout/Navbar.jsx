import { useMoralis } from "react-moralis";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import logoBlack from "../../../public/logo-black.svg";
import logoWhite from "../../../public/logo-white.svg";
import ErrorBox from "../Modal/ErrorBox";

const Navbar = ({ setShowLoginModal }) => {
    const { authenticate, isAuthenticated, authError, logout, user } = useMoralis();
    if (user) console.log(user.attributes.username);

    const { theme, setTheme } = useTheme();

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
                    {isAuthenticated && user ? (
                        <Link
                            href="#"
                            className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                            <span className="md:text-sm md:font-medium">Hello {user.attributes.username}</span>
                        </Link>
                    ) : (
                        <>
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
                                    <ul className="dropdown relative">
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
                                            className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none left-auto right-0"
                                            aria-labelledby="dropdownMenuButton2"
                                        >
                                            <li>
                                                <a
                                                    className="dropdown-item text-sm py-2 px-4 block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-primary-100 hover:text-light-100"
                                                    href="#"
                                                    onClick={() => setShowLoginModal(true)}
                                                >
                                                    Login/Authenticate
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item text-sm py-2 px-4 block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                                    href="#"
                                                >
                                                    Profile
                                                </a>
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
                        </>
                    )}
                </div>

                <div className="flex md:order-3">
                    {isAuthenticated && user ? (
                        <button
                            type="button"
                            className="ml-4 px-5 py-2 rounded-xl text-sm font-medium text-white bg-primary-100 hover:bg-primary-300 active:bg-grey-900 focus:outline-none border-4 border-white transition-all md:text-sm md:font-medium"
                            onClick={() => logout()}
                        >
                            Logout
                        </button>
                    ) : null}

                    {authError && <ErrorBox title={"Auth failed!"} message={authError.message} />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
