import Image from "next/image";
import Link from "next/link";
import { useMoralisCloudFunction } from "react-moralis";
import styles from "../../../styles/TrackInfo/TrackHeader.module.css";
import AudioPlayer from "./AudioPlayer";
import mxv_verified from "../../../public/assets/mxv_tick.svg";
import TrackHeaderCta from "./TrackInfoUtils/TrackHeaderCta";
import TrackEditionDropdown from "./TrackInfoUtils/TrackEditionDropdown";
import ShinyLoader from "../../layout/ShinyLoader";

export default function TrackHeader({
	image,
	artworkInfo,
	artistAddress,
	title,
	audio_url,
	tags,
	tokenId,
	unlockTimestamp,
	price,
	currentOwnerAddress,
	numberOfCopies,
	otherTokensOfTrack,
	onSale,
}) {
	const { data: artist } = useMoralisCloudFunction("fetchUsernameFromAddress", { address: artistAddress });
	const { data: localTokenId } = useMoralisCloudFunction("fetchLocalTokenId", {
		tokenId: tokenId,
	});
	const { data: artworkArtistInfo } = useMoralisCloudFunction("fetchArtworkArtist", { artworkInfo: artworkInfo });

	return (
		<div className={styles["track-header"]}>
			<div className={styles["track-header__container"]}>
				{/* Image section */}
				<div className={"group pr-4 " + styles["track-header__container--trackImage"]}>
					<div className="h-full w-full relative">
						{image ? (
							<Link href={image}>
								<a target="_blank" rel="noopener noreferrer">
									<Image
										src={image}
										className="rounded-lg"
										alt="trackImage"
										width="100%"
										height="100%"
										layout="responsive"
										objectFit="contain"
										priority
									/>
								</a>
							</Link>
						) : (
							<ShinyLoader />
						)}
					</div>

					<div className="absolute hidden group-hover:block pt-2">
						{artworkInfo.invitedArtistId && artworkArtistInfo && artworkArtistInfo.user[0] ? (
							<Link href={`/profile/${artworkArtistInfo.user[0].username}`} className="cursor-pointer">
								<a target="_blank" rel="noopener noreferrer">
									<div className="flex items-center mb-2 font-secondary text-sm">
										<span className="mr-2">Artwork by-</span>
										{artworkArtistInfo.userInfo[0] && artworkArtistInfo.userInfo[0].avatar && (
											<Image
												src={artworkArtistInfo.userInfo[0].avatar}
												height="25"
												width="25"
												className="rounded-full"
												alt="Artwork Artist Profile Avatar"
											/>
										)}
										<span className="ml-1">@{artworkArtistInfo.user[0].username}</span>
									</div>
								</a>
							</Link>
						) : artworkInfo.artistAddress && artworkArtistInfo ? (
							<Link href={`/profile/${artworkArtistInfo.username}`} className="cursor-pointer">
								<a target="_blank" rel="noopener noreferrer">
									<div className="flex items-center mb-2 font-secondary text-sm">
										<span className="mr-2">Artwork by-</span>
										{artworkArtistInfo.userInfo[0] && artworkArtistInfo.userInfo[0].avatar && (
											<Image
												src={artworkArtistInfo.userInfo[0].avatar}
												height="25"
												width="25"
												className="rounded-full"
												alt="Artwork Artist Profile Avatar"
											/>
										)}
										<span className="ml-1">@{artworkArtistInfo.username}</span>
									</div>
								</a>
							</Link>
						) : artworkInfo.artist ? (
							<div className="flex items-center mb-2 font-secondary text-sm">
								<span className="mr-2">Artwork by-</span>
								<span>{artworkInfo.artist}</span>
							</div>
						) : null}
					</div>
				</div>

				{/* Track Details section */}
				<div className={styles["track-header__container--track-detail"]}>
					<div className="font-bold pt-8 sm:pt-0 pb-2 items-center flex">
						{artist ? (
							<Link href={`/profile/${artist.username}`} className="cursor-pointer">
								<a target="_blank" rel="noopener noreferrer">
									{artist.name}
								</a>
							</Link>
						) : null}
						{artist && artist.isArtistVerified && (
							<div className="ml-2 align-center flex">
								<Image src={mxv_verified} width={14} height={14} alt="MXV verified" />
							</div>
						)}
					</div>

					<div className="flex justify-between items-end sm:pb-6">
						<div className="font-tertiary text-7xl flex flex-col sm:flex-row">
							<span>{title}</span>&nbsp;
							{localTokenId ? (
								<>
									{otherTokensOfTrack.length === 0 ? (
										<span className="font-primary text-xs items-end flex mb-3 sm:ml-1">#1 of 1</span>
									) : (
										<span className="font-primary text-xs items-end flex mb-2 sm:ml-1">
											<TrackEditionDropdown
												optionsArray={otherTokensOfTrack}
												localTokenId={localTokenId}
												numberOfCopies={numberOfCopies}
											/>
										</span>
									)}
								</>
							) : null}
						</div>
					</div>
					{/* Audio Player component */}
					<AudioPlayer tokenId={tokenId} audio_url={audio_url} artistName={artist && artist.name} title={title} />

					<div className="w-full h-full grid content-between pt-6">
						<div className="pb-6 flex flex-wrap gap-2 w-full">
							{tags.map((tag, index) => {
								return (
									<button
										key={index}
										type="button"
										className="px-6 py-2 mr-2 rounded-full bg-light-200 dark:bg-dark-100 text-sm cursor-default"
									>
										{tag}
									</button>
								);
							})}
						</div>

						{/* Track Header CTA */}
						<TrackHeaderCta
							tokenId={tokenId}
							unlockTimestamp={unlockTimestamp}
							price={price}
							currentOwnerAddress={currentOwnerAddress}
							onSale={onSale}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
