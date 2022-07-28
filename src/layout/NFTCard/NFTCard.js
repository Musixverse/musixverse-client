import Image from "next/image";
import { useTheme } from "next-themes";
import styles from "../../../styles/NFTCard/Nftcard.module.css";
import Section2 from "./Section2";
import Section1 from "./Section1";

export default function NFTCard({
	trackName,
	artistName,
	image,
	tokenId,
	numberOfCopies,
	collaboratorList,
	unsoldTrackData,
	soldOnceTrackData,
	likeCount,
	lastPrice,
	isVerified,
}) {
	const { theme } = useTheme();

	let truncatedArtistName = artistName;
	if (artistName && artistName.length > 17) truncatedArtistName = artistName.substring(0, 17) + "...";

	let truncatedNftName = trackName;
	if (trackName && trackName.length > 10) {
		truncatedNftName = trackName.substring(0, 10) + "...";
	}

	return (
		<div className={"group " + styles[theme === "light" ? "nft-card" : "nft-card-dark"]}>
			{/* NFT Image */}
			<div className="relative w-full h-60">
				{image ? (
					<Image
						src={image}
						alt="nft image"
						objectFit="cover"
						layout="fill"
						priority
						className={"group-hover:scale-110 group-hover:duration-500 duration-500 " + styles["nft-image"]}
					/>
				) : (
					<div className="bg-gray-300 w-full h-full animate-pulse"></div>
				)}
			</div>
			{/* NFT Details */}
			<div className={"dark:bg-dark-100 " + styles["nft-card__description"]}>
				{/* Artist, Music name and tokenId */}
				<Section1
					artistName={truncatedArtistName}
					trackName={truncatedNftName}
					tokenId={tokenId}
					unsoldTrackData={unsoldTrackData}
					soldOnceTrackData={soldOnceTrackData}
					isVerified={isVerified}
				/>
				{/* LIKES and Prev Price Section */}
				<Section2
					collaboratorList={collaboratorList}
					numberOfCopies={numberOfCopies}
					tokenId={tokenId}
					unsoldTrackData={unsoldTrackData}
					likeCount={likeCount}
					lastPrice={lastPrice}
				/>
			</div>
		</div>
	);
}
