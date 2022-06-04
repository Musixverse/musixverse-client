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
