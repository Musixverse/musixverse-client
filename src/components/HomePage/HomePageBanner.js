import styles from "../../../styles/HomePage/heroSection.module.css";
import { useTheme } from "next-themes";
import StayInLoop from "./HomePageUtils/StayInLoop";
import Image from "next/image";
import lightBanner from "../../../public/assets/homepage/home_light.png";
import darkBanner from "../../../public/assets/homepage/home_dark.png";

export default function Banner() {
	const { theme } = useTheme();
	return (
		/* Outer div for bg blur */
		<div className={styles["hero-section-container"]}>
			{/* "bg-[url('/assets/homepage/desk.png')] bg-cover bg-no-repeat bg-center " */}
			{/* For bg image */}
			<div className={styles["background-div"]}>
				<video
					src={theme === "dark" ? "/assets/homepage/dark_video.mp4" : "/assets/homepage/light_video_layered.mp4"}
					className="hidden object-cover w-full h-full md:block"
					loop
					muted
					autoPlay
					playsInline
				></video>
				<video
					src={theme === "dark" ? "/assets/homepage/dark_video_mobile.mp4" : "/assets/homepage/light_video_mobile.mp4"}
					className="block object-cover w-full h-full md:hidden"
					loop
					muted
					autoPlay
					playsInline
				></video>
				{/* <div className="md:hidden">
                    <Image 
                        src={
                            theme === "dark" ? 
                            darkBanner : lightBanner
                        } 
                        alt="banner image"
                        objectFit="cover"
                        layout="fill"
                        priority
                    ></Image>
                </div> */}
				{/* <img
                    src={theme === "dark" ? "/assets/homepage/home_dark.png" : "/assets/homepage/home_light.png"}
                    className={"md:hidden w-full h-full object-cover"}
                    alt="background image"
                ></img> */}
			</div>
			{/* <div className="mt-8"> */}
			{/* Inner div for content */}
			<div className={"text-white dark:text-white mt-52 " + styles["hero-section-container__content-div"]}>
				<h1 className={styles["hero-section-container__content-div--heading"]}>
					Musixverse <span className={"text-primary-100 " + styles["hero-section-container__content-div--heading"]}>Beta</span> is now live!
				</h1>
				<p className={styles["hero-section-container__content-div--description"]}>
					Musixverse will bring together artists and fans like never before, help them do great things, and empower each other in the process.
				</p>
				<a
					className="px-5 py-3 text-xs text-center text-white bg-primary-200 hover:bg-primary-300 font-primary rounded-3xl"
					href="https://cfbmusixverse.paperform.co/"
					target={"_blank"}
					rel="noopener noreferrer"
				>
					Join the Insider Community to get beta access
				</a>
			</div>
			<StayInLoop />
			{/* </div> */}
		</div>
	);
}
