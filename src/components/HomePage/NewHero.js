import PromoNftCard from "./HomePageUtils/PromoNftCards";
import dynamic from "next/dynamic";
import Image from "next/image";
// import Carousel from "react-spring-3d-carousel";
// import { Carousal } from "3d-react-carousal";

const Carousel = dynamic(
    () => import("./HomePageUtils/PromoCarousel"),
    {
      ssr: false,
    }
);

export default function NewHero(){
    // console.log(YourComponent);
    const slides = [
        <div key={1} className="backdrop-blur-[40px] backdrop-brightness-200 rounded-3xl flex flex-col p-4">
            {/* NFT details and CTA */}
            <div className="flex justify-between">
                {/* Cover art */}
                <div className="w-[107px] relative aspect-square rounded-xl overflow-hidden">
                    <Image src={"/assets/homepage/harryPic.png"} layout="fill" objectFit="contain" alt=""/>
                </div>
                {/* Artist credential */}
                <div className="self-end mx-7">
                    <p className="font-medium text-[#868686] text-2xl mb-2">Harry Arora</p>
                    <h5 className="text-4xl font-semibold">कभी सोचा नहीं था</h5>
                </div>

                <button className="self-start bg-[rgba(64,63,63,1)] py-4 px-[18px] rounded-3xl"><i className="text-white fas fa-bell"></i></button>
            </div>
            {/* Need Conditional Rendering of this part */}
            <div className="bg-[rgba(56,55,55,1)] p-4 mt-7 rounded-2xl drop-timer flex flex-col">
                <p className="text-sm font-medium">New Drop Coming soon</p>
                <div className="flex justify-between w-full">
                    {/* Countdown */}
                    <div className="flex mt-2 space-x-2">
                        <div className="w-[54px] rounded-lg h-[52px] bg-[rgb(77,76,77)] flex flex-col items-center justify-center">
                            <h6 className="text-2xl font-semibold">31</h6>
                            <p className="font-medium text-[8px]">Days</p>
                        </div>
                        <div className="w-[54px] h-[52px] rounded-lg bg-[rgb(77,76,77)] flex flex-col items-center justify-center">
                            <h6 className="text-2xl font-semibold">02</h6>
                            <p className="font-medium text-[8px]">Hours</p>
                        </div>
                        <div className="w-[54px] h-[52px] rounded-lg bg-[rgb(77,76,77)] flex flex-col items-center justify-center">
                            <h6 className="text-2xl font-semibold">15</h6>
                            <p className="font-medium text-[8px]">Minutes</p>
                        </div>
                        <div className="w-[54px] h-[52px] rounded-lg bg-[rgb(77,76,77)] flex flex-col items-center justify-center">
                            <h6 className="text-2xl font-semibold">21</h6>
                            <p className="font-medium text-[8px]">Seconds</p>
                        </div>
                    </div>

                    {/* PRice */}
                    <div className="flex flex-col self-end">
                        <p className="text-right font-semibold text-[#868686]">Price</p>
                        <div className="flex items-center">
                            <Image src={"/assets/matic-logo.svg"} width={36} height={36} alt="matic logo" />
                            <p className="ml-2 text-4xl font-semibold">0.03</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        <div key={1} className="backdrop-blur-[40px] backdrop-brightness-200 rounded-3xl flex flex-col p-4">
        {/* NFT details and CTA */}
        <div className="flex justify-between">
            {/* Cover art */}
            <div className="w-[107px] relative aspect-square rounded-xl overflow-hidden">
                <Image src={"/assets/homepage/harryPic.png"} layout="fill" objectFit="contain" alt=""/>
            </div>
            {/* Artist credential */}
            <div className="self-end mx-7">
                <p className="font-medium text-[#868686] text-2xl mb-2">Harry Arora</p>
                <h5 className="text-4xl font-semibold">कभी सोचा नहीं था</h5>
            </div>

            <button className="self-start bg-[rgba(64,63,63,1)] py-4 px-[18px] rounded-3xl"><i className="text-white fas fa-bell"></i></button>
        </div>
        {/* Need Conditional Rendering of this part */}
        <div className="bg-[rgba(56,55,55,1)] p-4 mt-7 rounded-2xl drop-timer flex flex-col">
            <p className="text-sm font-medium">New Drop Coming soon</p>
            <div className="flex justify-between w-full">
                {/* Countdown */}
                <div className="flex mt-2 space-x-2">
                    <div className="w-[54px] rounded-lg h-[52px] bg-[rgb(77,76,77)] flex flex-col items-center justify-center">
                        <h6 className="text-2xl font-semibold">31</h6>
                        <p className="font-medium text-[8px]">Days</p>
                    </div>
                    <div className="w-[54px] h-[52px] rounded-lg bg-[rgb(77,76,77)] flex flex-col items-center justify-center">
                        <h6 className="text-2xl font-semibold">02</h6>
                        <p className="font-medium text-[8px]">Hours</p>
                    </div>
                    <div className="w-[54px] h-[52px] rounded-lg bg-[rgb(77,76,77)] flex flex-col items-center justify-center">
                        <h6 className="text-2xl font-semibold">15</h6>
                        <p className="font-medium text-[8px]">Minutes</p>
                    </div>
                    <div className="w-[54px] h-[52px] rounded-lg bg-[rgb(77,76,77)] flex flex-col items-center justify-center">
                        <h6 className="text-2xl font-semibold">21</h6>
                        <p className="font-medium text-[8px]">Seconds</p>
                    </div>
                </div>

                {/* PRice */}
                <div className="flex flex-col self-end">
                    <p className="text-right font-semibold text-[#868686]">Price</p>
                    <div className="flex items-center">
                        <Image src={"/assets/matic-logo.svg"} width={36} height={36} alt="matic logo" />
                        <p className="ml-2 text-4xl font-semibold">0.03</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    ];
    return (
        <div className="flex items-center justify-between w-full">
            {/* Left Section */}
            <div className="flex flex-col">
                <h1 className="font-semibold text-[4rem] text-[#54B902]">Create. Collect. Trade.</h1>
                <h1 className="font-semibold text-[4.5rem]">Music Like Never <br/> Before</h1>
                {/* CTAs */}
                <div className="flex items-center mt-16 space-x-5">
                    <button className="bg-[#707070] text-center border-[2px] border-[#707070] text-lg rounded-3xl px-14 py-2">CTA HERE 1</button>
                    <button className="bg-none text-lg rounded-3xl text-center px-14 py-2 border-[2px] border-[#62D801]">CTA HERE 2</button>
                </div>
            </div>
            {/* Data needed:
                1. Artist name
                2. Is artist verfied
                3. Drop name
                4. release date if any
                5. nft cover
                6. Price
            */}
            {/* Right Section */}
            
            {/* <PromoNftCard/> */}
            {/* <Carousal></Carousal> */}
            <Carousel/>
            {/* <Carousal slides={slides} autoplay={true} interval={1000}/> */}
        </div>
    );
}