import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useMoralisCloudFunction } from "react-moralis";
import styles from "../../../styles/NFTCard/Nftcard.module.css";
import Section2 from "./Section2";
import Section1 from "./Section1";
import multipleNft from "../../../public/assets/nftcard/nftcards.svg";
import { useMemo, useState } from "react";
import NftCopiesModal from "./NftCopiesModal";
import ShinyLoader from "../../layout/ShinyLoader";

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
	showNumberOfCopies = true,
}) {
	const [showNftCopiesModal, setShowNftCopiesModal] = useState(false);
	const { theme } = useTheme();
	const { data: artist } = useMoralisCloudFunction("fetchUsernameFromAddress", { address: artistAddress });

	const truncatedArtistName = useMemo(() => {
		let returnedString = artistName;
		if (artistName && artistName.length > 14) returnedString = artistName.substring(0, 14) + "...";
		return returnedString;
	}, [artistName]);

	let truncatedNftName = trackName;
	if (trackName && trackName.length > 10) {
		truncatedNftName = trackName.substring(0, 10) + "...";
	}

	const trackCopiesModalValues = {
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

			<NftCopiesModal {...{ trackCopiesModalValues, showNftCopiesModal, setShowNftCopiesModal }} />
		</>
	);
}
