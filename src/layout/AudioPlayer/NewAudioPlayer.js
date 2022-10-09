/*
    Need to be implemented:
    2. Progressive circular border in normal state (ask shivam vro)
    4. Need to shift bg styles image to next/Image tags
    6. On click of nft cover redirect to the nft track info page(only need token id)
    4. Need some logic on Audio end either pop it off the queue or something else...
*/

import MarqueeText from "../../utils/MarqueeText";
import Image from "next/image";
import { useCallback, useContext, useEffect, useRef } from "react";
import AudioPlayerContext from "../../../store/audioplayer-context";
import { useMoralis } from "react-moralis";
import ShinyLoader from "../ShinyLoader";

export default function NewAudioPlayer() {
	const [audioPlayerProps, setAudioPlayerProps] = useContext(AudioPlayerContext);
	const { Moralis } = useMoralis();
	const audioTag = useRef(null);
	const progress = useRef(null);

	//Effect to be run on queue and currently playing idx
	useEffect(() => {
		if (audioTag.current !== null) {
			audioTag.current.pause();
			const intervalId = setInterval(() => {
				if (audioTag.current && audioTag.current.readyState >= 2) {
					const durTime = getTime(false);
					setAudioPlayerProps((prevProps) => {
						return {
							...prevProps,
							playerIsLoaded: true,
							isPlaying: true,
							currentDuration: durTime,
						};
					});
					clearInterval(intervalId);
					audioTag.current.currentTime = 0;
					audioTag.current.play();
					return;
				}
			}, 1000);
		}
	}, [getTime, audioPlayerProps.queue, audioPlayerProps.currentlyPlayingIdx, setAudioPlayerProps]);

	//Effect to be ran when the isPlaying state changes for
	//Global play pause functionality across platform
	useEffect(() => {
		console.log("Now running");
		if (audioTag.current !== null) {
			console.log("Now will change play/pause of player", audioPlayerProps.isPlaying);
			if (audioPlayerProps.isPlaying) {
				audioTag.current.play();
			} else audioTag.current.pause();
		}
	}, [audioPlayerProps.isPlaying]);

	const getTime = useCallback((queryForCurrTime) => {
		const duration = Math.floor(queryForCurrTime ? audioTag.current.currentTime : audioTag.current.duration);

		let min = isNaN(duration) === true ? "0" : Math.floor(duration / 60);
		min = min < 10 ? "0" + min : min;

		let sec = "00";

		if (duration >= 60) {
			for (var i = 1; i <= 60; i++) {
				if (duration >= 60 * i && duration < 60 * (i + 1)) {
					sec = duration - 60 * i;
					sec = sec < 10 ? "0" + sec : sec;
				}
			}
		} else {
			sec = duration;
			sec = sec < 10 ? "0" + sec : sec;
		}

		return min + ":" + sec;
	}, []);

	//Initial state
	if (audioPlayerProps.currentlyPlayingIdx === -1) return null;

	//Extract the front song in queue
	const currSongTraits = audioPlayerProps.queue[audioPlayerProps.currentlyPlayingIdx];
	const trackName = currSongTraits.songName;
	const singer = currSongTraits.artistName;
	const imgSrc = currSongTraits.nftCover;
	const nftPrice = Moralis.Units.FromWei(currSongTraits.price);
	const isArtistVerified = currSongTraits.isArtistVerified;
	const audioSrc = currSongTraits.audioURL;

	/******************** HELPER METHODS *****************/
	//Function to get the current time and the duration time
	const setProgress = (e) => {
		//Get the width to normalise in the width of clicked
		let toNormalise = progress.current.getBoundingClientRect().x;
		// Get the width of the progress bar
		// const width = progressContainer.current.offsetWidth;
		const width = e.target.offsetWidth;
		//Normalise the clicked x-axis
		const clickX = e.clientX - toNormalise;
		// Fetch the full duration
		const duration = audioTag.current.duration;
		// Update the playing time of audio
		audioTag.current.currentTime = (clickX / width) * duration;
		//The above line will further trigger the timeUpdate event
		//to update the progress bar
	};

	const updateProgress = (e) => {
		if (progress.current === null) return;
		// fetch the duration
		const duration = e.target.duration;
		// fetch the current playing time
		const currentTime = e.target.currentTime;
		// Calculate the progress bar percentage
		const progressPercent = (currentTime / duration) * 100;
		// Update the width
		progress.current.style.width = `${progressPercent}%`;
		// Fetch the current time to update the dom tree
		const currTime = getTime(true);
		//Update the context's currTime
		setAudioPlayerProps((prevProps) => {
			return {
				...prevProps,
				currentProgress: currTime,
			};
		});
	};

	const playTrackHandler = () => {
		const isPaused = !audioPlayerProps.isPlaying;
		if (isPaused) {
			audioTag.current.play();
			setAudioPlayerProps((prevProps) => {
				return {
					...prevProps,
					isPlaying: true,
				};
			});
		} else {
			audioTag.current.pause();
			setAudioPlayerProps((prevProps) => {
				return {
					...prevProps,
					isPlaying: false,
				};
			});
		}
	};

	const nextSong = () => {
		// Or maybe make the setUpdate queue true and get more songs
		if (audioPlayerProps.currentlyPlayingIdx === audioPlayerProps.queue.length - 1) return;
		setAudioPlayerProps((prevProps) => {
			return {
				...prevProps,
				currentlyPlayingIdx: prevProps.currentlyPlayingIdx + 1,
				playerIsLoaded: false,
			};
		});
		audioTag.current.currentTime = 0;
		if (!audioPlayerProps.isPlaying) playTrackHandler();
	};

	const prevSong = () => {
		if (audioPlayerProps.currentlyPlayingIdx !== 0) {
			setAudioPlayerProps((prevProps) => {
				return {
					...prevProps,
					currentlyPlayingIdx: prevProps.currentlyPlayingIdx - 1,
					playerIsLoaded: false,
				};
			});
		}
		audioTag.current.currentTime = 0;
		if (!audioPlayerProps.isPlaying) playTrackHandler();
	};

	//Global Audio Player Component
	return (
		<div className="md:w-[364px] group transition-[width] duration-500 ease-in-out fixed z-40 overflow-hidden left-4 bottom-4 md:hover:w-[500px]">
			{/* Normal state bg-div */}
			<div
				className="absolute z-0 w-full h-full rounded-xl"
				style={{
					backgroundImage: `url(${imgSrc})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			></div>
			<div className="bg-[rgba(19,19,19,0.2)] backdrop-blur-[4px] backdrop-brightness-105 text-light-100 relative flex items-center justify-between w-full px-6 py-2 group-hover:p-6 group-hover:flex-col rounded-xl">
				{/* Normal state */}
				<div className="flex justify-between w-full">
					<div className="flex flex-col">
						{trackName.length > 15 ? (
							<MarqueeText text={trackName} textClass={"font-primary font-semibold text-xl"} marqueeWidth={"w-[104px] md:w-[150px]"} />
						) : (
							<h6 className={"font-primary font-semibold text-xl "}>{trackName}</h6>
						)}
						<div className="flex items-center">
							<p className="text-sm font-secondary">{singer}</p>
							{isArtistVerified ? (
								<span className="flex items-center ml-2">
									<Image src={"/assets/mxv_tick.svg"} width={16} height={16} alt="MXV verified" />
								</span>
							) : null}
						</div>
						{/* Price of the nft */}
						<div className="flex-col hidden mt-1 group-hover:flex">
							<div className="flex items-center justify-center font-semibold">
								<Image src={"/assets/matic-logo.svg"} width={16} height={16} alt="matic logo" />
								<span className="ml-1 sm:text-lg">{nftPrice}</span>
								<button className="ml-4 px-4 py-1 text-xs bg-primary-100 hover:bg-primary-200 rounded-full">View Track</button>
							</div>
						</div>
					</div>
					<div
						className="hidden group-hover:block w-[120px] aspect-square rounded-xl overflow-hidden"
						style={{
							backgroundImage: `url(${imgSrc})`,
							backgroundPosition: "center",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
						}}
					></div>
				</div>
				{/* Audio Progress Container */}
				<div className="items-center justify-center hidden w-full mt-8 mb-5 group-hover:flex">
					<p className={"mr-4 font-primary text-sm min-w-[39px]"}>{audioPlayerProps.currentProgress}</p>
					{audioPlayerProps.playerIsLoaded ? (
						<div onClick={setProgress} className="bg-light-300 rounded-md cursor-pointer h-[4px] w-10/12 flex items-center">
							<div ref={progress} className="w-0 h-full bg-primary-100 rounded-l-md"></div>
							<div className="bg-primary-100 w-[20px] h-[10px] rounded-xl ml-[-11px]"></div>
						</div>
					) : (
						<ShinyLoader classes={"rounded-md my-[10px] h-[4px] w-10/12"} />
					)}
					<p className={"ml-4 font-primary text-sm min-w-[39px]"}>{audioPlayerProps.playerIsLoaded ? audioPlayerProps.currentDuration : ""}</p>
					<audio ref={audioTag} src={audioSrc} onTimeUpdate={updateProgress}></audio>
				</div>
				{/* Global Audio Controller */}
				<div className="flex items-center space-x-10 ">
					<button
						onClick={prevSong}
						className="group-hover:flex hidden items-center justify-center p-2 rounded-full bg-[rgba(19,19,19,0.4)] backdrop-blur-[24px] backdrop-brightness-105"
					>
						<span className="material-symbols-outlined text-light-100">skip_previous</span>
					</button>
					<button
						type="button"
						onClick={playTrackHandler}
						className="h-[40px] w-[40px] bg-primary-300 hover:bg-primary-100 rounded-full flex items-center justify-center"
					>
						<i className={"text-xl text-light-200 fas " + (audioPlayerProps.isPlaying ? "fa-pause" : "fa-play")}></i>
					</button>
					<button
						onClick={nextSong}
						className="group-hover:flex hidden items-center justify-center p-2 rounded-full bg-[rgba(19,19,19,0.4)] backdrop-blur-[24px] backdrop-brightness-105"
					>
						<span className="material-symbols-outlined text-light-100">skip_next</span>
					</button>
				</div>
			</div>
		</div>
	);
}
