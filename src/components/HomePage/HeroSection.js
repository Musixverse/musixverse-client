import Image from "next/image";
import traditionalSvg from "../../../public/assets/homepage/newOne.svg";
import artistSvg from "../../../public/assets/homepage/artist.svg";
import styles from "../../../styles/HomePage/newHeroSection.module.css";
import Countdown from "./HomePageUtils/Countdown";

export default function HeroSection(){
    return(
        <div className="w-screen overflow-hidden text-light-200">
            <div className="w-full relative bg-[#131313] pt-[150px] flex flex-col items-center justify-center">
                {/* Intro */}
                <div className="flex flex-col items-center h-[600px] font-primary absolute z-[7] pt-[5.5rem]">
                    <h3 className="text-2xl font-medium lg:text-3xl xl:text-4xl">save the date, for your music</h3>
                    <h1 className="z-[1] font-medium text-[7.25rem] lg:text-[7.75rem] xl:text-[9.125rem] leading-none">24 October it is</h1>
                    <div className="absolute z-[2] w-[457px] h-[457px] top-[9.25rem] lg:top-[10rem]">
                        <Image priority objectFit="contain" src={artistSvg} alt="artist"></Image>
                    </div>
                    <p className="absolute text-2xl text-center bottom-10 z-[3]">This Diwali connect with your favorite Artists<br/>Like Never Before</p>
                </div>
                {/* Traditional Animation */}
                <div className={"relative w-[600px] h-[600px] flex items-center justify-center "+styles.tradition}>
                    <div className="z-[1] absolute w-[440px] aspect-square bg-[#2e6700] rounded-full"></div>
                    <div className="z-[2] absolute w-[492px] aspect-square backdrop-blur-[40px] backdrop-brightness-[.7] rounded-full"></div>
                    <div className="z-[3] absolute w-[360px] aspect-square bg-[#469A01] rounded-full"></div>
                    <div className="z-[4] absolute w-[260px] aspect-square bg-[#131313] rounded-full"></div>
                    <Image className="z-[5] animate-slowSpin" src={traditionalSvg} objectFit="cover" priority alt="traditional svg"/>
                    <div className={"z-[6] h-1/4 w-full absolute bottom-0 "+styles['traditonal-overlay']}></div>
                </div>
                {/* Left fireflies */}
                <div className={`${styles.firefly1} ${styles.firefly}`}></div>
                <div className={`${styles.firefly2} ${styles.firefly}`}></div>
                <div className={"z-10 "+`${styles.firefly3} ${styles.firefly}`}></div>
                <div className={"z-10 "+`${styles.firefly4} ${styles.firefly}`}></div>
                <div className={"z-[7] "+`${styles.firefly5} ${styles.firefly}`}></div>
                <div className={"z-[7] "+`${styles.firefly6} ${styles.firefly}`}></div>
                <div className={"z-[7] "+`${styles.firefly7} ${styles.firefly}`}></div>

                {/* Right fireflies */}
                <div className={`${styles.fireflyR1} ${styles.firefly}`}></div>
                <div className={`${styles.fireflyR2} ${styles.firefly}`}></div>
                <div className={`${styles.fireflyR3} ${styles.firefly}`}></div>
                <div className={`${styles.fireflyR4} ${styles.firefly}`}></div>
                <div className={`${styles.fireflyR5} ${styles.firefly}`}></div>
                <div className={`${styles.fireflyR6} ${styles.firefly}`}></div>
                <div className={`${styles.fireflyR7} ${styles.firefly}`}></div>
            </div>
            <div className="flex bg-[#131313] flex-col w-full max-w-[1920px] px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36 pb-20">
                <Countdown/>
            </div>
        </div>
    );
}