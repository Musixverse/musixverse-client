import Image from "next/image";
import styles from "../../../styles/Profile/Banner.module.css";
import metaData from "../../../metaData";
import Artist_banner from "../../../public/Artist_banner.png";

export default function Banner({ coverImage }) {
	return (
		<div className={styles["artist-banner__container"]}>
			<Image
				priority
				src={coverImage || "https://ipfs.moralis.io:2053/ipfs/Qmcn1aZ4PKUUzwpTncuSbruwLD98dtiNqvoJG5zm8EMwXZ"}
				layout="fill"
				objectFit="cover"
				alt="Artist cover image"
			></Image>
			{/* <img src="/Artist_banner.png" className="w-full h-full"></img> */}
		</div>
	);
}

// {/*<div className={styles['artist-banner__container']} >*/}
//     {/* <Image src={artistBanner} width={2000} height={450} alt="artist banner" /> */}
// {/* </div>     */}
