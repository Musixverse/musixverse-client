import Image from "next/image";
import styles from "../../../styles/SongInfo/SongDetails.module.css";
import metaData from "../../../metaData";

export default function Banner(){
    return(
        <div className={styles['artist-banner__container']} >
            <Image src={metaData.artistProfile.banner} width={100} height={40} alt="artist banner" />
        </div>    
    );
}