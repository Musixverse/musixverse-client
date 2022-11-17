import PromoNftCard from "./HomePageUtils/PromoNftCards";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
// import Carousel from "react-spring-3d-carousel";
// import { Carousal } from "3d-react-carousal";

const Carousel = dynamic(
    () => import("./HomePageUtils/PromoCarousel"),
    {
      ssr: false,
    }
);

export default function NewHero(){
    return (
        <div className="flex flex-col items-center justify-between w-full md:flex-row pt-28">
            {/* Left Section */}
            <div className="flex flex-col">
                <h1 className="font-semibold text-3xl leading-[3.5rem] lg:leading-normal lg:text-heroHeader1Lg xl:text-[3.5rem] 2xl:text-[4rem] text-[#54B902]">Create. Collect. Trade.</h1>
                <h1 className="font-semibold text-4xl leading-[3.5rem] lg:leading-normal lg:text-heroHeader2Lg xl:text-[4rem] 2xl:text-[4.5rem]">Music Like Never <br/> Before</h1>
                {/* CTAs */}
                <div className="flex items-center mt-8 space-x-3 lg:space-x-5 xl:mt-16">
                    {/* <Link href={"/mxcatalog/new-releases"} passHref> */}
                        <button className="bg-primary-600 border-primary-600 dark:bg-[#707070] text-center border-[2px] dark:border-[#707070] text-white dark:text-black text-sm lg:text-base xl:text-lg rounded-3xl px-10 xl:px-14 py-2">Sign up</button>
                    {/* </Link> */}
                    <Link href={"/mxcatalog/new-releases"} passHref>
                        <button className="bg-none text-sm lg:text-base xl:text-lg rounded-3xl text-center px-10 xl:px-14 py-2 border-[2px] border-[#62D801]">M<span className="text-primary-400">x</span> Catalog</button>
                    </Link>
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