import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/TrackInfo/TrackHeader.module.css";
import AudioPlayer from "./AudioPlayer";
import mxv_verified from "../../../public/assets/mxv_tick.svg";
import TrackHeaderCta from "./TrackInfoUtils/TrackHeaderCta";
import TrackEditionDropdown from "./TrackInfoUtils/TrackEditionDropdown";
import CommentWall from "./CommentWall";
import ShinyLoader from "../../layout/ShinyLoader";

export default function TrackHeader({
	tokenId,
	localTokenId,
	image,
	artworkInfo,
	artworkArtistInfo,
	artist,
	title,
	audio_url,
	tags,
	unlockTimestamp,
	price,
	currentOwnerAddress,
	numberOfCopies,
	otherTokensOfTrack,
	onSale,
	comment,
	trackId,
	priceInWei,
}) {
	return (
		<div className={styles["track-header"]}>
			<div className={styles["track-header__container"]}>
				{/* Image section */}
				<div className={"group pr-4 " + styles["track-header__container--trackImage"]}>
					<div className="relative w-full h-full">
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

					<div className="absolute hidden pt-2 group-hover:block">
						{artworkArtistInfo && (artworkInfo.invitedArtistId || artworkInfo.artistAddress) && artworkArtistInfo.avatar ? (
							<Link href={`/profile/${artworkArtistInfo.username}`} className="cursor-pointer">
								<a target="_blank" rel="noopener noreferrer">
									<div className="flex items-center mb-2 text-sm font-secondary">
										<span className="mr-2">Artwork by-</span>
										<Image
											src={artworkArtistInfo.avatar}
											height="25"
											width="25"
											className="rounded-full"
											alt="Artwork Artist Profile Avatar"
										/>
										<span className="ml-1">@{artworkArtistInfo.username}</span>
									</div>
								</a>
							</Link>
						) : artworkInfo.artist ? (
							<div className="flex items-center mb-2 text-sm font-secondary">
								<span className="mr-2">Artwork by-</span>
								<span>{artworkInfo.artist}</span>
							</div>
						) : null}
					</div>
				</div>

				{/* Track Details section */}
				<div className={styles["track-header__container--track-detail"]}>
					<div className="flex items-center pt-8 pb-2 font-bold sm:pt-0">
						{artist ? (
							<Link href={artist.isBand ? `/profile/band/${artist.username}` : `/profile/${artist.username}`} className="cursor-pointer">
								<a target="_blank" rel="noopener noreferrer">
									{artist.name}
								</a>
							</Link>
						) : null}
						{artist && artist.isArtistVerified && (
							<div className="flex ml-2 align-center">
								<Image src={mxv_verified} width={14} height={14} alt="MXV verified" />
							</div>
						)}
					</div>

					<div className="flex items-end justify-between sm:pb-4">
						<div className="flex flex-col font-tertiary text-7xl sm:flex-row">
							<span>{title}</span>&nbsp;
							{localTokenId ? (
								<>
									{otherTokensOfTrack.length === 0 ? (
										<span className="flex items-end mb-3 text-xs font-primary sm:ml-1">#1 of 1</span>
									) : (
										<span className="flex items-end mb-2 text-xs font-primary sm:ml-1">
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
					<AudioPlayer 
						tokenId={tokenId} 
						audio={audio_url} 
						artistName={artist && artist.name} 
						isArtistVerified={artist && artist.isArtistVerified} 
						trackName={title} 
						image={image}
						trackId={trackId}
						price={priceInWei}
					/>

					<div className="grid content-between w-full h-full pt-6">
						<div className="grid flex-wrap justify-between w-full grid-cols-12 gap-2 pb-6">
							<div className={comment ? "col-span-5" : "col-span-full"}>
								{tags.map((tag, index) => {
									return (
										<button
											key={index}
											type="button"
											className="px-6 py-2 mb-3 mr-3 text-sm rounded-full cursor-default bg-light-200 dark:bg-dark-600"
										>
											{tag}
										</button>
									);
								})}
							</div>
							<div className="col-span-1"></div>
							{comment && (
								<div className="col-span-6">
									<CommentWall comment={comment} />
								</div>
							)}
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
