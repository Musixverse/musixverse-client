import Image from "next/image";
import { useRef } from "react";

export default function PreviewNft({truncatedNftName, uploadedImage, uploadedSong, nftPrice, numberOfCopies}) {
    const playBtn = useRef(null);
    const audio = useRef(null);

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

    const resetProgress = ()=>{
        pauseSong(playBtn.current.children[0]);
        audio.current.currentTime = 0;
    }
    /*
        Things to be passed here as props:      
        1. Uploaded Image url/blob (Done)
        2. Uploaded audio file (Done)
        3. Artist Name (Pre specified via Moralis)
        4. NFT name (Done)
        5. Price of NFT (Ayush)
    */
    // console.log("here",uploadedSong);
    return(
        <div className="flex-1">
            <p className="mb-10 font-semibold font-secondary">STEP 1 OF 2</p>
            {/* Uploaded Art */}
            <div className="relative flex items-end justify-end w-[222px] h-[190px]">
                {/* Cover art of NFT */}
                {uploadedImage === null? 
                    <div className="dark:bg-[#363636] bg-light-300 w-full h-full rounded-t-xl absolute"></div>
                        :
                    <div className="absolute w-full h-full overflow-hidden rounded-t-md">
                        <Image 
                            src={uploadedImage} 
                            alt="nft cover art" 
                            objectFit="cover" 
                            layout="fill" 
                            priority
                        />
                    </div>
                }
                {/* NFT audio file */}
                {uploadedSong == null?
                    null
                    :
                    <div className="z-[1] p-2">
                        <button 
                            ref={playBtn} 
                            onClick={playSongHandler} 
                            className="h-[40px] w-[40px] bg-primary-100 rounded-full flex items-center justify-center"
                        >
                            <i className="text-lg fas fa-play text-dark-200"></i>
                        </button>
                        <audio ref={audio} className="hidden" src={uploadedSong} onEnded={resetProgress}></audio>
                    </div>
                }
            </div>
            {/* Content provided */}
            <div className="dark:bg-[#1D1D1D] bg-light-100 w-[222px] h-[128px] p-4 rounded-b-xl flex flex-col justify-between">
                <div className="flex justify-between w-full">
                    <div className="flex flex-col">
                        <p className="font-secondary text-[#1D1D1D] dark:text-light-200">Ben Kessler</p>
                        <p className="font-semibold font-secondary text-[#1D1D1D] dark:text-light-200 text-lg">{truncatedNftName} <span>#69</span></p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-secondary">Price</p>
                        <div className="flex items-center font-bold">
                            <Image src={"/assets/Eth_logo.svg"} width={12.5} height={25} alt="ethereum logo"/>
                            <span className="ml-1 sm:text-lg">{nftPrice == 0 ? 0 : nftPrice }</span>
                        </div>
                    </div>
                </div>
                {numberOfCopies == 0?
                    <div className="w-[150px] h-2 dark:bg-[#363636] bg-light-300 self-center rounded-lg"></div>
                    :
                    <div className="font-semibold font-secondary text-[#1D1D1D] dark:text-light-200 text-lg">No. of copies : {numberOfCopies}</div>
                }
            </div>
        </div>
    );
}