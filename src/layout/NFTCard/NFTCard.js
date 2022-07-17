import Image from "next/image";
import { useTheme } from "next-themes";
import styles from "../../../styles/NFTCard/Nftcard.module.css";
import Section2 from "./Section2";
import Section1 from "./Section1";

export default function NFTCard({ trackName, artistName, image, tokenId, numberOfCopies, collaboratorList, likeCount, lastPrice, isVerified }) {
    const { theme } = useTheme();

    let truncatedArtistName = artistName;
    let truncatedNftName = trackName;

    if (trackName.length > 8) {
        truncatedNftName = trackName.substring(0, 8) + "...";
    }

    if (artistName && artistName.length > 15) truncatedArtistName = artistName.substring(0, 20) + "...";

    return (
        <div className={styles[theme === "light" ? "nft-card" : "nft-card-dark"]}>
            {/* NFT Image */}
            <Image src={image || "/assets/nft_bg.jpg"} alt="nft image" height={256} width={256} priority className={styles["nft-image"]} />
            {/* NFT Details */}
            <div className={"dark:bg-dark-100 " + styles["nft-card__description"]}>
                {/* Artist, Music name and tokenId */}
                <Section1 artistName={truncatedArtistName} trackName={truncatedNftName} tokenId={tokenId} isVerified={isVerified} />
                {/* LIKES and Prev Price Section */}
                <Section2 collaboratorList={collaboratorList} numberOfCopies={numberOfCopies} tokenId={tokenId} likeCount={likeCount} lastPrice={lastPrice} />
            </div>
        </div>
    );
}
