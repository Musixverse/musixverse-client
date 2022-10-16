import { useContext, useMemo, useState } from "react";
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
import AudioPlayerContext from "../../../store/audioplayer-context";

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
	audio,
	trackId,
	favouriteOfBandMember,
	tokenInCollectionOwnedByBandMember,
}) {
	const [showNftCopiesModal, setShowNftCopiesModal] = useState(false);
	const [audioPlayerProps, setAudioPlayerProps] = useContext(AudioPlayerContext);
	const { theme } = useTheme();

	const audioPlayerTrackId = audioPlayerProps.currentlyPlayingIdx === -1 ? undefined : audioPlayerProps.queue[audioPlayerProps.currentlyPlayingIdx].trackId;

	const truncatedArtistName = useMemo(() => {
		let returnedString = artistName;
		if (artistName && artistName.length > 14) returnedString = artistName.substring(0, 14) + "...";
		return returnedString;
	}, [artistName]);

	const trackCopiesModalValues = {
		redirectLink,
		trackName,
		trackId,
		audio,
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

	const playTrackHandler = () => {
		//If same song is played again then dont add again
		//Instead need a logic to pause it in the audioplayer...
		if (audioPlayerTrackId && trackId === audioPlayerTrackId) {
			setAudioPlayerProps((prevProps) => {
				return {
					...prevProps,
					isPlaying: !prevProps.isPlaying,
				};
			});
			return;
		}
		setAudioPlayerProps((prevProps) => {
			const newQueue = [...prevProps.queue];
			newQueue.unshift({
				tokenId: tokenId,
				audioURL: audio,
				price: price,
				artistName: artistName,
				isArtistVerified: isArtistVerified,
				songName: trackName,
				nftCover: image,
				trackId: trackId,
			});
			return {
				...prevProps,
				queue: newQueue,
				updateQueue: true,
				currentlyPlayingIdx: 0,
				currentProgress: "00:00",
				playerIsLoaded: false,
			};
		});
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
									{favouriteOfBandMember && (
										<div className="group-hover:bg-dark-100/10 backdrop-blur duration-500 text-light-100 w-full h-full opacity-0 group-hover:opacity-100 flex items-center justify-center absolute">
											<div className="relative flex flex-col items-center justify-center">
												<i className="fa-solid fa-heart text-5xl"></i>
												<p className="mt-2">{favouriteOfBandMember}</p>
											</div>
										</div>
									)}
									{tokenInCollectionOwnedByBandMember && (
										<div className="group-hover:bg-dark-100/10 backdrop-blur duration-500 text-light-100 w-full h-full opacity-0 group-hover:opacity-100 flex items-center justify-center absolute">
											<div className="relative flex flex-col items-center justify-center">
												<i className="fa-solid fa-record-vinyl text-5xl"></i>
												<p className="mt-2">{tokenInCollectionOwnedByBandMember}</p>
											</div>
										</div>
									)}
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
					<button
						type="button"
						onClick={playTrackHandler}
						className="opacity-0 group-hover:opacity-100 duration-500 h-[40px] w-[40px] absolute bottom-4 right-4 bg-primary-100 hover:bg-primary-200 rounded-full items-center justify-center"
					>
						<i
							className={"text-lg text-light-200 fas " + (audioPlayerProps.isPlaying && trackId === audioPlayerTrackId ? "fa-pause" : "fa-play")}
						></i>
					</button>
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
