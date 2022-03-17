import Image from "next/image";
import styles from "../../../styles/ArtistRegistration/Confirm.module.css";
import Button from "./ArtistRegUtils/Button";
import blackhole from "../../../public/assets/registration/dark_black_hole.svg";

export default function CollectorRegistration() {
    return (
        <div className={styles["register"]}>
            <div className={styles["register__container"]}>
                {/* Main container */}
                <div className={styles["confirm__container"]}>
                    <Image src={blackhole} width={440} height={318} alt="Black-hole" />
                    <span className="pt-8 flex flex-col justify-center items-center">
                        <p className="font-tertiary text-4xl sm:text-5xl">CONFIRM YOUR EMAIL</p>
                        <p className="font-secondary text-[15px] text-center">Please check your inbox and follow the instructions in the mail.</p>
                    </span>
                    <Button>Back to login</Button>
                </div>
            </div>
        </div>
    );
}
