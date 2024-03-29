import { useRef, useEffect, useState, useContext, useMemo } from "react";
import Actions from "./Actions";
import styles from "../../../styles/TrackInfo/AudioPlayer.module.css";
import ShinyLoader from "../../layout/ShinyLoader";
import AudioPlayerContext from "../../../store/audioplayer-context";

export default function AudioPlayer({ numberOfCopies, tokenId, audio, artistName, isArtistVerified, trackName, image, trackId, price, collaboratorUsers }) {
	/*******************************
	 *******  AUDIO PLAYER  ********
	 *******************************/
	const [audioPlayerProps, setAudioPlayerProps] = useContext(AudioPlayerContext);
	const [currTimeStr, setCurrTimeStr] = useState("00:00");
	const progress = useRef(null);
	const progressContainer = useRef(null);

	//Memoize trackID
	const audioPlayerTrackId = useMemo(() => {
		return audioPlayerProps.currentlyPlayingIdx === -1 ? undefined : audioPlayerProps.queue[audioPlayerProps.currentlyPlayingIdx].trackId;
	}, [audioPlayerProps.currentlyPlayingIdx, audioPlayerProps.queue]);

	useEffect(() => {
		if (audioPlayerProps.audioTag) {
			// let waitForNextSec = false;
			const updateTimeProgress = () => {
				if (!(audioPlayerTrackId && trackId === audioPlayerTrackId)) return;

				const currTime = Math.floor(audioPlayerProps.audioTag.currentTime);
				//Update the currTime
				const min = Math.floor(currTime / 60);
				const sec = Math.floor(currTime % 60);
				setCurrTimeStr(() => {
					return (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
				});

				//Update progress bar
				const currDurationArr = audioPlayerProps.currentDuration.split(":");
				const durTime = Number(currDurationArr[0]) * 60 + Number(currDurationArr[1]);
				const progressPercent = (currTime / durTime) * 100;
				if (progress && progress.current) progress.current.style.width = `${progressPercent}%`;

				// More optimisation?
				// waitForNextSec = true;
				// setTimeout(()=>{
				// 	waitForNextSec = false
				// },1000);
			};
			if (audioPlayerTrackId && trackId === audioPlayerTrackId) audioPlayerProps.audioTag.addEventListener("timeupdate", updateTimeProgress);
			else {
				if (progress && progress.current) progress.current.style.width = `0%`;
				setCurrTimeStr("00:00");
			}

			return () => {
				audioPlayerProps.audioTag.removeEventListener("timeupdate", updateTimeProgress);
			};
		}
	}, [audioPlayerProps.audioTag, audioPlayerTrackId, trackId, audioPlayerProps.currentDuration]);

	//Update the width of the progress bar div
	// useEffect(()=>{
	// 	if(audioPlayerProps.isPlaying && trackId === audioPlayerTrackId){
	// 		const currProgressArr = audioPlayerProps.currentProgress.split(":");
	// 		const currDurationArr = audioPlayerProps.currentDuration.split(":");
	// 		const currTime = Number(currProgressArr[0])*60+Number(currProgressArr[1]);
	// 		const durTime = Number(currDurationArr[0])*60+Number(currDurationArr[1]);

	// 		const progressPercent = (currTime / durTime) * 100;
	// 		// Update the width
	// 		progress.current.style.width = `${progressPercent}%`;
	// 	}
	// },[audioPlayerProps.currentProgress, audioPlayerProps.isPlaying, trackId, audioPlayerTrackId, audioPlayerProps.currentDuration])

	const playTrackHandler = () => {
		//If same song is played again then dont add again
		//Instead a logic to pause it in the audioplayer...
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
			newQueue.push({
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
				currentlyPlayingIdx: newQueue.length - 1,
				playerIsLoaded: false,
			};
		});
	};

	const setProgress = (e) => {
		if (!(audioPlayerTrackId && trackId === audioPlayerTrackId)) return;
		//Get the width to normalise in the width of clicked
		let toNormalise = progress.current.getBoundingClientRect().x;
		// Get the width of the progress bar
		const width = progressContainer.current.offsetWidth;
		// const width = e.target.offsetWidth;
		//Normalise the clicked x-axis
		const clickX = e.clientX - toNormalise;
		// Fetch the full duration
		const currDurationArr = audioPlayerProps.currentDuration.split(":");
		const durTime = Number(currDurationArr[0]) * 60 + Number(currDurationArr[1]);
		// Update the playing time of audio
		const currentTime = (clickX / width) * durTime;
		audioPlayerProps.audioTag.currentTime = currentTime;
	};

	return (
		<div className="flex flex-col items-center justify-evenly sm:flex-row sm:justify-between sm:items-center">
			<button onClick={playTrackHandler} className={"dark:border-light-100 " + styles["play-btn"]}>
				<i className={"text-xl fas md:text-2xl " + (audioPlayerProps.isPlaying && trackId === audioPlayerTrackId ? "fa-pause" : "fa-play")}></i>
			</button>
			<div className="flex flex-col sm:ml-5 sm:flex-grow">
				{/* MP3 Bar */}
				<div className={styles["music-bar__container"]}>
					<div className={styles["music-bar__container--info"]}>
						{/* Time elapsed */}
						<p className={"mr-4 " + styles["container__info--duration"]}>
							{currTimeStr}
							{/* {(audioPlayerTrackId && trackId === audioPlayerTrackId)? currTimeStr:"00:00"} */}
						</p>
						{/* MP3 Progress */}
						{/* {audioIsReady ? ( */}
						<div ref={progressContainer} onClick={setProgress} className={styles["container__info--progress-container"]}>
							<div ref={progress} className={styles["info__progress-container--progress"]}></div>
							<div className={styles["info__progress-container--slider-box"]}></div>
						</div>
						{/* ) : (
							<ShinyLoader classes={"rounded-md my-[10px] h-[4px] w-10/12"} />
						)} */}
						{/* Duration of track */}
						<p className={"ml-2 " + styles["container__info--duration"]}>
							{audioPlayerTrackId && trackId === audioPlayerTrackId && audioPlayerProps.currentDuration}
						</p>
					</div>
					{/* Audio elem */}
					{/* <audio ref={audio} src={audio_url} onTimeUpdate={updateProgress} onEnded={resetProgress}></audio> */}
				</div>

				<Actions
					tokenId={tokenId}
					coverArt={image}
					numberOfCopies={numberOfCopies}
					artistName={artistName}
					title={trackName}
					collaboratorUsers={collaboratorUsers}
				/>
			</div>
		</div>
	);
}
