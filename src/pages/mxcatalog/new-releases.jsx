import Head from "next/head";
import { meta_description } from "../../constants";
import Marketplace from "../../components/MxCatalog/Utils/Marketplace";

export default function NewReleases() {
	return (
		<>
			<Head>
				<title>Musixverse | New Releases</title>
				<meta name="description" content={meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Marketplace />
		</>
	);
}
