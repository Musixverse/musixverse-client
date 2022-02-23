import Image from "next/image";
import styles from "../../../styles/ArtistProfile/Banner.module.css";
import metaData from "../../../metaData";
import artistBanner from "../../../public/Artist_banner.png";

export default function Banner(){
    return(
        <div className={styles['artist-banner__container']} >
            <Image src={artistBanner} width={500} height={40} alt="artist banner" />
        </div>    
    );
}