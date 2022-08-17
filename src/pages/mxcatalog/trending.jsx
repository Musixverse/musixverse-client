import Head from "next/head";
import { meta_description } from "../../constants";
import Marketplace from "../../components/MxCatalog/Utils/Marketplace";

export default function Trending() {
	return (
		<>
			<Head>
				<title>Musixverse | Trending</title>
				<meta name="description" content={meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Marketplace />
		</>
	);
}
