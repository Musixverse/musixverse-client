import { useState, useEffect } from "react";
import Head from "next/head";
import { useTheme } from "next-themes";
import { title_main_page, meta_description } from "../config/constants";
import LoadingSection from "../layout/Loading/LoadingSection";
import LoadingSectionDark from "../layout/Loading/LoadingSectionDark";
import Moralis from "moralis/node";
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
import { PARSE_APP_ID, PARSE_SERVER_URL } from "../config/constants";

export async function getStaticProps() {
	await Moralis.start({ serverUrl: PARSE_SERVER_URL, appId: PARSE_APP_ID });

	// Fetch token details
	const _tracks = await Moralis.Cloud.run("fetchTracksForHeroSection");
	const tracks = JSON.parse(JSON.stringify(_tracks));

	// Passing data to the page using props
	return {
		props: { tracks },
		revalidate: 10,
	};
}

function Home({ tracks }) {
	const [mounted, setMounted] = useState(false);
	const { theme } = useTheme();
	const [image, setImmg] = useState(undefined);

	useEffect(() => {
		setMounted(true);
	}, []);
	return (
		<>
			<Head>
				<title>{title_main_page}</title>
				<meta name="description" content={meta_description} />
			</Head>

			{mounted ? (
				<div className="relative flex flex-col items-center justify-center bg-light-200 dark:bg-dark-800">
					{/* <Banner /> */}
					{/* <HeroSection /> */}
					<div className="flex flex-col w-full max-w-[1920px] px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
						<NewHero tracks={tracks} />
						<TopArtists />
						<ShareAndEarn />
						<GetStartedArtist />
						<GetStartedFan />
						{/* <GetStartedAsArtist/> */}
						{/* <GetStartedAsFan/> */}
						{/* <Section2New /> */}
						{/* <Section2 /> */}
						{/* <Section3 /> */}
					</div>
					<NewsLetter />
					{/* <Section4 /> */}
				</div>
			) : theme === "dark" ? (
				<LoadingSectionDark />
			) : (
				<LoadingSection />
			)}
		</>
	);
}

export default Home;
