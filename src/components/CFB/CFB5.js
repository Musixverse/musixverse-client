import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/CFB/CFB5.module.css";
// import redit from "../../../public/assets/social/reddit.svg";
import discord from "../../../public/assets/social/discord.svg";
import facebook from "../../../public/assets/social/facebook.svg";
import twitter from "../../../public/assets/social/twitter.svg";
import instagram from "../../../public/assets/social/instagram.svg";

export default function CFB5() {
    return (
        <div className={styles["cfb5__container"]}>
            <div className={"dark:bg-dark-100 " + styles["cfb5__card"]}>
                <div className="self-start lg:self-center">
                    <h1 className="text-3xl font-semibold font-primary">Get Started</h1>
                    <p className="mt-2 text-sm font-secondary">For more details, you can contact us at</p>
                    <a href="mailto:contact@musixverse.com" className="text-sm font-primary text-primary-200">
                        contact@musixverse.com
                    </a>

                    <p className="py-4 text-sm font-secondary">
                        Tap the button to join the Musixverse
                        <br />
                        Community Feedback Board (CFB)
                    </p>
                    <Link href="https://cfbmusixverse.paperform.co/" passHref={true}>
                        <a target="_blank" rel="noopener noreferrer">
                            <button className="px-20 py-3 mt-2 text-xs text-white bg-primary-200 hover:bg-primary-300 font-primary rounded-xl">
                                Join the CFB now!
                            </button>
                        </a>
                    </Link>

                    <div className={styles["cfb5__social"]}>
                        <a
                            className="flex items-center justify-center p-2 rounded-md bg-dark-100"
                            href="https://discord.gg/sCxZyJmW"
                            target={"_blank"}
                            rel="noopener noreferrer"
                        >
                            <Image src={discord} width={20} height={20} alt="discord"></Image>
                        </a>
                        {/* <a className="flex items-center justify-center p-2 rounded-md bg-dark-100" href="https://discord.gg/sCxZyJmW" target={"_blank"} rel="noopener noreferrer">
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
                    </div>
                </div>
                <div className="self-end -mb-10 -mr-56 lg:-mr-14">
                    <img src="/assets/CFB/section6.png" className="h-[500px] min-w-[680px] md:min-w-0 lg:h-[370px] xl:h-[470px] md:aspect-auto" alt="Boy" />
                </div>
            </div>
        </div>
    );
}
