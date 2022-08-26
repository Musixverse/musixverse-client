import HorizontalRuler from "../../../../layout/HorizontalRuler";
import RadioButton from "../../../../layout/RadioButton";

export default function SortBy({ appliedFilter, setAppliedFilter, setCurrentFilterType, currentSelection }) {
	const sortByArray = ["Date Listed: Newest", "Date Listed: Oldest", "Price: High to Low", "Price: Low to High", "Date Sold: Newest", "Date Sold: Oldest"];
	return (
		<div className="flex w-[657px] flex-col mt-8 max-h-[425px] overflow-y-scroll">
			<h5 className="text-lg font-bold font-secondary">Sort by</h5>
			<p className="font-secondary text-[#7F7F7F] text-[15px]">Sort NFTs based on Price or Date </p>
			<HorizontalRuler />

			<p className="mt-4 font-secondary">Date Listed</p>
			<RadioButton
				radioState={appliedFilter.sortingFilter}
				setRadioState={setAppliedFilter}
				radioType={"SORTINGFILTER"}
				radioId1={"dateNewest"}
				radioId2={"dateOldest"}
				radioLabel1={"Newest First"}
				radioLabel2={"Oldest First"}
				setCurrentFilterType={setCurrentFilterType}
			/>
			<HorizontalRuler />

			<p className="mt-4 font-secondary">Price</p>
			<RadioButton
				radioState={appliedFilter.sortingFilter}
				setRadioState={setAppliedFilter}
				radioType={"SORTINGFILTER"}
				radioId1={"priceHighest"}
				radioId2={"priceLowest"}
				radioLabel1={"High to Low"}
				radioLabel2={"Low to High"}
				setCurrentFilterType={setCurrentFilterType}
			/>

			{currentSelection === 2 && (
				<>
					<HorizontalRuler />

					<p className="mt-4 font-secondary">Date Sold</p>
					<RadioButton
						radioState={appliedFilter.sortingFilter}
						setRadioState={setAppliedFilter}
						radioType={"SORTINGFILTER"}
						radioId1={"dateSoldLatest"}
						radioId2={"dateSoldOldest"}
						radioLabel1={"Latest"}
						radioLabel2={"Oldest"}
						setCurrentFilterType={setCurrentFilterType}
					/>
				</>
			)}
		</div>
	);
}
