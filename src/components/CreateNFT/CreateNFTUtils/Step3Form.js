import { useState, useEffect } from "react";
import Image from "next/image";
import { useMoralisCloudFunction } from "react-moralis";
import DatePicker from "react-datepicker";
import CollaboratorRoleDropdown from "./CollaboratorRoleDropdown";
import RequiredAsterisk from "./RequiredAsterisk";

const Step3Form = ({
    numberOfCopies,
    setNumberOfCopies,
    nftPrice,
    setNftPrice,
    collaboratorList,
    setCollaboratorList,
    resaleRoyaltyPercent,
    setResaleRoyaltyPercent,
    releaseNow,
    setReleaseNow,
    setUnlockTimestamp,
}) => {
    const rolesArray = ["Singer", "Producer", "Mixer", "Composer", "Songwriter", "Lyricist", "Vocalist", "Other"];
    const [filteredUsers, setFilteredUsers] = useState("");
    const [searchedUsername, setSearchedUsername] = useState("");
    const [unlockTimestampInMs, setUnlockTimestampInMs] = useState(new Date().getTime());

    const [maticUSD, setMaticUSD] = useState("");
    const [maticINR, setMaticINR] = useState("");

    async function fetchMaticUSD() {
        const COINBASE_BASE_URL = "https://api.coinbase.com/v2";
        const res = await fetch(`${COINBASE_BASE_URL}/prices/MATIC-USD/buy`);
        const result = await res.json();
        setMaticUSD((result.data.amount * Number(nftPrice)).toFixed(2));
    }

    async function fetchMaticINR() {
        const COINBASE_BASE_URL = "https://api.coinbase.com/v2";
        const res = await fetch(`${COINBASE_BASE_URL}/prices/MATIC-INR/buy`);
        const result = await res.json();
        setMaticINR((result.data.amount * Number(nftPrice)).toFixed(0));
    }

    let truncatedmaticUSDPrice = maticUSD;
    if (maticUSD >= 1000000) {
        truncatedmaticUSDPrice = Number((maticUSD / 1000000).toFixed(2)) + " M";
    } else if (maticUSD >= 1000) {
        truncatedmaticUSDPrice = Number((maticUSD / 1000).toFixed(2)) + " K";
    }

    let truncatedmaticINRPrice = maticINR;
    if (maticINR >= 1000000) {
        truncatedmaticINRPrice = Number((maticINR / 1000000).toFixed(2)) + " M";
    } else if (maticINR >= 1000) {
        truncatedmaticINRPrice = Number((maticINR / 1000).toFixed(2)) + " K";
    }

    useEffect(async () => {
        fetchMaticUSD();
        fetchMaticINR();
    }, [nftPrice]);

    const changeTimesampToSeconds = (timestamp) => {
        setUnlockTimestampInMs(timestamp);
        setUnlockTimestamp(Math.round(timestamp / 1000));
    };

    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
        return currentDate.getTime() < selectedDate.getTime();
    };

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...collaboratorList];
        list[index][name] = value;
        setCollaboratorList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = (index) => {
        const list = [...collaboratorList];
        list.splice(index, 1);
        setCollaboratorList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setCollaboratorList([...collaboratorList, { id: "", name: "", username: "", split: "", role: "", address: "", avatar: "" }]);
    };

    const setCollaboratorRole = (index, role) => {
        const list = [...collaboratorList];
        list[index]["role"] = role;
        setCollaboratorList(list);
    };

    const setCollaboratorInfo = async (user, index) => {
        const list = [...collaboratorList];
        list[index]["id"] = user.objectId;
        list[index]["name"] = user.name;
        list[index]["username"] = user.username;
        list[index]["address"] = user.ethAddress;
        list[index]["avatar"] = user.userInfo[0].avatar;
        setCollaboratorList(list);
        setFilteredUsers("");
    };

    const filterUsers = async (e) => {
        const keyword = e.target.value;
        if (keyword === "") {
            // If the text field is empty, show no users
            setFilteredUsers("");
        }
        setSearchedUsername(keyword);
    };

    const { fetch: fetchMatchingUsers } = useMoralisCloudFunction(
        "fetchMatchingUsers",
        { username: searchedUsername },
        {
            autoFetch: false,
        }
    );
    useEffect(() => {
        if (searchedUsername !== "") {
            fetchMatchingUsers({
                onSuccess: async (object) => {
                    setFilteredUsers(
                        await object.filter(function (userObj) {
                            return !collaboratorList.some(function (collaboratorObj) {
                                return userObj.username === collaboratorObj.username; // return the ones with equal id
                            });
                        })
                    );
                },
                onError: (error) => {
                    console.log("fetchMatchingUsers Error:", error);
                },
            });
        }
    }, [searchedUsername]);

    return (
        <div className="w-full">
            <p className="mb-10 font-tertiary text-5xl font-normal">PRICING & SPLITS</p>
            <div className="flex flex-col space-y-20 lg:w-full lg:max-w-[1150px] lg:space-x-10 lg:space-y-0 xl:space-x-20 lg:flex-row">
                {/* Collaborators Details */}
                <div className="lg:w-7/12 font-semibold font-secondary">
                    <div className="flex md:mb-6 gap-4">
                        <div className="w-full md:w-1/2 mb-6 md:mb-0">
                            <label htmlFor="nft-copies" className="block uppercase tracking-wide mb-1 text-sm">
                                NO. OF COPIES
                                <RequiredAsterisk />
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
                            <label htmlFor="individual-nft-price" className="block uppercase tracking-wide mb-1 text-sm">
                                PRICE OF EACH COPY
                                <RequiredAsterisk />
                                <span className="inline-block text-gray-500 text-xs font-normal lowercase ml-4">
                                    (approx. ₹{truncatedmaticINRPrice} or ${truncatedmaticUSDPrice})
                                </span>
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
                                placeholder="Enter price in MATIC"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <p className="mb-1 text-sm">
                            ADD COLLABORATORS AND SPLITS
                            <RequiredAsterisk />
                        </p>
                        <div className="flex flex-col gap-4 text-gray-700">
                            {collaboratorList.map((collaborator, index) => {
                                return (
                                    <div key={index} className="flex gap-4">
                                        {index == 0 ? (
                                            <div className="basis-1/2 relative">
                                                {collaborator.avatar && (
                                                    <div className="absolute flex items-center h-full ml-2">
                                                        <Image src={collaborator.avatar} height="30" width="30" className="rounded-full" />
                                                    </div>
                                                )}
                                                <input
                                                    className="bg-gray-100 dark:bg-[#272626] dark:text-light-100 dark:border-[#323232] w-full px-12 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777]"
                                                    id="username"
                                                    name="username"
                                                    type="text"
                                                    placeholder="Username"
                                                    value={collaborator.name}
                                                    readOnly
                                                    required
                                                />
                                            </div>
                                        ) : (
                                            <div className="basis-1/2 relative">
                                                {collaborator.username ? (
                                                    <>
                                                        {collaborator.avatar && (
                                                            <div className="absolute flex items-center h-full ml-2">
                                                                <Image src={collaborator.avatar} height="30" width="30" className="rounded-full" />
                                                            </div>
                                                        )}
                                                        <input
                                                            className="bg-gray-100 dark:bg-[#272626] dark:text-light-100 dark:border-[#323232] w-full px-12 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777]"
                                                            id="username"
                                                            name="username"
                                                            type="text"
                                                            placeholder="Username"
                                                            value={collaborator.name}
                                                            readOnly
                                                            required
                                                        />
                                                    </>
                                                ) : (
                                                    <input
                                                        className="dark:text-light-100 dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
                                                        id="username"
                                                        name="username"
                                                        type="text"
                                                        placeholder="Username"
                                                        // value={collaborator.username}
                                                        autoComplete="off"
                                                        onChange={(e) => {
                                                            filterUsers(e);
                                                        }}
                                                        required
                                                    />
                                                )}

                                                {!collaborator.username && filteredUsers ? (
                                                    <div className="absolute w-full">
                                                        {filteredUsers.length > 0 ? (
                                                            filteredUsers.map((user, idx) => (
                                                                <a key={user.objectId} className="flex flex-col basis-full">
                                                                    {filteredUsers.length === 1 ? (
                                                                        <button
                                                                            type="button"
                                                                            className="flex items-center rounded bg-light-100 dark:bg-dark-100 hover:text-light-100 dark:text-light-100 hover:bg-primary-100 dark:hover:bg-primary-100 py-2 px-3 justify-start text-start"
                                                                            onClick={() => {
                                                                                setCollaboratorInfo(user, index);
                                                                            }}
                                                                        >
                                                                            {user.userInfo[0] ? (
                                                                                <Image
                                                                                    src={user.userInfo[0].avatar}
                                                                                    height="30"
                                                                                    width="30"
                                                                                    className="rounded-full"
                                                                                />
                                                                            ) : (
                                                                                ""
                                                                            )}
                                                                            <span className="ml-2">{user.name}</span>
                                                                            <div>
                                                                                <span className="ml-2 text-xs font-normal">@{user.username}</span>
                                                                            </div>
                                                                        </button>
                                                                    ) : idx === 0 ? (
                                                                        <button
                                                                            type="button"
                                                                            className="flex items-center rounded-t bg-light-100 dark:bg-dark-100 hover:text-light-100 dark:text-light-100 hover:bg-primary-100 dark:hover:bg-primary-100 py-2 px-3 justify-start text-start"
                                                                            onClick={() => {
                                                                                setCollaboratorInfo(user, index);
                                                                            }}
                                                                        >
                                                                            {user.userInfo[0] ? (
                                                                                <Image
                                                                                    src={user.userInfo[0].avatar}
                                                                                    height="30"
                                                                                    width="30"
                                                                                    className="rounded-full"
                                                                                />
                                                                            ) : (
                                                                                ""
                                                                            )}
                                                                            <span className="ml-2">{user.name}</span>
                                                                            <div>
                                                                                <span className="ml-2 text-xs font-normal">@{user.username}</span>
                                                                            </div>
                                                                        </button>
                                                                    ) : filteredUsers.length === idx + 1 ? (
                                                                        <button
                                                                            type="button"
                                                                            className="flex items-center rounded-b bg-light-100 dark:bg-dark-100 hover:text-light-100 dark:text-light-100 hover:bg-primary-100 dark:hover:bg-primary-100 py-2 px-3 justify-start text-start"
                                                                            onClick={() => {
                                                                                setCollaboratorInfo(user, index);
                                                                            }}
                                                                        >
                                                                            {user.userInfo[0] ? (
                                                                                <Image
                                                                                    src={user.userInfo[0].avatar}
                                                                                    height="30"
                                                                                    width="30"
                                                                                    className="rounded-full"
                                                                                />
                                                                            ) : (
                                                                                ""
                                                                            )}
                                                                            <span className="ml-2">{user.name}</span>
                                                                            <div>
                                                                                <span className="ml-2 text-xs font-normal">@{user.username}</span>
                                                                            </div>
                                                                        </button>
                                                                    ) : (
                                                                        <button
                                                                            type="button"
                                                                            className="flex items-center bg-light-100 dark:bg-dark-100 hover:text-light-100 dark:text-light-100 hover:bg-primary-100 dark:hover:bg-primary-100 py-2 px-3 justify-start text-start"
                                                                            onClick={() => {
                                                                                setCollaboratorInfo(user, index);
                                                                            }}
                                                                        >
                                                                            {user.userInfo[0] ? (
                                                                                <Image
                                                                                    src={user.userInfo[0].avatar}
                                                                                    height="30"
                                                                                    width="30"
                                                                                    className="rounded-full"
                                                                                />
                                                                            ) : (
                                                                                ""
                                                                            )}
                                                                            <span className="ml-2">{user.name}</span>
                                                                            <div>
                                                                                <span className="ml-2 text-xs font-normal">@{user.username}</span>
                                                                            </div>
                                                                        </button>
                                                                    )}
                                                                </a>
                                                            ))
                                                        ) : (
                                                            <a key={"no"} className="flex flex-col basis-full">
                                                                <button
                                                                    type="button"
                                                                    className="bg-light-100 hover:bg-gray-200 dark:bg-dark-100 dark:text-light-100 py-2 px-6 justify-start text-start rounded"
                                                                >
                                                                    <span className="text-xs">No results found!</span>
                                                                </button>
                                                            </a>
                                                        )}
                                                    </div>
                                                ) : null}
                                            </div>
                                        )}

                                        <div className="basis-1/4">
                                            <input
                                                className="dark:bg-[#323232] dark:border-[#323232] dark:text-light-100 dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
                                                name="split"
                                                type="number"
                                                min={0}
                                                max={100}
                                                placeholder="Split %"
                                                value={collaborator.split}
                                                onChange={(e) => handleInputChange(e, index)}
                                                required
                                            />
                                        </div>

                                        <div className="basis-1/4">
                                            <CollaboratorRoleDropdown
                                                // TODO: Need to change the optionsArray by Final data @Pushpit07
                                                optionsArray={rolesArray}
                                                setCollaboratorRole={setCollaboratorRole}
                                                index={index}
                                            />
                                        </div>
                                        {/* Button to remove more collaborators */}
                                        {collaboratorList.length !== 1 && (
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

                        {/* Button to add more collaborators */}
                        {collaboratorList.length < 5 && (
                            <div className="flex mt-4 justify-start items-center">
                                <button
                                    type="button"
                                    className="rounded-full flex justify-center items-center w-8 h-8 bg-[#479E00] hover:bg-primary-300 text-white"
                                    onClick={handleAddClick}
                                >
                                    +
                                </button>
                                <span className="pl-3 font-normal text-sm">Add more Collaborators</span>
                            </div>
                        )}

                        <div className="flex w-full p-3 mt-6 rounded justify-center dark:text-gray-300 bg-light-300 dark:bg-dark-100 font-medium">
                            <div className="">
                                {collaboratorList.reduce((total, currentSplit) => (total = total + Number(currentSplit.split)), 0) === 100 ? (
                                    <span className="text-primary-200">
                                        <i className="fa-solid fa-circle-check"></i>
                                    </span>
                                ) : (
                                    <span className="text-error-200">
                                        <i className="fa-solid fa-circle-xmark"></i>
                                    </span>
                                )}
                                &nbsp;Total: {collaboratorList.reduce((total, currentSplit) => (total = total + Number(currentSplit.split)), 0)}%
                            </div>
                        </div>
                    </div>
                </div>

                {/* Royalty and Launch */}
                <div className="mt-10 lg:mt-14 lg:w-4/12 font-semibold font-secondary">
                    <div className="w-full mb-6">
                        <label htmlFor="resale-royalty-percentage" className="block uppercase tracking-wide mb-1 text-sm">
                            RESALE ROYALTY PERCENTAGE
                            <RequiredAsterisk />
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
                        <p className="mb-1 text-md">
                            SCHEDULE LAUNCH
                            <RequiredAsterisk />
                        </p>
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

                    {releaseNow ? (
                        <div className="flex text-xs font-normal dark:text-light-300">
                            Your music NFT will be available for buying/selling on the Musixverse marketplace as soon as you click the &quot;Create&quot;
                            button.
                        </div>
                    ) : (
                        <>
                            <div className="flex flex-col text-xs font-normal dark:text-light-300">
                                You can decide to launch your NFT on a later date. Your NFT will be created right now and will appear on the Musixverse
                                marketplace, but will not be available for buying/selling.
                                <div className="flex flex-col mt-5 text-base">
                                    <span className="text-sm mb-2">Your NFT will be available for buying/selling on:</span>

                                    <DatePicker
                                        selected={unlockTimestampInMs}
                                        onChange={(date) => changeTimesampToSeconds(date.getTime())}
                                        minDate={new Date()}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        filterTime={filterPassedTime}
                                        // withPortal
                                        fixedHeight
                                        showDisabledMonthNavigation
                                        disabledKeyboardNavigation
                                        showPopperArrow={false}
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Step3Form;
