import Head from "next/head";
import { helpcenter_meta_description } from "@/config/constants";
import Help from "@/components/HelpCenter/Help";
import HelpCenterHeading from "@/components/HelpCenter/utils/HelpCenterHeading";

const HelpCenter = ({}) => {
	return (
		<>
			<Head>
				<title>Musixverse | Help Center</title>
				<meta name="description" content={helpcenter_meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-800">
				<div className="w-full max-w-[1920px] py-36 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
					<HelpCenterHeading />
					<Help />
				</div>
			</div>
		</>
	);
};

export default HelpCenter;
