import Image from "next/image";
import styles from "../../../styles/HomePage/section4.module.css";
// import redit from "../../public/assets/social/reddit.svg";
import discord from "../../../public/assets/social/discord.svg";
import facebook from "../../../public/assets/social/facebook.svg";
import twitter from "../../../public/assets/social/twitter.svg";
import instagram from "../../../public/assets/social/instagram.svg";

export default function HomePage_section4(){
    return(
        <>
            <div className={styles['HomePage_section4__container']}>
                <div>
                    <p className="font-primary text-3xl font-semibold max-w-2xl">Join our community to get early access and exclusive privileges on Musixverse</p>
                    <p className="font-secondary text-sm mt-5">Everything that we are doing today is going to power the decentralized world of tomorrow.</p>
                    <p className="font-secondary text-sm"> Establishing ownership of these assets will be key to what you can and cannot do in the metaverse.</p>
                </div>
                <div className={styles['section2__card--innercard']}>
                    <div className="flex flex-col">
                        <p className="font-secondary text-sm">To Know more about community Feedback Hub <br /> Tap the button to get stared</p>
                        <div>
                            <button className="text-white text-xs bg-primary-200 hover:bg-primary-300 font-primary rounded-xl px-8 py-3 mt-6">Join Community</button>
                        </div>
                    </div>
                    <div className="items-end">
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
        </>

    )
}