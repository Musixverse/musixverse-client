import Head from "next/head";
import { meta_description } from "../../constants";
import TermsOfUse from "../../components/TermsOfUse/TermsOfUse";

const TermsAndConditions = ({}) => {
	return (
		<>
			<Head>
				<title>Musixverse | Contact Us</title>
				<meta name="description" content={meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-200">
				<div className="w-full max-w-[1920px] px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
					<TermsOfUse />
				</div>
			</div>
		</>
	);
};

export default TermsAndConditions;
