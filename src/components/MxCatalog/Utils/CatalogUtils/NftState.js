import HorizontalRuler from "../../../../layout/HorizontalRuler";
import ToggleButton from "../../../../layout/ToggleButton/ToggleButton";

export default function NftState({ appliedFilter, setAppliedFilter }) {
	return (
		<div className="flex w-[657px] flex-col mt-8 max-h-[425px] overflow-y-scroll">
			<h5 className="text-lg font-bold font-secondary">Filter based on NFT State</h5>
			<p className="font-secondary text-[#7F7F7F] text-[15px]">Show NFTs based on these traits</p>
			<HorizontalRuler />

			<div className="flex items-center justify-between my-2">
				<p className="font-secondary">Is Verified</p>
				<ToggleButton toggleState={appliedFilter.verifiedOnly} toggleType={"VERIFIED"} setToggleState={setAppliedFilter} />
			</div>
			<HorizontalRuler />

			<div className="flex items-center justify-between my-2">
				<p className="font-secondary">Has Splits</p>
				<ToggleButton toggleState={appliedFilter.hasSplits} toggleType={"HASSPLITS"} setToggleState={setAppliedFilter} />
			</div>
			<HorizontalRuler />

			<div className="flex items-center justify-between my-2">
				<p className="font-secondary">Has Vocals</p>
				<ToggleButton toggleState={appliedFilter.vocals} toggleType={"VOCALS"} setToggleState={setAppliedFilter} />
			</div>
			<HorizontalRuler />

			<div className="flex items-center justify-between my-2">
				<p className="font-secondary">Has Lyrics</p>
				<ToggleButton toggleState={appliedFilter.lyrics} toggleType={"LYRICS"} setToggleState={setAppliedFilter} />
			</div>
		</div>
	);
}
