import Image from "next/image";
import styles from "../../../styles/SongInfo/SongHeader.module.css";
import AudioPlayer from "./AudioPlayer";
import metaData from "../../../metaData";
import mxv_verified from "../../../public/assets/mxv_tick.svg";
import SongHeaderCta from "./SongInfoUtils/SongHeaderCta";

export default function SongHeader() {
    return (
        <div className={styles["song-header"]}>
            <div className={styles["song-header__container"]}>
                {/* Image section */}
                <div className={styles["song-header__container--songImage"]}>
                    <Image src={metaData.Hashes.imgHash} alt="songImage" width={580} height={580} />
                </div>
                {/* Song Details section */}
                <div className={styles["song-header__container--song-detail"]}>
                    <div className="font-bold pb-2">
                        {metaData.artistName} <Image src={mxv_verified} width={17} height={17} alt="MXV verified"></Image>
                    </div>
                    <h2 className="font-tertiary text-5xl pb-3 w-[268px]">{metaData.songName}</h2>
                    {/* Audio Player component */}
                    <AudioPlayer />
                    {/* Song Header CTA */}
                    <SongHeaderCta />
                </div>
            </div>
        </div>
    );
}
