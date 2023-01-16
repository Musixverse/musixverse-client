import { useContext } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useMoralis } from "react-moralis";
import AuthModalContext from "../../../../store/authModal-context";
import logoWhite from "../../../../public/logo-white.svg";

export default function HamburgerMenu({ avatarUrl, truncatedName }) {
	const { isAuthenticated, user } = useMoralis();
	const { theme, setTheme } = useTheme();
	const [, setAuthModalOpen] = useContext(AuthModalContext);

	const closeNavbar = () => {
		document.getElementById("hamburgerToggler").click();
	};

	return (
		<div className="flex flex-wrap list-reset pl-0 mb-0 ml-2 lg:hidden">
			<div id="menuToggle">
				<input type="checkbox" className="toggler" id="hamburgerToggler" />
				<div className="hamburger">
					<div></div>
				</div>

				<div id="menu">
					<div className="hamburger_container">
						<div className="menu_box">
							<div className="flex flex-col">
								<div className="md:mx-1/6 md:w-1/5 px-4 offset-0 w-full flex justify-center sm:block logo_div_anim">
									<Link href={"/"} passHref={true}>
										<a href="#" onClick={closeNavbar} className="flex">
											<Image src={logoWhite} alt="MXV Logo" width="75" />
										</a>
									</Link>
								</div>
								<div className="w-full xs:w-2/3 md:w-2/5 sm:w-3/5 px-4 mt-1 create_left_anim self-center sm:self-end flex items-center justify-between space-x-6">
									<button
										aria-label="Toggle Dark Mode"
										type="button"
										className={`flex items-center " + ${user && isAuthenticated ? "" : "rounded-b-xl py-1"} `}
										onClick={() => {
											closeNavbar();
											setTheme(theme === "dark" ? "light" : "dark");
										}}
									>
										<div className="flex items-center justify-center w-9 h-9 rounded-full bg-search-100 dark:bg-search-200 hover:bg-[#bdbdbd] dark:hover:bg-dark-600">
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
									<div className="quick_hamburger_nav_div w-full">
										{isAuthenticated && user.attributes.name ? (
											<div className="quick_hamburger_nav flex items-center justify-center px-4 py-2 text-sm rounded-full text-white bg-search-200">
												<span className="mr-4">{truncatedName}</span>
												{avatarUrl ? <Image src={avatarUrl} alt="avatar" width="24" height="24" className="rounded-full" /> : null}
											</div>
										) : !user ? (
											<div
												onClick={() => {
													closeNavbar();
													setAuthModalOpen(true);
												}}
												className="quick_hamburger_nav flex items-center justify-center px-6 py-2 text-base font-semibold rounded-full text-white bg-search-200"
											>
												Sign up / Login
											</div>
										) : (
											<div className="quick_hamburger_nav flex items-center justify-center px-4 py-2 text-sm rounded-full text-white bg-search-200">
												<span className="mr-4">User</span>
												{avatarUrl ? <Image src={avatarUrl} alt="avatar" width="24" height="24" className="rounded-full" /> : null}
											</div>
										)}
									</div>
								</div>
							</div>

							<div className="hamburger_menu justify-center">
								<div className="flex flex-wrap justify-center">
									<div className="lg:w-full md:w-4/5 px-4 offset-0 w-full md:mt-0">
										<div className="flex flex-wrap justify-center">
											<div className="md:w-1/4 px-2 w-1/2 text-center">
												<div className="flex flex-wrap ham_menu_heading mt-5 sm:mt-0  justify-center">Quick Links</div>
												<div className="flex flex-wrap ham_menu_hover_effect_row md:mt-8 mt-4 justify-center">
													<Link href={"/"} className="ham_menu_link ham_menu_hover_effect text-center" passHref={true}>
														<a className="text-white hover:text-primary-500" onClick={closeNavbar}>
															Home
														</a>
													</Link>
												</div>
												<div className="flex flex-wrap ham_menu_hover_effect_row justify-center">
													<Link
														href={"/mxcatalog/new-releases"}
														className="ham_menu_link ham_menu_hover_effect text-center"
														passHref={true}
													>
														<a className="text-white hover:text-primary-500" onClick={closeNavbar}>
															New Releases
														</a>
													</Link>
												</div>
												<div className="flex flex-wrap ham_menu_hover_effect_row justify-center">
													<Link
														href={"/mxcatalog/explore"}
														className="ham_menu_link ham_menu_hover_effect text-center"
														passHref={true}
													>
														<a className="text-white hover:text-primary-500" onClick={closeNavbar}>
															Explore
														</a>
													</Link>
												</div>

												{user && user.attributes.isArtist && (
													<div className="flex flex-wrap ham_menu_hover_effect_row justify-center">
														<Link href={"/create-nft"} className="ham_menu_link ham_menu_hover_effect text-center" passHref={true}>
															<a className="text-white hover:text-primary-500" onClick={closeNavbar}>
																Create
															</a>
														</Link>
													</div>
												)}
											</div>

											<div className="md:w-1/4 px-4 w-1/2 text-center">
												<div className="flex flex-wrap ham_menu_heading mt-5 sm:mt-0 justify-center">Account</div>
												<div className="flex flex-wrap ham_menu_hover_effect_row md:mt-8 mt-4 justify-center">
													{user && isAuthenticated ? (
														<Link
															href={`/profile/${user.attributes.username}`}
															className="ham_menu_link ham_menu_hover_effect text-center"
															passHref={true}
														>
															<a className="text-white hover:text-primary-500" onClick={closeNavbar}>
																Profile
															</a>
														</Link>
													) : (
														<span
															className="ham_menu_link ham_menu_hover_effect text-center"
															onClick={() => {
																closeNavbar();
																setAuthModalOpen(true);
															}}
														>
															Profile
														</span>
													)}
												</div>
												<div className="flex flex-wrap ham_menu_hover_effect_row justify-center">
													{user && isAuthenticated ? (
														<Link
															href={`/settings/profile-settings`}
															className="ham_menu_link ham_menu_hover_effect text-center"
															passHref={true}
														>
															<a className="text-white hover:text-primary-500" onClick={closeNavbar}>
																Settings
															</a>
														</Link>
													) : (
														<span
															className="ham_menu_link ham_menu_hover_effect text-center"
															onClick={() => {
																closeNavbar();
																setAuthModalOpen(true);
															}}
														>
															Settings
														</span>
													)}
												</div>
											</div>

											<div className="md:w-1/4 px-4 w-1/2 mt-4 md:mt-0 text-center">
												<div className="flex flex-wrap ham_menu_heading mt-5 sm:mt-0 justify-center">Support</div>
												<div className="flex flex-wrap ham_menu_hover_effect_row md:mt-8 mt-4 justify-center">
													<Link href={"/help-center"} className="ham_menu_link ham_menu_hover_effect text-center" passHref={true}>
														<a className="text-white hover:text-primary-500" onClick={closeNavbar}>
															Help Center
														</a>
													</Link>
												</div>
												<div className="flex flex-wrap ham_menu_hover_effect_row justify-center">
													<Link href={"/contact-us"} className="ham_menu_link ham_menu_hover_effect text-center" passHref={true}>
														<a className="text-white hover:text-primary-500" onClick={closeNavbar}>
															Contact Us
														</a>
													</Link>
												</div>
												<div className="flex flex-wrap ham_menu_hover_effect_row justify-center">
													<Link href={"/faq"} className="ham_menu_link ham_menu_hover_effect text-center" passHref={true}>
														<a className="text-white hover:text-primary-500" onClick={closeNavbar}>
															FAQ
														</a>
													</Link>
												</div>
												<div className="flex flex-wrap ham_menu_hover_effect_row justify-center">
													<Link href={"/report-a-bug"} className="ham_menu_link ham_menu_hover_effect text-center" passHref={true}>
														<a className="text-white hover:text-primary-500" onClick={closeNavbar}>
															Report a Bug
														</a>
													</Link>
												</div>
											</div>

											<div className="md:w-1/4 px-4 w-1/2 mt-4 md:mt-0 text-center">
												<div className="flex flex-wrap ham_menu_heading mt-5 sm:mt-0 justify-center">General</div>
												<div className="flex flex-wrap ham_menu_hover_effect_row md:mt-8 mt-4 justify-center">
													<Link href={"/#section_4"} className="ham_menu_link ham_menu_hover_effect text-center" passHref={true}>
														<a className="text-white hover:text-primary-500" onClick={closeNavbar}>
															About Us
														</a>
													</Link>
												</div>
												<div className="flex flex-wrap ham_menu_hover_effect_row justify-center">
													<Link href={"/cfh/cfb"} className="ham_menu_link ham_menu_hover_effect text-center" passHref={true}>
														<a className="text-white hover:text-primary-500" onClick={closeNavbar}>
															Community
														</a>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="flex flex-wrap ">
								<div className="md:mx-1/5 px-4 w-full mt-8 mb-4 horizontal_line_to_right"></div>
							</div>

							<div className="flex flex-wrap justify-center mb-5 harmburger_menu_connect">
								<div className="ham_menu_connect_links_md px-4 offset-0 w-full md:mt-0 mt-5">
									<div className="flex flex-wrap justify-center">
										<div className="ham_menu_heading ham_menu_connect_heading text-center">Connect with us</div>
									</div>
									<div className="grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:justify-center mt-5">
										<a
											href="https://t.me/+7e4mG5yhutswNWVl"
											target="_blank"
											rel="noopener noreferrer"
											className="connect_link cursor_ptr text-center relative flex-grow max-w-full flex-1 px-4 p-0"
										>
											<i className="fab fa-telegram fa-lg"></i>
										</a>
										<a
											href="https://www.linkedin.com/company/musixverse"
											target="_blank"
											rel="noopener noreferrer"
											className="connect_link cursor_ptr text-center relative flex-grow max-w-full flex-1 px-4 p-0"
										>
											<i className="fab fa-linkedin fa-lg"></i>
										</a>
										<a
											href="https://discord.com/invite/rXKb7rCqjG"
											target="_blank"
											rel="noopener noreferrer"
											className="connect_link cursor_ptr text-center relative flex-grow max-w-full flex-1 px-4 p-0"
										>
											<i className="fab fa-discord fa-lg"></i>
										</a>
										<a
											href="https://www.facebook.com/musixverse"
											target="_blank"
											rel="noopener noreferrer"
											className="connect_link cursor_ptr text-center relative flex-grow max-w-full flex-1 px-4 p-0"
										>
											<i className="fab fa-meta fa-lg"></i>
										</a>
										<a
											href="https://twitter.com/musixverse"
											target="_blank"
											rel="noopener noreferrer"
											className="connect_link cursor_ptr text-center relative flex-grow max-w-full flex-1 px-4 p-0"
										>
											<i className="fab fa-twitter fa-lg"></i>
										</a>
										<a
											href="https://www.instagram.com/musixverse"
											target="_blank"
											rel="noopener noreferrer"
											className="connect_link cursor_ptr text-center relative flex-grow max-w-full flex-1 px-4 p-0"
										>
											<i className="fab fa-instagram fa-lg"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
