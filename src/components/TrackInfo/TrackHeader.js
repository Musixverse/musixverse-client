import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useMoralisCloudFunction } from "react-moralis";
import styles from "../../../styles/TrackInfo/TrackHeader.module.css";
import AudioPlayer from "./AudioPlayer";
import mxv_verified from "../../../public/assets/mxv_tick.svg";
import TrackHeaderCta from "./TrackInfoUtils/TrackHeaderCta";
import { MXV_CONTRACT_ADDRESS, BLOCKCHAIN_NETWORK } from "../../utils/smart-contract/constants";

export default function TrackHeader({ image, artworkArtistId, artistAddress, title, audio_url, tokenId, unlockTimestamp, price, currentOwnerAddress }) {
    const [artworkArtistInfo, setArtworkArtistInfo] = useState("");

    const { data: artist } = useMoralisCloudFunction("fetchUsernameFromAddress", { artistAddress: artistAddress });
    const { data: localTokenId } = useMoralisCloudFunction("fetchLocalTokenId", {
        tokenId: tokenId,
        contractAddress: MXV_CONTRACT_ADDRESS,
        chain: BLOCKCHAIN_NETWORK,
    });

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
        <div className={styles["track-header"]}>
            <div className={styles["track-header__container"]}>
                {/* Image section */}
                <div className={"group " + styles["track-header__container--trackImage"]}>
                    <Link href={image}>
                        <a target="_blank" rel="noopener noreferrer">
                            <Image src={image} className="rounded-lg" alt="trackImage" width={500} height={500} priority={true} />
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

                {/* Track Details section */}
                <div className={styles["track-header__container--track-detail"]}>
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

                    <h2 className="font-tertiary text-7xl pb-8">
                        {title}&nbsp;
                        {localTokenId ? (
                            <span className="font-primary text-xs">
                                #{localTokenId[0]} of {localTokenId[1]}
                            </span>
                        ) : null}
                    </h2>
                    {/* Audio Player component */}
                    <AudioPlayer audio_url={audio_url} />

                    <div className="pb-10">Tags</div>

                    {/* Track Header CTA */}
                    <TrackHeaderCta tokenId={tokenId} unlockTimestamp={unlockTimestamp} price={price} currentOwnerAddress={currentOwnerAddress} />
                </div>
            </div>
        </div>
    );
}
