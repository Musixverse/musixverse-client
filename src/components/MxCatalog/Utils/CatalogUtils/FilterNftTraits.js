import HorizontalRuler from "../../../../layout/HorizontalRuler";
import FilterDropdown from "./FilterDropdown";
import { countryOfOriginArray, numberOfCollaborators, numberOfCopies, nftStatus, resaleRoyalty } from "../../../../constants";
import TagsMultiSelect from "../../../CreateNFT/CreateNFTUtils/TagsMultiSelect";

export default function FilterNftTraits({ appliedFilter, setAppliedFilter, setCurrentFilterType }) {
	return (
		<div className="flex flex-col mt-8 h-[430px] overflow-y-scroll pr-10">
			<h5 className="text-lg font-bold font-secondary">Filter based on NFT Traits</h5>
			<p className="font-secondary text-[#7F7F7F] text-[15px]">Select NFT Traits such as Genre, Language and others</p>
			<HorizontalRuler />

			<div className="flex w-[657px] flex-col items-start mt-5 space-y-2 sm:flex-row sm:space-x-10 sm:space-y-0">
				{/* Can make a component of the div below */}
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">No. of Copies</p>
					<FilterDropdown
						optionsArray={numberOfCopies}
						initialValue={appliedFilter.numberOfCopies}
						setChoice={setAppliedFilter}
						dropdownType={"NUMCOPIES"}
						setCurrentFilterType={setCurrentFilterType}
					/>
				</div>
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">No. of Collaborators</p>
					<FilterDropdown
						optionsArray={numberOfCollaborators}
						initialValue={appliedFilter.numberOfCollborators}
						setChoice={setAppliedFilter}
						dropdownType={"NUMCOLLAB"}
						setCurrentFilterType={setCurrentFilterType}
					/>
				</div>
			</div>

			<div className="flex w-[657px] flex-col mt-5 space-y-2 sm:flex-row sm:space-x-10 sm:space-y-0">
				{/* Can make a component of the div below */}
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Status</p>
					<FilterDropdown
						optionsArray={nftStatus}
						initialValue={appliedFilter.status}
						setChoice={setAppliedFilter}
						dropdownType={"STATUS"}
						setCurrentFilterType={setCurrentFilterType}
					/>
				</div>
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Resale Royalty Percentage</p>
					<FilterDropdown
						optionsArray={resaleRoyalty}
						initialValue={appliedFilter.resaleRoyalty}
						setChoice={setAppliedFilter}
						dropdownType={"RESALEROYALTY"}
						setCurrentFilterType={setCurrentFilterType}
					/>
				</div>
			</div>

			<div className="flex w-[657px] flex-col mt-5 space-y-2 sm:flex-row sm:space-x-10 sm:space-y-0">
				{/* Can make a component of the div below */}
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Country Of Origin</p>
					<FilterDropdown
						optionsArray={countryOfOriginArray}
						initialValue={appliedFilter.countryOfOrigin}
						setChoice={setAppliedFilter}
						dropdownType={"COUNTRYOFORIGIN"}
						setCurrentFilterType={setCurrentFilterType}
					/>
				</div>

				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Location Created</p>
					<FilterDropdown
						optionsArray={countryOfOriginArray}
						initialValue={appliedFilter.countryOfOrigin}
						setChoice={setAppliedFilter}
						dropdownType={"COUNTRYOFORIGIN"}
						setCurrentFilterType={setCurrentFilterType}
					/>
				</div>
			</div>
		</div>
	);
}
