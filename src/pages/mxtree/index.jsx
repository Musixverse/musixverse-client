import Head from "next/head";
import { meta_description } from "../../config/constants";
import MxTree from "../../components/Linktree/mxtree";

const Mxtree = ({}) => {
	return (
		<>
			<Head>
				<title>Musixverse | MxTree</title>
				<meta name="description" content={meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MxTree />
		</>
	);
};

export default Mxtree;
