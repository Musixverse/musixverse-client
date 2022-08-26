import HorizontalRuler from "../../../../layout/HorizontalRuler";
import ToggleButtonReducer from "../../../../layout/ToggleButton/ToggleButtonReducer";

export default function NftState({ appliedFilter, setAppliedFilter, setCurrentFilterType }) {
	return (
		<div className="flex w-[657px] flex-col mt-8 max-h-[425px] overflow-y-scroll">
			<h5 className="text-lg font-bold font-secondary">Filter based on NFT State</h5>
			<p className="font-secondary text-[#7F7F7F] text-[15px]">Show NFTs based on these traits</p>
			<HorizontalRuler />

			{/* <div className="flex items-center justify-between my-2">
				<p className="font-secondary">Is Verified</p>
				<ToggleButtonReducer toggleState={appliedFilter.verifiedOnly} setToggleState={setAppliedFilter} toggleType={"VERIFIED"}  setCurrentFilterType={setCurrentFilterType}/>
			</div>
			<HorizontalRuler /> */}

			<div className="flex items-center justify-between my-2">
				<p className="font-secondary">Has Splits</p>
				<ToggleButtonReducer
					toggleState={appliedFilter.hasSplits}
					setToggleState={setAppliedFilter}
					toggleType={"HASSPLITS"}
					setCurrentFilterType={setCurrentFilterType}
				/>
			</div>
			<HorizontalRuler />

			<div className="flex items-center justify-between my-2">
				<p className="font-secondary">Has Vocals</p>
				<ToggleButtonReducer
					toggleState={appliedFilter.hasVocals}
					setToggleState={setAppliedFilter}
					toggleType={"VOCALS"}
					setCurrentFilterType={setCurrentFilterType}
				/>
			</div>
			<HorizontalRuler />

			<div className="flex items-center justify-between my-2">
				<p className="font-secondary">Has Lyrics</p>
				<ToggleButtonReducer
					toggleState={appliedFilter.hasLyrics}
					setToggleState={setAppliedFilter}
					toggleType={"LYRICS"}
					setCurrentFilterType={setCurrentFilterType}
				/>
			</div>
		</div>
	);
}
