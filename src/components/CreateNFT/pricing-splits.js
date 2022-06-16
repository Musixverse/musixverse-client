import { useState } from "react";

const PricingAndSplits = ({numberOfCopies,setNumberOfCopies,nftPrice, setNftPrice}) => {
    const [otherContributors, setOtherContributors] = useState(true);
    const [ContributorList, setContributorList] = useState([{ ContributorName: "", Split: "" }]);

    //handle Contributors radio change
    const handleContributorsRadioChange = (event) => {
        if (event.target.value === "No") {
            setOtherContributors(false);
        } else {
            setOtherContributors(true);
        }
    };

    // handle input change
    const handleInputChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...ContributorList];
      list[index][name] = value;
      setContributorList(list);
    };
  
    // handle click event of the Remove button
    const handleRemoveClick = index => {
      const list = [...ContributorList];
      list.splice(index, 1);
      setContributorList(list);
    };
  
    // handle click event of the Add button
    const handleAddClick = () => {
      setContributorList([...ContributorList, { ContributorName: "", Split: "" }]);
    };

    return (
        <div className="flex space-x-20 flex-2 lg:flex-row font-semibold font-secondary">
            {/* Contributors Details */}
            <div>
                <p className="mb-10">DETAILS</p>
                <div className="flex flex-col mb-10">
                    <span>ADD CONTRIBUTORS</span>
                    <div className="flex items-center mt-2 space-x-10">
                        <div className="flex items-center">
                            <input id="contributorsyes" 
                                type="radio" 
                                name="contributors"
                                value="Yes"
                                checked={otherContributors}
                                onChange={handleContributorsRadioChange}
                                className="hidden"     
                            />
                            <label htmlFor="contributorsyes" className="flex items-center text-sm font-normal cursor-pointer font-secondary">
                                <span className="inline-block w-6 h-6 mr-1 border-2 rounded-full border-[#363636] flex-no-shrink"></span>
                                Yes
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input id="contributorsno" 
                                type="radio" 
                                name="contributors"
                                value="No"
                                checked={!otherContributors}
                                onChange={handleContributorsRadioChange}
                                className="hidden"
                            />
                            <label htmlFor="contributorsno" className="flex items-center text-sm font-normal cursor-pointer font-secondary">
                                <span className="inline-block w-6 h-6 mr-1 border-2 rounded-full border-[#363636] flex-no-shrink"></span>
                                No
                            </label>
                        </div>
                    </div>
                </div>

                {otherContributors && <div className="flex flex-col mb-6">
                    <span>ADD CONTRIBUTORS AND SPLITS</span>
                    <div className="mt-2 flex flex-col gap-4 text-gray-700">
                        {ContributorList.map((x, i) => {
                            return (
                                <div key={i} className="flex gap-4">
                                    <div className="flex-1">
                                        <input
                                            className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
                                            id="contributor-name"
                                            name="ContributorName"
                                            type="text"
                                            placeholder="Contributor Name"
                                            value={x.ContributorName}
                                            onChange={e => handleInputChange(e, i)}
                                        />
                                    </div>
                                    <div className="flex-2">
                                        <input
                                            className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
                                            name="Split"
                                            type="number"
                                            placeholder="Split %"
                                            value={x.Split}
                                            onChange={e => handleInputChange(e, i)}
                                        />
                                    </div>
                                    {/* Button to remove more contributors */}
                                    <div className="flex">
                                        {ContributorList.length !== 1 && <button className="text-gray-400 hover:text-gray-600" onClick={() => handleRemoveClick(i)}>x</button>}     
                                    </div>
                                </div>
                            );
                        })}   
                    </div>
                    {/* Button to add more contributors */}
                    {ContributorList.length < 4 && 
                        <div className="flex mt-4 justify-start items-center">
                            <button className="rounded-full flex justify-center items-center w-8 h-8 bg-[#479E00] hover:bg-primary-300 text-white" onClick={handleAddClick}>+</button>
                            <span className="pl-3 font-normal text-sm">Add more Contributors</span>
                        </div>
                    }
                </div>} 
            </div>
            
            {/* NFT Details */}
            <div className="mt-14">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label htmlFor="nft-copies" className="block uppercase tracking-wide mb-2">
                            NO. OF COPIES
                        </label>
                        <input
                            className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
                            id="nft-copies"
                            // value={numberOfCopies}
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
                        <label htmlFor="individual-nft-price" className="block uppercase tracking-wide mb-2">
                            PRICE OF EACH COPY
                        </label>
                        <input
                            className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
                            id="individual-nft-price"
                            // value={nftPrice}
                            onChange={(e) => {
                                setNftPrice(e.target.value);
                            }}
                            type="number"
                            min={0}
                            step="0.01"
                            placeholder="Enter NFT price"
                        />
                    </div>
                </div> 
                <div className="w-full mb-6">
                    <label htmlFor="resale-royalty-percentage" className="block uppercase tracking-wide mb-2">
                        RESALE ROYALTY PERCENTAGE
                    </label>
                    <input
                        className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
                        id="resale-royalty-percentage"
                        // value={resaleRoyaltyPercent}
                        // onChange={(e) => {
                        //     setResaleRoyaltyPercent(e.target.value);
                        // }}
                        type="number"
                        min={0}
                        placeholder="Enter Resale Royalty Percentage"
                        required
                    />
                </div>

                {/* NFT Schedule Radio buttons */}
                <div className="flex flex-col mb-6">
                    <span>SCHEDULE LAUNCH</span>
                    <div className="flex items-center mt-2 space-x-10">
                        <div className="flex items-center">
                            <input id="release_now" type="radio" name="radio" defaultChecked className="hidden" />
                            <label htmlFor="release_now" className="flex items-center text-sm font-normal cursor-pointer font-secondary">
                                <span className="inline-block w-6 h-6 mr-1 border-2 rounded-full border-[#363636] flex-no-shrink"></span>
                                Release now
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input id="release_later" type="radio" name="radio" className="hidden" />
                            <label htmlFor="release_later" className="flex items-center text-sm font-normal cursor-pointer font-secondary">
                                <span className="inline-block w-6 h-6 mr-1 border-2 rounded-full border-[#363636] flex-no-shrink"></span>
                                Schedule for later
                            </label>
                        </div>
                    </div>
                </div>
            </div>
       </div> 
    );    
}

export default PricingAndSplits;