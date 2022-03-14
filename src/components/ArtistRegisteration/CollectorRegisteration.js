
import RightSection from "./ArtistRegUtils/RightSection";
import LeftSection from "./ArtistRegUtils/LeftSection";
import styles from "../../../styles/ArtistRegisteration/Register.module.css";

export default function CollectorRegisteration(){
    return (
        <div className={styles['register']}>
            <div className={styles['register__container']}>
                {/* Left section */}
                <LeftSection>
                   
                </LeftSection>

                {/* Right section */}
                <RightSection>
                    
                </RightSection>
            </div>
        </div>
    );
};