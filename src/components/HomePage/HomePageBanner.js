import styles from "../../../styles/HomePage/heroSection.module.css";
import { useTheme } from "next-themes";
import StayInLoop from "./HomePageUtils/StayInLoop";


export default function Banner() {
    const { theme } = useTheme();
    return (
        /* Outer div for bg blur */
        <div className={styles["hero-section-container"]}>
            {/* "bg-[url('/assets/homepage/desk.png')] bg-cover bg-no-repeat bg-center " */}
            {/* For bg image */}
            <div className={styles["background-div"]}>
                <video 
                    src={theme === "dark" ? "/assets/homepage/dark_video.mp4" : "/assets/homepage/light_video.mp4"} 
                    className="hidden object-cover w-full h-full md:block" 
                    loop 
                    muted 
                    autoPlay
                ></video>
                <img
                    src={theme === "dark" ? "/assets/homepage/home_dark.png" : "/assets/homepage/home_light.png"}
                    className={"md:hidden w-full h-full object-cover"}
                    alt="background image"
                ></img>
            </div>
            {/* <div className="mt-8"> */}
            {/* Inner div for content */}
            <div className={"text-white dark:text-white mt-48 " + styles["hero-section-container__content-div"]}>
                <h1 className={styles["hero-section-container__content-div--heading"]}>
                    We&apos;re Coming Soon!
                </h1>
                <p className={styles["hero-section-container__content-div--description"]}>
                    Musixverse will bring together artists and fans like never before, help them do great things together, and empower each other in the
                    process.
                </p>
                <a
                    className="px-5 py-3 text-xs text-white bg-primary-200 hover:bg-primary-300 font-primary rounded-3xl"
                    href="https://discord.gg/sCxZyJmW"
                    target={"_blank"}
                    rel="noopener noreferrer"
                >
                    Join the Discord Community
                </a>
            </div>
            <StayInLoop/>
            {/* </div> */}
        </div>
    );
}
