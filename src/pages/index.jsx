import Head from "next/head";
import { title_main_page, meta_description } from "../constants";
import Banner from "../components/HomePage/HomePageBanner";
import Section2 from "../components/HomePage/HomePage_section3";
import Section3 from "../components/HomePage/HomePage_section4";
import Section4 from "../components/HomePage/HomePage_section5";
import Section2New from "../components/HomePage/HomePageSection2";
import TopArtist from "../components/NewHomePage/TopArtist";

function Home() {
	return (
		<>
			<Head>
				<title>{title_main_page}</title>
				<meta name="description" content={meta_description} />
			</Head>

			<div className="relative flex flex-col items-center justify-center bg-light-200 dark:bg-dark-200">
				<Banner />
				<div className="flex flex-col w-full max-w-[1920px] px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
					<Section2New />
					<TopArtist />
					<Section2 />
					<Section3 />
				</div>
				<Section4 />
			</div>
		</>
	);
}

export default Home;
