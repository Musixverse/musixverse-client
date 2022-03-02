import Image from "next/image";
import styles from "../../../styles/ArtistProfile/Banner.module.css";
import metaData from "../../../metaData";

export default function Banner(){
    return(
        <div className={styles['artist-banner__container']} >
            {/* <Image src={artistBanner} width={2000} height={450} alt="artist banner" /> */}
        </div>    
    );
}