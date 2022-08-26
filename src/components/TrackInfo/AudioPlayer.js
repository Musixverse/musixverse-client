import { useRef, useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useMoralis } from "react-moralis";
import StatusContext from "../../../store/status-context";
import favourite from "../../../public/assets/Favourite.svg";
import mxvverified from "../../../public/assets/mxv_verified.svg";
import sharebtn from "../../../public/assets/SHARE.svg";
import styles from "../../../styles/TrackInfo/AudioPlayer.module.css";

export default function AudioPlayer({ audio_url, artistName, title }) {
	/*******************************
	 *******  AUDIO PLAYER  ********
	 *******************************/
	const playBtn = useRef();
	const audio = useRef();
	const progress = useRef();
	const progressContainer = useRef();
	const durTime = useRef();
	const currTime = useRef();

	// Fetch the duration once component is loaded
	useEffect(() => {
		if (audio.current !== null) {
			const intervalId = setInterval(() => {
				if (audio.current && audio.current.readyState >= 2) {
					getTime(false);
					clearInterval(intervalId);
					return;
				}
			}, 1000);
		}
	}, []);

	//Function to get the current time and the duration time
	//for the track
	const getTime = (queryForCurrTime) => {
		const duration = queryForCurrTime ? audio.current.currentTime : audio.current.duration;
		let min = isNaN(duration) === true ? "0" : Math.floor(duration / 60);
		min = min < 10 ? "0" + min : min;

		let sec = "00";

		if (Math.floor(duration) >= 60) {
			for (var i = 1; i <= 60; i++) {
				if (Math.floor(duration) >= 60 * i && Math.floor(duration) < 60 * (i + 1)) {
					sec = Math.floor(duration) - 60 * i;
					sec = sec < 10 ? "0" + sec : sec;
				}
			}
		} else {
			sec = Math.floor(duration);
			sec = sec < 10 ? "0" + sec : sec;
		}

		if (queryForCurrTime) currTime.current.textContent = min + ":" + sec;
		else durTime.current.textContent = min + ":" + sec;
	};
	const resetProgress = () => {
		pauseTrack(playBtn.current.children[0]);
		audio.current.currentTime = 0;
	};

	//Function to set the progress on Click
	const setProgress = (e) => {
		//Get the width to normalise in the width of clicked
		let toNormalise = progress.current.getBoundingClientRect().x;
		// Get the width of the progress bar
		const width = progressContainer.current.offsetWidth;
		//Normalise the clicked x-axis
		const clickX = e.clientX - toNormalise;
		// Fetch the full duration
		const duration = audio.current.duration;
		// Update the playing time of audio
		audio.current.currentTime = (clickX / width) * duration;
		//The above line will further trigger the timeUpdate event
		//to update the progress bar
	};

	const updateProgress = (e) => {
		// fetch the duration
		const duration = e.target.duration;
		// fetch the current playing time
		const currentTime = e.target.currentTime;
		// Calculate the progress bar percentage
		const progressPercent = (currentTime / duration) * 100;
		// Update the width
		progress.current.style.width = `${progressPercent}%`;
		// Fetch the current time to update the dom tree
		getTime(true);
	};
	//Function to control and drive the play pause events
	const playTrackHandler = () => {
		const playPause = playBtn.current.children[0];
		const isPaused = playPause.classList.contains("fa-play");

		if (isPaused) playTrack(playPause);
		else pauseTrack(playPause);
	};

	const pauseTrack = (controller) => {
		controller.classList.add("fa-play");
		controller.classList.remove("fa-pause");

		audio.current.pause();
	};

	const playTrack = (controller) => {
		controller.classList.remove("fa-play");
		controller.classList.add("fa-pause");

		audio.current.play();
	};

	/*******************************
	 *******  SHARE BUTTONS  *******
	 *******************************/
	const { isAuthenticated, user } = useMoralis();
	const { asPath } = useRouter();
	const [, , setSuccess] = useContext(StatusContext);
	const [currentPageLink, setCurrentPageLink] = useState("");

	useEffect(() => {
		if (isAuthenticated && user) {
			setCurrentPageLink(window.location.origin + asPath + "?ref=" + user.attributes.username);
		} else {
			setCurrentPageLink(window.location.origin + asPath);
		}
	}, [isAuthenticated, user, asPath]);

	const copyToClipboard = async () => {
		await navigator.clipboard.writeText(currentPageLink);
		setSuccess((prevState) => ({
			...prevState,
			title: "Referral Link Copied!",
			message: "Your referral link has been copied to clipboard",
			showSuccessBox: true,
		}));
	};

	const sharableMessage = `Invest in ${title} by ${artistName}!\nOwn music NFTs and connect with the artists you love!\nShare NFTs and get a referral bonus every time the NFT gets traded using your link!\n\nCheck out this track on @musixverse- ${currentPageLink}`;
	const uriEncodedSharableText = encodeURI(sharableMessage);

	return (
		<div className="flex flex-row justify-between items-center">
			<button ref={playBtn} onClick={playTrackHandler} className={"dark:border-light-100 " + styles["play-btn"]}>
				<i className="fas fa-play text-2xl"></i>
			</button>
			<div className="ml-5 flex flex-col flex-grow">
				{/* MP3 Bar */}
				<div className={styles["music-bar__container"]}>
					<div className={styles["music-bar__container--info"]}>
						{/* Time elapsed */}
						<p className={styles["container__info--duration"]} ref={currTime}>
							00:00
						</p>
						{/* MP3 Progress */}
						<div ref={progressContainer} className={styles["container__info--progress-container"]} onClick={setProgress}>
							<div ref={progress} className={styles["info__progress-container--progress"]}></div>
							<div className={styles["info__progress-container--slider-box"]}></div>
						</div>
						{/* Duration of track */}
						<p className={styles["container__info--duration"]} ref={durTime}></p>
					</div>
					{/* Audio elem */}
					<audio ref={audio} src={audio_url} onTimeUpdate={updateProgress} onEnded={resetProgress}></audio>
				</div>

				<div className="flex flex-row space-x-4 text-xs">
					<button className="flex justify-center items-center space-x-2 px-4 py-2 rounded-lg cursor-default hover:bg-light-300 dark:hover:bg-dark-100">
						<Image src={favourite} width={18} height={18} alt="Add to favourites button"></Image>
						<span>Add to Favourites</span>
					</button>

					<button className="flex justify-center items-center px-4 py-2 rounded-lg cursor-default hover:bg-light-300 dark:hover:bg-dark-100 relative group">
						<div className="flex space-x-2">
							<i className="fa-solid fa-share-nodes text-lg"></i>
							<span>Share</span>
						</div>

						<ul className="absolute pt-10 bg-transparent hidden left-0 top-0 z-10 text-sm font-medium text-left list-none border-none rounded-xl min-w-[250px] group-hover:block">
							<ul className="rounded-xl shadow-lg bg-light-100 dark:bg-dark-100">
								<li onClick={copyToClipboard}>
									<div className="flex items-center w-full rounded-t-xl px-4 py-3 bg-transparent cursor-pointer whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-200">
										<i className="fa-solid fa-copy text-lg"></i>
										<span className="ml-2">Copy Link</span>
									</div>
								</li>
								<li>
									<Link href={"https://twitter.com/intent/tweet?url=" + uriEncodedSharableText} passHref={true}>
										<a
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center w-full px-4 py-3 bg-transparent cursor-pointer whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-200"
										>
											<i className="fa-brands fa-twitter text-lg"></i>
											<span className="ml-2">Share on Twitter</span>
										</a>
									</Link>
								</li>
								<li>
									<Link
										href={`https://www.facebook.com/dialog/share?app_id=${process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}&display=popup&href=${currentPageLink}&redirect_uri=${currentPageLink}&hashtag=%23Musixverse`}
										passHref={true}
									>
										<a
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center w-full px-4 py-3 bg-transparent cursor-pointer whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-200"
										>
											<i className="fa-brands fa-facebook text-lg"></i>
											<span className="ml-2">Share on Facebook</span>
										</a>
									</Link>
								</li>
								<li>
									<Link href={`https://web.whatsapp.com/send?text=` + uriEncodedSharableText} passHref={true}>
										<a
											target="_blank"
											rel="noopener noreferrer"
											className="block w-full px-4 py-3 bg-transparent cursor-pointer whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-200"
										>
											<i className="fa-brands fa-whatsapp text-lg"></i>
											<span className="ml-2">Share on WhatsApp</span>
										</a>
									</Link>
								</li>
								<li>
									<Link href={`https://telegram.me/share/url?url=` + uriEncodedSharableText} passHref={true}>
										<a
											target="_blank"
											rel="noopener noreferrer"
											className="block w-full px-4 py-3 bg-transparent cursor-pointer whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-200"
										>
											<i className="fa-brands fa-telegram text-lg"></i>
											<span className="ml-2">Share on Telegram</span>
										</a>
									</Link>
								</li>
								<li>
									<Link
										href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentPageLink}&title=${sharableMessage}`}
										passHref={true}
									>
										<a
											target="_blank"
											rel="noopener noreferrer"
											className="block w-full px-4 py-3 bg-transparent cursor-pointer whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-200 rounded-b-xl"
										>
											<i className="fa-brands fa-linkedin text-lg"></i>
											<span className="ml-2">Share on LinkedIn</span>
										</a>
									</Link>
								</li>
							</ul>
						</ul>
					</button>

					<button className="flex justify-center items-center space-x-2 px-4 py-2 rounded-lg cursor-none">
						<Image src={mxvverified} width={18} height={18} alt="Authentic License"></Image>
						<span>MXV Cerified</span>
					</button>
				</div>
			</div>
		</div>
	);
}
