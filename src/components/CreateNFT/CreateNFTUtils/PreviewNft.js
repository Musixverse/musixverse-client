import Image from "next/image";
import { useRef } from "react";
import { useMoralis } from "react-moralis";

export default function PreviewNft({ trackTitle, uploadedImage, uploadedSong, nftPrice, numberOfCopies, step, contributorList }) {
    const { user } = useMoralis();

    const playBtn = useRef(null);
    const audio = useRef(null);

    let truncatedNftName = trackTitle;
    if (trackTitle.length > 10) {
        truncatedNftName = truncatedNftName.substring(0, 8) + "...";
    }

    let truncatednftPrice = nftPrice;
    if (nftPrice >= 1000000) {
        truncatednftPrice = Number((nftPrice / 1000000).toFixed(2)) + " M";
    } else if (nftPrice >= 1000) {
        truncatednftPrice = Number((nftPrice / 1000).toFixed(2)) + " K";
    }

    const playSongHandler = () => {
        const playPause = playBtn.current.children[0];
        const isPaused = playPause.classList.contains("fa-play");

        if (isPaused) playSong(playPause);
        else pauseSong(playPause);
    };

    const pauseSong = (controller) => {
        controller.classList.add("fa-play");
        controller.classList.remove("fa-pause");

        audio.current.pause();
    };

    const playSong = (controller) => {
        controller.classList.remove("fa-play");
        controller.classList.add("fa-pause");

        audio.current.play();
    };

    const resetProgress = () => {
        pauseSong(playBtn.current.children[0]);
        audio.current.currentTime = 0;
    };

    return (
        <div className="flex-1 mt-14 lg:mt-0">
            <p className="mb-10 font-semibold font-secondary">STEP {step} OF 2</p>
            {/* Uploaded Art */}
            <div className="relative w-[222px] h-[190px] overflow-hidden rounded-t-xl">
                {/* Cover art of NFT */}
                {uploadedImage === null ? (
                    <div className="dark:bg-[#363636] bg-light-300 w-full h-full rounded-t-xl"></div>
                ) : (
                    <div className="relative w-full h-full">
                        <Image src={uploadedImage} alt="nft cover art" objectFit="cover" layout="fill" priority />
                    </div>
                )}
                {/* NFT audio file */}
                {uploadedSong == null ? null : (
                    <div className="z-[1] absolute bottom-0 right-0 p-2">
                        <button
                            type="button"
                            ref={playBtn}
                            onClick={playSongHandler}
                            className="h-[40px] w-[40px] bg-primary-100 rounded-full flex items-center justify-center"
                        >
                            <i className="text-lg fas fa-play text-dark-200"></i>
                        </button>
                        <audio ref={audio} className="hidden" src={uploadedSong} onEnded={resetProgress}></audio>
                    </div>
                )}
            </div>
            {/* Content provided */}
            <div className="dark:bg-[#1D1D1D] bg-light-100 w-[222px] h-[128px] p-4 rounded-b-xl flex flex-col justify-between">
                <div className="flex justify-between w-full">
                    <div className="flex flex-col">
                        <p className="font-secondary text-[#1D1D1D] text-xs dark:text-light-300">{user && user.attributes.name}</p>
                        <p className="font-semibold font-primary text-[#1D1D1D] dark:text-light-200 text-lg">{truncatedNftName}</p>
                    </div>
                    {truncatednftPrice && (
                        <div className="flex flex-col">
                            <p className="font-secondary text-xs text-end dark:text-light-300">Price</p>
                            <div className="flex items-center font-semibold">
                                <Image src={"/assets/matic-logo.svg"} width={16} height={16} alt="matic logo" />
                                <span className="ml-1 sm:text-lg">{truncatednftPrice == 0 ? 0 : truncatednftPrice}</span>
                            </div>
                        </div>
                    )}
                </div>
                {numberOfCopies == 0 ? (
                    <div className="w-[150px] h-2 dark:bg-[#363636] bg-light-300 self-center rounded-lg"></div>
                ) : (
                    <div className="flex items-end justify-between font-secondary text-[#1D1D1D] dark:text-light-200 text-xs">
                        <div className="flex -space-x-2 items-end">
                            {contributorList.map((contributor, index) => {
                                return contributor.avatar ? (
                                    <div key={index} className={`rounded-full flex items-end relative z-${10 * (contributorList.length - index)}`}>
                                        <Image src={contributor.avatar} height="30" width="30" className="rounded-full" />
                                    </div>
                                ) : null;
                            })}
                        </div>
                        {truncatedNftName && numberOfCopies ? <span className="dark:text-light-300">#1 of&nbsp;{numberOfCopies}</span> : ""}
                    </div>
                )}
            </div>
        </div>
    );
}