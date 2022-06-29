import InputDropdown from "./InputDropdown";

export default function DetailsInputGroup({ setGenre, setTrackOrigin, setExplicit, recordingYear, setRecordingYear }) {
    const trackOriginArray = ["Original", "Cover", "Remix", "Live", "Remastered", "Radio Edit"];
    const genreArray = [
        "Afrobeat",
        "Afropop",
        "Alternative",
        "Big Band",
        "Blues",
        "Children's Music",
        "Classical",
        "Comedy",
        "Country",
        "Dance",
        "Electronic",
        "Fitness and Workout",
        "Folk",
        "French Pop",
        "German Folk",
        "German Pop",
        "Hip Hop",
        "J-Pop",
        "Jazz",
        "K-Pop",
        "Rap",
    ];
    const explicitArray = ["Explicit", "Clean (There is another version of this track that is explicit, but this is the clean version)", "Not Explicit"];

    return (
        <div className="flex flex-col flex-1 space-y-2 sm:space-y-4">
            <div className="flex flex-col w-full space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
                <div className="flex-1 text-sm font-semibold md:text-base font-secondary">
                    <p className="mb-1">TRACK ORIGIN</p>
                    <InputDropdown optionsArray={trackOriginArray} setChoice={setTrackOrigin} />
                </div>
                <div className="flex-1 text-sm font-semibold md:text-base font-secondary">
                    <p className="mb-1">GENRE</p>
                    <InputDropdown optionsArray={genreArray} setChoice={setGenre} />
                </div>
            </div>
            <div className="flex flex-col w-full space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
                <div className="flex-1 text-sm font-semibold md:text-base font-secondary">
                    <p className="mb-1">RECORDING YEAR</p>
                    <input
                        type="number"
                        min={"1860"}
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
                    <p className="mb-1">EXPLICIT CONTENT</p>
                    <InputDropdown optionsArray={explicitArray} setChoice={setExplicit} />
                </div>
            </div>
        </div>
    );
}
