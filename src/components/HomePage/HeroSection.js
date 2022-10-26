import Image from "next/image";
import traditionalSvg from "../../../public/assets/homepage/traditional_art.svg";
import artistSvg from "../../../public/assets/homepage/artist.svg";
import styles from "../../../styles/HomePage/newHeroSection.module.css";
import Countdown from "./HomePageUtils/Countdown";

export default function HeroSection() {
	return (
		<div className="flex flex-col bg-[url('/assets/homepage/heroBG.svg')] bg-no-repeat bg-cover bg-center items-center w-screen overflow-hidden text-light-200">
			<div className="w-full relative pt-[150px] flex flex-col items-center justify-center">
				{/* Intro */}
				<div className="flex flex-col items-center h-[600px] font-primary absolute z-[7] pt-[10.5rem] sm:pt-[5.5rem]">
					<h3 className="text-2xl font-medium lg:text-3xl xl:text-4xl">save the date</h3>
					<h1 className="z-[1] font-medium text-heroMobileHeading sm:text-[3rem] md:text-[4.5rem] lg:text-[6.5rem] xl:text-[8rem] leading-none">
						13th November it is
					</h1>
					<div className="absolute z-[2] w-[340px] sm:w-[457px] aspect-square top-[13rem] sm:top-[7.5rem] md:top-[8.5rem] lg:top-[11rem]">
						<Image priority objectFit="contain" src={artistSvg} alt="artist"></Image>
					</div>
					<p className="absolute text-lg sm:text-2xl text-center bottom-[5.5rem] sm:bottom-10 z-[3] max-w-[80%] sm:max-w-[548px]">
						Get ready to connect with your favorite artists like Never Before
					</p>
				</div>
				{/* Traditional Animation */}
				<div className={"relative w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] flex items-center justify-center " + styles.tradition}>
					<div className="z-[1] absolute w-[240px] sm:w-[440px] aspect-square bg-[#2e6700] rounded-full"></div>
					<div className="z-[2] absolute w-[292px] sm:w-[475px] aspect-square backdrop-blur-[40px] backdrop-brightness-[1.05] rounded-full"></div>
					<div className="z-[3] absolute w-[200px] sm:w-[360px] aspect-square bg-[#469A01] rounded-full"></div>
					<div className="z-[4] absolute w-[140px] sm:w-[260px] aspect-square bg-[#131313] rounded-full"></div>
					<Image className="z-[5] animate-slowSpin opacity-20" src={traditionalSvg} layout="fill" priority alt="traditional svg" />
					<div className="absolute w-screen z-[6] h-[693px] -bottom-40">
						<Image layout="fill" objectFit="cover" src={"/assets/homepage/traditionalLayer.svg"} alt="layer"></Image>
					</div>
					{/* <div className={"z-[6] h-1/2 w-[800px] absolute bottom-0 "+styles['traditonal-overlay']}></div> */}
				</div>
				{/* Left fireflies */}
				<div className={"z-[7] sm:z-[0] " + `${styles.firefly1} ${styles.firefly}`}></div>
				<div className={"z-[7] sm:z-[0] " + `${styles.firefly2} ${styles.firefly}`}></div>
				<div className={"z-[7] sm:block hidden " + `${styles.firefly3} ${styles.firefly}`}></div>
				<div className={"z-[7] sm:block hidden " + `${styles.firefly4} ${styles.firefly}`}></div>
				<div className={"z-[7] " + `${styles.firefly5} ${styles.firefly}`}></div>
				<div className={"z-[7] " + `${styles.firefly6} ${styles.firefly}`}></div>
				<div className={"z-[7] lg:block hidden " + `${styles.firefly7} ${styles.firefly}`}></div>

				{/* Right fireflies */}
				<div className={"z-[7] " + `${styles.fireflyR1} ${styles.firefly}`}></div>
				<div className={"z-[7] " + `${styles.fireflyR2} ${styles.firefly}`}></div>
				<div className={"z-[7] sm:block hidden " + `${styles.fireflyR3} ${styles.firefly}`}></div>
				<div className={"z-[7] sm:block hidden " + `${styles.fireflyR4} ${styles.firefly}`}></div>
				<div className={"z-[7] " + `${styles.fireflyR5} ${styles.firefly}`}></div>
				<div className={"z-[7] " + `${styles.fireflyR6} ${styles.firefly}`}></div>
				<div className={"z-[7] lg:block hidden " + `${styles.fireflyR7} ${styles.firefly}`}></div>
			</div>

			<div className="flex flex-col w-full max-w-[1920px] px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36 pb-28">
				<Countdown />
			</div>
		</div>
	);
}
