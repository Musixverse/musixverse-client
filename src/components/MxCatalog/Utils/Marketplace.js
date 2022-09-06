import { useEffect, useReducer, useState } from "react";
import CatalogBody from "./CatalogBody";
import CatalogNav from "./CatalogNav";
import MobileFilterModal from "./CatalogUtils/MobileFilterUtils/MobileFilterModal";

const reducer = (state, action) => {
	switch (action.type) {
		case "TRACKORIGIN":
			return { ...state, trackOrigin: action.selectedChoice };
		case "RECORDINGYEAR":
			return { ...state, recordingYear: action.selectedChoice };
		case "GENRE":
			return { ...state, genre: action.selectedChoice };
		case "LANGUAGE":
			return { ...state, language: action.selectedChoice };
		case "DURATION":
			return { ...state, duration: action.selectedChoice };
		case "NUMCOLLAB":
			return { ...state, numberOfCollaborators: action.selectedChoice };
		case "TAGS":
			return { ...state, tags: action.selectedChoice };
		case "PARENTALADV":
			return { ...state, parentalAdvisory: action.selectedChoice };
		case "STATUS":
			return { ...state, status: action.selectedChoice };
		case "COUNTRYOFORIGIN":
			return { ...state, countryOfOrigin: action.selectedChoice };
		case "STATEOFORIGIN":
			return { ...state, stateOfOrigin: action.selectedChoice };
		case "CITYOFORIGIN":
			return { ...state, cityOfOrigin: action.selectedChoice };
		case "NUMCOPIES":
			return { ...state, numberOfCopies: action.selectedChoice };
		case "RESALEROYALTY":
			return { ...state, resaleRoyaltyPercent: action.selectedChoice };
		case "VERIFIED":
			return { ...state, verifiedOnly: action.selectedChoice };
		case "HASSPLITS":
			return { ...state, hasSplits: action.selectedChoice };
		case "VOCALS":
			return { ...state, hasVocals: action.selectedChoice };
		case "LYRICS":
			return { ...state, hasLyrics: action.selectedChoice };
		case "SORTINGFILTER":
			return { ...state, sortingFilter: action.selectedChoice };
		default:
			return state;
	}
};

export default function Marketplace() {
	// Will be maintaining a state here for the type of marketplace (currentSelection (Integer))
	// Initially set to load the newly released nfts first
	const [currentSelection, setCurrentSelection] = useState(1);
	const [appliedFilter, dispatch] = useReducer(reducer, {
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
	});
	const [showMobileFilter, setShowMobileFilter] = useState(false);

	return (
		<>
			<MobileFilterModal {...{ showMobileFilter, setShowMobileFilter, appliedFilter, setAppliedFilter: dispatch, currentSelection }} />

			<CatalogNav {...{ currentSelection, setCurrentSelection }} />

			{/* Main Catalog Body */}
			<CatalogBody
				showMobileFilter={showMobileFilter}
				setShowMobileFilter={setShowMobileFilter}
				currentSelection={currentSelection}
				appliedFilter={appliedFilter}
				setAppliedFilter={dispatch}
			/>
		</>
	);
}
