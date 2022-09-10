import HorizontalRuler from "../../../../layout/HorizontalRuler";
import RadioButton from "../../../../layout/RadioButton";

export default function SortBy({ appliedFilter, setAppliedFilter, setCurrentFilterType, currentSelection }) {
	const sortByArray = ["Date Listed: Newest", "Date Listed: Oldest", "Price: High to Low", "Price: Low to High", "Date Sold: Newest", "Date Sold: Oldest"];
	return (
		<div className="flex lg:w-[657px] flex-col mt-8 h-3/4 lg:h-[430px] overflow-y-scroll">
			<div className="flex justify-between items-end">
				<div>
					<h5 className="text-sm font-bold lg:text-lg font-secondary">Sort by</h5>
					<p className="font-secondary text-[#7F7F7F] text-[11px] md:text-[13px] lg:text-[15px]">Sort NFTs based on Price or Date </p>
				</div>
				<button
					className="bg-dark-100 text-light-200 text-sm px-6 py-1 rounded"
					onClick={() => {
						setCurrentFilterType(0);
						setAppliedFilter({ type: "reset" });
					}}
				>
					Reset
				</button>
			</div>
			<HorizontalRuler />

			<p className="mt-4 text-sm font-secondary lg:text-base">Date Listed</p>
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

			<p className="mt-4 text-sm font-secondary lg:text-base">Price</p>
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

					<p className="mt-4 text-sm font-secondary lg:text-base">Date Sold</p>
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
