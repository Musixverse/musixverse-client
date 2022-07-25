import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import mxvB from "../../../public/assets/homepage/mxv_logo_b.svg";
import mxvW from "../../../public/assets/homepage/mxv_logo_w.svg";
import discord from "../../../public/assets/social/discord.svg";
import facebook from "../../../public/assets/social/facebook.svg";
import twitter from "../../../public/assets/social/twitter.svg";
import instagram from "../../../public/assets/social/instagram.svg";
import youtube from "../../../public/assets/social/youtube.svg";
import telegram from "../../../public/assets/social/telegram.svg";
import linkedin from "../../../public/assets/social/linkedin.svg";
import MXV_emblemW from "../../../public/assets/MXV_emblem_white.png";
import MXV_emblemB from "../../../public/assets/MXV_emblem_black.png";

const Footer = () => {
	const { theme } = useTheme();
	const { isAuthenticated, user } = useMoralis();

	return (
		<div className="flex justify-center w-full dark:bg-dark-200">
			<div className="footer dark:bg-dark-100">
				<div className="w-full flex justify-between items-center">
					<Image src={theme === "dark" ? mxvW : mxvB} alt="MXV logo" width="90" height="20"></Image>
					<p className="font-primary text-lg text-primary-100">Hear it. Own it. Live it.</p>
				</div>
				<div className="flex font-primary justify-between border-t-2 border-b-2 border-[#afafaf] w-full py-8 mt-5">
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
							<li className="hover:text-primary-100">
								<Link href="/trending">Trending</Link>
							</li>
							<li className="hover:text-primary-100">
								<Link href="/create-nft">Create</Link>
							</li>
						</ul>
					</div>
					<div className="flex flex-col space-y-2">
						<p className="font-semibold text">Account</p>
						<ul className="space-y-2">
							<li className="hover:text-primary-100">
								{user && isAuthenticated && <Link href={`/profile/${user.attributes.username}`}>Profile</Link>}
							</li>
							<li className="hover:text-primary-100">
								<Link href="/">Dashboard</Link>
							</li>
							<li className="hover:text-primary-100">
								<Link href="/404">Transactions</Link>
							</li>
							<li className="hover:text-primary-100">{user && isAuthenticated && <Link href="/settings/profile-settings">Settings</Link>}</li>
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
								<Link href="/404">Help</Link>
							</li>
							<li className="hover:text-primary-100">
								<Link href="/report-a-bug">Report a Bug</Link>
							</li>
						</ul>
					</div>
					<div className="flex flex-col space-y-2">
						<p className="font-semibold text">Resources</p>
						<ul className="space-y-2">
							<li className="hover:text-primary-100">
								<Link href="/404">Blogs</Link>
							</li>
							<li className="hover:text-primary-100">
								<Link href="/404">Docs</Link>
							</li>
							<li className="hover:text-primary-100">
								{" "}
								<Link href="/404">Media Kit</Link>
							</li>
							<li className="hover:text-primary-100">
								<Link href="/404">Partners</Link>
							</li>
						</ul>
					</div>
					<div className="flex flex-col space-y-2">
						<p className="font-semibold text">General</p>
						<ul className="space-y-2">
							<li className="hover:text-primary-100">
								<Link href="/">About Us</Link>
							</li>
							<li className="hover:text-primary-100">
								<Link href="/team">Team</Link>
							</li>
							<li className="hover:text-primary-100">
								<Link href="/404">Careers</Link>
							</li>
							<li className="hover:text-primary-100">
								<Link href="/404">MXV Greenpaper</Link>
							</li>
							<li className="hover:text-primary-100">
								<Link href="/cfh/cfb">Community</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="flex justify-between items-center w-full mt-3 space-y-2">
					<div className="space-y-2">
						<p className="font-semibold text-lg">Follow us on</p>
						<div className="footer__social mt-2">
							<button className="flex justify-center items-center">
								<Link href="https://www.youtube.com/channel/UCloNloMRDKaB-0e-xeaTdXw" passHref={true}>
									<a target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
										<Image src={youtube} width={20} height={20} alt="YouTube"></Image>
									</a>
								</Link>
							</button>
							<button className="flex justify-center items-center">
								<Link href="https://t.me/+7e4mG5yhutswNWVl" passHref={true}>
									<a target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
										<Image src={telegram} width={20} height={20} alt="Telegram"></Image>
									</a>
								</Link>
							</button>
							<button className="flex justify-center items-center">
								<Link href="https://www.linkedin.com/company/musomatic" passHref={true}>
									<a target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
										<Image src={linkedin} width={20} height={20} alt="LinkedIn"></Image>
									</a>
								</Link>
							</button>
							<button className="flex justify-center items-center">
								<Link href="https://discord.com/invite/rXKb7rCqjG" passHref={true}>
									<a target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
										<Image src={discord} width={20} height={20} alt="discord"></Image>
									</a>
								</Link>
							</button>
							<button className="flex justify-center items-center">
								<Link href="https://www.facebook.com/Musixverse-104390125641359" passHref={true}>
									<a target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
										<Image src={facebook} width={20} height={20} alt="facebook"></Image>
									</a>
								</Link>
							</button>
							<button className="flex justify-center items-center">
								<Link href="https://twitter.com/musixverse" passHref={true}>
									<a target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
										<Image src={twitter} width={20} height={20} alt="twitter"></Image>
									</a>
								</Link>
							</button>
							<button className="flex justify-center items-center">
								<Link href="https://www.instagram.com/musixverse/" passHref={true}>
									<a target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
										<Image src={instagram} width={20} height={20} alt="instagram"></Image>
									</a>
								</Link>
							</button>
						</div>
					</div>
					<div className="flex justify-between space-x-28 font-primary">
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
					<div className="flex justify-center items-center">
						<Image src={theme === "dark" ? MXV_emblemW : MXV_emblemB} width={95} height={95} objectFit="contain" alt="MXV emblem"></Image>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
