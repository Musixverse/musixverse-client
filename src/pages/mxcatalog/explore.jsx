import Head from "next/head";
import Moralis from "moralis/node";
import { meta_description, PARSE_APP_ID, PARSE_SERVER_URL } from "../../config/constants";
import Marketplace from "../../components/MxCatalog/Utils/Marketplace";

export async function getStaticProps(context) {
	await Moralis.start({ serverUrl: PARSE_SERVER_URL, appId: PARSE_APP_ID });
	// Empty filters just because we need to pass appliedFilter as a param to Moralis cloud function
	const appliedFilter = {
		trackOrigin: "",
		recordingYear: "",
		genre: "",
		language: "",
		duration: "",
		numberOfCollaborators: "",
		tags: "",
		parentalAdvisory: "",
		status: "",
		countryOfOrigin: "",
		stateOfOrigin: "",
		cityOfOrigin: "",
		numberOfCopies: "",
		resaleRoyaltyPercent: "",

		verifiedOnly: false,
		hasSplits: false,
		hasVocals: false,
		hasLyrics: false,

		sortingFilter: "dateNewest",
	};
	const tracksWhoseCopiesAreSoldOnce = (await Moralis.Cloud.run("fetchTracksWhoseCopiesAreSoldOnce", { appliedFilter: appliedFilter })) ?? false;

	// Passing data to the Page using props
	return {
		props: { tracksWhoseCopiesAreSoldOnce },
		revalidate: 10,
	};
}

export default function Explore({ tracksWhoseCopiesAreSoldOnce }) {
	return (
		<>
			<Head>
				<title>Musixverse | Explore</title>
				<meta name="description" content={meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Marketplace tracks={tracksWhoseCopiesAreSoldOnce} />
		</>
	);
}
