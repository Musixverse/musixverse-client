import Image from "next/image";
import styles from "../../../styles/SongInfo/SongDetails.module.css";
import SongDetail from "./SongInfoUtils/SongDetail";
import Link from "next/Link";

export default function SongDetails({ tokenId, metadata }) {
    var date = new Date(metadata.unlockTimestamp * 1000);
    var dateStr =
        date.toLocaleString("default", {
            month: "long",
        }) +
        " " +
        date.getDate().toString() +
        " " +
        date.getFullYear().toString() +
        ", " +
        date.toLocaleTimeString() +
        " IST";

    return (
        <div className={"dark:bg-dark-100 dark:border-dark-100 " + styles["song-detail__container"]}>
            <SongDetail description={metadata.description} collaborators={metadata.collaborators} />

            {/* OTHER DETAILS */}
            <div className={styles["song-info__other-details"]}>
                {/* <div className={styles['other-details__title']}> */}
                <h1 className="font-tertiary text-[36px]">OTHER DETAILS</h1>
                {/* </div> */}

                <div className={styles["other-details__section1"]}>
                    <div className="text-left">
                        <h4 className="font-bold font-secondary text-[16px]">{metadata.attributes[2].trait_type}</h4>
                        <p>{metadata.attributes[2].value}</p>
                    </div>
                    <div className="text-left">
                        <h4 className="font-bold font-secondary text-[16px]">{metadata.attributes[3].trait_type}</h4>
                        <p>{metadata.attributes[3].value}</p>
                    </div>
                    <div className="text-left">
                        <h4 className="font-bold font-secondary text-[16px]">{metadata.attributes[4].trait_type}</h4>
                        <p>{metadata.attributes[4].value}</p>
                    </div>
                    <div className="text-left">
                        <h4 className="font-bold font-secondary text-[16px]">{metadata.attributes[5].trait_type}</h4>
                        <p>{metadata.attributes[5].value}</p>
                    </div>
                </div>

                <div className="flex-grow border-t-[3px] border-[#9a9a9a]"></div>

                {/* Section 2 */}
                <div className={styles["other-details__section2"]}>
                    <div className="text-left">
                        <h4 className="font-bold font-secondary text-[16px]">Duration</h4>
                        <p>{metadata.duration} seconds</p>
                    </div>
                    <div className="text-left">
                        <h4 className="font-bold font-secondary text-[16px]">Language</h4>
                        <p>{metadata.language}</p>
                    </div>
                    <div className="text-left">
                        <h4 className="font-bold font-secondary text-[16px]">Location Created</h4>
                        <p>{metadata.locationCreated}</p>
                    </div>
                    <div className="text-left">
                        <h4 className="font-bold font-secondary text-[16px]">{metadata.attributes[6].trait_type}</h4>
                        <p>{metadata.attributes[6].value}</p>
                    </div>
                </div>

                <div className="flex-grow border-t-[3px] border-[#9a9a9a]"></div>

                {/* Section 2 */}
                <div className={styles["other-details__section2"]}>
                    <div className="text-left">
                        <h4 className="font-bold font-secondary text-[16px]">{metadata.attributes[7].trait_type}</h4>
                        <p>{metadata.attributes[7].value}</p>
                    </div>
                    <div className="text-left">
                        <h4 className="font-bold font-secondary text-[16px]">{metadata.attributes[0].trait_type}</h4>
                        <p>{metadata.attributes[0].value}</p>
                    </div>
                    <div className="text-left">
                        <h4 className="font-bold font-secondary text-[16px]">Unique Token ID</h4>
                        <p>{tokenId}</p>
                    </div>
                    {metadata.lyrics ? (
                        <div className="text-left">
                            <h4 className="font-bold font-secondary text-[16px]">Lyrics</h4>
                            <Link href={metadata.lyrics.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}>
                                <a target="_blank" rel="noopener noreferrer">
                                    Available &nbsp;
                                    <i className="fa-solid fa-arrow-right-long"></i>
                                </a>
                            </Link>
                        </div>
                    ) : null}
                </div>

                <div className="flex-grow border-t-[3px] border-[#9a9a9a]"></div>

                <div className={styles["other-details__section2"]}>
                    <div className="text-left">
                        <h4 className="font-bold font-secondary text-[16px]">Token Standard</h4>
                        <p>ERC-1155</p>
                    </div>
                    <div className="text-left">
                        <h4 className="font-bold font-secondary text-[16px]">Blockchain</h4>
                        <p>Polygon</p>
                    </div>

                    <div className="text-left col-span-2">
                        <h4 className="font-bold font-secondary text-[16px]">Unlocked On</h4>
                        <p>{dateStr.toString()}</p>
                    </div>
                </div>

                <div className="flex-grow border-t-[3px] border-[#9a9a9a]"></div>

                <div className={styles["other-details__section2"]}>
                    {metadata.isrc ? (
                        <div className="text-left">
                            <h4 className="font-bold font-secondary text-[16px]">ISRC</h4>
                            <p>{metadata.isrc}</p>
                        </div>
                    ) : null}
                    <div className="text-left">
                        <h4 className="font-bold font-secondary text-[16px]">License</h4>
                        <Link href="https://creativecommons.org/publicdomain/zero/1.0/">
                            <a target="_blank" rel="noopener noreferrer">
                                MXV CC0 &nbsp;
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </a>
                        </Link>
                    </div>
                    <div className="text-left col-span-2">
                        <h4 className="font-bold font-secondary text-[16px]">Contract Address</h4>
                        <p className="break-words">{metadata.chainDetails.contractAddress}</p>
                    </div>
                </div>

                {/* Section 5 */}
                <div className={"mt-6 dark:bg-dark-200 " + styles["other-details__footer"]}>
                    <h4 className="font-secondary text-[18px]">Listen on</h4>
                    <div className={styles["footer__icons"]}>
                        {metadata.links.spotify ? (
                            <Link href={metadata.links.spotify}>
                                <a target="_blank" rel="noopener noreferrer">
                                    <Image src="https://img.icons8.com/ios-filled/50/000000/spotify.png" width={25} height={25} alt="spotify" />
                                </a>
                            </Link>
                        ) : null}
                        {metadata.links.appleMusic ? (
                            <Link href={metadata.links.appleMusic}>
                                <a target="_blank" rel="noopener noreferrer">
                                    <Image src="https://img.icons8.com/ios-filled/50/000000/apple-music.png" width={25} height={25} alt="apple-music" />
                                </a>
                            </Link>
                        ) : null}
                        {metadata.links.amazonMusic ? (
                            <Link href={metadata.links.amazonMusic}>
                                <a target="_blank" rel="noopener noreferrer">
                                    <Image src="https://img.icons8.com/color/48/000000/amazon.png" width={25} height={25} alt="amazon-music" />
                                </a>
                            </Link>
                        ) : null}
                        {metadata.links.youtubeMusic ? (
                            <Link href={metadata.links.youtubeMusic}>
                                <a target="_blank" rel="noopener noreferrer">
                                    <Image src="https://img.icons8.com/bubbles/50/000000/youtube-music.png" width={25} height={25} alt="youtube-music" />
                                </a>
                            </Link>
                        ) : null}
                        {metadata.links.other ? (
                            <Link href={metadata.links.other}>
                                <a target="_blank" rel="noopener noreferrer">
                                    <i className="fa-solid fa-link"></i>
                                </a>
                            </Link>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}
