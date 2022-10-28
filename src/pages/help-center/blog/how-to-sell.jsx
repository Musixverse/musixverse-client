import Head from "next/head";
import { meta_description } from "../../../constants";
import HelpCenterHeading from "../../../components/HelpCenter/utils/HelpCenterHeading";

const SellNFT_b = ({}) => {
	return (
		<>
			<Head>
				<title>Help Center | How To Sell NFT?</title>
				<meta name="description" content={meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-800">
				<div className="w-full max-w-[1920px] py-36 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
					<HelpCenterHeading />

					<div className="text-center mt-8 text-3xl font-primary">Coming Soon!</div>
				</div>
			</div>
		</>
	);
};

export default SellNFT_b;
