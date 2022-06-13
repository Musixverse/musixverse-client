import Image from "next/image";
import styles from "../../../styles/CFB/CFB2.module.css";
import music from "../../../public/assets/CFB/section3.png";

export default function CFB2() {
    return (
        <div className={styles["cfb2__container"]}>
            <div className={styles["cfb2__card"]}>
                <h2 className="font-primary font-semibold text-3xl pb-6">What is Required?</h2>
                <h1 className="font-tertiary text-2xl">ALTERNATE SOURCES OF INCOME</h1>
                <p className="font-secondary text-sm pb-6">To help artists sustain their art and stay motivated</p>
                <h1 className="font-tertiary text-2xl">BETTER WAYS OF CONNECTING WITH FANS</h1>
                <p className="font-secondary text-sm pb-6">
                    To help artists build a sticky audience and help fans establish a direct connection with artists&apos;
                </p>
                <h1 className="font-tertiary text-2xl">BETTER WAYS OF GETTING DISCOVERED</h1>
                <p className="font-secondary text-sm">To help artists get discovered quicker and not drown in the ever-expanding ocean of music</p>
            </div>
            <div className="pt-4 lg:pt-0">
                <Image src={music} width={500} height={400} alt="Music" />
            </div>
        </div>
    );
}
