import Image from "next/image";
import styles from "../../../styles/HomePage/section5.module.css";
// import redit from "../../public/assets/social/reddit.svg";
import discord from "../../../public/assets/social/discord.svg";
import facebook from "../../../public/assets/social/facebook.svg";
import twitter from "../../../public/assets/social/twitter.svg";
import instagram from "../../../public/assets/social/instagram.svg";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function HomePage_section4() {
    const { theme } = useTheme();
    return (
        <>
            <div className={"dark:bg-dark-100 " + styles["HomePage_section4__container"]}>
                <div>
                    <p className="max-w-2xl text-xl font-semibold font-primary md:text-3xl">
                        Join our community to get early access and exclusive privileges on Musixverse
                    </p>
                    <p className="mt-5 text-xs font-secondary md:text-sm">
                        Everything that we are doing today is going to power the decentralized world of tomorrow.
                    </p>
                    <p className="text-xs font-secondary md:text-sm">We invite you to be a part of this exciting journey!</p>
                </div>
                <div className={styles["section2__card--innercard"]}>
                    <div className="flex flex-col">
                        <p className="text-xs font-normal md:text-sm dark:text-dark-200 font-secondary">
                            To know more about the Musixverse Community,
                            <br />
                            tap the button below
                        </p>
                        <a
                            href="cfh/cfb"
                            target={"_blank"}
                            rel="noopener noreferrer"
                        >
                            <button className="px-8 py-3 mt-6 text-xs text-white bg-primary-200 hover:bg-primary-300 font-primary rounded-xl">
                                Join Musixverse Community
                            </button>
                        </a>
                    </div>
                    <div className="items-end">
                        <div className={styles["newsletter__social"]}>
                            <a
                                className="flex items-center justify-center p-2 rounded-md bg-dark-100"
                                href="https://discord.com/invite/rXKb7rCqjG"
                                target={"_blank"}
                                rel="noopener noreferrer"
                            >
                                <Image src={discord} width={20} height={20} alt="discord"></Image>
                            </a>
                            {/* <a className="flex items-center justify-center p-2 rounded-md bg-dark-100" href="https://discord.com/invite/rXKb7rCqjG" target={"_blank"} rel="noopener noreferrer">
                                <Image src={facebook} width={20} height={20} alt="facebook"></Image>
                            </a> */}
                            <a
                                className="flex items-center justify-center p-2 rounded-md bg-dark-100"
                                href="https://twitter.com/musixverse"
                                target={"_blank"}
                                rel="noopener noreferrer"
                            >
                                <Image src={twitter} width={20} height={20} alt="twitter"></Image>
                            </a>
                            <a
                                className="flex items-center justify-center p-2 rounded-md bg-dark-100"
                                href=" https://www.instagram.com/musixverse/"
                                target={"_blank"}
                                rel="noopener noreferrer"
                            >
                                <Image src={instagram} width={20} height={20} alt="instagram"></Image>
                            </a>
                            <a
                                className="flex items-center justify-center p-2 rounded-md bg-dark-100"
                                href="https://www.facebook.com/Musixverse-104390125641359"
                                target={"_blank"}
                                rel="noopener noreferrer"
                            >
                                <Image src={facebook} width={20} height={20} alt="facebook"></Image>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
