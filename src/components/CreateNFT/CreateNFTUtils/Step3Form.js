import { useState, useEffect } from "react";
import Image from "next/image";
import { useMoralisCloudFunction } from "react-moralis";
import DatePicker from "react-datepicker";
import Tooltip from "../../../layout/Tooltip/Tooltip";
import CollaboratorRoleDropdown from "./CollaboratorRoleDropdown";
import RequiredAsterisk from "../../../layout/RequiredAsterisk";
import { convertMaticToUSD, convertMaticToINR, truncatePrice } from "../../../utils/GetMarketPrice";

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
	unlockTimestamp,
	setUnlockTimestamp,
	setInvitationModalOpen,
}) => {
	const rolesArray = [
		"Composer",
		"Instrumentalist",
		"Lyricist",
		"Mastering Engineer",
		"Mentor",
		"Mixer",
		"Mixing Engineer",
		"Music Arranger",
		"Music Director",
		"Music Manager",
		"Music Producer",
		"Musician",
		"Recording Engineer",
		"Remixer",
		"Singer",
		"Songwriter",
		"Studio Engineer",
		"Vocalist",
		"Writer",
	];

	const [filteredUsers, setFilteredUsers] = useState("");
	const [usernameEntered, setUsernameEntered] = useState("");
	const [searchedUsername, setSearchedUsername] = useState("");

	const [maticUSD, setMaticUSD] = useState("");
	const [maticINR, setMaticINR] = useState("");

	const [currentMaticUSD,setCurrentMaticUSD] = useState("");
	const [currentMaticINR,setCurrentMaticINR] = useState("");

	useEffect(() => {
		async function setCurrentPrices(){
			setCurrentMaticUSD(await convertMaticToUSD(1));
			setCurrentMaticINR(await convertMaticToINR(1));
		}
		setCurrentPrices();
	}, []);

	useEffect(() => {
		async function setPrices() {
			setMaticUSD(await convertMaticToUSD(nftPrice));
			setMaticINR(await convertMaticToINR(nftPrice));
		}
		setPrices();
	}, [nftPrice]);

	const truncatedmaticUSDPrice = truncatePrice(maticUSD);
	const truncatedmaticINRPrice = truncatePrice(maticINR);

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
		setCollaboratorList([...collaboratorList, { id: "", name: "", username: "", split: "", role: "Composer", address: "", avatar: "" }]);
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
			<p className="mb-10 text-5xl font-normal font-tertiary">PRICING & SPLITS</p>
			<div className="flex flex-col space-y-20 lg:w-full lg:space-x-10 lg:space-y-0 xl:space-x-20 lg:flex-row">
				{/* Collaborators Details */}
				<div className="font-semibold lg:w-7/12 font-secondary">
					<div className="flex gap-4 md:mb-6">
						<div className="w-full mb-6 md:w-1/2 md:mb-0">
							<label htmlFor="nft-copies" className="block mb-1 text-sm tracking-wide uppercase">
								NO. OF COPIES
								<RequiredAsterisk />
								<Tooltip
									labelText={<i className="pl-4 fa-solid fa-circle-info"></i>}
									message={"You can create several NFT copies of the same song. Each copy would be unique and will be traded separately. Musixverse recommends keeping the number of copies low to maintain exclusivity."}
									tooltipLocation={"right"}
								/>
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
								max={100}
								step="1"
								placeholder="No. of copies"
								required
							/>
						</div>
						<div className="w-full md:w-1/2">
							<label htmlFor="individual-nft-price" className="block mb-1 text-sm tracking-wide uppercase">
								PRICE OF EACH COPY
								<RequiredAsterisk />
								<Tooltip
									labelText={<i className="pl-4 fa-solid fa-circle-info"></i>}
									message={`1 MATIC = $${currentMaticUSD} or ₹${currentMaticINR}`}
									tooltipLocation={"right"}
								/>
							</label>

							<input
								className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
								id="individual-nft-price"
								value={nftPrice}
								onChange={(e) => {
									setNftPrice(e.target.value ? parseFloat(e.target.value).toString() : "");
								}}
								type="number"
								min={0.01}
								step="0.01"
								placeholder="Enter price in MATIC"
								required
							/>
							<p className="inline-block text-xs font-normal text-gray-500 lowercase">
								(approx. ₹{truncatedmaticINRPrice} or ${truncatedmaticUSDPrice})
							</p>
						</div>
					</div>

					<div>
						<p className="mb-1 text-sm">
							ADD COLLABORATORS AND SPLITS
							<RequiredAsterisk />
							<Tooltip
								labelText={<i className="pl-4 fa-solid fa-circle-info"></i>}
								message={"You can split all the earnings from this NFT with the collaborators using the Musixverse's split feature."}
								tooltipLocation={"right"}
							/>
						</p>
						<div className="flex flex-col gap-4 text-gray-700">
							{collaboratorList.map((collaborator, index) => {
								return (
									<div key={index} className="flex gap-4">
										{index == 0 ? (
											<div className="relative basis-1/2">
												{collaborator.avatar && (
													<div className="absolute flex items-center h-full ml-2">
														<Image
															src={collaborator.avatar}
															height="30"
															width="30"
															alt="collaborator's avatar"
															className="rounded-full"
														/>
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
											<div className="relative basis-1/2">
												{collaborator.username ? (
													<>
														{collaborator.avatar && (
															<div className="absolute flex items-center h-full ml-2">
																<Image
																	src={collaborator.avatar}
																	height="30"
																	width="30"
																	alt="collaborator's avatar"
																	className="rounded-full"
																/>
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
														value={usernameEntered}
														autoComplete="off"
														onChange={(e) => {
															setUsernameEntered(e.target.value);
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
																			className="flex items-center justify-start px-3 py-2 rounded bg-light-100 dark:bg-dark-100 hover:text-light-100 dark:text-light-100 hover:bg-primary-100 dark:hover:bg-primary-100 text-start"
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
																					alt="user's avatar"
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
																			className="flex items-center justify-start px-3 py-2 rounded-t bg-light-100 dark:bg-dark-100 hover:text-light-100 dark:text-light-100 hover:bg-primary-100 dark:hover:bg-primary-100 text-start"
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
																					alt="user's avatar"
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
																			className="flex items-center justify-start px-3 py-2 rounded-b bg-light-100 dark:bg-dark-100 hover:text-light-100 dark:text-light-100 hover:bg-primary-100 dark:hover:bg-primary-100 text-start"
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
																					alt="user's avatar"
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
																			className="flex items-center justify-start px-3 py-2 bg-light-100 dark:bg-dark-100 hover:text-light-100 dark:text-light-100 hover:bg-primary-100 dark:hover:bg-primary-100 text-start"
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
																					alt="user's avatar"
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
																	onClick={() => {
																		setInvitationModalOpen(true);
																		setUsernameEntered("");
																		setSearchedUsername("");
																	}}
																	className="justify-start px-6 py-3 rounded bg-light-100 hover:bg-gray-200 dark:bg-dark-100 dark:text-light-100 text-start"
																>
																	<span className="text-xs">
																		No results found.&nbsp;&nbsp;
																		<a className="cursor-pointer text-primary-200 hover:underline">
																			Send an Invite <i className="fa-solid fa-arrow-right"></i>
																		</a>
																	</span>
																</button>
															</a>
														)}
													</div>
												) : null}
											</div>
										)}

										<div className="basis-1/5">
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

										<div className="basis-2/5">
											<CollaboratorRoleDropdown
												// TODO: Need to change the optionsArray by Final data @Pushpit07
												optionsArray={rolesArray}
												setCollaboratorRole={setCollaboratorRole}
												index={index}
												collaboratorList={collaboratorList}
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
							<div className="flex items-center justify-start mt-4">
								<button
									type="button"
									className="rounded-full flex justify-center items-center w-8 h-8 bg-[#479E00] hover:bg-primary-300 text-white"
									onClick={handleAddClick}
								>
									+
								</button>
								<span className="pl-3 text-sm font-normal">Add more Collaborators</span>
							</div>
						)}

						<div className="flex justify-center w-full p-3 mt-6 font-medium rounded dark:text-gray-300 bg-light-300 dark:bg-dark-100">
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

						<p className="text-sm text-[#777777] font-normal mt-2">
							Can&apos;t find your collaborator here? Invite them to Musixverse-&nbsp;
							<a onClick={() => setInvitationModalOpen(true)} className="cursor-pointer text-primary-200 hover:underline">
								Send an invite
							</a>
						</p>
					</div>
				</div>

				{/* Royalty and Launch */}
				<div className="mt-10 font-semibold lg:mt-14 lg:w-4/12 font-secondary">
					<div className="w-full mb-6">
						<label htmlFor="resale-royalty-percentage" className="block mb-1 text-sm tracking-wide uppercase">
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
									checked={releaseNow}
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
									checked={!releaseNow}
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
									<span className="mb-2 text-sm">Your NFT will be available for buying/selling on:</span>

									<DatePicker
										selected={unlockTimestamp}
										onChange={(date) => setUnlockTimestamp(date.getTime())}
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
