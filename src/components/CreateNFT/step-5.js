const NFTDetailsAndScheduling = ({
    step,
    prevStep,
    numberOfCopies,
    setNumberOfCopies,
    nftPrice,
    setNftPrice,
    resaleRoyaltyPercent,
    setResaleRoyaltyPercent,
    releaseNow,
    setReleaseNow,
    otherContributors,
}) => {
    const handleReleaseNowRadioChange = (event) => {
        if (event.target.value === "No") {
            setReleaseNow(false);
        } else {
            setReleaseNow(true);
        }
    };

    return (
        <div className="container mx-auto pt-36 pb-20 min-h-screen">
            <div className="text-2xl font-secondary text-gray-500">Step {step}</div>
            <div className="flex flex-wrap justify-center content-center items-center">
                <div className="grid gap-y-10 justify-items-center">
                    <form className="w-full max-w-lg">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="nft-copies" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    No. of copies of the NFT
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                    id="nft-copies"
                                    value={numberOfCopies}
                                    onChange={(e) => {
                                        setNumberOfCopies(e.target.value);
                                    }}
                                    type="number"
                                    min={1}
                                    step="1"
                                    placeholder="No. of copies"
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label htmlFor="individual-nft-price" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Price of Individual NFT
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                    id="individual-nft-price"
                                    value={nftPrice}
                                    onChange={(e) => {
                                        setNftPrice(e.target.value);
                                    }}
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
                                    value={resaleRoyaltyPercent}
                                    onChange={(e) => {
                                        setResaleRoyaltyPercent(e.target.value);
                                    }}
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
                                    <input type="radio" name="release" value="Yes" checked={releaseNow} onChange={handleReleaseNowRadioChange} />
                                    <span className="ml-2">Release Now</span>
                                </label>
                                <label className="inline-flex items-center cursor-pointer ml-6">
                                    <input type="radio" name="release" value="No" checked={!releaseNow} onChange={handleReleaseNowRadioChange} />
                                    <span className="ml-2">Schedule for some time in the future</span>
                                </label>
                            </div>
                        </div>
                    </form>
                    <div className="w-full flex justify-between">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                otherContributors ? prevStep() : (prevStep(), prevStep());
                            }}
                            className="text-black text-md bg-light-300 font-primary rounded px-6 py-2"
                        >
                            Back
                        </button>
                        <div className="w-full flex justify-end">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    // Router.push("/create-nft/review-details", undefined, { shallow: true });
                                }}
                                className="text-white text-md bg-primary-200 hover:bg-primary-300 font-primary rounded px-6 py-2"
                            >
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NFTDetailsAndScheduling;
