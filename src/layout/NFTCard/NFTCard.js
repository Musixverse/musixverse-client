import Image from "next/image";
import styles from "../../../styles/NFTCard/Nftcard.module.css";
import Section2 from "./Section2";
import Section1 from "./Section1";

export default function NFTCard({
    songName,
    artistName,
    image,
    songId,
    tokenId,
    numberOfCopies,
    contributorList,
    localTokenId,
    likeCount,
    lastPrice,
    isVerified,
}) {
    let truncatedArtistName = artistName;
    let truncatedNftName = songName;

    if (songName.length > 8) {
        truncatedNftName = songName.substring(0, 8) + "...";
    }

    if (artistName && artistName.length > 15) truncatedArtistName = artistName.substring(0, 20) + "...";

    return (
        <div className={styles["nft-card"]}>
            {/* NFT Image */}
            <Image src={image || "/assets/nft_bg.jpg"} alt="nft image" height={256} width={256} priority></Image>
            {/* NFT Details */}
            <div className={"dark:bg-dark-100 " + styles["nft-card__description"]}>
                {/* Artist, Music name and tokenId */}
                <Section1 artistName={truncatedArtistName} songName={truncatedNftName} songId={songId} tokenId={tokenId} isVerified={isVerified} />
                {/* LIKES and Prev Price Section */}
                <Section2
                    contributorList={contributorList}
                    numberOfCopies={numberOfCopies}
                    localTokenId={localTokenId}
                    likeCount={likeCount}
                    lastPrice={lastPrice}
                />
            </div>
        </div>
    );
}
