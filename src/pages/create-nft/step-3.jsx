import Head from "next/head";
import Router from "next/router";

const CreateNFT2 = ({}) => {
    return (
        <>
            <Head>
                <title>Musixverse | Comprehensive Details</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto pt-36 pb-20 min-h-screen">
                <div className="flex flex-wrap justify-center content-center items-center">
                    <div className="grid gap-y-10 justify-items-center">
                        <form className="w-full max-w-lg">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label htmlFor="track-origin" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Track Origin (Version)
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                            id="track-origin"
                                            name="Track Origin"
                                        >
                                            <option value="original">Original</option>
                                            <option value="cover">Cover</option>
                                            <option value="remix">Remix</option>
                                            <option value="live">Live</option>
                                            <option value="remastered">Remastered</option>
                                            <option value="radio">Radio Edit</option>
                                            <option value="other">Other...</option>
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
                                            <option value="Afrobeat">Afrobeat</option>
                                            <option value="Afropop">Afropop</option>
                                            <option value="Alternative">Alternative</option>
                                            <option value="Big-Band">Big Band</option>
                                            <option value="Blues">Blues</option>
                                            <option value="Childrens-Music">Children&apos;s Music</option>
                                            <option value="Classical">Classical</option>
                                            <option value="Comedy">Comedy</option>
                                            <option value="Country">Country</option>
                                            <option value="Dance">Dance</option>
                                            <option value="Electronic">Electronic</option>
                                            <option value="Fitness-and-Workout">Fitness and Workout</option>
                                            <option value="Folk">Folk</option>
                                            <option value="French-Pop">French Pop</option>
                                            <option value="German-Folk">German Folk</option>
                                            <option value="German-Pop">German Pop</option>
                                            <option value="Hip-Hop">Hip Hop</option>
                                            <option value="J-Pop">J-Pop</option>
                                            <option value="Jazz">Jazz</option>
                                            <option value="K-Pop">K-Pop</option>
                                            <option value="Rap">Rap</option>
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
                                        <input type="radio" className="form-radio" name="vocals" value="Yes" />
                                        <span className="ml-2">Yes</span>
                                    </label>
                                    <label className="inline-flex items-center cursor-pointer ml-6">
                                        <input type="radio" className="form-radio" name="vocals" value="No" />
                                        <span className="ml-2">No</span>
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-col mb-6 mt-4">
                                <span className="text-gray-900">Do you want to add other contributors?</span>
                                <div className="mt-2 text-gray-700">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input type="radio" name="contributors" value="Yes" />
                                        <span className="ml-2">Yes</span>
                                    </label>
                                    <label className="inline-flex items-center cursor-pointer ml-6">
                                        <input type="radio" name="contributors" value="No" />
                                        <span className="ml-2">No</span>
                                    </label>
                                </div>
                            </div>
                        </form>
                        <div className="w-full flex justify-between">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    Router.push("/create-nft/step-2", undefined, { shallow: true });
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
                                        Router.push("/create-nft/step-4", undefined, { shallow: true });
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

export default CreateNFT2;
