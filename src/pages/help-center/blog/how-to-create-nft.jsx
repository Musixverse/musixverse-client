import Head from "next/head";
import { meta_description } from "@/config/constants";
import HelpCenterHeading from "@/components/HelpCenter/utils/HelpCenterHeading";
import Create_Blog from "@/components/HelpCenter/blogs/HowToCreate";

const CreateNFT_b = ({}) => {
	return (
		<>
			<Head>
				<title>Help Center | How To Create An NFT?</title>
				<meta name="description" content={meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-800">
				<div className="w-full max-w-[1920px] py-36 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
					<HelpCenterHeading />
					<Create_Blog />
				</div>
			</div>
		</>
	);
};

export default CreateNFT_b;
