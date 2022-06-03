import styles from "../../../styles/CFB/BannerCFB.module.css";
import Link from "next/link";

export default function BannerCFB() {
    // const scrollToRef = () => {
    //     window.scrollTo(0, 400);
    // }
    return (
        <>
            <div className={"dark:bg-dark-100 " + styles["cfb-banner__container"]}>
                <img src="/assets/CFB/Girl_Banner.png" className={styles["cfb-banner__left-image"]} width={500} height={500} alt="Girl" />
                <div className={styles["cfb-banner__subcontainer"]}>
                    <p className="font-semibold text-center font-primary">Hello there!</p>
                    <p className="max-w-lg text-3xl font-semibold text-center font-primary">We invite you to be a part of our Insider Community!</p>
                    <p className="max-w-xl pt-6 text-xs text-center font-secondary">
                        Community is at the core of Musixverse. We are building a platform that will bring together artists and fans like never before, help
                        each other do great things together, and empower each other in the process.
                    </p>

                    <Link href="https://cfbmusixverse.paperform.co/" passHref={true}>
                        <a target="_blank" rel="noopener noreferrer">
                            <button className="px-5 py-3 mt-6 text-xs text-white bg-primary-200 hover:bg-primary-300 font-primary rounded-xl">
                                Join the Community Feedback Board
                            </button>
                        </a>
                    </Link>
                </div>
                <img src="/assets/CFB/Boy_Banner.png" className={styles["cfb-banner__right-image"]} alt="Boy" />

                {/* <button className={styles['cfb-banner__circle-dropdown']} onClick={scrollToRef}>
                    <img src="/assets/CFB/circle_dropdown.png" className="z-[5]" width={50} height={50} alt="circle dropdown" />       
                </button> */}
            </div>
        </>
    );
}
