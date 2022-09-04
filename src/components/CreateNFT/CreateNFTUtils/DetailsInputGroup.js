import InputDropdown from "./InputDropdown";
import RequiredAsterisk from "../../../layout/RequiredAsterisk";
import { trackOriginArray, genreArray, parentalAdvisoryArray, minRecordingYear } from "../../../constants";

export default function DetailsInputGroup({
	setTrackOrigin,
	setGenre,
	recordingYear,
	setRecordingYear,
	setParentalAdvisory,
	genre,
	trackOrigin,
	parentalAdvisory,
}) {
	return (
		<div className="flex flex-col flex-1 space-y-2 sm:space-y-4">
			<div className="flex flex-col w-full space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">
						TRACK ORIGIN
						<RequiredAsterisk />
					</p>
					<InputDropdown optionsArray={trackOriginArray} setChoice={setTrackOrigin} initialValue={trackOrigin} />
				</div>
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">
						GENRE
						<RequiredAsterisk />
					</p>
					<InputDropdown optionsArray={genreArray} setChoice={setGenre} initialValue={genre} />
				</div>
			</div>
			<div className="flex flex-col w-full space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">
						RECORDING YEAR
						<RequiredAsterisk />
					</p>
					<input
						type="number"
						min={minRecordingYear}
						step="1"
						value={recordingYear}
						onChange={(e) => {
							setRecordingYear(e.target.value);
						}}
						max={new Date().getFullYear()}
						maxLength={4}
						placeholder="Enter the recording year"
						spellCheck={false}
						className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
						required
					/>
				</div>
				<div className="flex-1 text-sm font-semibold md:text-base font-secondary">
					<p className="mb-1 text-sm">
						PARENTAL ADVISORY
						<RequiredAsterisk />
					</p>
					<InputDropdown optionsArray={parentalAdvisoryArray} setChoice={setParentalAdvisory} initialValue={parentalAdvisory} />
				</div>
			</div>
		</div>
	);
}
