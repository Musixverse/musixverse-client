import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import mxvB from "../../../public/assets/homepage/mxv_logo_b.svg";
import mxvW from "../../../public/assets/homepage/mxv_logo_w.svg";
import styles from "../../../styles/NewsLetter.module.css";
import discord from "../../../public/assets/social/discord.svg";
import facebook from "../../../public/assets/social/facebook.svg";
import twitter from "../../../public/assets/social/twitter.svg";
import instagram from "../../../public/assets/social/instagram.svg";

const Footer = () => {
    const { theme } = useTheme();
    const { isAuthenticated, user } = useMoralis();

    return (
        <div className="flex justify-center w-full dark:bg-dark-200">
            <div className="footer dark:bg-dark-100">
                <div className="w-full flex justify-between items-baseline">
                    <Image src={theme === "dark" ? mxvW : mxvB} alt="MXV logo" objectFit="contain"></Image>
                    <p className="font-primary text-primary-100">Hear it.Own it. Live it.</p>
                </div>
                <div className="flex font-primary justify-between border-t-2 border-b-2 border-[#afafaf] w-full space-x-20 mt-8 py-8">
                    <div className="flex flex-col space-y-2">
                        <p className="font-semibold text">Quick Links</p>
                        <Link href="/">Home</Link>
                        <Link href="/library">Explore</Link>
                        <Link href="/trending">Trending</Link>
                        <Link href="/create-nft">Create</Link>
                        <Link href="/cfh/cfb">Community</Link>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <p className="font-semibold text">Account</p>
                        {user && isAuthenticated && <Link href={`/profile/${user.attributes.username}`}>Profile</Link>}
                        <Link href="/">Dashboard</Link>
                        <Link href="/404">Transactions</Link>
                        {user && isAuthenticated && <Link href="/settings/profile-settings">Settings</Link>}
                    </div>
                    <div className="flex flex-col space-y-2">
                        <p className="font-semibold text">Support</p>
                        <Link href="/contact-us">Contact Us</Link>
                        <Link href="/faq">FAQ</Link>
                        <Link href="/404">Help</Link>
                        <Link href="/report-a-bug">Report a Bug</Link>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <p className="font-semibold text">Resources</p>
                        <Link href="/404">Blogs</Link>
                        <Link href="/404">Docs</Link>
                        <Link href="/404">Media Kit</Link>
                        <Link href="/404">Partners</Link>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <p className="font-semibold text">General</p>
                        <Link href="/">About Us</Link>
                        <Link href="/team-page">Team</Link>
                        <Link href="/404">Careers</Link>
                        <Link href="/404">MXV Greenpaper</Link>
                    </div>
                </div>

                <div className="flex justify-between w-full mt-3 space-y-2">
                    <div className="flex space-x-14 text-sm align-top font-primary">
                        <p className="max-w-lg">Copyright ©2022 Musixverse. All rights reserved.</p>
                        <Link href="/terms-and-conditions">Terms of Use</Link>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/">Trademarks</Link>
                        {/* <Link href="https://discord.com/invite/rXKb7rCqjG" passHref={true}>
                            <a target="_blank" rel="noopener noreferrer" className="hover:text-primary-200">
                                Discord
                            </a>
                        </Link> */}
                    </div>
                    <div className={styles["newsletter__social"]}>
                        {/* <button className="flex justify-center items-center">
                            <Image src={redit} width={20} height={20} alt="redit"></Image>
                        </button> */}
                        <button className="flex justify-center items-center">
                            <Image src={discord} width={20} height={20} alt="discord"></Image>
                        </button>
                        <button className="flex justify-center items-center">
                            <Image src={facebook} width={20} height={20} alt="facebook"></Image>
                        </button>
                        <button className="flex justify-center items-center">
                            <Image src={twitter} width={20} height={20} alt="twitter"></Image>
                        </button>
                        <button className="flex justify-center items-center">
                            <Image src={instagram} width={20} height={20} alt="instagram"></Image>
                        </button>
                    </div>
                </div>
            </div>    
        </div>
    );
};

export default Footer;
