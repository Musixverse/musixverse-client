import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import styles from "../../../styles/TrackInfo/TrackDetails.module.css";
import spotifyB from "../../../public/assets/logos/spotify_logo_b.svg";
import spotifyW from "../../../public/assets/logos/spotify_logo_w.svg";
import appleB from "../../../public/assets/logos/apple_logo_b.svg";
import appleW from "../../../public/assets/logos/apple_logo_w.svg";
import amazonB from "../../../public/assets/logos/amazon_logo_b.svg";
import amazonW from "../../../public/assets/logos/amazon_logo_w.svg";
import youtubeB from "../../../public/assets/logos/youtube_logo_b.svg";
import youtubeW from "../../../public/assets/logos/youtube_logo_w.svg";
import dynamic from "next/dynamic";
const LyricsModal = dynamic(() => import("./TrackInfoUtils/LyricsModal"));

export default function TrackDetails({ tokenId, metadata }) {
	const { theme } = useTheme();
	var date = new Date(parseInt(metadata.unlockTimestamp) * 1000);
	var dateStr =
		date.toLocaleString("default", {
			month: "long",
		}) +
		" " +
		date.getDate().toString() +
		" " +
		date.getFullYear().toString() +
		", " +
		date.toLocaleTimeString() +
		" " +
		date
			.toLocaleDateString("en-US", {
				day: "2-digit",
				timeZoneName: "long",
			})
			.substring(4)
			.match(/\b(\w)/g)
			.join("");

	var time_in_min = Math.round(parseFloat(metadata.duration) / 60).toString() + " min";
	var time_in_sec = Math.round(parseFloat(metadata.duration) % 60).toString() + " sec";
	var time = time_in_min + " " + time_in_sec;

	const [isLyricsModalOpen, setLyricsModalOpen] = useState(false);

	return (
		<div className={"dark:bg-dark-600 dark:border-dark-600 " + styles["track-detail__container"]}>
			<div className="flex flex-col col-span-3 md:col-span-2">
				<h1 className="font-tertiary text-4xl">TRACK BACKGROUND</h1>
				<p className="mt-4 pr-2 font-secondary text-base text-justify max-h-[320px] overflow-y-scroll whitespace-pre-wrap">{metadata.description}</p>
			</div>

			{/* OTHER DETAILS */}
			<div className={styles["track-info__other-details"]}>
				{/* <div className={styles['other-details__title']}> */}
				<h1 className="font-tertiary text-4xl">SONG DETAILS</h1>
				{/* </div> */}

				<div className={styles["other-details__section2"]}>
					<div className="text-left">
						<h4 className="font-bold font-secondary text-base">Track Origin (Version)</h4>
						<p>{metadata.trackOrigin}</p>
					</div>
					<div className="text-left">
						<h4 className="font-bold font-secondary text-base">Genre</h4>
						<p>{metadata.genre}</p>
					</div>
					<div className="text-left">
						<h4 className="font-bold font-secondary text-base">Recording Year</h4>
						<p>{metadata.recordingYear}</p>
					</div>
					<div className="text-left">
						<h4 className="font-bold font-secondary text-base">Parental Advisory</h4>
						<p>{metadata.parentalAdvisory}</p>
					</div>
				</div>

				<div className="flex-grow border-t-[3px] border-[#9a9a9a]"></div>

				{/* Section 2 */}
				<div className={styles["other-details__section2"]}>
					<div className="text-left">
						<h4 className="font-bold font-secondary text-base">Duration</h4>
						<p>{time}</p>
					</div>
					<div className="text-left">
						<h4 className="font-bold font-secondary text-base">Language</h4>
						<p>{metadata.language}</p>
					</div>
					<div className="text-left">
						<h4 className="font-bold font-secondary text-base">Country of Origin</h4>
						<p>{metadata.location.countryOfOrigin && metadata.location.countryOfOrigin.name ? metadata.location.countryOfOrigin.name : "-"}</p>
					</div>
					<div className="text-left">
						<h4 className="font-bold font-secondary text-base">Location Created</h4>
						<p>{metadata.location.cityOfOrigin && metadata.location.cityOfOrigin.name ? metadata.location.cityOfOrigin.name : "-"}</p>
					</div>
				</div>

				<div className="flex-grow border-t-[3px] border-[#9a9a9a]"></div>

				{/* Section 2 */}
				<div className={styles["other-details__section2"]}>
					<div className="text-left">
						<h4 className="font-bold font-secondary text-base">Vocals</h4>
						<p>{metadata.vocals}</p>
					</div>
					<div className="text-left">
						<h4 className="font-bold font-secondary text-base">Has Collaborators</h4>
						<p>{metadata.hasCollaborators}</p>
					</div>
					<div className="text-left">
						<h4 className="font-bold font-secondary text-base">Number of Copies</h4>
						<p>{metadata.numberOfCopies}</p>
					</div>
					<div className="text-left">
						<h4 className="font-bold font-secondary text-base">Unique Token ID</h4>
						<p>{tokenId}</p>
					</div>
				</div>

				<div className="flex-grow border-t-[3px] border-[#9a9a9a]"></div>

				<div className={styles["other-details__section2"]}>
					<div className="text-left">
						<h4 className="font-bold font-secondary text-base">Token Standard</h4>
						<p>ERC-1155</p>
					</div>
					<div className="text-left">
						<h4 className="font-bold font-secondary text-base">Blockchain</h4>
						<p>
							{parseInt(metadata.chainDetails.chainId) === 80001
								? "Polygon Testnet"
								: parseInt(metadata.chainDetails.chainId) === 137
								? "Polygon"
								: ""}
						</p>
					</div>

					<div className="text-left col-span-2">
						<h4 className="font-bold font-secondary text-base">Unlocked On</h4>
						<p>{dateStr.toString()}</p>
					</div>
				</div>

				<div className="flex-grow border-t-[3px] border-[#9a9a9a]"></div>

				<div className={styles["other-details__section2"]}>
					{metadata.lyrics ? (
						<div className="text-left">
							<h4 className="font-bold font-secondary text-base">Lyrics</h4>
							<span onClick={() => setLyricsModalOpen(true)} className="cursor-pointer">
								Available &nbsp;
								<i className="fa-solid fa-arrow-right-long"></i>
							</span>
						</div>
					) : null}
					{metadata.isrc ? (
						<div className="text-left">
							<h4 className="font-bold font-secondary text-base">ISRC</h4>
							<p>{metadata.isrc}</p>
						</div>
					) : null}
					<div className={metadata.lyrics && metadata.isrc ? "text-left col-span-1" : "text-left col-span-2"}>
						<h4 className="font-bold font-secondary text-base">Contract Address</h4>
						<p>{metadata.chainDetails.contractAddress}</p>
					</div>
				</div>

				{/* Section 5 */}
				{metadata.links.spotify || metadata.links.appleMusic || metadata.links.amazonMusic || metadata.links.youtubeMusic || metadata.links.other ? (
					<div className={"mt-6 dark:bg-dark-800 " + styles["other-details__footer"]}>
						<h4 className="font-secondary text-lg">Listen on</h4>
						<div className={styles["footer__icons"]}>
							{metadata.links.spotify ? (
								<Link href={metadata.links.spotify}>
									<a target="_blank" rel="noopener noreferrer">
										<Image src={theme === "dark" ? spotifyW : spotifyB} width={25} height={25} alt="spotify" />
									</a>
								</Link>
							) : null}
							{metadata.links.appleMusic ? (
								<Link href={metadata.links.appleMusic}>
									<a target="_blank" rel="noopener noreferrer">
										<Image src={theme === "dark" ? appleW : appleB} width={25} height={25} alt="apple-music" />
									</a>
								</Link>
							) : null}
							{metadata.links.amazonMusic ? (
								<Link href={metadata.links.amazonMusic}>
									<a target="_blank" rel="noopener noreferrer">
										<Image src={theme === "dark" ? amazonW : amazonB} width={25} height={25} alt="amazon-music" />
									</a>
								</Link>
							) : null}
							{metadata.links.youtubeMusic ? (
								<Link href={metadata.links.youtubeMusic}>
									<a target="_blank" rel="noopener noreferrer">
										<Image src={theme === "dark" ? youtubeW : youtubeB} width={25} height={25} alt="youtube-music" />
									</a>
								</Link>
							) : null}
							{metadata.links.other ? (
								<Link href={metadata.links.other}>
									<a target="_blank" rel="noopener noreferrer">
										<i className="fa-solid fa-link"></i>
									</a>
								</Link>
							) : null}
						</div>
					</div>
				) : null}
			</div>
			<LyricsModal isOpen={isLyricsModalOpen} setOpen={setLyricsModalOpen} lyricsUrl={metadata.lyrics} />
		</div>
	);
}
