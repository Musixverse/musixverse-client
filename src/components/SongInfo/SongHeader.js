import Image from "next/image";
import Link from "next/link";
import { useMoralisQuery } from "react-moralis";
import styles from "../../../styles/SongInfo/SongHeader.module.css";
import AudioPlayer from "./AudioPlayer";
import mxv_verified from "../../../public/assets/mxv_tick.svg";
import SongHeaderCta from "./SongInfoUtils/SongHeaderCta";

export default function SongHeader({ image, artistAddress, name, animation_url, tokenId, unlockTimestamp }) {
    const { data: artist } = useMoralisQuery("_User", (query) => query.equalTo("ethAddress", artistAddress), [artistAddress]);

    if (!artist[0]) return null;
    return (
        <div className={styles["song-header"]}>
            <div className={styles["song-header__container"]}>
                {/* Image section */}
                <div className={styles["song-header__container--songImage"]}>
                    <Link href={image}>
                        <a target="_blank" rel="noopener noreferrer">
                            <Image src={image} className="rounded-lg" alt="songImage" width={500} height={500} priority={true} />
                        </a>
                    </Link>
                </div>

                {/* Song Details section */}
                <div className={styles["song-header__container--song-detail"]}>
                    <div className="font-bold pb-2 items-center flex">
                        <Link href={`/profile/${artist[0].attributes.username}`} className="cursor-pointer">
                            <a target="_blank" rel="noopener noreferrer">
                                {artist[0].attributes.name}
                            </a>
                        </Link>
                        <Image src={mxv_verified} width={17} height={17} alt="MXV verified"></Image>
                    </div>

                    <h2 className="font-tertiary text-6xl pb-8 w-[268px]">{name}</h2>
                    {/* Audio Player component */}
                    <AudioPlayer animation_url={animation_url} />
                    {/* Song Header CTA */}
                    <SongHeaderCta tokenId={tokenId} unlockTimestamp={unlockTimestamp} />
                </div>
            </div>
        </div>
    );
}
