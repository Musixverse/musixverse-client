import Statsbar from "./HomePageUtils/StatsBars";
import Image from "next/image";
import singer from "../../../public/assets/homepage/Artist_grid.png";
import styles from "../../../styles/HomePage/section2.module.css";
import bar1 from "../../../public/assets/homepage/bars_1.jpg";
import bar2 from "../../../public/assets/homepage/bars_2.jpg";
import bar3 from "../../../public/assets/homepage/bars_3.jpg";

export default function Section2New() {
    return (
        // Outer div
        <div className={"dark:bg-dark-200 " + styles["section2-container"]}>
            {/* Left Section */}
            <div className="w-full lg:w-1/2">
                <div className="mb-20 font-primary">
                    <h2 className="mb-5 text-3xl font-semibold">The Problem with Music Industry</h2>
                    <p className="font-medium">
                        In today&apos;s digital world, creating and releasing music is easier than ever but making money off it is as difficult as it has ever
                        been.
                    </p>
                </div>
                <div className="flex-col space-y-5">
                    <Statsbar
                        imageSrc={bar1}
                        statsFirst={"12%"}
                        statsLast={"AVERAGE"}
                        statsDetail={"Share of revenue goes to artists for the music they created."}
                    />
                    <Statsbar
                        imageSrc={bar2}
                        statsFirst={"NEW ARTIST"}
                        statsLast={"DISCOVERY"}
                        statsDetail={"Is increasingly difficult with hundreds of new artists releasing music every single day."}
                    />
                    <Statsbar
                        imageSrc={bar3}
                        statsFirst={"REVENUE/"}
                        statsLast={"ROYALTIES"}
                        statsDetail={"Distributed are few and far between, often come in small balances at fixed periods."}
                    />
                </div>
            </div>
            {/* Right Image Section */}
            <div className={"relative " + styles["section2-container__grid-image"]}>
                <Image src={singer} alt="singer" objectFit="contain" priority></Image>
                <a href="#section_3">
                    <button className="absolute bottom-1/4 left-[12px] md:left-[28px]">
                        <Image src="/assets/homepage/dropdown_arrow_red.svg" width={50} height={50} alt="circle dropdown"></Image>
                        {/* <img src="/assets/homepage/dropdown_arrow_red.svg" className="w-[50px] h-[50px]" alt="circle dropdown" /> */}
                    </button>
                </a>
            </div>
        </div>
    );
}