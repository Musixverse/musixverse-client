import { useTheme } from "next-themes";
import ArtistOrUser from "./ArtistRegUtils/ArtistOrUser";
import styles from "../../../styles/Registration/Register.module.css";

export default function Register(){
    const { theme } = useTheme();

    return(
        <div className={styles['register']}>
            <div className={styles['register__container']}>
                {/* Left section */}
                <div className={styles['register__container--left-section']}>
                    <p className={styles['container__left-section--intro-text']}>
                        LET&apos;S REVOLUTIONIZE THE MUSIC INDUSTRY TOGETHER!
                    </p>
                    <img className={styles['container__left-section--asset-image']} src={theme === "light" ? "/assets/registration/dark_MXV.svg" : "/assets/registration/white_MXV.svg"} alt="music illustration" />
                </div>

                {/* Right section */}
                <div className={styles['register__container--right-section']}>
                    <ArtistOrUser/>
                </div>
            </div>
        </div>
    );
}