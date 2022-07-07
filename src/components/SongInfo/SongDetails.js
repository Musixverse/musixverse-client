import Image from "next/image";
import styles from "../../../styles/SongInfo/SongDetails.module.css";
import metaData from "../../../metaData";
import SongDetail from "./SongInfoUtils/SongDetail";

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
            <SongDetail description={metadata.description} />

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
                    {/* <div className="text-left">
                        <h4 className="font-bold font-secondary text-[16px]">{metadata.attributes[4].trait_type}</h4>
                        <button>
                            Available &nbsp;
                            <span className="align-sub">
                                <Image
                                    src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/32/000000/external-right-arrow-user-interface-kmg-design-basic-outline-kmg-design.png"
                                    width={20}
                                    height={20}
                                    alt="right arrow"
                                />
                            </span>
                        </button>
                    </div> */}
                </div>

                <div className="flex-grow border-t-[3px] border-[#9a9a9a]"></div>

                {/* Section 2 */}
                <div className={styles["other-details__section2"]}>
                    {/* <div className="text-left">
                        <h4 className="font-bold font-secondary text-[16px]">Contract Address</h4>
                        <p>{metaData.artistAddress}</p>
                    </div> */}
                    <div className="text-left">
                        <h4 className="font-bold font-secondary text-[16px]">{metadata.attributes[6].trait_type}</h4>
                        <p>{metadata.attributes[6].value}</p>
                    </div>
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

                {/* Section 5 */}
                <div className={"mt-6 dark:bg-dark-200 " + styles["other-details__footer"]}>
                    <h4 className="font-secondary text-[18px]">Listen on</h4>
                    <div className={styles["footer__icons"]}>
                        <a href={metaData.Links.spotify}>
                            <Image src="https://img.icons8.com/ios-filled/50/000000/spotify.png" width={25} height={25} alt="spotify" />
                        </a>
                        <a href={metaData.Links.appleMusic}>
                            <Image src="https://img.icons8.com/ios-filled/50/000000/apple-music.png" width={25} height={25} alt="apple-music" />
                        </a>
                        <a href={metaData.Links.amazonMusic}>
                            <Image src="https://img.icons8.com/color/48/000000/amazon.png" width={25} height={25} alt="amazon-music" />
                        </a>
                        <a href={metaData.Links.youtubeMusic}>
                            <Image src="https://img.icons8.com/bubbles/50/000000/youtube-music.png" width={25} height={25} alt="youtube-music" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
