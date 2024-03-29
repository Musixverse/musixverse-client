import Head from "next/head";
import { contactus_meta_description } from "../../config/constants";
import Contactus from "../../components/ContactUs/ContactUs";

const ContactUs = ({}) => {
	return (
		<>
			<Head>
				<title>Musixverse | Contact Us</title>
				<meta name="description" content={contactus_meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-800">
				<div className="w-full max-w-[1920px] px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
					<Contactus />
				</div>
			</div>
		</>
	);
};

export default ContactUs;
