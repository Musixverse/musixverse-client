import Image from "next/image";
import Link from "next/link";
import { useMoralisCloudFunction } from "react-moralis";
import styles from "../../../styles/TrackInfo/TrackHeader.module.css";
import AudioPlayer from "./AudioPlayer";
import mxv_verified from "../../../public/assets/mxv_tick.svg";
import TrackHeaderCta from "./TrackInfoUtils/TrackHeaderCta";

export default function TrackHeader({
    image,
    artworkInfo,
    artistAddress,
    title,
    audio_url,
    tags,
    tokenId,
    unlockTimestamp,
    price,
    currentOwnerAddress,
    numberOfCopies,
}) {
    const { data: artist } = useMoralisCloudFunction("fetchUsernameFromAddress", { artistAddress: artistAddress });
    const { data: localTokenId } = useMoralisCloudFunction("fetchLocalTokenId", {
        tokenId: tokenId,
    });
    const { data: artworkArtistInfo } = useMoralisCloudFunction("fetchArtworkArtist", { artworkInfo: artworkInfo });

    if (!artist) return null;
    return (
        <div className={styles["track-header"]}>
            <div className={styles["track-header__container"]}>
                {/* Image section */}
                <div className={"group pr-4 " + styles["track-header__container--trackImage"]}>
                    <div className="h-full w-full relative">
                        <Link href={image}>
                            <a target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={image}
                                    className="rounded-lg"
                                    alt="trackImage"
                                    width="100%"
                                    height="100%"
                                    layout="responsive"
                                    objectFit="contain"
                                    priority
                                />
                            </a>
                        </Link>
                    </div>

                    <div className="absolute hidden group-hover:block mt-2">
                        {artworkInfo.invitedArtistId && artworkArtistInfo && artworkArtistInfo.user[0] ? (
                            <Link href={`/profile/${artworkArtistInfo.user[0].username}`} className="cursor-pointer">
                                <a target="_blank" rel="noopener noreferrer">
                                    <div className="flex items-end mb-2 font-secondary text-sm">
                                        <span className="mr-2">Artwork by-</span>
                                        {artworkArtistInfo.userInfo[0] && (
                                            <Image src={artworkArtistInfo.userInfo[0].avatar} height="20" width="20" className="rounded-full" />
                                        )}
                                        <span className="ml-1">@{artworkArtistInfo.user[0].username}</span>
                                    </div>
                                </a>
                            </Link>
                        ) : artworkInfo.artistAddress && artworkArtistInfo ? (
                            <Link href={`/profile/${artworkArtistInfo.username}`} className="cursor-pointer">
                                <a target="_blank" rel="noopener noreferrer">
                                    <div className="flex items-end mb-2 font-secondary text-sm">
                                        <span className="mr-2">Artwork by-</span>
                                        {artworkArtistInfo.userInfo[0] && (
                                            <Image src={artworkArtistInfo.userInfo[0].avatar} height="20" width="20" className="rounded-full" />
                                        )}
                                        <span className="ml-1">@{artworkArtistInfo.username}</span>
                                    </div>
                                </a>
                            </Link>
                        ) : artworkInfo.artist ? (
                            <div className="flex items-end mb-2 font-secondary text-sm">
                                <span className="mr-2">Artwork by-</span>
                                <span>{artworkInfo.artist}</span>
                            </div>
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

                    <h2 className="font-tertiary text-7xl pb-6">
                        {title}&nbsp;
                        {localTokenId ? (
                            <span className="font-primary text-xs">
                                #{localTokenId} of {numberOfCopies}
                            </span>
                        ) : null}
                    </h2>
                    {/* Audio Player component */}
                    <AudioPlayer audio_url={audio_url} />

                    <div className="w-full h-full grid content-between pt-6">
                        <div className="pb-6 w-full">
                            {tags.map((tag, index) => {
                                return (
                                    <button key={index} type="button" className="px-6 py-2 mr-2 rounded-full bg-light-200 dark:bg-dark-100 text-sm">
                                        {tag}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Track Header CTA */}
                        <TrackHeaderCta tokenId={tokenId} unlockTimestamp={unlockTimestamp} price={price} currentOwnerAddress={currentOwnerAddress} />
                    </div>
                </div>
            </div>
        </div>
    );
}
