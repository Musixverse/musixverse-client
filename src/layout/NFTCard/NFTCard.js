import Image from "next/image";
import { useTheme } from "next-themes";
import { useMoralisCloudFunction } from "react-moralis";
import styles from "../../../styles/NFTCard/Nftcard.module.css";
import Section2 from "./Section2";
import Section1 from "./Section1";
import multipleNft from "../../../public/assets/nftcard/nftcards.svg";
import { useEffect, useMemo, useState } from "react";
import NftCopiesModal from "./NftCopiesModal";
import Link from "next/link";

export default function NFTCard({
	redirectLink,
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

	// let truncatedArtistName = artistName;
	// if (artistName && artistName.length > 14) truncatedArtistName = artistName.substring(0, 14) + "...";
	const truncatedArtistName = useMemo(() => {
		let returnedString = artistName;
		if (artistName && artistName.length > 14) returnedString = artistName.substring(0, 14) + "...";
		return returnedString;
	}, [artistName]);

	let truncatedNftName = trackName;
	if (trackName && trackName.length > 10) {
		truncatedNftName = trackName.substring(0, 10) + "...";
	}
	// if(track === undefined)
	// 	console.log("Name: ",trackName);
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
		redirectLink,
	};

	return (
		<>
			<div className={"group " + styles[theme === "light" ? "nft-card" : "nft-card-dark"]}>
				{/* NFT Image */}
				<div className="relative w-full h-60">
					{image && redirectLink ? (
						<Link href={redirectLink} passHref>
							<a>
								<div className="relative w-full h-full">
									<Image
										src={image}
										alt="nft image"
										objectFit="cover"
										layout="fill"
										priority
										className={"group-hover:scale-110 group-hover:duration-500 duration-500 " + styles["nft-image"]}
									/>
								</div>
							</a>
						</Link>
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
				<Link href={redirectLink ? redirectLink : ""} passHref>
					<a>
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
					</a>
				</Link>
			</div>

			<NftCopiesModal {...{ modalValues, showNftCopiesModal, setShowNftCopiesModal }} />
		</>
	);
}
