import Image from "next/image";
import { useRef } from "react";

export default function PreviewNft({ imgUrl, name, position, role, socialLinks, description }) {
    // const playBtn = useRef(null);
    // const audio = useRef(null);

    // let truncatedNftName = trackTitle;
    // if (trackTitle.length > 10) {
    //     truncatedNftName = truncatedNftName.substring(0, 8) + "...";
    // }

    // let truncatednftPrice = nftPrice;
    // if (nftPrice >= 1000000) {
    //     truncatednftPrice = Number((nftPrice / 1000000).toFixed(2)) + " M";
    // } else if (nftPrice >= 1000) {
    //     truncatednftPrice = Number((nftPrice / 1000).toFixed(2)) + " K";
    // }

    // const playTrackHandler = () => {
    //     const playPause = playBtn.current.children[0];
    //     const isPaused = playPause.classList.contains("fa-play");

    //     if (isPaused) playTrack(playPause);
    //     else pauseTrack(playPause);
    // };

    // const pauseTrack = (controller) => {
    //     controller.classList.add("fa-play");
    //     controller.classList.remove("fa-pause");

    //     audio.current.pause();
    // };

    const playTrack = (controller) => {
        controller.classList.remove("fa-play");
        controller.classList.add("fa-pause");

        audio.current.play();
    };

    const resetProgress = () => {
        pauseTrack(playBtn.current.children[0]);
        audio.current.currentTime = 0;
    };

    return (
        <div className="flex-1 mt-14 lg:mt-0">
            {/* Uploaded Art */}
            <div className="relative w-[222px] h-[190px] overflow-hidden rounded-t-xl">
                {/* Cover art of NFT */}
                {imgUrl === null ? (
                    <div className="dark:bg-[#363636] bg-light-300 w-full h-full rounded-t-xl"></div>
                ) : (
                    <div className="relative w-full h-full">
                        <Image src={imgUrl} alt="nft cover art" objectFit="cover" layout="fill" priority />
                    </div>
                )}
            </div>
            {/* Content provided */}
            <div className="dark:bg-[#1D1D1D] bg-light-100 w-[222px] p-4 rounded-b-xl flex flex-col justify-between">
                <div>
                    <p className="font-semibold font-primary text-[#1D1D1D] dark:text-light-200 text-center text-lg">{name}</p>
                    {/* <div className="flex flex-col">
                        <p className="font-secondary text-xs text-end dark:text-light-300">Price</p>
                        <div className="flex items-center font-semibold">
                            <Image src={"/assets/matic-logo.svg"} width={16} height={16} alt="matic logo" />
                            <span className="ml-1 sm:text-lg">{`1M`}</span>
                        </div>
                    </div> */}
                </div>
                <div className="flex flex-col font-secondary text-[#1D1D1D] dark:text-light-200 text-center text-sm">
                    {/* <div className="flex -space-x-2 items-end">
                        {contributorList.map((contributor, index) => {
                            return contributor.avatar ? (
                                <div key={index} className={`rounded-full flex items-end relative z-${10 * (contributorList.length - index)}`}>
                                    <Image src={contributor.avatar} height="30" width="30" className="rounded-full" />
                                </div>
                            ) : null;
                        })}
                    </div> */}
                    <span className="dark:text-light-300 mt-2">{position}</span>
                    <span className="dark:text-light-300 mt-2">{role}</span>
                    <div className="flex justify-evenly items-center mt-4">
                        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
