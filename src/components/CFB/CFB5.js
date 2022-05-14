import Image from "next/image";
import styles from "../../../styles/CFB/CFB5.module.css";
// import redit from "../../../public/assets/social/reddit.svg";
import discord from "../../../public/assets/social/discord.svg";
import facebook from "../../../public/assets/social/facebook.svg";
import twitter from "../../../public/assets/social/twitter.svg";
import instagram from "../../../public/assets/social/instagram.svg";

export default function CFB5(){
    return(
        <div className={styles['cfb5__container']}>
            <div className={styles['cfb5__card']}>
                <div>
                    <h1 className="font-primary text-3xl font-semibold">Get Started</h1>
                    <p className="font-secondary text-sm mt-2">For more details, you can contact us at</p> 
                    <a href="mailto:info@musixverse.com" className="font-primary text-sm">info@musixverse.com</a>

                    <p className="font-secondary text-sm pt-4">To Know more about community Feedback Hub 
                    <br />Join Our Discord Server
                    </p>
                    <button className="text-white text-xs bg-primary-200 hover:bg-primary-300 font-primary rounded-xl px-8 py-3 mt-6">Join Discord Community</button>
                    <div className={styles["cfb5__social"]}>
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
                <div>
                    <img src="/assets/CFB/section6.png" className={styles['cfb5__right-image']} width={500} height={500} alt="Boy" />
                </div>
            </div>
        </div>
    );
}