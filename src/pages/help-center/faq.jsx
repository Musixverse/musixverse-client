import Head from "next/head";
import { meta_description } from "../../constants";
import Faq from "../../components/FAQ/Faq";

const FAQs = ({}) => {
	return (
		<>
			<Head>
				<title>Help Center | FAQ</title>
				<meta name="description" content={meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-800">
				<div className="flex flex-col w-full max-w-[1920px] py-36 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
					<Faq />
				</div>
			</div>
		</>
	);
};

export default FAQs;
