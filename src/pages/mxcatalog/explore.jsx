import Head from "next/head";
import { meta_description } from "../../constants";
import Marketplace from "../../components/MxCatalog/Utils/Marketplace";

export async function getStaticProps(context) {
	// Passing data to the Page using props
	return {
		props: {},
		revalidate: 10,
	};
}

export function getStaticPaths() {
	return {
		paths: [],
		fallback: "blocking",
	};
}

export default function Explore() {
	return (
		<>
			<Head>
				<title>Musixverse | Explore</title>
				<meta name="description" content={meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Marketplace />
		</>
	);
}
