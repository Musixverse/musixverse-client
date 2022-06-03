import styles from "../../../styles/HomePage/heroSection.module.css";
import { useTheme } from "next-themes";

export default function Banner(){
    const {theme} = useTheme();
    return(
        <>
            {/* For bg image */}
            <div className={styles['background-image-div']}>
                <img 
                    src={theme === 'dark'? "/assets/homepage/banner_dark.png":"/assets/homepage/banner_light.png"}
                    className={styles['background-image-div__image']}
                    alt="background image"
                ></img>
            </div>
            {/* Outer div for bg blur */}
            <div className={styles['hero-section-container']}>
                {/* Inner div for content */}
                <div className={"text-white dark:text-white "+styles['hero-section-container__content-div']}>
                    <h1 className={styles['hero-section-container__content-div--heading']}>Empowering Artists and Fans<br/> like never before</h1>
                    <p className={styles['hero-section-container__content-div--description']}>
                    Musixverse will bring together artists and fans like never before, help them do great things togetherm and empower each other in the process. 
                    </p>
                    <a className="px-5 py-3 text-xs text-white bg-primary-200 hover:bg-primary-300 font-primary rounded-3xl" href="https://discord.gg/sCxZyJmW" target={"_blank"} rel="noopener noreferrer">Join Discord Community</a>
                </div>
            </div>
        </>
    );
}