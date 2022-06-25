import Image from "next/image";
import styles from "../../../styles/ArtistProfile/Banner.module.css";
import metaData from "../../../metaData";
import Artist_banner from "../../../public/Artist_banner.png";

export default function Banner({ coverImage }) {
    return (
        <div className={styles["artist-banner__container"]}>
            <Image
                priority
                src={coverImage || "https://ipfs.moralis.io:2053/ipfs/QmSQ2s8TEKBAdZy3Pm6oy7CPDLZ7dEUQZJ89azN4a2AVUE"}
                layout="fill"
                alt="cover-image"
            ></Image>
            {/* <img src="/Artist_banner.png" className="w-full h-full"></img> */}
        </div>
    );
}

// {/*<div className={styles['artist-banner__container']} >*/}
//     {/* <Image src={artistBanner} width={2000} height={450} alt="artist banner" /> */}
// {/* </div>     */}
