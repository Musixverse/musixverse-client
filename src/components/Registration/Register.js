import { useTheme } from "next-themes";
import {useState,useEffect} from "react";
import ArtistOrUser from "./ArtistRegUtils/ArtistOrUser";
import styles from "../../../styles/Registration/Register.module.css";

export default function Register(){
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
  
    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])
  
    if (!mounted) return null;

    return(
        <div className={styles['register']}>
            <div className={"dark:bg-dark-200 "+styles['register__container']}>
                {/* Left section */}
                <div className={styles['register__container--left-section']}>
                    <p className={styles['container__left-section--intro-text']}>
                        LET&apos;S REVOLUTIONIZE THE MUSIC INDUSTRY TOGETHER!
                    </p>
                    <img className={styles['container__left-section--asset-image']} src={theme === "dark" ? "/assets/registration/white_MXV.svg" : "/assets/registration/dark_MXV.svg"} alt="music illustration" />
                </div>

                {/* Right section */}
                <div className={styles[theme==="dark"?'register__container--right-section_B':'register__container--right-section_W']}>
                    <ArtistOrUser/>
                </div>
            </div>
        </div>
    );
}