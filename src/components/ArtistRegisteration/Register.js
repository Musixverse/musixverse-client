import RightSection from "./ArtistRegUtils/RightSection";
import LeftSection from "./ArtistRegUtils/LeftSection";
import ArtistOrUser from "./ArtistRegUtils/ArtistOrUser";
import styles from "../../../styles/ArtistRegisteration/Register.module.css";

export default function Register(){
    return(
        <div className={styles['register']}>
            <div className={styles['register__container']}>
                {/* Left section */}
                <LeftSection>
                    <p className="mt-20 text-5xl font-tertiary max-w-[468px]">
                        LET&apos;S REVOLUTIONIZE THE MUSIC INDUSTRY TOGETHER!
                    </p>
                    <img className={styles['container__left-section--asset-image']} src="/assets/registeration/dark_MXV.svg" alt="music illustration" />
                </LeftSection>

                {/* Right section */}
                <RightSection>
                    <ArtistOrUser/>
                </RightSection>
            </div>
        </div>
    );
}