import styles from "../../../styles/HomePage/heroSection.module.css";
import { useTheme } from "next-themes";
import StayInLoop from "./HomePageUtils/StayInLoop";

export default function Banner() {
    const { theme } = useTheme();
    return (
        /* Outer div for bg blur */
        <div className={(theme === 'dark'? "bg-[url('/assets/homepage/home_dark.png')] ":"bg-[url('/assets/homepage/home_light.png')] ")+"bg-cover bg-no-repeat bg-center "+styles["hero-section-container"]}>
            {/* For bg image */}
            {/* <div className={styles["background-image-div"]}>
                <img
                    src={theme === "dark" ? "/assets/homepage/home_dark.png" : "/assets/homepage/home_light.png"}
                    className={styles["background-image-div__image"]}
                    alt="background image"
                ></img>
            </div> */}
            {/* <div className="mt-8"> */}
            {/* Inner div for content */}
            <div className={"text-white dark:text-white mt-28 " + styles["hero-section-container__content-div"]}>
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
