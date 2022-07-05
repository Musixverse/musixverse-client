import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import mxvB from "../../../public/assets/homepage/mxv_logo_b.svg";
import mxvW from "../../../public/assets/homepage/mxv_logo_w.svg";

const Footer = () => {
    const { theme } = useTheme();
    const { isAuthenticated, user } = useMoralis();

    return (
        <div className="flex justify-center w-full dark:bg-dark-200">
            <div className="footer dark:bg-dark-100">
                <div>
                    <Image src={theme === "dark" ? mxvW : mxvB} alt="MXV logo" objectFit="contain"></Image>
                </div>
                <div className="flex flex-col justify-between w-full mt-3 space-y-2 md:mt-2 md:space-y-0 md:items-center md:flex-row">
                    <p className="text-xs font-primary">Copyright ©2022 Musixverse. All rights reserved.</p>
                    <div className="flex space-x-4 text-xs align-top font-primary">
                        {/* <div>Terms and Conditions</div>
                        <div>Privacy Policy</div> */}
                        <Link href="https://discord.com/invite/rXKb7rCqjG" passHref={true}>
                            <a target="_blank" rel="noopener noreferrer" className="hover:text-primary-200">
                                Discord
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col justify-between w-full mt-20 md:items-center">
                    <div className="flex flex-row space-x-32">
                        <Link href="/">Home</Link>
                        <Link href="/cfh/cfb">Community</Link>
                        <Link href="/library">Library</Link>
                        <Link href="/song-info/1">Song Info</Link>
                        <Link href="/create-nft">Create</Link>
                        {user && isAuthenticated && <Link href={`/profile/${user.attributes.username}`}>Profile</Link>}
                        {user && isAuthenticated && <Link href="/settings/profile-settings">Settings</Link>}
                    </div>
                    <div className="flex flex-row space-x-32 mt-10">
                        <Link href="/contact-us">Contact Us</Link>
                        <Link href="/faq">FAQ</Link>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/404">404</Link>
                        <Link href="/terms-and-conditions">Terms and Conditions</Link>
                        <Link href="/trending">Trending</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
