import HorizontalRuler from "../../../../layout/HorizontalRuler";
import FilterDropdown from "./FilterDropdown";
import { trackOriginArray, genreArray, parentalAdvisoryArray, languageArray, duration, minRecordingYear } from "../../../../constants";
import TagsMultiSelect from "../../../CreateNFT/CreateNFTUtils/TagsMultiSelect";

export default function FilterTrackTraits({ appliedFilter, setAppliedFilter, setCurrentFilterType }) {
	const recordingYearArray = [...Array(new Date().getFullYear() - minRecordingYear + 1).keys()].map((x) => new Date().getFullYear() - x);

	return (
		<div className="flex flex-col mt-8 h-3/4 lg:h-[430px] pr-10 overflow-y-scroll">
			<h5 className="text-sm font-bold md:text-base lg:text-lg font-secondary">Filter based on Track Traits</h5>
			<p className="font-secondary text-[#7F7F7F] text-[11px] md:text-[13px] lg:text-[15px]">Select Track Traits such as Genre, Language and others</p>
			<HorizontalRuler />

			<div className="flex flex-col lg:w-[657px] w-5/6 mt-4 space-y-2 sm:flex-row sm:space-x-10 sm:space-y-0">
				{/* Can make a component of the div below */}
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Track Origin</p>
					<FilterDropdown
						optionsArray={trackOriginArray}
						initialValue={appliedFilter.trackOrigin}
						setChoice={setAppliedFilter}
						dropdownType={"TRACKORIGIN"}
						setCurrentFilterType={setCurrentFilterType}
					/>
				</div>
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Recording Year</p>
					<FilterDropdown
						optionsArray={recordingYearArray}
						initialValue={appliedFilter.recordingYear}
						setChoice={setAppliedFilter}
						dropdownType={"RECORDINGYEAR"}
						setCurrentFilterType={setCurrentFilterType}
					/>
				</div>
			</div>

			<div className="flex flex-col lg:w-[657px] w-5/6 mt-2 space-y-2 lg:mt-5 sm:flex-row sm:space-x-10 sm:space-y-0">
				{/* Can make a component of the div below */}
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Genre</p>
					<FilterDropdown
						optionsArray={genreArray}
						initialValue={appliedFilter.genre}
						setChoice={setAppliedFilter}
						dropdownType={"GENRE"}
						setCurrentFilterType={setCurrentFilterType}
					/>
				</div>
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Language</p>
					<FilterDropdown
						optionsArray={languageArray}
						initialValue={appliedFilter.language}
						setChoice={setAppliedFilter}
						dropdownType={"LANGUAGE"}
						setCurrentFilterType={setCurrentFilterType}
					/>
				</div>
			</div>

			<div className="flex flex-col lg:w-[657px] w-5/6 mt-2 space-y-2 lg:mt-5 sm:flex-row sm:space-x-10 sm:space-y-0">
				{/* Can make a component of the div below */}
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Duration</p>
					<FilterDropdown
						optionsArray={duration}
						initialValue={appliedFilter.duration}
						setChoice={setAppliedFilter}
						dropdownType={"DURATION"}
						setCurrentFilterType={setCurrentFilterType}
					/>
				</div>
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Parental Advisory</p>
					<FilterDropdown
						optionsArray={parentalAdvisoryArray}
						initialValue={appliedFilter.parentalAdvisory}
						setChoice={setAppliedFilter}
						dropdownType={"PARENTALADV"}
						setCurrentFilterType={setCurrentFilterType}
					/>
				</div>
			</div>

			<div className="flex flex-col lg:w-[657px] w-5/6 mt-2 space-y-2 lg:mt-5 sm:flex-row sm:space-x-10 sm:space-y-0">
				{/* Can make a component of the div below */}
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Tags</p>
					<TagsMultiSelect
						tags={appliedFilter.tags}
						setAppliedFilter={setAppliedFilter}
						dropdownType={"TAGS"}
						setCurrentFilterType={setCurrentFilterType}
					/>
				</div>
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary"></div>
			</div>
		</div>
	);
}
