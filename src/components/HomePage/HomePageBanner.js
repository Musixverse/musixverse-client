import CustomButton from "../../layout/CustomButton";
import styles from "../../../styles/HomePage/heroSection.module.css";

export default function Banner(){
    return(
        <>
            {/* For bg image */}
            <div className={styles['background-image-div']}>
                <img 
                    src="/assets/homepage/homepage_desktop.png" 
                    className={styles['background-image-div__image']}
                    alt="background image"
                ></img>
            </div>
            {/* Outer div for bg blur */}
            <div className={styles['hero-section-container']}>
                {/* Inner div for content */}
                <div className={styles['hero-section-container__content-div']}>
                    <h1 className={styles['hero-section-container__content-div--heading']}>Empowering Artists and Fans<br/> like never before</h1>
                    <p className={styles['hero-section-container__content-div--description']}>
                    Musixverse is a platform that will bring together artists and fans like never before, help each other do great things together, and empower each other in the process.
                    </p>
                    <CustomButton green={true}>Get Early Access</CustomButton>
                </div>
            </div>
        </>
    );
}