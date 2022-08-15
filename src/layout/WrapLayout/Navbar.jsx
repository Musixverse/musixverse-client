import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import logoBlack from "../../../public/logo-black.svg";
import logoWhite from "../../../public/logo-white.svg";
import logoIndependence from "../../../public/independence_logo.png";

const Navbar = () => {
	const { theme, setTheme } = useTheme();

	return (
		<nav className="dark:bg-[rgba(19,19,19,0.4)] flex flex-col items-center justify-center dark:backdrop-blur-[24px] dark:backdrop-brightness-105 fixed top-0 z-40 w-full backdrop-blur-[40px] backdrop-brightness-200 bg-[rgba(255,255,255,0.8)]">
			<div className="flex flex-wrap items-center justify-between w-full max-w-[1920px] px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
				<Link href="/">
					<a href="#" className="flex py-2">
						{theme === "light" ? (
							<Image src={logoIndependence} alt="MXV Logo" width="85" height="50" />
						) : (
							<Image src={logoIndependence} alt="MXV Logo" width="85" height="50" />
						)}
					</a>
				</Link>

				<div className="block ml-auto">
					<ul className="flex flex-row items-center text-xs font-medium md:space-x-8 md:mt-0 sm:text-sm">
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
					</ul>
				</div>
			</div>
			<div className="w-full h-1 bg-gradient-to-r from-primary-100 to-primary-300"></div>
		</nav>
	);
};
/*<nav className="navbar">
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

                <div className="block ml-auto">
                    <ul className="flex flex-row items-center text-xs font-medium md:space-x-8 md:mt-0 sm:text-sm">
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
                                Community Feedback Board
                            </Link>
                        </li>
                        <li className="ml-2">
                            <button
                                aria-label="Toggle Dark Mode"
                                type="button"
                                className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-light-300 dark:hover:bg-zinc-800"
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
                    </ul>
                </div>
            </div>
            {/* <div className="w-full h-1 bg-gradient-to-r from-primary-100 to-primary-300"></div> }
        </nav> */
export default Navbar;
