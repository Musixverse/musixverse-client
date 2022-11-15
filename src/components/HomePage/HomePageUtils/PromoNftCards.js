import Image from "next/image";
import Link from "next/link";
import PromoCountdown from "./PromoCountdown";

/*
    To do:
    1. Change notification to play
    2. connect audio player
    3. add navigation to track info

*/


export default function PromoNftCard(){
    const obj = {
        artistName: "Harry Arora",
        trackName: "कभी सोचा नहीं था",
        artistPicURL: "/assets/homepage/harryPic.png",
        countdownTime: undefined,
        price: 0.03,
        audioURL: "",
        isArtistVerified: true,
        trackId: "",
        tokenId: "",
        nftCoverArt: "",
    }

    const tokenId = 17;

    return(
        <div className="bg-[#2d2d2dfb] rounded-3xl flex flex-col p-4">
            {/* NFT details and CTA */}
            <div className="flex justify-between">
                {/* Cover art */}
                <div className="flex">
                    <div className="w-[59px] lg:w-[83px] xl:w-[99px] 2xl:w-[107px] relative aspect-square rounded-xl overflow-hidden">
                        <Image src={"/assets/homepage/harryPic.png"} layout="fill" objectFit="contain" priority alt=""/>
                    </div>
                    {/* Artist credential */}
                    <div className="self-end ml-4 xl:ml-7">
                        <p className="font-medium text-[#868686] text-xs lg:text-lg xl:text-xl 2xl:text-2xl lg:mb-2">Harry Arora</p>
                        <h5 className="text-lg font-semibold lg:text-2xl xl:text-3xl 2xl:text-4xl">कभी सोचा नहीं था</h5>
                    </div>
                </div>
                <button className="flex items-center justify-center self-start backdrop-blur-[40px] backdrop-brightness-150 lg:w-fit lg:h-fit w-[27px] h-[27px] lg:py-4 lg:px-[18px] rounded-full lg:rounded-3xl"><i className="text-white fas fa-bell lg:text-base text-[8px]"></i></button>
                {/* <button className="self-start bg-[rgba(64,63,63,1)] py-4 px-[18px] rounded-3xl"><i className="text-white fas fa-bell"></i></button> */}
            </div>
            {/* Need Conditional Rendering of this part */}
            <div className="backdrop-blur-[40px] backdrop-brightness-125 bg-[rgba(56,55,55,1)] p-2 lg:p-4 mt-4 xl:mt-7 rounded-lg lg:rounded-2xl drop-timer flex flex-col">
            {/* <div className="bg-[rgba(56,55,55,1)] p-4 mt-7 rounded-2xl drop-timer flex flex-col"> */}
                <p className="text-[8px] lg:text-sm font-medium">New Drop Coming soon</p>
                <div className="flex justify-between w-full">
                    {/* Countdown */}
                    {!obj.countdownTime?
                        <PromoCountdown/>
                        :
                        <div className="flex flex-1 mt-2 space-x-2">
                            <button className="flex items-center justify-center border-[3px] rounded-xl aspect-square border-primary-500">
                                <i className="text-2xl fas fa-play"></i>
                            </button>
                            <Link href={`/track/polygon/${tokenId}`} passHref>
                                <button className="px-8 py-2 text-2xl font-semibold rounded-xl w-max bg-primary-500 hover:bg-primary-400 text-dark-300">Buy Now</button>
                            </Link>
                        </div>
                    }

                    {/* Price */}
                    <div className="flex flex-col self-end ml-5 lg:ml-10 xl:ml-0">
                        <p className="text-[9px] lg:text-base text-right font-semibold text-[#868686]">Price</p>
                        <div className="flex items-center">
                            <Image src={"/assets/matic-logo.svg"} width={20} height={20} alt="matic logo" />
                            <p className="ml-2 text-lg font-semibold lg:text-3xl 2xl:text-4xl">0.03</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}