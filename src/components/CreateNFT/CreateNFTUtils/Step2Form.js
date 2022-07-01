import ContributorRoleDropdown from "./ContributorRoleDropdown";

const Step2Form = ({
    numberOfCopies,
    setNumberOfCopies,
    nftPrice,
    setNftPrice,
    contributorList,
    setContributorList,
    resaleRoyaltyPercent,
    setResaleRoyaltyPercent,
    releaseNow,
    setReleaseNow,
}) => {
    const rolesArray = ["Singer", "Producer", "Mixer", "Composer", "Songwriter", "Lyricist", "Vocalist", "Other"];

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...contributorList];
        list[index][name] = value;
        setContributorList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = (index) => {
        const list = [...contributorList];
        list.splice(index, 1);
        setContributorList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setContributorList([...contributorList, { id: "", username: "", split: "", role: "" }]);
    };

    const setContributorRole = (index, role) => {
        const list = [...contributorList];
        list[index]["role"] = role;
        setContributorList(list);
    };

    return (
        <div className="flex flex-col lg:space-x-10 xl:space-x-20 lg:flex-auto lg:flex-row font-semibold font-secondary justify-end">
            {/* Contributors Details */}
            <div className="mt-10 md:mt-28 lg:mt-14 lg:w-7/12">
                <div className="flex md:mb-6 gap-4">
                    <div className="w-full md:w-1/2 mb-6 md:mb-0">
                        <label htmlFor="nft-copies" className="block uppercase tracking-wide mb-2">
                            NO. OF COPIES
                        </label>
                        <input
                            className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
                            id="nft-copies"
                            value={numberOfCopies}
                            onChange={(e) => {
                                setNumberOfCopies(e.target.value);
                            }}
                            type="number"
                            min={1}
                            step="1"
                            placeholder="No. of copies"
                            required
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <label htmlFor="individual-nft-price" className="block uppercase tracking-wide mb-2">
                            PRICE OF EACH COPY
                        </label>
                        <input
                            className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
                            id="individual-nft-price"
                            value={nftPrice}
                            onChange={(e) => {
                                setNftPrice(e.target.value);
                            }}
                            type="number"
                            min={0}
                            step="0.01"
                            placeholder="Enter NFT price"
                            required
                        />
                    </div>
                </div>

                <div>
                    <span>ADD CONTRIBUTORS AND SPLITS</span>
                    <div className="mt-2 flex flex-col gap-4 text-gray-700">
                        {contributorList.map((contributor, index) => {
                            return (
                                <div key={index} className="flex gap-4">
                                    {index == 0 ? (
                                        <>
                                            <div className="basis-1/2">
                                                <input
                                                    className="bg-gray-100 dark:bg-[#272626] dark:text-light-100 dark:border-[#323232] w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777]"
                                                    id="username"
                                                    name="username"
                                                    type="text"
                                                    placeholder="Username"
                                                    value={contributor.username}
                                                    readOnly
                                                    required
                                                />
                                            </div>
                                            <div className="basis-1/4">
                                                <input
                                                    className="dark:bg-[#323232] dark:border-[#323232] dark:text-light-100 dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
                                                    name="split"
                                                    type="number"
                                                    min={0}
                                                    max={100}
                                                    placeholder="Split %"
                                                    value={contributor.split}
                                                    onChange={(e) => handleInputChange(e, index)}
                                                    required
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="basis-1/2">
                                                {/* TODO: Add search based on username on this input box @Pushpit07 */}
                                                <input
                                                    className="dark:text-light-100 dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
                                                    id="username"
                                                    name="username"
                                                    type="text"
                                                    placeholder="Username"
                                                    value={contributor.username}
                                                    onChange={(e) => handleInputChange(e, index)}
                                                    required
                                                />
                                            </div>
                                            <div className="basis-1/4">
                                                <input
                                                    className="dark:bg-[#323232] dark:border-[#323232] dark:text-light-100 dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
                                                    name="split"
                                                    type="number"
                                                    min={0}
                                                    max={100}
                                                    placeholder="Split %"
                                                    value={contributor.split}
                                                    onChange={(e) => handleInputChange(e, index)}
                                                    required
                                                />
                                            </div>
                                        </>
                                    )}

                                    <div className="basis-1/4">
                                        <ContributorRoleDropdown
                                            // TODO: Need to change the optionsArray by Final data @Pushpit07
                                            optionsArray={rolesArray}
                                            setContributorRole={setContributorRole}
                                            index={index}
                                        />
                                    </div>
                                    {/* Button to remove more contributors */}
                                    {contributorList.length !== 1 && (
                                        <div className="flex">
                                            <button type="button" className="text-gray-400 hover:text-gray-600" onClick={() => handleRemoveClick(index)}>
                                                x
                                            </button>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Button to add more contributors */}
                    {contributorList.length < 4 && (
                        <div className="flex mt-4 justify-start items-center">
                            <button
                                type="button"
                                className="rounded-full flex justify-center items-center w-8 h-8 bg-[#479E00] hover:bg-primary-300 text-white"
                                onClick={handleAddClick}
                            >
                                +
                            </button>
                            <span className="pl-3 font-normal text-sm">Add more Contributors</span>
                        </div>
                    )}

                    <div className="flex w-full p-3 mt-6 rounded justify-center dark:text-gray-300 bg-light-300 dark:bg-dark-100 font-medium">
                        <div className="">
                            {contributorList.reduce((total, currentSplit) => (total = total + Number(currentSplit.split)), 0) === 100 ? (
                                <span className="text-primary-200">
                                    <i className="fa-solid fa-circle-check"></i>
                                </span>
                            ) : (
                                <span className="text-error-200">
                                    <i className="fa-solid fa-circle-xmark"></i>
                                </span>
                            )}
                            &nbsp;Total: {contributorList.reduce((total, currentSplit) => (total = total + Number(currentSplit.split)), 0)}%
                        </div>
                    </div>
                </div>
            </div>

            {/* NFT Details */}
            <div className="mt-10 lg:mt-14 lg:w-4/12">
                <div className="w-full mb-6">
                    <label htmlFor="resale-royalty-percentage" className="block uppercase tracking-wide mb-2">
                        RESALE ROYALTY PERCENTAGE
                    </label>
                    <input
                        className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
                        id="resale-royalty-percentage"
                        value={resaleRoyaltyPercent}
                        onChange={(e) => {
                            setResaleRoyaltyPercent(e.target.value);
                        }}
                        type="number"
                        min={0}
                        max={100}
                        maxLength={3}
                        placeholder="Enter Resale Royalty Percentage"
                        required
                    />
                </div>

                {/* NFT Schedule Radio buttons */}
                <div className="flex flex-col mb-6">
                    <span>SCHEDULE LAUNCH</span>
                    <div className="flex items-center mt-2 space-x-10">
                        <div className="flex items-center">
                            <input
                                id="release_now"
                                onChange={(e) => {
                                    setReleaseNow(true);
                                }}
                                type="radio"
                                name="radio"
                                defaultChecked
                                className="hidden"
                            />
                            <label htmlFor="release_now" className="flex items-center text-sm font-normal cursor-pointer font-secondary">
                                <span className="inline-block w-6 h-6 mr-1 border-2 rounded-full border-[#363636] flex-no-shrink"></span>
                                Release now
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="release_later"
                                type="radio"
                                onChange={(e) => {
                                    setReleaseNow(false);
                                }}
                                name="radio"
                                className="hidden"
                            />
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
};

export default Step2Form;
