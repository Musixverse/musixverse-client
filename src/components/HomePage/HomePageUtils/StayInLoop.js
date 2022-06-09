import Image from "next/image";
import discord from "../../../../public/assets/social/discord.svg";
import twitter from "../../../../public/assets/social/twitter.svg";
import instagram from "../../../../public/assets/social/instagram.svg";
import styles from "../../../../styles/HomePage/section5.module.css";

export default function StayInLoop(){
    // mt-28
    return(
        <div className="w-full backdrop-blur-[12px] backdrop-brightness-150 flex justify-center mt-28">
            <div className="max-w-[1920px] flex flex-col justify-between w-full px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36 py-16 lg:flex-row">
                {/* Left div */}
                <div className="mb-3 text-light-100 lg:mb-0">
                    <h3 className="mb-3 text-2xl font-primary">Stay in the loop</h3>
                    <p className="max-w-md 2xl:max-w-xl font-secondary text-[15px]">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tickets for navigating Musixverse.</p>
                </div>
                {/* Right div */}
                <div className="flex items-center justify-between lg:items-end lg:flex-col">
                    <div className="flex flex-col self-end md:flex-row">
                        <input spellCheck="false" className="py-3 pl-6 pr-6 text-sm rounded-lg outline-none sm:pr-20 md:pr-24 2xl:pr-32 font-primary bg-dark-100 text-light-100" placeholder="Enter your email"></input>
                        <button className="py-2 mt-3 font-semibold rounded-lg md:mt-0 md:ml-3 px-7 bg-light-100 dark:text-dark-100">Subscribe</button>
                    </div>
                    <div className="self-start lg:mt-4 lg:self-end md:self-center">
                        <p className="mb-1 lg:hidden font-secondary text-light-100">Join the Community</p>
                        <div className={styles["newsletter__social"]}>
                            <a
                                className="flex items-center justify-center p-2 rounded-md bg-dark-100"
                                href="https://discord.gg/sCxZyJmW"
                                target={"_blank"}
                                rel="noopener noreferrer"
                            >
                                <Image src={discord} width={20} height={20} alt="discord"></Image>
                            </a>
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
                </div>
            </div>
        </div>
    );
}