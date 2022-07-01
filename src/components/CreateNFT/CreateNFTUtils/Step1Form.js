import DetailsInputGroup from "./DetailsInputGroup";
import ImageUpload from "./ImageUpload";
import AudioUpload from "./AudioUpload";

export default function Step1Form({
    uploadedImage,
    setUploadedImage,
    uploadedSong,
    setUploadedSong,
    trackTitle,
    setTrackTitle,
    setGenre,
    setTrackOrigin,
    setExplicit,
    recordingYear,
    setRecordingYear,
    vocals,
    setVocals,
    links,
    setLinks,
}) {
    const detailsInputGroupValues = { setGenre, setTrackOrigin, setExplicit, recordingYear, setRecordingYear };

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
        <div className="flex flex-col lg:space-x-10 xl:space-x-20 lg:flex-auto lg:flex-row font-semibold font-secondary justify-end">
            {/* Details */}
            <div className="font-semibold font-secondary mt-10 md:mt-28 lg:mt-14 lg:w-6/12">
                <p className="mb-10">DETAILS</p>
                <p>TRACK TITLE</p>
                <input
                    type={"text"}
                    value={trackTitle ?? ""}
                    onChange={(e) => {
                        setTrackTitle(e.target.value);
                    }}
                    className="w-full px-4 py-1 border-2 border-[#777777] rounded-md shadow-sm outline-none focus:border-primary-100 focus:dark:border-primary-100 dark:bg-[#323232] dark:border-[#323232]"
                    required
                ></input>
                <p className="text-[#777777] mt-1 mb-10 font-normal text-[13px] max-w-[75%]">
                    Feel free to include featured artists and version info in the track title
                </p>

                {/* Input Group */}
                <DetailsInputGroup {...detailsInputGroupValues} />

                <p className="mt-14">Does this track contain any singing, rapping or any other vocals</p>
                <div className="flex items-center mt-1 space-x-5">
                    <div className="flex items-center">
                        <input id="othervocalsyes" type="radio" name="vocals-radio" className="hidden" onClick={(e) => toggleVocalsRadio(e)} defaultChecked />
                        <label htmlFor="othervocalsyes" className="flex items-center text-sm font-normal cursor-pointer font-secondary">
                            <span className="inline-block w-6 h-6 mr-1 border-2 rounded-full border-[#363636] flex-no-shrink"></span>
                            Yes
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input id="othervocalsno" type="radio" name="vocals-radio" className="hidden" onClick={(e) => toggleVocalsRadio(e)} />
                        <label htmlFor="othervocalsno" className="flex items-center text-sm font-normal cursor-pointer font-secondary">
                            <span className="inline-block w-6 h-6 mr-1 border-2 rounded-full border-[#363636] flex-no-shrink"></span>
                            No
                        </label>
                    </div>
                </div>
            </div>

            {/* Uploads */}
            <div className="mt-10 lg:mt-14 lg:w-4/12">
                <p className="mb-10 font-semibold">UPLOADS</p>
                {/* UPLOAD NFT ASSETS */}
                <ImageUpload uploadedImage={uploadedImage} setUploadedImage={setUploadedImage} />

                <AudioUpload uploadedSong={uploadedSong} setUploadedSong={setUploadedSong} />

                {/* SHARE LINKS */}
                <p className="mt-16 mb-3 font-semibold font-secondary">TRACK LINKS</p>
                <div className="flex justify-between w-full space-x-3">
                    <input
                        type={"url"}
                        name="spotifyLink"
                        value={links.spotifyLink}
                        onChange={handleLinksChange}
                        placeholder="Spotify Track Link"
                        className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
                    />
                    <input
                        type={"url"}
                        name="appleMusicLink"
                        value={links.appleMusicLink}
                        onChange={handleLinksChange}
                        placeholder="Apple Music Track Link"
                        className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
                    />
                </div>
                <div className="flex justify-between w-full mt-3 space-x-3">
                    <input
                        type={"url"}
                        name="amazonMusicLink"
                        value={links.amazonMusicLink}
                        onChange={handleLinksChange}
                        placeholder="Amazon Music Track Link"
                        className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
                    />
                    <input
                        type={"url"}
                        name="youtubeMusicLink"
                        value={links.youtubeMusicLink}
                        onChange={handleLinksChange}
                        placeholder="Youtube Music Track Link"
                        className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
                    />
                </div>
                <input
                    type={"url"}
                    name="otherLink"
                    value={links.otherLink}
                    onChange={handleLinksChange}
                    placeholder="Any other link"
                    className="mt-3 dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
                />
            </div>
        </div>
    );
}
