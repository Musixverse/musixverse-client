import Head from "next/head";
import { meta_description } from "../../constants/index";
import MarketplaceHeader from "../../components/MxCatalog/Utils/MarketplaceHeader";
import MarketplaceChooser from "../../components/MxCatalog/Utils/MarketplaceChooser";
import FilterSection from "../../components/MxCatalog/Utils/FilterSection";
import DisplayNFTs from "../../components/MxCatalog/Explore/DisplayNFTs";

const Explore = ({}) => {
	return (
		<>
			<Head>
				<title>Musixverse | Explore</title>
				<meta name="description" content={meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MarketplaceHeader />
			<MarketplaceChooser />

			<div className="w-full flex pr-24 max-w-[1920px] mx-auto pb-60 dark:bg-dark-200">
				<div className="w-full grid grid-cols-12 space-x-20">
					<FilterSection />
					<DisplayNFTs />
				</div>
			</div>
		</>
	);
};

export default Explore;
