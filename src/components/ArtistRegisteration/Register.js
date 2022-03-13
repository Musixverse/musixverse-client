import Image from "next/Image";
import illustration_svg from "../../../public/assets/registeration/dark_MXV.svg";
import RightSection from "./ArtistRegUtils/RightSection";
import styles from "../../../styles/ArtistRegisteration/Register.module.css";
import LeftSection from "./ArtistRegUtils/LeftSection";
import ArtistOrUser from "./ArtistRegUtils/ArtistOrUser";

export default function Register(){
    return(
        <div className={styles['register']}>
            <div className={styles['register__container']}>
                {/* Left section */}
                <LeftSection>
                    <p className="mt-20 text-5xl font-tertiary max-w-[468px]">
                        LET&apos;S REVOLUTIONIZE THE MUSIC INDUSTRY TOGETHER!
                    </p>
                    <div className={styles['image-wrapper']}>
                        <img src="/assets/registeration/dark_MXV.svg" alt="music illustration" />
                    </div>
                </LeftSection>

                {/* Right section */}
                <RightSection>
                    <ArtistOrUser/>
                </RightSection>
            </div>
        </div>
    );
}