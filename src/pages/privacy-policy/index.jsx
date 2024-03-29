import Head from "next/head";
import { privacy_meta_description } from "@/config/constants";
import PrivacyComponent from "@/components/PrivacyPolicy/PrivacyPolicy";

const PrivacyPolicy = ({}) => {
	return (
		<>
			<Head>
				<title>Musixverse | Privacy Policy</title>
				<meta name="description" content={privacy_meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-800">
				<div className="w-full max-w-[768px] px-6 md:px-8 lg:px-0">
					<PrivacyComponent />
				</div>
			</div>
		</>
	);
};

export default PrivacyPolicy;
