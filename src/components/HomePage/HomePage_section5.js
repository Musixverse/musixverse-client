import Image from "next/image";
import styles from "../../../styles/HomePage/section5.module.css";
// import redit from "../../public/assets/social/reddit.svg";
import discord from "../../../public/assets/social/discord.svg";
import facebook from "../../../public/assets/social/facebook.svg";
import twitter from "../../../public/assets/social/twitter.svg";
import instagram from "../../../public/assets/social/instagram.svg";
import mxvB from "../../../public/assets/homepage/mxv_logo_b.svg"
import mxvW from "../../../public/assets/homepage/mxv_logo_w.svg"
import { useTheme } from "next-themes";

export default function HomePage_section4(){
    const {theme} = useTheme();
    return(
        <>
            <div className={"dark:bg-dark-100 "+styles['HomePage_section4__container']}>
                <div>
                    <p className="max-w-2xl text-xl font-semibold font-primary md:text-3xl">Join our community to get early access and exclusive privileges on Musixverse</p>
                    <p className="mt-5 text-xs font-secondary md:text-sm">Everything that we are doing today is going to power the decentralized world of tomorrow.</p>
                    <p className="text-xs font-secondary md:text-sm">We invite you to be a part of this exciting journey!</p>
                </div>
                <div className={styles['section2__card--innercard']}>
                    <div className="flex flex-col">
                        <p className="text-sm font-normal dark:text-dark-200 font-secondary">To know more about our community  <br /> Tap the button to get stared</p>
                        <a className="px-8 py-3 mt-6 text-xs text-white bg-primary-200 hover:bg-primary-300 font-primary rounded-xl" href="https://discord.gg/sCxZyJmW" target={"_blank"} rel="noopener noreferrer">Join Discord Community</a>
                    </div>
                    <div className="items-end">
                        <div className={styles["newsletter__social"]}>
                            <a className="flex items-center justify-center p-2 rounded-md bg-dark-100" href="https://discord.gg/sCxZyJmW" target={"_blank"} rel="noopener noreferrer">
                                <Image src={discord} width={20} height={20} alt="discord"></Image>
                            </a>
                            {/* <a className="flex items-center justify-center p-2 rounded-md bg-dark-100" href="https://discord.gg/sCxZyJmW" target={"_blank"} rel="noopener noreferrer">
                                <Image src={facebook} width={20} height={20} alt="facebook"></Image>
                            </a> */}
                            <a className="flex items-center justify-center p-2 rounded-md bg-dark-100" href="https://twitter.com/musixverse" target={"_blank"} rel="noopener noreferrer">
                                <Image src={twitter} width={20} height={20} alt="twitter"></Image>
                            </a>
                            <a className="flex items-center justify-center p-2 rounded-md bg-dark-100" href=" https://www.instagram.com/musixverse/" target={"_blank"} rel="noopener noreferrer">
                                <Image src={instagram} width={20} height={20} alt="instagram"></Image>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <Image src={theme === 'dark'? mxvW:mxvB} alt="MXV logo" objectFit="contain"></Image>
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