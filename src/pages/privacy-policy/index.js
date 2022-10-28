import Head from "next/head";
import { meta_description } from "../../constants";
import PrivacyComp from "../../components/PrivacyPolicy/PrivacyPolicy";

const PrivacyPolicy = ({}) => {
	return (
		<>
			<Head>
				<title>Musixverse | Privacy Policy</title>
				<meta name="description" content={meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-800">
				<div className="w-full max-w-[1920px] px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
					<PrivacyComp />
				</div>
			</div>
		</>
	);
};

export default PrivacyPolicy;
