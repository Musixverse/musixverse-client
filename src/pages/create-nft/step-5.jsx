import Head from "next/head";
import Router from "next/router";

const CreateNFT4 = ({}) => {
    return (
        <>
            <Head>
                <title>Musixverse | NFT Details & Scheduling</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto pt-36 pb-20 min-h-screen">
                <div className="flex flex-wrap justify-center content-center items-center">
                    <div className="grid gap-y-10 justify-items-center">
                        <form className="w-full max-w-lg">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        htmlFor="nft-copies"
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-first-name"
                                    >
                                        No. of copies of the NFT
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                        id="nft-copies"
                                        type="number"
                                        min={1}
                                        step="1"
                                        placeholder="No. of copies"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label
                                        htmlFor="individual-nft-price"
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-first-name"
                                    >
                                        Price of Individual NFT
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                        id="individual-nft-price"
                                        type="number"
                                        min={0}
                                        step="0.01"
                                        placeholder="Enter individual NFT price"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label htmlFor="resale-royalty-percentage" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Resale Royalty Percentage
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                        id="resale-royalty-percentage"
                                        type="number"
                                        min={0}
                                        placeholder="Enter Resale Royalty Percentage"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col mb-6 mt-4">
                                <span className="text-gray-900">Schedule your NFT launch</span>
                                <div className="mt-2 text-gray-700">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input type="radio" className="form-radio" name="schedule" value="Schedule Now" />
                                        <span className="ml-2">Schedule Now</span>
                                    </label>
                                    <label className="inline-flex items-center cursor-pointer ml-6">
                                        <input type="radio" className="form-radio" name="schedule" value="Schedule for some time in the future" />
                                        <span className="ml-2">Schedule for some time in the future</span>
                                    </label>
                                </div>
                            </div>
                        </form>
                        <div className="w-full flex justify-between">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    Router.push("/create-nft/step-4", undefined, { shallow: true });
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
                                        Router.push("/create-nft/success", undefined, { shallow: true });
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

export default CreateNFT4;
