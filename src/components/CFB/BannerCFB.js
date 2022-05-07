import Image from "next/image";
import styles from "../../../styles/CFB/BannerCFB.module.css";
// import girl_svg from "../../../public/assets/CFB/Girl_Banner.png";
// import boy_svg from "../../../public/assets/CFB/Boy_Banner.png";

export default function BannerCFB(){
    return(
        <>
            <div className={styles['cfb-banner__container']}>
                <img src="/assets/CFB/Girl_Banner.png" className={styles['cfb-banner__left-image']} width={500} height={500} alt="Girl" />
                <div className={styles['cfb-banner__subcontainer']}>
                    <p className="font-primary font-semibold text-center">Hello there!</p>
                    <p className="text-3xl max-w-lg font-primary font-semibold text-center">We invite you to be a part of our Insider Community!</p>
                    <p  className="font-secondary text-xs max-w-xl pt-6 text-center">
                    Community is at the core of Musixverse. We are building a platform that will bring
                    together artist and fans like never before, help each other do great things together,
                    and empower each other in the process.</p>
                    <button className="text-white text-xs bg-primary-200 hover:bg-primary-300 font-primary rounded-xl px-5 py-3 mt-6">
                    Join Discord Community</button>
                </div>
                <img src="/assets/CFB/Boy_Banner.png" className={styles['cfb-banner__right-image']} width={500} height={500} alt="Boy" />
            </div>
            <button>
                <img src="/assets/CFB/circle_dropdown.png" className={styles['cfb-banner__circle-dropdown']} width={50} height={50} alt="circle dropdown" />       
            </button>
        </>
    );
}
