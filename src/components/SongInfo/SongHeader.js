import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useMoralisCloudFunction } from "react-moralis";
import styles from "../../../styles/SongInfo/SongHeader.module.css";
import AudioPlayer from "./AudioPlayer";
import mxv_verified from "../../../public/assets/mxv_tick.svg";
import SongHeaderCta from "./SongInfoUtils/SongHeaderCta";

export default function SongHeader({ image, artworkArtistId, artistAddress, title, audio_url, tokenId, unlockTimestamp }) {
    const [artworkArtistInfo, setArtworkArtistInfo] = useState("");

    const { data: artist } = useMoralisCloudFunction("fetchUsernameFromAddress", { artistAddress: artistAddress });

    const { fetch: fetchCollaborator } = useMoralisCloudFunction(
        "fetchCollaborator",
        { id: artworkArtistId },
        {
            autoFetch: false,
        }
    );

    useEffect(() => {
        fetchCollaborator({
            onSuccess: async (object) => {
                setArtworkArtistInfo(object[0]);
            },
            onError: (error) => {
                console.log("fetchCollaborator Error:", error);
            },
        });
    }, [artworkArtistId]);

    if (!artist) return null;
    return (
        <div className={styles["song-header"]}>
            <div className={styles["song-header__container"]}>
                {/* Image section */}
                <div className={"group " + styles["song-header__container--songImage"]}>
                    <Link href={image}>
                        <a target="_blank" rel="noopener noreferrer">
                            <Image src={image} className="rounded-lg" alt="songImage" width={500} height={500} priority={true} />
                        </a>
                    </Link>
                    <div className="absolute hidden group-hover:block">
                        {artworkArtistInfo ? (
                            <Link href={`/profile/${artworkArtistInfo.username}`} className="cursor-pointer">
                                <a target="_blank" rel="noopener noreferrer">
                                    <div className="flex items-end mb-2 font-secondary text-sm">
                                        {artworkArtistInfo.userInfo && (
                                            <Image src={artworkArtistInfo.userInfo[0].avatar} height="25" width="25" className="rounded-full" />
                                        )}
                                        <span className="ml-1">@{artworkArtistInfo.username}</span>
                                    </div>
                                </a>
                            </Link>
                        ) : null}
                    </div>
                </div>

                {/* Song Details section */}
                <div className={styles["song-header__container--song-detail"]}>
                    <div className="font-bold pb-2 items-center flex">
                        {artist[0] ? (
                            <Link href={`/profile/${artist[0].username}`} className="cursor-pointer">
                                <a target="_blank" rel="noopener noreferrer">
                                    {artist[0].name}
                                </a>
                            </Link>
                        ) : null}
                        <div className="ml-2 align-center flex">
                            <Image src={mxv_verified} width={14} height={14} alt="MXV verified" />
                        </div>
                    </div>

                    <h2 className="font-tertiary text-6xl pb-8 w-[268px]">{title}</h2>
                    {/* Audio Player component */}
                    <AudioPlayer audio_url={audio_url} />

                    <div className="pb-10">Tags</div>

                    {/* Song Header CTA */}
                    <SongHeaderCta tokenId={tokenId} unlockTimestamp={unlockTimestamp} />
                </div>
            </div>
        </div>
    );
}
