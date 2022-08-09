import Image from "next/image";
import { useTheme } from "next-themes";
import { useMoralisCloudFunction } from "react-moralis";
import styles from "../../../styles/NFTCard/Nftcard.module.css";
import Section2 from "./Section2";
import Section1 from "./Section1";
import multipleNft from "../../../public/assets/nftcard/nftcards.svg";
import { Fragment, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import NftCopiesModal from "./NftCopiesModal";

export default function NFTCard({
	trackName,
	artistName,
	artistAddress,
	image,
	tokenId,
	numberOfCopies,
	collaboratorList,
	unsoldTrackData,
	soldOnceTrackData,
	likeCount,
	lastPrice,
	showNumberOfCopies,
}) {
	const [showNftCopiesModal, setShowNftCopiesModal] = useState(false);
	const { theme } = useTheme();
	const { data: artist } = useMoralisCloudFunction("fetchUsernameFromAddress", { address: artistAddress });

	let truncatedArtistName = artistName;
	if (artistName && artistName.length > 12) truncatedArtistName = artistName.substring(0, 12) + "...";

	let truncatedNftName = trackName;
	if (trackName && trackName.length > 10) {
		truncatedNftName = trackName.substring(0, 10) + "...";
	}

	const modalValues = {
		trackName,
		artistName: truncatedArtistName,
		artistAddress,
		image,
		tokenId,
		numberOfCopies,
		collaboratorList,
		unsoldTrackData,
		soldOnceTrackData,
		likeCount,
		lastPrice,
		showNumberOfCopies: true,
	};

	return (
		<>
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
						<div className="w-full h-full bg-gray-300 dark:bg-[#363636] animate-pulse"></div>
					)}
					{!showNumberOfCopies && numberOfCopies > 1 ? (
						<button
							onClick={() => setShowNftCopiesModal(true)}
							className="absolute flex items-center px-4 py-2 font-bold top-4 rounded-xl left-4 hover:bg-light-200 bg-light-100 text-dark-100"
						>
							<Image src={multipleNft} objectFit="contain" alt="multiple nft cards" />
							<span className="ml-1 text-sm">x{numberOfCopies}</span>
						</button>
					) : null}
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
						isVerified={artist ? artist.isArtistVerified : false}
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

			<NftCopiesModal {...{ modalValues, showNftCopiesModal, setShowNftCopiesModal }} />
		</>
	);
}
