import Image from "next/image";
import styles from "../../../styles/HomePage/section5.module.css";
// import redit from "../../public/assets/social/reddit.svg";
import discord from "../../../public/assets/social/discord.svg";
import facebook from "../../../public/assets/social/facebook.svg";
import twitter from "../../../public/assets/social/twitter.svg";
import instagram from "../../../public/assets/social/instagram.svg";
import mxvB from "../../../public/assets/homepage/mxv_logo_b.svg"

export default function HomePage_section4(){
    return(
        <>
            <div className={"dark:bg-dark-100 "+styles['HomePage_section4__container']}>
                <div>
                    <p className="max-w-2xl text-xl font-semibold font-primary md:text-3xl">Join our community to get early access and exclusive privileges on Musixverse</p>
                    <p className="mt-5 text-xs font-secondary md:text-sm">Everything that we are doing today is going to power the decentralized world of tomorrow.</p>
                    <p className="text-xs font-secondary md:text-sm"> Establishing ownership of these assets will be key to what you can and cannot do in the metaverse.</p>
                </div>
                <div className={styles['section2__card--innercard']}>
                    <div className="flex flex-col">
                        <p className="text-sm font-normal dark:text-dark-200 font-secondary">To Know more about community Feedback Hub <br /> Tap the button to get stared</p>
                        <div>
                            <button className="px-8 py-3 mt-6 text-xs text-white bg-primary-200 hover:bg-primary-300 font-primary rounded-xl">Join Community</button>
                        </div>
                    </div>
                    <div className="items-end">
                        <div className={styles["newsletter__social"]}>
                            {/* <button className="flex items-center justify-center">
                                <Image src={redit} width={20} height={20} alt="redit"></Image>
                            </button> */}
                            <button className="flex items-center justify-center">
                                <Image src={discord} width={20} height={20} alt="discord"></Image>
                            </button>
                            <button className="flex items-center justify-center">
                                <Image src={facebook} width={20} height={20} alt="facebook"></Image>
                            </button>
                            <button className="flex items-center justify-center">
                                <Image src={twitter} width={20} height={20} alt="twitter"></Image>
                            </button>
                            <button className="flex items-center justify-center">
                                <Image src={instagram} width={20} height={20} alt="instagram"></Image>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <Image src={mxvB} alt="MXV logo" objectFit="contain"></Image>
                    </div>
                    <div className="flex flex-col justify-between w-full mt-3 space-y-2 md:mt-2 md:space-y-0 md:items-center md:flex-row">
                        <p className="text-xs font-primary">Copyright © 2022 Musixverse Technologies. All rights reserved.</p>
                        <div className="flex space-x-4 text-xs align-top font-primary">
                            <a href="#" className="hover:text-primary-200">Terms and Conditions</a>
                            <a href="#" className="hover:text-primary-200">Privacy Policy</a>
                            <a href="#" className="hover:text-primary-200">Discord</a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}