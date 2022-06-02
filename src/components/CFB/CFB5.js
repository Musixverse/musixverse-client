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
            <div className={"dark:bg-dark-100 "+styles['cfb5__card']}>
                <div className="self-start lg:self-center">
                    <h1 className="text-3xl font-semibold font-primary">Get Started</h1>
                    <p className="mt-2 text-sm font-secondary">For more details, you can contact us at</p> 
                    <a href="mailto:info@musixverse.com" className="text-sm font-secondary">info@musixverse.com</a>

                    <p className="py-6 text-sm font-secondary">To Know more about community Feedback Hub 
                    <br />Join Our Discord Server
                    </p>
                    <button className="px-8 py-3 mt-2 text-xs text-white bg-primary-200 hover:bg-primary-300 font-primary rounded-xl">Join Discord Community</button>
                    <div className={styles["cfb5__social"]}>
                        <button className="flex items-center justify-center dark:bg-dark-200">
                            <Image src={discord} width={20} height={20} alt="discord"></Image>
                        </button>
                        <button className="flex items-center justify-center dark:bg-dark-200">
                            <Image src={facebook} width={20} height={20} alt="facebook"></Image>
                        </button>
                        <button className="flex items-center justify-center dark:bg-dark-200">
                            <Image src={twitter} width={20} height={20} alt="twitter"></Image>
                        </button>
                        <button className="flex items-center justify-center dark:bg-dark-200">
                            <Image src={instagram} width={20} height={20} alt="instagram"></Image>
                        </button>
                    </div>
                </div>
                <div className="self-end -mb-10 -mr-56 lg:-mr-14">
                    <img src="/assets/CFB/section6.png" className="h-[500px] min-w-[680px] md:min-w-0 lg:h-[370px] xl:h-[470px] md:aspect-auto" alt="Boy" />
                </div>
            </div>
        </div>
    );
}