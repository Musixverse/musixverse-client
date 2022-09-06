import HorizontalRuler from "../../../../layout/HorizontalRuler";
import FilterDropdown from "./FilterDropdown";
import { numberOfCollaborators, numberOfCopies, nftStatus, resaleRoyaltyRanges } from "../../../../constants";
import CountriesDropdown from "./CountriesDropdown";
import StatesDropdown from "./StatesDropdown";
import CitiesDropdown from "./CitiesDropdown";

export default function FilterNftTraits({ appliedFilter, setAppliedFilter, setCurrentFilterType, currentSelection }) {
	return (
		<div className="flex flex-col mt-8 h-3/4 lg:h-[430px] pr-10 overflow-y-scroll">
			<h5 className="text-sm font-bold md:text-base lg:text-lg font-secondary">Filter based on NFT Traits</h5>
			<p className="font-secondary text-[#7F7F7F] text-[11px] md:text-[13px] lg:text-[15px]">Select NFT Traits such as no. of copies, status and others</p>
			<HorizontalRuler />

			<div className="flex flex-col lg:w-[657px] w-5/6 mt-4 space-y-2 sm:flex-row sm:space-x-10 sm:space-y-0">
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
						initialValue={appliedFilter.numberOfCollaborators}
						setChoice={setAppliedFilter}
						dropdownType={"NUMCOLLAB"}
						setCurrentFilterType={setCurrentFilterType}
					/>
				</div>
			</div>

			<div className="flex flex-col lg:w-[657px] w-5/6 mt-2 space-y-2 sm:flex-row sm:space-x-10 sm:space-y-0">
				{currentSelection === 1 ? (
					<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
						<p className="mb-1 text-sm">Status</p>
						<FilterDropdown
							optionsArray={nftStatus.filter((status) => status !== "Not on Sale")}
							initialValue={appliedFilter.status}
							setChoice={setAppliedFilter}
							dropdownType={"STATUS"}
							setCurrentFilterType={setCurrentFilterType}
						/>
					</div>
				) : (
					<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
						<p className="mb-1 text-sm">Status</p>
						<FilterDropdown
							optionsArray={nftStatus.filter((status) => status !== "Coming Soon")}
							initialValue={appliedFilter.status}
							setChoice={setAppliedFilter}
							dropdownType={"STATUS"}
							setCurrentFilterType={setCurrentFilterType}
						/>
					</div>
				)}

				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Resale Royalty Percentage</p>
					<FilterDropdown
						optionsArray={resaleRoyaltyRanges}
						initialValue={appliedFilter.resaleRoyaltyPercent}
						setChoice={setAppliedFilter}
						dropdownType={"RESALEROYALTY"}
						setCurrentFilterType={setCurrentFilterType}
					/>
				</div>
			</div>

			<div className="flex flex-col lg:w-[657px] w-5/6 mt-2 space-y-2 sm:flex-row sm:space-x-10 sm:space-y-0">
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Country Of Origin</p>
					<CountriesDropdown
						initialValue={appliedFilter.countryOfOrigin}
						setChoice={setAppliedFilter}
						dropdownType={"COUNTRYOFORIGIN"}
						setCurrentFilterType={setCurrentFilterType}
					/>
				</div>
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					{appliedFilter.countryOfOrigin !== "" && (
						<>
							<p className="mb-1 text-sm">State Of Origin</p>
							<StatesDropdown
								initialValue={appliedFilter.stateOfOrigin}
								setChoice={setAppliedFilter}
								dropdownType={"STATEOFORIGIN"}
								setCurrentFilterType={setCurrentFilterType}
								countryOfOrigin={appliedFilter.countryOfOrigin}
							/>
						</>
					)}
				</div>
			</div>

			<div className="flex flex-col lg:w-[657px] w-5/6 mt-2 space-y-2 sm:flex-row sm:space-x-10 sm:space-y-0">
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					{appliedFilter.countryOfOrigin !== "" && appliedFilter.stateOfOrigin !== "" && (
						<>
							<p className="mb-1 text-sm">City Of Origin</p>
							<CitiesDropdown
								initialValue={appliedFilter.cityOfOrigin}
								setChoice={setAppliedFilter}
								dropdownType={"CITYOFORIGIN"}
								setCurrentFilterType={setCurrentFilterType}
								countryOfOrigin={appliedFilter.countryOfOrigin}
								stateOfOrigin={appliedFilter.stateOfOrigin}
							/>
						</>
					)}
				</div>
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary"></div>
			</div>
		</div>
	);
}
