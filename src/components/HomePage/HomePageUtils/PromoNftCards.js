import Image from "next/image";
import Link from "next/link";
import PromoCountdown from "./PromoCountdown";
import AudioPlayerContext from "@/store/audioplayer-context";
import { useContext } from "react";
import { useMoralis } from "react-moralis";
/*
    To do:
    1. Change notification to play
    2. connect audio player
    3. add navigation to track info

*/


export default function PromoNftCard({
    artist,
    price,
    title,
    artwork,
    tokenId,
    audio,
    trackId
}){
	const { Moralis } = useMoralis();
	const [audioPlayerProps, setAudioPlayerProps] = useContext(AudioPlayerContext);
	const audioPlayerTrackId = audioPlayerProps.currentlyPlayingIdx === -1 ? undefined : audioPlayerProps.queue[audioPlayerProps.currentlyPlayingIdx].trackId;


    const obj = {
        artistName: artist,
        trackName: title,
        artwork,
        countdownTime: undefined,
        price: Moralis.Units.FromWei(price),
        isArtistVerified: true,
        tokenId,
    }

    const playTrackHandler = () => {
		//If same song is played again then dont add again
		//Instead need a logic to pause it in the audioplayer...
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
				artistName: artist,
				isArtistVerified: true,
				songName: title,
				nftCover: artwork,
				trackId: trackId,
			});
			return {
				...prevProps,
				queue: newQueue,
				currentlyPlayingIdx: newQueue.length-1,
				playerIsLoaded: false,
			};
		});
	};

    return(
        <div className="bg-light-100 dark:bg-[#2d2d2d] rounded-3xl flex flex-col p-3 w-[300px] sm:w-[340px] lg:w-[380px] h-[216px]">
            {/* NFT details */}
            <div className="flex justify-between">
                {/* Cover art */}
                <div className="flex">
                    <div className="w-[59px] lg:w-[88px] relative aspect-square rounded-xl overflow-hidden">
                        <Image src={obj.artwork} layout="fill" objectFit="contain" priority alt=""/>
                    </div>
                    {/* Artist credential */}
                    <div className="self-center ml-4 xl:ml-7">
                        <p className="font-medium text-[#868686] text-xs lg:text-base">{obj.artistName}</p>
                        <h5 className="text-lg font-semibold lg:text-2xl">{obj.trackName}</h5>
                    </div>
                </div>
            </div>
            {/* CTA AND PRICE */}
            <div className="backdrop-blur-[40px] backdrop-brightness-125 bg-light-300 dark:bg-[rgba(56,55,55,1)] p-3 mt-auto rounded-lg lg:rounded-2xl flex justify-between items-start">
                {/* CARD CTA */}
                <div className="flex flex-col">
                    <p className="text-[8px] lg:text-sm font-medium">View more</p>
                    <div className="flex justify-between w-full">
                        {/* Countdown */}
                        {obj.countdownTime !== undefined?
                            <PromoCountdown/>
                            :
                            <div className="flex flex-1 mt-2 space-x-2">
                                <button onClick={playTrackHandler} className="flex w-[36px] h-[36px] items-center justify-center border-[3px] rounded-xl border-primary-500">
                                    <i className={"text-lg fas " + (audioPlayerProps.isPlaying && trackId === audioPlayerTrackId ? "fa-pause" : "fa-play")}></i>
                                </button>
                                <Link href={`/track/polygon/${tokenId}`} passHref>
                                    <button className="text-lg font-semibold px-7 rounded-xl w-max bg-primary-500 hover:bg-primary-400 text-dark-300">Buy Now</button>
                                </Link>
                            </div>
                        }
                    </div>
                </div>
                {/* PRICE */}
                <div className="flex flex-col ml-5 lg:ml-10 xl:ml-0">
                        <p className="text-[9px] lg:text-base text-right font-semibold text-[#868686]">Price</p>
                        <div className="flex items-center mt-2">
                            <Image src={"/assets/matic-logo.svg"} width={20} height={20} alt="matic logo" />
                            <p className="ml-2 text-lg font-semibold lg:text-3xl">{obj.price}</p>
                        </div>
                    </div>
            </div>
        </div>
    );
}