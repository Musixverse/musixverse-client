import Head from "next/head";
import { useReducer, useState } from "react";
import { meta_description } from "../../constants";
import CatalogBody from "../../components/MxCatalog/Utils/CatalogBody";
import CatalogNav from "../../components/MxCatalog/Utils/CatalogNav";

const reducer = (state, action) => {
	switch (action.type) {
		case "GENRE":
			return { ...state, genre: action.selectedChoice };
		case "LANGUAGE":
			return { ...state, language: action.selectedChoice };
		case "DURATION":
			return { ...state, duration: action.selectedChoice };
		case "NUMCOLLAB":
			return { ...state, numberOfCollborators: action.selectedChoice };
		case "TAGS":
			return { ...state, tags: action.selectedChoice };
		case "PARENTALADV":
			return { ...state, parentalAdvisory: action.selectedChoice };
		case "STATUS":
			return { ...state, status: action.selectedChoice };
		case "COUNTRYOFORIGIN":
			return { ...state, countryOfOrigin: action.selectedChoice };
		case "NUMCOPIES":
			return { ...state, numberOfCopies: action.selectedChoice };
		case "RESALEROYALTY":
			return { ...state, resaleRoyalty: action.selectedChoice };
		case "VOCALS":
			return { ...state, vocals: action.selectedChoice };
		case "VERIFIED":
			return { ...state, verifiedOnly: action.selectedChoice };
		case "HASSPLITS":
			return { ...state, hasSplits: action.selectedChoice };
		case "LYRICS":
			return { ...state, lyrics: action.selectedChoice };
		case "PRICE":
			return { ...state, price: action.selectedChoice };
		case "DATE":
			return { ...state, date: action.selectedChoice };
		default:
			return state;
	}
};

export default function Explore() {
	// Will be maintaining a state here for the type of marketplace (currentSelection (Integer))
	// Initially set to load the newly released nfts first
	const [currentSelection, setCurrentSelection] = useState(1);
	const [appliedFilter, dispatch] = useReducer(reducer, {
		genre: "",
		language: "",
		duration: "",
		numberOfCollborators: "",
		tags: "",
		parentalAdvisory: "",
		status: "",
		countryOfOrigin: "",
		numberOfCopies: "",
		resaleRoyalty: "",

		vocals: false,
		hasSplits: false,
		verifiedOnly: false,
		lyrics: false,

		price: true,
		date: true,
	});

	return (
		<>
			<Head>
				<title>Musixverse | Explore</title>
				<meta name="description" content={meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<CatalogNav {...{ currentSelection, setCurrentSelection }} />

			{/* Main Catalog Body */}
			<CatalogBody currentSelection={currentSelection} appliedFilter={appliedFilter} setAppliedFilter={dispatch} />
		</>
	);
}
