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
        <div className="flex items-center justify-between w-full">
            {/* Left Section */}
            <div className="flex flex-col">
                <h1 className="font-semibold text-[4rem] text-[#54B902]">Create. Collect. Trade.</h1>
                <h1 className="font-semibold text-[4.5rem]">Music Like Never <br/> Before</h1>
                {/* CTAs */}
                <div className="flex items-center mt-16 space-x-5">
                    {/* <Link href={"/mxcatalog/new-releases"} passHref> */}
                        <button className="bg-[#707070] text-center border-[2px] border-[#707070] text-lg rounded-3xl px-14 py-2">Sign up</button>
                    {/* </Link> */}
                    <Link href={"/mxcatalog/new-releases"} passHref>
                        <button className="bg-none text-lg rounded-3xl text-center px-14 py-2 border-[2px] border-[#62D801]">M<span className="text-primary-400">x</span> Catalog</button>
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