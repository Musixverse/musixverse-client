import Head from "next/head";
import Moralis from "moralis/node";
import { mxcatalog_meta_description, PARSE_APP_ID, PARSE_SERVER_URL } from "@/config/constants";
import Marketplace from "@/components/MxCatalog/Utils/Marketplace";

export async function getStaticProps() {
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
	const tracksWhoseAllCopiesAreNotSold = (await Moralis.Cloud.run("fetchTracksWhoseAllCopiesAreNotSold", { appliedFilter: appliedFilter })) ?? false;

	// Passing data to the Page using props
	return {
		props: { tracksWhoseAllCopiesAreNotSold },
		revalidate: 2,
	};
}

export default function NewReleases({ tracksWhoseAllCopiesAreNotSold }) {
	return (
		<>
			<Head>
				<title>Musixverse | New Releases</title>
				<meta name="description" content={mxcatalog_meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Marketplace tracks={tracksWhoseAllCopiesAreNotSold} />
		</>
	);
}
