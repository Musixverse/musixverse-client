import HorizontalRuler from "../../../../layout/HorizontalRuler";
import ToggleButtonReducer from "../../../../layout/ToggleButton/ToggleButtonReducer";

export default function NftState({ appliedFilter, setAppliedFilter, setCurrentFilterType }) {
	return (
		<div className="flex lg:w-[657px] flex-col mt-8 h-3/4 lg:h-[430px] overflow-y-scroll">
			<div className="flex justify-between items-end">
				<div>
					<h5 className="text-sm font-bold lg:text-lg font-secondary">Filter based on NFT State</h5>
					<p className="font-secondary text-[#7F7F7F] text-[11px] md:text-[13px] lg:text-[15px]">Show NFTs based on these traits</p>
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

			{/* <div className="flex items-center justify-between my-2">
				<p className="font-secondary">Is Verified</p>
				<ToggleButtonReducer toggleState={appliedFilter.verifiedOnly} setToggleState={setAppliedFilter} toggleType={"VERIFIED"}  setCurrentFilterType={setCurrentFilterType}/>
			</div>
			<HorizontalRuler /> */}

			<div className="flex items-center justify-between my-2 text-sm lg:text-base">
				<p className="font-secondary">Has Splits</p>
				<ToggleButtonReducer
					toggleState={appliedFilter.hasSplits}
					setToggleState={setAppliedFilter}
					toggleType={"HASSPLITS"}
					setCurrentFilterType={setCurrentFilterType}
				/>
			</div>
			<HorizontalRuler />

			<div className="flex items-center justify-between my-2 text-sm lg:text-base">
				<p className="font-secondary">Has Vocals</p>
				<ToggleButtonReducer
					toggleState={appliedFilter.hasVocals}
					setToggleState={setAppliedFilter}
					toggleType={"VOCALS"}
					setCurrentFilterType={setCurrentFilterType}
				/>
			</div>
			<HorizontalRuler />

			<div className="flex items-center justify-between my-2 text-sm lg:text-base">
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
