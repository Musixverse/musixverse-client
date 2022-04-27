import Image from "next/image";
import styles from "../../../styles/CFB/BannerCFB.module.css";

export default function BannerCFB(){
    return(
        <div className={styles['cfb-banner__container']}>
            {/* Image */}
            <div>
                <p>Hello there!</p>
                <p>We invite you to be a part of our Insider Community!</p>
                <p>Community is at the core of Musixverse. We are building a platform that will bring
                together artist and fans like never before, help each other do great things together,
                and empower each other in the process.</p>
                <button>Join Discord Community</button>
            </div>
            {/* Image */}
        </div>
    );
}
