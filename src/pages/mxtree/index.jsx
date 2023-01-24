import Head from "next/head";
import { meta_description } from "../../config/constants";
import MxTree from "../../components/MxTree/MxTree";

const Mxtree = ({}) => {
	return (
		<>
			<Head>
				<title>Musixverse | MxTree</title>
				<meta name="description" content={meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-800">
				<div className="w-full max-w-[1920px] py-36 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
					<MxTree />
				</div>
			</div>
		</>
	);
};

export default Mxtree;
