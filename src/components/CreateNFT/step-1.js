import { useState } from "react";

const TrackDetails = ({ step, nextStep, prevStep, trackTitle, setTrackTitle, links, setLinks, setImageHash, setSongHash, uploadFile }) => {
    const [imageUploadState, setImageUploadState] = useState(false);

    const handleLinksChange = (e) => {
        const { name, value } = e.target;
        setLinks((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleImageUpload = async (event) => {
        const el = document.getElementById("uploaded-img");
        const myMemoObj = URL.createObjectURL(event.target.files[0]);
        el.src = URL.createObjectURL(event.target.files[0]);
        URL.revokeObjectURL(myMemoObj); // Manging memo leak
        // Set image upload state to true when uploaded
        setImageUploadState(true);
        const file = await uploadFile(event.target.files[0]);
        setImageHash(file.hash());
    };

    const handleSongUpload = async (event) => {
        const file = await uploadFile(event.target.files[0]);
        setSongHash(file.hash());
    };

    return (
        <div className="container mx-auto pt-36 pb-20 min-h-screen">
            <div className="text-2xl font-secondary text-gray-500">Step {step}</div>
            <div className="flex flex-wrap justify-center content-center items-center">
                <div className="grid gap-y-10 justify-items-center">
                    <form className="w-full max-w-lg">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="cover-art" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Cover Art
                                </label>
                                {imageUploadState ? null : (
                                    <label htmlFor="upload-image-inp">
                                        <div className="upload-img-div">
                                            <label
                                                htmlFor="cover-art"
                                                className="block content-center w-[240px] h-[240px] rounded-md cursor-pointer bg-light-300"
                                            >
                                                <div className="grid place-items-center h-full w-full text-sm text-dark-100">Upload Image</div>
                                            </label>
                                            <input
                                                className="hidden"
                                                onChange={handleImageUpload}
                                                id="cover-art"
                                                type="file"
                                                accept=".jpg, .jpeg, .png, .bmp, .gif, .mp4, .mkv, .ogg, .wmv"
                                            />
                                        </div>
                                    </label>
                                )}
                                <label className="relative" htmlFor="upload-image-inp" style={imageUploadState ? {} : { display: "none" }}>
                                    <img id="uploaded-img" alt="uploaded file" className="w-[240px] h-[240px] rounded-md cursor-pointer" />
                                    <input
                                        type="file"
                                        id="upload-image-inp"
                                        onChange={handleImageUpload}
                                        accept=".jpg, .jpeg, .png, .bmp, .gif, .mp4, .mkv, .ogg, .wmv"
                                        className="hidden"
                                    />
                                </label>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label htmlFor="audio-file" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Audio File
                                </label>
                                <input type="file" id="upload-song-inp" accept="audio/*" onChange={handleSongUpload} />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label htmlFor="track-title" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Track Title
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                    id="track-title"
                                    value={trackTitle}
                                    onChange={(e) => {
                                        setTrackTitle(e.target.value);
                                    }}
                                    type="text"
                                    placeholder="Enter track title here"
                                />
                                <p className="text-gray-600 text-xs italic">
                                    Feel free to include featured artists and &quot;version&quot; info in the track title
                                </p>
                            </div>
                        </div>
                        {/* Links to other platforms */}
                        {/* @Ayush: Develop a select box similar to this- https://www.youtube.com/watch?v=W89sCr3g5eQ */}
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full px-3">
                                <label htmlFor="spotify-link" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Spotify Link
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                    id="spotify-link"
                                    name="spotifyLink"
                                    value={links.spotifyLink}
                                    onChange={handleLinksChange}
                                    type="text"
                                    placeholder="Paste the track's Spotify url here"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full px-3">
                                <label htmlFor="apple-music-link" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Apple Music Link
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                    id="apple-music-link"
                                    name="appleMusicLink"
                                    value={links.appleMusicLink}
                                    onChange={handleLinksChange}
                                    type="text"
                                    placeholder="Paste the track's Apple Music url here"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full px-3">
                                <label htmlFor="yt-music-link" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    YouTube Music Link
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                    id="yt-music-link"
                                    name="youtubeMusicLink"
                                    value={links.youtubeMusicLink}
                                    onChange={handleLinksChange}
                                    type="text"
                                    placeholder="Paste the track's YouTube Music url here"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label htmlFor="amazon-music-link" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Amazon Music Link
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                    id="amazon-music-link"
                                    name="amazonMusicLink"
                                    value={links.amazonMusicLink}
                                    onChange={handleLinksChange}
                                    type="text"
                                    placeholder="Paste the track's Amazon Music url here"
                                />
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
                                nextStep();
                            }}
                            className="text-white text-md bg-primary-200 hover:bg-primary-300 font-primary rounded px-6 py-2"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrackDetails;
