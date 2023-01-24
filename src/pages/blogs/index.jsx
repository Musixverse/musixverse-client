import Head from "next/head";
import { meta_description } from "../../config/constants";

const Blogs = ({}) => {
	return (
		<>
			<Head>
				<title>Musixverse | Blog</title>
				<meta name="description" content={meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-800">
				<div className="overflow-x-hidden w-full max-w-[1920px]">
					Blog Page
				</div>
			</div>
		</>
	);
};

export default Blogs;
