import { useContext } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import mxvB from "../../../public/assets/homepage/mxv_logo_b.svg";
import mxvW from "../../../public/assets/homepage/mxv_logo_w.svg";
import Socials from "../Socials";
import MXV_emblemW from "../../../public/assets/MXV_emblem_white.png";
import MXV_emblemB from "../../../public/assets/MXV_emblem_black.png";
import Tooltip from "../Tooltip/Tooltip";
import AuthModalContext from "../../../store/authModal-context";

const Footer = () => {
	const { theme } = useTheme();
	const { isAuthenticated, user } = useMoralis();
	const [, setAuthModalOpen] = useContext(AuthModalContext);

	return (
		<div className="flex justify-center w-full dark:bg-dark-200">
			<div className="footer dark:bg-dark-100">
				<div className="w-full flex justify-between items-center">
					<Image src={theme === "dark" ? mxvW : mxvB} alt="MXV logo" width="90" height="20" />
					<p className="font-primary text-lg text-primary-100">Hear it. Own it. Live it.</p>
				</div>

				<div className="grid grid-cols-2 gap-y-10 md:gap-y-0 md:flex flex-wrap font-primary justify-between border-t-2 border-light-300 w-full py-8 mt-5">
					<div className="flex flex-col space-y-2">
						<p className="font-semibold text">Quick Links</p>
						<ul className="space-y-2">
							<li className="hover:text-primary-100">
								<Link href="/" className="links">
									Home
								</Link>
							</li>
							<li className="hover:text-primary-100">
								<Link href="/mxcatalog/new-releases">New Releases</Link>
							</li>
							<li className="hover:text-primary-100">
								<Link href="/mxcatalog/explore">Explore</Link>
							</li>
							<Tooltip
								labelText={<li className="text-dark-100 dark:text-light-100 cursor-help">Trending</li>}
								message="Coming soon!"
								tooltipLocation="bottom"
							></Tooltip>
							{user && user.attributes.isArtist && (
								<li className="hover:text-primary-100">
									<Link href="/create-nft">Create</Link>
								</li>
							)}
						</ul>
					</div>
					<div className="flex flex-col space-y-2">
						<p className="font-semibold text">Account</p>
						<ul className="space-y-2">
							<li className="hover:text-primary-100 cursor-pointer">
								{user && isAuthenticated ? (
									<Link href={`/profile/${user.attributes.username}`}>Profile</Link>
								) : (
									<span onClick={() => setAuthModalOpen(true)}>Profile</span>
								)}
							</li>
							<li className="hover:text-primary-100">{user && isAuthenticated && <Link href="/settings/profile-settings">Settings</Link>}</li>
							<Tooltip
								labelText={<li className="text-dark-100 dark:text-light-100 cursor-help">Transactions</li>}
								message="Coming soon!"
								tooltipLocation="bottom"
							></Tooltip>
						</ul>
					</div>
					<div className="flex flex-col space-y-2">
						<p className="font-semibold text">Support</p>
						<ul className="space-y-2">
							<li className="hover:text-primary-100">
								<Link href="/contact-us">Contact Us</Link>
							</li>
							<li className="hover:text-primary-100">
								<Link href="/faq">FAQ</Link>
							</li>
							<li className="hover:text-primary-100">
								<Link href="/help-center">Help Center</Link>
							</li>
							<li className="hover:text-primary-100">
								<Link href="/report-a-bug">Report a Bug</Link>
							</li>
						</ul>
					</div>
					<div className="flex flex-col space-y-2">
						<p className="font-semibold text">Resources</p>
						<ul className="space-y-2">
							<Tooltip
								labelText={<li className="text-dark-100 dark:text-light-100 cursor-help">Docs</li>}
								message="Coming soon!"
								tooltipLocation="bottom"
							></Tooltip>
							<li className="hover:text-primary-100">
								<Link href="https://medium.com/@musixverse" passHref>
									<a target="_blank" rel="noopener noreferrer">
										Blogs
									</a>
								</Link>
							</li>
							<Tooltip
								labelText={<li className="text-dark-100 dark:text-light-100 cursor-help">Media Kit</li>}
								message="Coming soon!"
								tooltipLocation="bottom"
							></Tooltip>
							{/* <li className="cursor-not-allowed">Partners</li> */}
						</ul>
					</div>
					<div className="flex flex-col space-y-2">
						<p className="font-semibold text">General</p>
						<ul className="space-y-2">
							<Tooltip
								labelText={<li className="text-dark-100 dark:text-light-100 cursor-help">About Us</li>}
								message="Coming soon!"
								tooltipLocation="bottom"
							></Tooltip>
							<li className="hover:text-primary-100">
								<Link href="/cfh/cfb">Community</Link>
							</li>
							{/* 
							<Tooltip
								labelText={<li className="text-dark-100 dark:text-light-100 cursor-help">Team</li>}
								message="Coming soon!"
								tooltipLocation="bottom"
							></Tooltip> */}
							<Tooltip
								labelText={<li className="text-dark-100 dark:text-light-100 cursor-help">MXV Greenpaper</li>}
								message="Coming soon!"
								tooltipLocation="bottom"
							></Tooltip>
							{/* <li className="cursor-not-allowed">Careers</li> */}
						</ul>
					</div>
				</div>

				<div className="flex flex-col justify-center items-center space-y-5 mb-4 sm:flex-row sm:justify-between sm:items-center w-full mt-3 sm:space-y-2 sm:mb-0">
					<div className="space-y-2">
						<p className="font-semibold text-lg text-center sm:text-left">Follow us on</p>
						<Socials />
					</div>
					<div className="grid grid-cols-2 gap-2 gap-x-10 md:gap-x-8 md:pt-6 lg:gap-0 lg:flex justify-between lg:space-x-6 xl:space-x-28 font-primary">
						<li className="text-xs text-neutral-400 list-none">
							<Link href="/privacy-policy">Privacy Policy</Link>
						</li>
						<li className="text-xs text-neutral-400 list-none">
							<Link href="/terms-and-conditions">Terms of Use</Link>
						</li>
						<li className="text-xs text-neutral-400 list-none">
							<Link href="/">Trademark</Link>
						</li>
						<li className="text-xs text-neutral-400 list-none">
							<Link href="/contact-us">Contact Us</Link>
						</li>
					</div>
					<div className="flex md:justify-center items-center">
						<Image src={theme === "dark" ? MXV_emblemW : MXV_emblemB} width={95} height={95} objectFit="contain" alt="MXV emblem"></Image>
					</div>
				</div>
				<p className="font-primary text-xs max-w-sm text-center sm:text-left mx-auto sm:mx-0">
					©2021 All Rights Reserved. Musixverse logo is a registered trademark of Musixverse Company.
				</p>
			</div>
		</div>
	);
};

export default Footer;
