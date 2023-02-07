import Head from "next/head";
import { mxcatalog_meta_description } from "@/config/constants";
import Marketplace from "@/components/MxCatalog/Utils/Marketplace";

export default function Trending() {
	return (
		<>
			<Head>
				<title>Musixverse | Trending</title>
				<meta name="description" content={mxcatalog_meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Marketplace />
		</>
	);
}
