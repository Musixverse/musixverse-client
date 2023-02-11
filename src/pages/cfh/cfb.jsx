import Head from "next/head";
import { cfh_meta_description } from "@/config/constants";
import BannerCFB from "@/components/CFB/BannerCFB";
import CFB1 from "@/components/CFB/CFB1";
import CFB4 from "@/components/CFB/CFB4";
import CFB5 from "@/components/CFB/CFB5";

const CFB = ({}) => {
	return (
		<>
			<Head>
				<title>Musixverse | Community Feedback Board</title>
				<meta name="description" content={cfh_meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-800">
				<div className="overflow-x-hidden w-full max-w-[1920px]">
					<BannerCFB />
					<CFB1 />
					<CFB4 />
					<CFB5 />
				</div>
			</div>
		</>
	);
};

export default CFB;
