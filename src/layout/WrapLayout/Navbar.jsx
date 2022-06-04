import { useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import logoBlack from "../../../public/logo-black.svg";
import logoWhite from "../../../public/logo-white.svg";

const Navbar = () => {
    const { theme, setTheme } = useTheme();

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
                                href="/cfh/cfb"
                                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:text-primary-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Community Feedback Board
                            </Link>
                        </li>
                        <li className="hover:text-primary-200">
                            <Link
                                href="/contact"
                                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:text-primary-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <button
                                aria-label="Toggle Dark Mode"
                                type="button"
                                className="p-1 h-12 w-12 flex items-center justify-center rounded-full hover:bg-light-300 dark:hover:bg-zinc-800"
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    className="h-6 w-6 text-gray-800 dark:text-gray-200"
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
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
