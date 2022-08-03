import HorizontalRuler from "../../../../layout/HorizontalRuler";
import ToggleButton from "../../../../layout/ToggleButton/ToggleButton";
import FilterDropdown from "./FilterDropdown";

export default function FilterNftTraits(){
    const genreOptions = ["Any", "This", "Other"];
    const languageOptions = ["Any", "This", "Other"];

    return(
        <div className="flex flex-col mt-8 max-h-[425px] overflow-y-scroll">
            <h5 className="text-lg font-bold font-secondary">Filter NFT Traits</h5>
            <p className="font-secondary text-[#7F7F7F] text-[15px]">Select NFT Traits such as Genres, Languages and others</p>
			<HorizontalRuler/>
            <div className="flex w-[657px] flex-col mt-5 space-y-2 sm:flex-row sm:space-x-10 sm:space-y-0">
				{/* Can make a component of the div below */}
                <div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Genre</p>
                    <FilterDropdown optionsArray={genreOptions}/>
				</div>
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Language</p>
                    <FilterDropdown optionsArray={languageOptions}/>
				</div>
			</div>

            <div className="flex w-[657px] flex-col mt-5 space-y-2 sm:flex-row sm:space-x-10 sm:space-y-0">
				{/* Can make a component of the div below */}
                <div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Genre</p>
                    <FilterDropdown optionsArray={genreOptions}/>
				</div>
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Language</p>
                    <FilterDropdown optionsArray={languageOptions}/>
				</div>
			</div>

            <div className="flex w-[657px] flex-col mt-5 space-y-2 sm:flex-row sm:space-x-10 sm:space-y-0">
				{/* Can make a component of the div below */}
                <div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Genre</p>
                    <FilterDropdown optionsArray={genreOptions}/>
				</div>
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Language</p>
                    <FilterDropdown optionsArray={languageOptions}/>
				</div>
			</div>

            <div className="flex w-[657px] flex-col mt-5 space-y-2 sm:flex-row sm:space-x-10 sm:space-y-0">
				{/* Can make a component of the div below */}
                <div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Genre</p>
                    <FilterDropdown optionsArray={genreOptions}/>
				</div>
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Language</p>
                    <FilterDropdown optionsArray={languageOptions}/>
				</div>
			</div>

            <div className="flex w-[657px] flex-col mt-5 space-y-2 sm:flex-row sm:space-x-10 sm:space-y-0">
				{/* Can make a component of the div below */}
                <div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Genre</p>
                    <FilterDropdown optionsArray={genreOptions}/>
				</div>
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">Language</p>
                    <FilterDropdown optionsArray={languageOptions}/>
				</div>
			</div>

			<div className="flex items-center justify-between mt-5 mb-2">
				<p className="font-secondary">Lyrics</p>
				<ToggleButton/>
			</div>
            <HorizontalRuler/>
			<div className="flex items-center justify-between my-2">
				<p className="font-secondary">Has Splits</p>
				<ToggleButton/>
			</div>
			<HorizontalRuler/>
        </div>
    );
}