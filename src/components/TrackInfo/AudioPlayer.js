import { useRef, useEffect, useState } from "react";
import Actions from "./Actions";
import styles from "../../../styles/TrackInfo/AudioPlayer.module.css";
import ShinyLoader from "../../layout/ShinyLoader";

export default function AudioPlayer({ tokenId, audio_url, artistName, title }) {
	/*******************************
	 *******  AUDIO PLAYER  ********
	 *******************************/
	const [audioIsReady, setAudioIsReady] = useState(false);
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
					setAudioIsReady(true);
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

	return (
		<div className="flex flex-col items-center justify-evenly sm:flex-row sm:justify-between sm:items-center">
			<button ref={playBtn} onClick={playTrackHandler} className={"dark:border-light-100 " + styles["play-btn"]}>
				<i className="text-xl fas fa-play md:text-2xl"></i>
			</button>
			<div className="flex flex-col sm:ml-5 sm:flex-grow">
				{/* MP3 Bar */}
				<div className={styles["music-bar__container"]}>
					<div className={styles["music-bar__container--info"]}>
						{/* Time elapsed */}
						<p className={"mr-4 " + styles["container__info--duration"]} ref={currTime}>
							00:00
						</p>
						{/* MP3 Progress */}
						{audioIsReady ? (
							<div ref={progressContainer} className={styles["container__info--progress-container"]} onClick={setProgress}>
								<div ref={progress} className={styles["info__progress-container--progress"]}></div>
								<div className={styles["info__progress-container--slider-box"]}></div>
							</div>
						) : (
							<ShinyLoader classes={"rounded-md my-[10px] h-[4px] w-10/12"} />
						)}
						{/* Duration of track */}
						<p className={"ml-2 " + styles["container__info--duration"]} ref={durTime}></p>
					</div>
					{/* Audio elem */}
					<audio ref={audio} src={audio_url} onTimeUpdate={updateProgress} onEnded={resetProgress}></audio>
				</div>

				<Actions tokenId={tokenId} artistName={artistName} title={title} />
			</div>
		</div>
	);
}
