import Head from "next/head";
import { createband_meta_description } from "@/config/constants";
import ScrollToPageTop from "@/utils/ScrollToPageTop";
import CreateBandPage from "@/components/CreateBand/CreateBandPage";

const CreateBand = () => {
	return (
		<>
			<Head>
				<title>Musixverse | Create Band</title>
				<meta name="description" content={createband_meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ScrollToPageTop samePage={true} />
			<CreateBandPage />
		</>
	);
};

export default CreateBand;
