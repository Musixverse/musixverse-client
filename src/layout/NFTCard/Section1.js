import Image from "next/image";
import styles from "../../../styles/NFTCard/Section1.module.css";

export default function Section1(props) {
    return (
        <div className={styles["nft-card__description--section1"]}>
            {/* SONG and ARTIST NAME SECTION */}
            <div>
                <p className={styles["description--section1__artistname"]}>
                    {props.artistName}
                    {props.isVerified ? <Image src={"/assets/mxv_tick.svg"} width={17} height={17} alt="MXV verified"></Image> : null}
                </p>
                <h6 className={styles["description--section1__songname"]}>{props.songName}</h6>
            </div>
            {/* CURRENT PRICE */}
            <div>
                <p className={styles["description--section1__price"]}>Price</p>
                <div className="flex items-center font-semibold">
                    <Image src={"/assets/matic-logo.svg"} width={16} height={16} alt="matic logo" />
                    <span className="ml-1 sm:text-lg">{props.price}</span>
                </div>
            </div>
        </div>
    );
}
