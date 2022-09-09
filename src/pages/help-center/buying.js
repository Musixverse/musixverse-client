import Head from "next/head";
import { meta_description } from "../../constants";
import Buying from "../../components/HelpCenter/Buy";

const BuyingNFT = ({}) => {
	return (
		<>
			<Head>
				<title>Help Center | Buying NFT</title>
				<meta name="description" content={meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-200">
				<div className="w-full max-w-[1920px] px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
					<Buying />
				</div>
			</div>
		</>
	);
};

export default BuyingNFT;
