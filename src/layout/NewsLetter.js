import Image from "next/image";
import styles from "../../styles/NewsLetter.module.css";
import redit from "../../public/assets/social/reddit.svg";
import discord from "../../public/assets/social/discord.svg";
import facebook from "../../public/assets/social/facebook.svg";
import twitter from "../../public/assets/social/twitter.svg";
import instagram from "../../public/assets/social/instagram.svg";

export default function NewsLetter() {
    return (
        <div className={styles["newsletter"]}>
            <div className={styles["newsletter__container"]}>
                <p className="font-tertiary text-4xl mb-2">Stay in the loop</p>
                <div className="flex flex-col md:flex-row justify-between">
                    {/* left section */}
                    <div>
                        <p className="text-sm mb-4">
                            Join our mailing list to stay in the loop with our newest future realeases,
                            <br />
                            NFT drops and tips and tickets for navigating through Musixverse.
                        </p>
                        {/* SIGN UP */}
                        <input className={styles["newsletter__email--input"]} type="email" spellCheck={false} placeholder="Your email address"></input>
                        <button type="button" className={styles["newsletter__email--button"]}>
                            Subscribe
                        </button>
                    </div>
                    {/* Right section */}
                    <div className="flex flex-col mt-5 md:mt-0 md:justify-end md:items-end">
                        <p className="mb-4 text-[18px]">Join the community</p>
                        <div className={styles["newsletter__social"]}>
                            <button className="flex justify-center items-center">
                                <Image src={redit} width={20} height={20} alt="redit"></Image>
                            </button>
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
        </div>
    );
}
