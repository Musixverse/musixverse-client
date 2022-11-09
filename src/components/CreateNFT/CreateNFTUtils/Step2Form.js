import DetailsInputGroup from "./DetailsInputGroup";
import GeographicDetailsInputGroup from "./GeographicDetailsInputGroup";
import TagsMultiSelect from "./TagsMultiSelect";
import RequiredAsterisk from "../../../layout/RequiredAsterisk";
import Tooltip from "../../../layout/Tooltip/Tooltip";

export default function Step2Form({
	setTrackOrigin,
	setGenre,
	recordingYear,
	setRecordingYear,
	setParentalAdvisory,
	vocals,
	setVocals,
	setLanguage,
	location,
	setLocation,
	countryOfOrigin,
	setCountryOfOrigin,
	stateOfOrigin,
	setStateOfOrigin,
	isrc,
	setIsrc,
	tags,
	setTags,
	links,
	setLinks,
	genre,
	trackOrigin,
	parentalAdvisory,
	language,
}) {
	const detailsInputGroupValues = { setTrackOrigin, setGenre, recordingYear, setRecordingYear, setParentalAdvisory, genre, trackOrigin, parentalAdvisory };
	const geographicDetailsInputGroupValues = {
		language,
		setLanguage,
		location,
		setLocation,
		stateOfOrigin,
		setStateOfOrigin,
		countryOfOrigin,
		setCountryOfOrigin,
	};

	const toggleVocalsRadio = (e) => {
		if ((e.target.id === "othervocalsyes" && vocals === false) || (e.target.id === "othervocalsno" && vocals === true)) {
			setVocals(!vocals);
		}
	};

	const handleLinksChange = (e) => {
		const { name, value } = e.target;
		setLinks((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<div className="w-full">
			<p className="mb-10 text-5xl font-normal font-tertiary">COMPREHENSIVE DETAILS</p>
			<div className="flex flex-col space-y-20 lg:w-full lg:space-x-10 lg:space-y-0 xl:space-x-20 lg:flex-row">
				{/* Details */}
				<div className="font-semibold lg:w-1/2 font-secondary">
					{/* Input Group */}
					<DetailsInputGroup {...detailsInputGroupValues} />

					<p className="mt-12 text-sm">
						Does this track contain any singing, rapping or any other vocals?
						<RequiredAsterisk />
					</p>
					<div className="flex items-center mt-1 mb-12 space-x-5">
						<div className="flex items-center">
							<input
								id="othervocalsyes"
								type="radio"
								name="vocals-radio"
								className="hidden"
								onClick={(e) => toggleVocalsRadio(e)}
								checked={vocals}
							/>
							<label htmlFor="othervocalsyes" className="flex items-center text-sm font-normal cursor-pointer font-secondary">
								<span className="inline-block w-6 h-6 mr-1 border-2 rounded-full border-[#363636] flex-no-shrink"></span>
								Yes
							</label>
						</div>
						<div className="flex items-center">
							<input
								id="othervocalsno"
								type="radio"
								name="vocals-radio"
								className="hidden"
								onClick={(e) => toggleVocalsRadio(e)}
								checked={!vocals}
							/>
							<label htmlFor="othervocalsno" className="flex items-center text-sm font-normal cursor-pointer font-secondary">
								<span className="inline-block w-6 h-6 mr-1 border-2 rounded-full border-[#363636] flex-no-shrink"></span>
								No
							</label>
						</div>
					</div>

					<GeographicDetailsInputGroup {...geographicDetailsInputGroupValues} />
				</div>

				{/* Uploads */}
				<div className="font-semibold lg:w-1/2 font-secondary">
					<p className="mb-1 text-sm">
						ISRC
						<Tooltip
							labelText={<i className="pl-2 fa-solid fa-circle-info"></i>}
							message={
								"The International Standard Recording Code (ISRC) is an international standard code for uniquely identifying sound recordings and music video recordings."
							}
							tooltipLocation={"bottom"}
						/>
					</p>
					<input
						type={"text"}
						value={isrc ?? ""}
						onChange={(e) => {
							setIsrc(e.target.value);
						}}
						className="w-full px-2 py-2 border-2 border-[#777777] rounded-md shadow-sm outline-none focus:border-primary-500 focus:dark:border-primary-500 dark:bg-[#323232] dark:border-[#323232]"
					></input>
					<p className="text-[#777777] mt-1 font-normal text-xs">
						Only provide ISRC code if this version of the song has one. Do not provide if this is an interim version with no ISRC code.
					</p>

					<p className="mt-4 text-sm">
						TAGS
						<RequiredAsterisk />
					</p>
					<TagsMultiSelect tags={tags} setTags={setTags} />

					{/* SHARE LINKS */}
					<p className="mt-6 mb-1 text-sm">TRACK LINKS</p>
					<div className="flex justify-between w-full space-x-3">
						<input
							type={"url"}
							name="spotifyLink"
							value={links.spotifyLink}
							onChange={handleLinksChange}
							placeholder="Spotify Track Link"
							className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-500 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-500"
						/>
						<input
							type={"url"}
							name="appleMusicLink"
							value={links.appleMusicLink}
							onChange={handleLinksChange}
							placeholder="Apple Music Track Link"
							className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-500 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-500"
						/>
					</div>
					<div className="flex justify-between w-full mt-3 space-x-3">
						<input
							type={"url"}
							name="amazonMusicLink"
							value={links.amazonMusicLink}
							onChange={handleLinksChange}
							placeholder="Amazon Music Track Link"
							className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-500 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-500"
						/>
						<input
							type={"url"}
							name="youtubeMusicLink"
							value={links.youtubeMusicLink}
							onChange={handleLinksChange}
							placeholder="Youtube Music Track Link"
							className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-500 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-500"
						/>
					</div>
					<input
						type={"url"}
						name="other"
						value={links.other}
						onChange={handleLinksChange}
						placeholder="Any other link"
						className="mt-3 dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-500 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-500"
					/>
				</div>
			</div>
		</div>
	);
}
