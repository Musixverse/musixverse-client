import { useRef, useEffect } from "react";
import Image from "next/image";
import favourite from "../../../public/assets/Favourite.svg";
import mxvverified from "../../../public/assets/mxv_verified.svg";
import sharebtn from "../../../public/assets/SHARE.svg";
import styles from "../../../styles/SongInfo/AudioPlayer.module.css";

export default function AudioPlayer(){
    const playBtn = useRef();
    const audio = useRef();
    const progress = useRef();
    const progressContainer = useRef();
    const durTime = useRef();
    const currTime = useRef();

    // Fetch the duration once component is loaded
    useEffect(()=>{
        console.log(audio.current.readyState);
        const intervalId = setInterval(()=>{
            if(audio.current.readyState >= 2){
                getTime(false);
                clearInterval(intervalId);
                return;
            }
        },1000);
    },[]);

    //Function to get the current time and the duration time
    //for the song
    const getTime = (queryForCurrTime) =>{
        const duration = queryForCurrTime? audio.current.currentTime : audio.current.duration;
        let min = (isNaN(duration) === true)? '0' : Math.floor(duration/60);
        min = min <10 ? '0'+min:min;

        let sec= "00";

        if(Math.floor(duration) >= 60){
            for (var i = 1; i<=60; i++){
                if(Math.floor(duration)>=(60*i) && Math.floor(duration)<(60*(i+1))) {
                    sec = Math.floor(duration) - (60*i);
                    sec = sec <10 ? '0'+sec:sec;
                }
            }
        }else{
            sec = Math.floor(duration);
            sec = sec <10 ? '0'+sec:sec;
        }

        if(queryForCurrTime)
            currTime.current.textContent = min +':'+ sec;
        else
            durTime.current.textContent = min +':'+ sec;
    }
    const resetProgress = ()=>{
        pauseSong(playBtn.current.children[0]);
        audio.current.currentTime = 0;
    }

    //Function to set the progress on Click
    const setProgress = (e)=>{
        //Get the width to normalise in the width of clicked
        let toNormalise = progress.current.getBoundingClientRect().x;
        // Get the width of the progress bar
        const width = progressContainer.current.offsetWidth;
        //Normalise the clicked x-axis
        const clickX = e.clientX-toNormalise;
        // Fetch the full duration
        const duration = audio.current.duration;
        // Update the playing time of audio
        audio.current.currentTime = (clickX / width) * duration;
        //The above line will further trigger the timeUpdate event
        //to update the progress bar
    }

    const updateProgress = (e)=>{
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
    }
    //Function to control and drive the play pause events
    const playSongHandler = () => {
        const playPause = playBtn.current.children[0];
        const isPaused = playPause.classList.contains('fa-play')

        if (isPaused)
            playSong(playPause);
        else 
            pauseSong(playPause);
    };

    const pauseSong = (controller)=>{
        controller.classList.add('fa-play');
        controller.classList.remove('fa-pause');

        audio.current.pause();
    };

    const playSong = (controller)=>{
        controller.classList.remove('fa-play');
        controller.classList.add('fa-pause');

        audio.current.play();
    };

    return(
        <div className="flex flex-row justify-between items-center pb-10">
            <button ref={playBtn} onClick={playSongHandler} className={"dark:border-light-100 " +styles['play-btn']}>
                <i className="fas fa-play text-2xl"></i>
            </button>
            <div className="ml-5 flex flex-col flex-grow">
                {/* MP3 Bar */}
                <div className={styles['music-bar__container']}>
                    <div className={styles['music-bar__container--info']}>
                        {/* Time elapsed */}
                        <p className={styles['container__info--duration']} ref={currTime}>00:00</p>
                        {/* MP3 Progress */}
                        <div ref={progressContainer} className={styles['container__info--progress-container']} onClick={setProgress}>
                            <div ref={progress} className={styles['info__progress-container--progress']}></div>
                            <div className={styles['info__progress-container--slider-box']}></div>
                        </div>
                        {/* Duration of song */}
                        <p className={styles['container__info--duration']} ref={durTime}></p>
                    </div>
                    {/* Audio elem */}
                    <audio ref={audio} src="/sounds/rengoku.mp3" onCanPlayThrough={()=>console.log("ok")} onCanPlay={()=>console.log("Heya")} onTimeUpdate={updateProgress} onEnded={resetProgress}></audio>
                </div>

                <div className="flex flex-row space-x-8 pt-3 text-xs">
                    <button className="flex justify-center items-center space-x-2">
                        <Image src={favourite} width={18} height={18} alt="Add to favourites"></Image>
                        <span>Added to Favourite</span>
                    </button>
                    <button className="flex justify-center items-center space-x-2">
                        <Image src={sharebtn} width={18} height={18} alt="Share Button"></Image>
                        <span>Share</span>
                    </button>
                    <button className="flex justify-center items-center space-x-2">
                        <Image src={mxvverified} width={18} height={18} alt="Authentic License"></Image>
                        <span>MXV Cerified & Unmodified</span>
                    </button>
                </div>
            </div>
        </div>
    );
}