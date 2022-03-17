import RightSection from "./ArtistRegUtils/RightSection";
import LeftSection from "./ArtistRegUtils/LeftSection";
import ArtistOrUser from "./ArtistRegUtils/ArtistOrUser";
import styles from "../../../styles/ArtistRegisteration/New.module.css";

export default function Register(){
    return(
        <div className={styles['register']}>
            <div className={styles['register__container']}>
                {/* Left section */}
                <div className={styles['register__container--left-section']}>
                    <p className={styles['container__left-section--intro-text']}>
                        LET&apos;S REVOLUTIONIZE THE MUSIC INDUSTRY TOGETHER!
                    </p>
                    <img className={styles['container__left-section--asset-image']} src="/assets/registeration/dark_MXV.svg" alt="music illustration" />
                </div>

                {/* Right section */}
                <div className={styles['register__container--right-section']}>
                    <ArtistOrUser/>
                </div>
            </div>
        </div>
    );
}