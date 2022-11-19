import PromoNftCard from "./HomePageUtils/PromoNftCards";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/HomePage/newHero.module.css";
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
                <h1 className={styles['hero-header1']}>Create. Collect. Trade.</h1>
                <h1 className={styles['hero-header2']}>Music Like Never <br/> Before</h1>
                {/* CTAs */}
                <div className="flex items-center mt-8 space-x-3 lg:space-x-5 xl:mt-16">
                    {/* <Link href={"/mxcatalog/new-releases"} passHref> */}
                        <button className="bg-primary-600 border-primary-600 dark:bg-[#707070] text-center border-[2px] dark:border-[#707070] text-white dark:text-black text-xs sm:text-sm lg:text-base xl:text-lg rounded-3xl px-7 sm:px-10 xl:px-14 py-2">Connect Wallet</button>
                    {/* </Link> */}
                    <Link href={"/mxcatalog/new-releases"} passHref>
                        <button className="bg-none text-xs sm:text-sm lg:text-base xl:text-lg rounded-3xl text-center px-7 sm:px-10 xl:px-14 py-2 border-[2px] border-[#62D801]">M<span className="text-primary-400">x</span> Catalog</button>
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