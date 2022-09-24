import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import styles from "../../../styles/NFTCard/Nftcard.module.css";
import multipleNft from "../../../public/assets/nftcard/nftcards.svg";
import ShinyLoader from "../../layout/ShinyLoader";
import dynamic from "next/dynamic";
const NftCopiesModal = dynamic(() => import("./NftCopiesModal"));
import Section1 from "./Section1";
import Section2 from "./Section2";

export default function NFTCard({
	redirectLink,
	trackName,
	price,
	artistName,
	artistAddress,
	isArtistVerified,
	image,
	tokenId,
	localTokenId,
	numberOfCopies,
	otherTokensOfTrack,
	collaboratorList,
	unsoldTrackData,
	soldOnceTrackData,
	likeCount,
	lastPrice,
	showNumberOfCopies = true,
}) {
	const [showNftCopiesModal, setShowNftCopiesModal] = useState(false);
	const { theme } = useTheme();

	const truncatedArtistName = useMemo(() => {
		let returnedString = artistName;
		if (artistName && artistName.length > 14) returnedString = artistName.substring(0, 14) + "...";
		return returnedString;
	}, [artistName]);

	let truncatedNftName = trackName;
	if (trackName && trackName.length > 8) {
		truncatedNftName = trackName.substring(0, 8) + "...";
	}

	const trackCopiesModalValues = {
		redirectLink,
		trackName,
		price,
		artistName,
		artistAddress,
		isArtistVerified,
		image,
		tokenId,
		localTokenId,
		numberOfCopies,
		collaboratorList,
		otherTokensOfTrack,
		unsoldTrackData,
		soldOnceTrackData,
		showNumberOfCopies: false,
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
						<ShinyLoader />
					)}

					{showNumberOfCopies && numberOfCopies > 1 ? (
						<button
							onClick={() => setShowNftCopiesModal(true)}
							className="absolute flex items-center px-3 py-[0.4rem] font-bold top-4 rounded-lg left-4 hover:bg-light-200 bg-light-100 text-dark-100 dark:bg-dark-100 dark:text-light-100"
						>
							<Image src={multipleNft} height={18} width={18} alt="multiple nft cards" className="dark:invert" />
							<span className="ml-1 text-sm">x{numberOfCopies}</span>
						</button>
					) : null}
				</div>

				{/* NFT Details */}
				<Link href={redirectLink ? redirectLink : ""} passHref>
					<a>
						<div
							className={
								!showNumberOfCopies
									? "dark:bg-dark-200 " + styles["nft-card__description"]
									: "dark:bg-dark-100 " + styles["nft-card__description"]
							}
						>
							{/* Artist, Music name and tokenId */}
							<Section1
								artistName={truncatedArtistName}
								trackName={trackName}
								price={price}
								isArtistVerified={isArtistVerified}
								soldOnceTrackData={soldOnceTrackData}
							/>
							{/* LIKES and Prev Price Section */}
							<Section2
								collaboratorList={collaboratorList}
								numberOfCopies={numberOfCopies}
								tokenId={tokenId}
								localTokenId={localTokenId}
								unsoldTrackData={unsoldTrackData}
								likeCount={likeCount}
								lastPrice={lastPrice}
							/>
						</div>
					</a>
				</Link>
			</div>

			<NftCopiesModal {...{ trackCopiesModalValues, showNftCopiesModal, setShowNftCopiesModal }} />
		</>
	);
}
