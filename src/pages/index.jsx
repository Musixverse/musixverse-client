import Head from "next/head";
import { useState, useEffect } from "react";
import { title_main_page, meta_description } from "../config/constants";
import Banner from "../components/HomePage/HomePageBanner";
import Section2 from "../components/HomePage/HomePage_section3";
import Section3 from "../components/HomePage/HomePage_section4";
import Section4 from "../components/HomePage/HomePage_section5";
import Section2New from "../components/HomePage/HomePageSection2";
import HeroSection from "../components/HomePage/HeroSection";
import NewHero from "../components/HomePage/NewHero";
import TopArtists from "../components/NewHomePage/TopArtist-new";
import ShareAndEarn from "../components/HomePage/ShareAndEarn";
import GetStartedArtist from "../components/HomePage/GetStartedArtist";
import GetStartedFan from "../components/HomePage/GetStartedFan";
// import GetStartedAsArtist from "../components/HomePage/GetStartedAsArtist";
// import GetStartedAsFan from "../components/HomePage/GetStartedAsFan";
import NewsLetter from "../layout/NewsLetter";
import dynamic from "next/dynamic";
// const TopArtists = dynamic(() => import("../components/NewHomePage/TopArtist-new"), {
// 	ssr: false,
// });
// const ShareAndEarn = dynamic(() => import("../components/HomePage/ShareAndEarn"), {
// 	ssr: false,
// });
// const GetStartedArtist = dynamic(() => import("../components/HomePage/GetStartedArtist"), {
// 	ssr: false,
// });
// const GetStartedFan = dynamic(() => import("../components/HomePage/GetStartedFan"), {
// 	ssr: false,
// });

function Home() {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<>
			<Head>
				<title>{title_main_page}</title>
				<meta name="description" content={meta_description} />
			</Head>

			{mounted && (
				<div className="relative flex flex-col items-center justify-center bg-light-200 dark:bg-dark-800">
					{/* <Banner /> */}
					{/* <HeroSection /> */}
					<div className="flex flex-col w-full max-w-[1920px] px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
						<NewHero />
						<TopArtists />
						<ShareAndEarn />
						<GetStartedArtist />
						<GetStartedFan />
						{/* <GetStartedAsArtist/> */}
						{/* <GetStartedAsFan/> */}
						{/* <Section2New />
					<Section2 />
					<Section3 /> */}
					</div>
					<NewsLetter />
					{/* <Section4 /> */}
				</div>
			)}
		</>
	);
}

export default Home;
