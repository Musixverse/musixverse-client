import Image from "next/Image";
import illustration_svg from "../../../public/assets/registeration/Illustration.svg";
import Whitecard from "./ArtistRegUtils/Whitecard";
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
                    <div>
                        <Image src={illustration_svg} width={400} height={400} alt="music illustration" />
                    </div>
                </LeftSection>

                {/* Right section */}
                <Whitecard>{/*<-- Maybe, Rename component to RightSection*/}
                    <ArtistOrUser/>
                </Whitecard>
            </div>
        </div>
    );
}