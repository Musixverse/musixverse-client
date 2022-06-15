
const PricingAndSplits = () => {
    const step = 2;

    return (
       <div className="flex flex-col min-h-screen">
            <div className="text-2xl font-secondary text-gray-500">Step {step} of {step}</div>
            <div className="flex justify-evenly items-start pt-20">
                {/* 1st Column */}
                <div className="min-w-[30%]">PREVIEW NFT</div>
                
                {/* 2nd Column */}
                <div className="flex flex-col w-1/2 pr-14">
                    <div className="flex flex-col mb-6">
                        <span className="text-gray-900">ADD CONTRIBUTORS</span>
                        <div className="mt-2 text-gray-700">
                            <label className="inline-flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="contributors"
                                    value="Yes"
                                    // checked={otherContributors}
                                    // onChange={handleContributorsRadioChange}
                                />
                                <span className="ml-2">Yes</span>
                            </label>
                            <label className="inline-flex items-center cursor-pointer ml-6">
                                <input
                                    type="radio"
                                    name="contributors"
                                    value="No"
                                    // checked={!otherContributors}
                                    // onChange={handleContributorsRadioChange}
                                />
                                <span className="ml-2">No</span>
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col mb-6">
                        <span className="text-gray-900">ADD CONTRIBUTORS AND SPLITS</span>
                        <div className="mt-2 flex gap-4 text-gray-700">
                            <div>
                                <input 
                                    className="appearance-none w-full bg-white text-gray-700 border-2 border-gray-400 rounded py-2 px-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                    id="contributor-name"
                                    type="text" 
                                    placeholder="Contributor Name"    
                                />
                            </div>
                            <div>
                                <input
                                    className="appearance-none w-full bg-white text-gray-700 border-2 border-gray-400 rounded py-2 px-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                    id="rec-year"
                                    type="number"
                                    placeholder="Split %"
                                />
                            </div>
                        </div>
                    </div> 

                    {/* Button to add more contributors */}
                    {/* TO BE DONE */}
                </div>
                
                {/* 3rd Column */}
                <div className="flex flex-col w-1/2">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="nft-copies" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                NO. OF COPIES
                            </label>
                            <input
                                className="appearance-none w-full bg-white text-gray-700 border-2 border-gray-400 rounded py-2 px-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                id="nft-copies"
                                // value={numberOfCopies}
                                // onChange={(e) => {
                                //     setNumberOfCopies(e.target.value);
                                // }}
                                type="number"
                                min={1}
                                step="1"
                                // placeholder="No. of copies"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label htmlFor="individual-nft-price" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                PRICE OF EACH COPY
                            </label>
                            <input
                                className="appearance-none w-full bg-white text-gray-700 border-2 border-gray-400 rounded py-2 px-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                id="individual-nft-price"
                                // value={nftPrice}
                                // onChange={(e) => {
                                //     setNftPrice(e.target.value);
                                // }}
                                type="number"
                                min={0}
                                step="0.01"
                                // placeholder="Enter individual NFT price"
                            />
                        </div>
                    </div> 
                    <div className="w-full">
                        <label htmlFor="resale-royalty-percentage" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            RESALE ROYALTY PERCENTAGE
                        </label>
                        <input
                            className="appearance-none w-full bg-white text-gray-700 border-2 border-gray-400 rounded py-2 px-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                            id="resale-royalty-percentage"
                            // value={resaleRoyaltyPercent}
                            // onChange={(e) => {
                            //     setResaleRoyaltyPercent(e.target.value);
                            // }}
                            type="number"
                            min={0}
                            // placeholder="Enter Resale Royalty Percentage"
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-6 mt-4">
                        <span className="text-gray-900">SCHEDULE LAUNCH</span>
                        <div className="mt-2 text-gray-700">
                            <label className="inline-flex items-center cursor-pointer">
                                <input 
                                    type="radio" 
                                    name="release" 
                                    value="Yes" 
                                    // checked={releaseNow} 
                                    // onChange={handleReleaseNowRadioChange} 
                                />
                                <span className="ml-2">Release Now</span>
                            </label>
                            <label className="inline-flex items-center cursor-pointer ml-6">
                                <input 
                                    type="radio" 
                                    name="release" 
                                    value="No" 
                                    // checked={!releaseNow} 
                                    // onChange={handleReleaseNowRadioChange} 
                                />
                                <span className="ml-2">Schedule for later</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="w-full flex justify-end items-center gap-4 pt-10">
                <div>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            otherContributors ? prevStep() : (prevStep(), prevStep());
                        }}
                        className="text-black text-md bg-light-300 hover:bg-search-300 font-primary rounded px-6 py-2"
                    >
                        Back
                    </button>
                </div>
                <div>
                    <button
                        // onClick={(e) => {
                        //     e.preventDefault();
                        //     nftCreateFormOnSubmit();
                        //     Router.push("/create-nft/review-details", undefined, { shallow: true });
                        // }}
                        className="text-white text-md bg-primary-200 hover:bg-primary-300 font-primary rounded px-6 py-2"
                    >
                        Create &nbsp; -&gt;
                    </button>
                </div>
            </div>
       </div> 
    );    
}

export default PricingAndSplits;