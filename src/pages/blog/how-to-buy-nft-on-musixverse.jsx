import Blog from "@/components/Blog/BlogPages/buy-nft";
import Head from "next/head";
import { meta_description } from "@/config/constants";

const HowToBuyNFT = ({}) => {
	return (
		<>
			<Head>
				<title>Musixverse | How to buy NFT on Musixverse?</title>
				<meta name="description" content={meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-800">
				<div className="overflow-x-hidden justify-center w-full max-w-[768px] px-6 md:px-8 lg:px-0">
					<Blog />
				</div>
			</div>
		</>
	);
};

export default HowToBuyNFT;
