import Head from "next/head";
import Router from "next/router";

const CreateNFT1 = ({}) => {
    return (
        <>
            <Head>
                <title>Musixverse | Track Details</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto pt-36 pb-20 min-h-screen">
                <div className="flex flex-wrap justify-center content-center items-center">
                    <div className="grid gap-y-10 justify-items-center">
                        <form class="w-full max-w-lg">
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    {/* @Sparsh: Add the code from Registration process here */}
                                    <label htmlFor="cover-art" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                        Cover Art
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                        id="cover-art"
                                        type="text"
                                        placeholder="Jane"
                                    />
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label htmlFor="audio-file" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Audio File
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                        id="audio-file"
                                        type="text"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label htmlFor="track-title" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Track Title
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                        id="track-title"
                                        type="text"
                                        placeholder="Enter track title here"
                                        required
                                    />
                                    <p class="text-gray-600 text-xs italic">Feel free to include featured artists and "version" info to the track title</p>
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                        City
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                        id="grid-city"
                                        type="text"
                                        placeholder="Albuquerque"
                                    />
                                </div>
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                        State
                                    </label>
                                    <div class="relative">
                                        <select
                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                            id="grid-state"
                                        >
                                            <option>New Mexico</option>
                                            <option>Missouri</option>
                                            <option>Texas</option>
                                        </select>
                                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                        Zip
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                        id="grid-zip"
                                        type="text"
                                        placeholder="90210"
                                    />
                                </div>
                            </div>
                            {/* Links to other platforms */}
                            {/* @Ayush: Develop a select box similar to this- https://www.youtube.com/watch?v=W89sCr3g5eQ */}
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full px-3">
                                    <label htmlFor="spotify-link" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Spotify Link
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                        id="spotify-link"
                                        type="text"
                                        placeholder="Paste the track's Spotify url here"
                                        required
                                    />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label htmlFor="apple-music-link" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Apple Music Link
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                        id="apple-music-link"
                                        type="text"
                                        placeholder="Paste the track's Apple Music url here"
                                        required
                                    />
                                </div>
                            </div>
                        </form>
                        <div className="w-full flex justify-between">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    Router.push("/create-nft/step-1", undefined, { shallow: true });
                                }}
                                className="text-black text-md bg-light-300 font-primary rounded px-6 py-2"
                            >
                                Back
                            </button>
                            <div className="w-full flex justify-end">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="mr-4 text-black text-md bg-light-300 font-primary rounded px-6 py-2"
                                >
                                    Skip
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        Router.push("/create-nft/step-3", undefined, { shallow: true });
                                    }}
                                    className="text-white text-md bg-primary-200 hover:bg-primary-300 font-primary rounded px-6 py-2"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateNFT1;