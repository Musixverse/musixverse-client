import HorizontalRuler from "../../../../layout/HorizontalRuler";
import ToggleButton from "../../../../layout/ToggleButton/ToggleButton";
import FilterDropdown from "./FilterDropdown";
import { genre , parentalAdvisory , countryOfOrigin ,trackOrigin, duration, numberOfCollaborators, numberOfCopies, nftStatus, resaleRoyalty  } from "../../../../utils/DropdownValues";

export default function FilterNftTraits({appliedFilter, setAppliedFilter}){
    const languageOptions = ["Any", "This", "Other"];
	// console.log("NFT traits: ",appliedFilter);
	// console.log(appliedFilter.genre.length);
	// const [currGenere, setCurrGenre] = useState();
	// const [currLanguage, setCurrLanguage] = useState();

    return(
        <div className="flex flex-col mt-8 max-h-[425px] overflow-y-scroll">
            <h5 className="text-lg font-bold font-secondary">Filter NFT Traits</h5>
            <p className="font-secondary text-[#7F7F7F] text-[15px]">Select NFT Traits such as Genres, Languages and others</p>
			<HorizontalRuler/>
            <div className="flex w-[657px] flex-col mt-5 space-y-2 sm:flex-row sm:space-x-10 sm:space-y-0">
				{/* Can make a component of the div below */}
                <div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Genre</p>
                    <FilterDropdown 
						optionsArray={genre} 
						initialValue={appliedFilter.genre} 
						setChoice={setAppliedFilter} 
						dropdownType={"GENRE"}
					/>
				</div>
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Language</p>
                    <FilterDropdown 
						optionsArray={languageOptions} 
						initialValue={appliedFilter.language} 
						setChoice={setAppliedFilter} 
						dropdownType={"LANGUAGE"}
					/>
				</div>
			</div>

            <div className="flex w-[657px] flex-col mt-5 space-y-2 sm:flex-row sm:space-x-10 sm:space-y-0">
				{/* Can make a component of the div below */}
                <div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Duration</p>
                    <FilterDropdown 
						optionsArray={duration}
						initialValue={appliedFilter.duration} 
						setChoice={setAppliedFilter} 
						dropdownType={"DURATION"}
					/>
				</div>
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">No. Of Collaborators</p>
                    <FilterDropdown 
						optionsArray={numberOfCollaborators}
						initialValue={appliedFilter.numberOfCollaborators} 
						setChoice={setAppliedFilter} 
						dropdownType={"NUMCOLLAB"}
					/>
				</div>
			</div>

            <div className="flex w-[657px] flex-col mt-5 space-y-2 sm:flex-row sm:space-x-10 sm:space-y-0">
				{/* Can make a component of the div below */}
                <div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Tags</p>
                    <FilterDropdown 
						optionsArray={languageOptions}
						initialValue={appliedFilter.tags} 
						setChoice={setAppliedFilter} 
						dropdownType={"TAGS"}
					/>
				</div>
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Parental Advisory</p>
                    <FilterDropdown 
						optionsArray={parentalAdvisory}
						initialValue={appliedFilter.parentalAdvisory} 
						setChoice={setAppliedFilter} 
						dropdownType={"PARENTALADV"}
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
					/>
				</div>
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Country Of Origin</p>
                    <FilterDropdown 
						optionsArray={countryOfOrigin}
						initialValue={appliedFilter.countryOfOrigin} 
						setChoice={setAppliedFilter} 
						dropdownType={"COUNTRYOFORIGIN"}
					/>
				</div>
			</div>

            <div className="flex w-[657px] flex-col mt-5 space-y-2 sm:flex-row sm:space-x-10 sm:space-y-0">
				{/* Can make a component of the div below */}
                <div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">No. Of Copies</p>
                    <FilterDropdown 
						optionsArray={numberOfCopies}
						initialValue={appliedFilter.numberOfCopies} 
						setChoice={setAppliedFilter} 
						dropdownType={"NUMCOPIES"}
					/>
				</div>
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Resale Royalty Percentage</p>
                    <FilterDropdown 
						optionsArray={resaleRoyalty}
						initialValue={appliedFilter.resaleRoyalty} 
						setChoice={setAppliedFilter} 
						dropdownType={"RESALEROYALTY"}
					/>
				</div>
			</div>
        </div>
    );
}