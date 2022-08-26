import Image from "next/image";
import { useRef } from "react";

export default function MemberNft({
    memberImage,
    title,
    name,
    role,
    socialLinks,
    description,
    dob,
    profileTrack,
    setShowModal,
    currentlyPlaying,
    setCurrentlyPlaying,
    idx,
    setSelectedMember,
}) {
    const playBtn = useRef(null);
    const audio = useRef(null);

    let truncatedNftName = name;
    if (name.length > 10) {
        truncatedNftName = truncatedNftName.substring(0, 8) + "...";
    }
    let truncatednftPrice = dob.substring(0, 2) + "." + dob.substring(2, 4) + " K";
    // let truncatednftPrice = dob;
    // if (dob >= 1000)
    //     truncatednftPrice = Number((dob / 1000).toFixed(2)) + " K";

    const playTrackHandler = () => {
        //Pause the currentlyPlaying track before playing any other audio
        if (currentlyPlaying !== undefined && audio.current !== currentlyPlaying.player) {
            currentlyPlaying.player.pause();
            currentlyPlaying.controller.classList.add("fa-play");
            currentlyPlaying.controller.classList.remove("fa-pause");
        }
        setCurrentlyPlaying({
            player: audio.current,
            controller: playBtn.current.children[0],
        });
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

    const resetProgress = () => {
        pauseTrack(playBtn.current.children[0]);
        audio.current.currentTime = 0;
    };

    return (
        <div>
            {/* Uploaded Art */}
            <div className="hover:cursor-pointer relative w-[222px] h-[190px] overflow-hidden rounded-t-xl">
                {/* Cover art of NFT */}
                <div
                    className="relative w-full h-full"
                    onClick={() => {
                        setShowModal(true);
                        setSelectedMember(idx);
                    }}
                >
                    <Image src={memberImage} alt="nft cover art" objectFit="cover" layout="fill" priority />
                </div>

                {/* NFT audio file */}
                <div className="z-[1] absolute bottom-0 right-0 p-2">
                    <button
                        type="button"
                        ref={playBtn}
                        onClick={playTrackHandler}
                        className="h-[40px] w-[40px] bg-primary-100 rounded-full flex items-center justify-center"
                    >
                        <i className="text-lg fas fa-play text-dark-200"></i>
                    </button>
                    <audio ref={audio} className="hidden" src={profileTrack} onEnded={resetProgress}></audio>
                </div>
            </div>
            {/* Content provided */}
            <div className="dark:bg-[#1D1D1D] bg-light-100 w-[222px] h-[120px] p-4 rounded-b-xl flex flex-col justify-between">
                <div className="flex justify-between w-full">
                    <div className="flex flex-col text-left">
                        <p className="font-secondary text-[#1D1D1D] text-xs dark:text-light-300">{title}</p>
                        <p className="font-semibold font-primary text-[#1D1D1D] dark:text-light-200 text-lg">{truncatedNftName}</p>
                    </div>
                    {truncatednftPrice && (
                        <div className="flex flex-col">
                            <p className="text-xs font-secondary text-end dark:text-light-300">Price</p>
                            <div className="flex items-center font-semibold">
                                <Image src={"/assets/matic-logo.svg"} width={16} height={16} alt="matic logo" />
                                <span className="ml-1 sm:text-lg">{truncatednftPrice == 0 ? 0 : truncatednftPrice}</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-twitter hover:text-primary-200" aria-hidden="true"></i>
                        </a>
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin hover:text-primary-200" aria-hidden="true"></i>
                        </a>
                        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github hover:text-primary-200" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className="flex items-center text-xs dark:text-light-300">
                        <span className="mr-1 text-xl material-symbols-outlined">person_pin_circle</span> India
                    </div>
                </div>
            </div>
        </div>
    );
}
