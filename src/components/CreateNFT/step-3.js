const ComprehensiveDetails = ({ step, nextStep, prevStep, recordingYear, setRecordingYear, vocals, setVocals, otherContributors, setOtherContributors }) => {
    const versions = {
        original: "Original",
        cover: "Cover",
        remix: "Remix",
        live: "Live",
        remastered: "Remastered",
        radio: "Radio Edit",
    };

    const genres = {
        afrobeat: "Afrobeat",
        afropop: "Afropop",
        alternative: "Alternative",
        bigBand: "Big Band",
        blues: "Blues",
        childrensMusic: "Children's Music",
        classical: "Classical",
        comedy: "Comedy",
        country: "Country",
        dance: "Dance",
        electronic: "Electronic",
        fitnessAndWorkout: "Fitness and Workout",
        folk: "Folk",
        frenchPop: "French Pop",
        germanFolk: "German Folk",
        germanPop: "German Pop",
        hipHop: "Hip Hop",
        jPop: "J-Pop",
        jazz: "Jazz",
        kPop: "K-Pop",
        rap: "Rap",
    };

    const handleVocalsRadioChange = (event) => {
        if (event.target.value === "No") {
            setVocals(false);
        } else {
            setVocals(true);
        }
    };

    const handleContributorsRadioChange = (event) => {
        if (event.target.value === "No") {
            setOtherContributors(false);
        } else {
            setOtherContributors(true);
        }
    };

    return (
        <>
            <div className="container mx-auto pt-36 pb-20 min-h-screen">
                <div className="text-2xl font-secondary text-gray-500">Step {step}</div>
                <div className="flex flex-wrap justify-center content-center items-center">
                    <div className="grid gap-y-10 justify-items-center">
                        <form className="w-full max-w-lg">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label htmlFor="version" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Track Origin (Version)
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                            id="version"
                                            name="Version"
                                        >
                                            {Object.keys(versions).map((version) => (
                                                <option key={version} value={version}>
                                                    {versions[version]}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label htmlFor="genre" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Genre
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                            id="genre"
                                            name="Genre"
                                        >
                                            {Object.keys(genres).map((genre) => (
                                                <option key={genre} value={genre}>
                                                    {genres[genre]}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label htmlFor="rec-year" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Recording Year
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                        id="rec-year"
                                        value={recordingYear}
                                        onChange={(e) => {
                                            setRecordingYear(e.target.value);
                                        }}
                                        min="1900"
                                        type="number"
                                        placeholder="Recording Year"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label htmlFor="explicit-content" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Explicit Content
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                            id="explicit-content"
                                            name="Track Origin"
                                        >
                                            <option value="explicit">Explicit</option>
                                            <option value="clean">
                                                Clean [There is another version of this track that is explicit, but this is the clean version]
                                            </option>
                                            <option value="not-explicit">Not Explicit</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col mb-6 mt-4">
                                <span className="text-gray-900">Does this track contain any singing, rapping, or other vocals?</span>
                                <div className="mt-2 text-gray-700">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input type="radio" name="vocals" value="Yes" checked={vocals} onChange={handleVocalsRadioChange} />
                                        <span className="ml-2">Yes</span>
                                    </label>
                                    <label className="inline-flex items-center cursor-pointer ml-6">
                                        <input type="radio" name="vocals" value="No" checked={!vocals} onChange={handleVocalsRadioChange} />
                                        <span className="ml-2">No</span>
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-col mb-6 mt-4">
                                <span className="text-gray-900">Do you want to add other contributors?</span>
                                <div className="mt-2 text-gray-700">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="radio"
                                            name="contributors"
                                            value="Yes"
                                            checked={otherContributors}
                                            onChange={handleContributorsRadioChange}
                                        />
                                        <span className="ml-2">Yes</span>
                                    </label>
                                    <label className="inline-flex items-center cursor-pointer ml-6">
                                        <input
                                            type="radio"
                                            name="contributors"
                                            value="No"
                                            checked={!otherContributors}
                                            onChange={handleContributorsRadioChange}
                                        />
                                        <span className="ml-2">No</span>
                                    </label>
                                </div>
                            </div>
                        </form>
                        <div className="w-full flex justify-between">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    prevStep();
                                }}
                                className="text-black text-md bg-light-300 font-primary rounded px-6 py-2"
                            >
                                Back
                            </button>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    otherContributors ? nextStep() : (nextStep(), nextStep());
                                }}
                                className="text-white text-md bg-primary-200 hover:bg-primary-300 font-primary rounded px-6 py-2"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ComprehensiveDetails;
