import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useMoralis } from "react-moralis";
import DatePicker from "react-datepicker";
import Tooltip from "../../../layout/Tooltip/Tooltip";
import CollaboratorRoleDropdown from "./CollaboratorRoleDropdown";
import RequiredAsterisk from "../../../layout/RequiredAsterisk";
import LoadingContext from "../../../../store/loading-context";
import StatusContext from "../../../../store/status-context";
import { convertMaticToUSD, convertMaticToINR, truncatePrice } from "../../../utils/GetMarketPrice";
import { collaboratorRoles } from "../../../config/constants";

const Step4Form = ({
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
	verifiedBandsOfArtist,
	personalProfileCollaborator,
	chosenProfileOrBand,
	setChosenProfileOrBand,
	setAddCollaboratorModalOpen,
}) => {
	const { Moralis } = useMoralis();
	const [, setLoading] = useContext(LoadingContext);
	const [, , setSuccess, setError] = useContext(StatusContext);

	const [maticUSD, setMaticUSD] = useState("");
	const [maticINR, setMaticINR] = useState("");

	const [currentMaticUSD, setCurrentMaticUSD] = useState("");
	const [currentMaticINR, setCurrentMaticINR] = useState("");

	useEffect(() => {
		async function setCurrentPrices() {
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
	const handleSplitInputChange = (e, index) => {
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

	const setCollaboratorRole = (index, role) => {
		const list = [...collaboratorList];
		list[index]["role"] = role;
		setCollaboratorList(list);
	};

	const setBandMembersAsCollaborators = async (band) => {
		setChosenProfileOrBand(band);

		const bandMembersList = [];
		band.bandMembers.map((bandMember) => {
			band.updatedBandMembersList.map((updatedBandMember) => {
				if (bandMember.userId === updatedBandMember._id) {
					updatedBandMember.role = bandMember.role;
					bandMembersList.push(updatedBandMember);
				}
			});
		});

		const listOfMembers = [];
		for (let i in bandMembersList) {
			listOfMembers.push({
				id: bandMembersList[i]._id,
				name: bandMembersList[i].name,
				username: bandMembersList[i].username,
				split: "",
				role: bandMembersList[i].role || "Composer",
				address: bandMembersList[i].ethAddress,
				avatar: bandMembersList[i].avatar,
				hasAcceptedCollaboratorInvite: true,
			});
		}
		setCollaboratorList(listOfMembers);
	};

	const router = useRouter();
	const { draft } = router.query;
	const sendCollaboratorInvitationEmailToArtistWhoHasNotAcceptedInvitation = async (collaborator) => {
		setLoading(true);

		try {
			await Moralis.Cloud.run("sendNftCollaboratorInvitationEmailToArtist", { draftId: draft, collaborator: collaborator }).then(() => {
				setSuccess((prevState) => ({
					...prevState,
					title: "Collaborator Invitation Sent",
					message: `Collaborator invite email was sent successfully to ${collaborator.name}!`,
					showSuccessBox: true,
				}));
			});
		} catch (error) {
			setError((prevState) => ({
				...prevState,
				title: "Collaborator Invitation Error",
				message: "There was a problem in sending collaborator invitation. Please try again.",
				showErrorBox: true,
			}));
			console.log("sendNftCollaboratorInvitationEmailToArtist Error:", error);
		}

		setLoading(false);
	};

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
									message={
										"You can create several NFT copies of the same song. Each copy would be unique and will be traded separately. Musixverse recommends keeping the number of copies low to maintain exclusivity."
									}
									tooltipLocation={"bottom"}
								/>
							</label>
							<input
								className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-500 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-500"
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
									tooltipLocation={"bottom"}
								/>
							</label>

							<input
								className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-500 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-500"
								id="individual-nft-price"
								value={nftPrice}
								onChange={(e) => {
									setNftPrice(e.target.value);
								}}
								onBlur={(e) => {
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

					<p className="mt-6 text-sm">
						Do you wish to use your personal profile or a band profile to create this music NFT?
						<RequiredAsterisk />
					</p>

					<div className="grid grid-cols-3 items-center">
						<div className="flex items-center mt-2">
							<input
								id="profile"
								type="radio"
								name="profileChooser"
								className="hidden"
								onClick={(e) => {
									setChosenProfileOrBand({ objectId: "profile" });
									setCollaboratorList(personalProfileCollaborator);
								}}
								checked={chosenProfileOrBand.objectId === "profile"}
							/>
							<label htmlFor="profile" className="flex items-center text-sm font-normal cursor-pointer font-secondary">
								<span className="inline-block w-6 h-6 mr-3 border-2 rounded-full border-[#363636] flex-no-shrink"></span>
								<div className="relative rounded h-8 w-8">
									<Image
										src={personalProfileCollaborator[0].avatar}
										layout="fill"
										objectFit="contain"
										alt="artist's avatar"
										className="rounded-full"
									/>
								</div>
								<p className="ml-1">{personalProfileCollaborator[0].name}</p>
							</label>
						</div>

						{verifiedBandsOfArtist &&
							verifiedBandsOfArtist.length > 0 &&
							verifiedBandsOfArtist.map((band) => {
								return (
									<div className="flex items-center mt-2" key={band.username}>
										<input
											id={`band-${band.username}`}
											type="radio"
											name="profileChooser"
											className="hidden"
											onClick={(e) => setBandMembersAsCollaborators(band)}
											checked={chosenProfileOrBand.objectId !== "profile" && chosenProfileOrBand.objectId === band.objectId}
											data-band-name={band.name}
											data-band-id={band.objectId}
										/>
										<label
											htmlFor={`band-${band.username}`}
											className="flex items-center text-sm font-normal cursor-pointer font-secondary"
										>
											<span className="inline-block w-6 h-6 mr-3 border-2 rounded-full border-[#363636] flex-no-shrink"></span>
											<div className="relative rounded h-8 w-8">
												<Image src={band.avatar} layout="fill" objectFit="contain" alt="band's avatar" className="rounded-full" />
											</div>
											<p className="ml-1">{band.name}</p>
										</label>
									</div>
								);
							})}
					</div>

					<div>
						<p className="mt-8 mb-2 text-sm">
							ADD COLLABORATORS AND SPLITS
							<RequiredAsterisk />
							<Tooltip
								labelText={<i className="pl-4 fa-solid fa-circle-info"></i>}
								message={"You can split all the earnings from this NFT with the collaborators using Musixverse's split feature."}
								tooltipLocation={"bottom"}
							/>
						</p>
						<div className="flex flex-col gap-4 text-gray-700">
							{collaboratorList.map((collaborator, index) => {
								return (
									<div key={index} className="flex gap-2">
										<div className="flex flex-col self-center">
											{collaborator.hasAcceptedCollaboratorInvite ? (
												<Tooltip
													labelText={
														<span className="text-primary-600 text-xl">
															<i className="fa-solid fa-circle-check"></i>
														</span>
													}
													message={"Artist has accepted collaborator invite."}
													tooltipLocation={"left"}
												/>
											) : (
												<span
													onClick={() => {
														sendCollaboratorInvitationEmailToArtistWhoHasNotAcceptedInvitation(collaborator);
													}}
												>
													<Tooltip
														labelText={
															<span className="text-error-600 text-xl">
																<i className="fa-solid fa-circle-xmark"></i>
															</span>
														}
														message={"Artist hasn't accepted collaborator invite yet.\nClick to send invite email again."}
														tooltipLocation={"left"}
													/>
												</span>
											)}
										</div>
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
												{collaborator.username && (
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
												)}
											</div>
										)}

										<div className="basis-1/5">
											<input
												className="dark:bg-[#323232] dark:border-[#323232] dark:text-light-100 dark:focus:border-primary-500 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-500"
												name="split"
												type="number"
												min={0}
												max={100}
												placeholder="Split %"
												value={collaborator.split}
												onChange={(e) => handleSplitInputChange(e, index)}
												required
											/>
										</div>

										<div className="basis-2/5">
											<CollaboratorRoleDropdown
												optionsArray={collaboratorRoles}
												setCollaboratorRole={setCollaboratorRole}
												index={index}
												collaboratorList={collaboratorList}
											/>
										</div>

										{/* Button to remove more collaborators */}
										{index !== 0 ? (
											<div className="flex justify-center items-center">
												<div
													onClick={() => handleRemoveClick(index)}
													className="w-8 h-8 flex justify-center items-center rounded-lg transition-all duration-200 cursor-pointer dark:text-light-100 hover:bg-zinc-500/20"
												>
													<i className="fa-solid fa-xmark"></i>
												</div>
											</div>
										) : (
											collaboratorList.length !== 1 && (
												<div className="flex justify-center items-center">
													<div className="w-8 h-8 flex justify-center items-center"></div>
												</div>
											)
										)}
									</div>
								);
							})}
						</div>

						{/* Button to add more collaborators */}
						{collaboratorList && collaboratorList.length < 10 && (
							<div className="flex items-center justify-start mt-4">
								<button
									type="button"
									className="rounded-full flex justify-center items-center w-8 h-8 bg-[#479E00] hover:bg-primary-700 text-white"
									onClick={() => setAddCollaboratorModalOpen(true)}
								>
									+
								</button>
								<span className="pl-3 text-sm font-normal">Add more Collaborators</span>
							</div>
						)}

						<div className="w-full flex justify-center space-x-1 p-3 mt-6 font-medium rounded dark:text-gray-300 bg-light-300 dark:bg-dark-600">
							{collaboratorList.reduce((total, currentSplit) => (total = total + Number(currentSplit.split)), 0) === 100 ? (
								<span className="text-primary-600">
									<i className="fa-solid fa-circle-check"></i>
								</span>
							) : (
								<span className="text-error-600">
									<i className="fa-solid fa-circle-xmark"></i>
								</span>
							)}
							&nbsp;<span>Total: {collaboratorList.reduce((total, currentSplit) => (total = total + Number(currentSplit.split)), 0)}%</span>
						</div>

						<p className="text-sm text-[#777777] font-normal mt-2">
							Can&apos;t find your collaborator here? Invite them to Musixverse-&nbsp;
							<a onClick={() => setInvitationModalOpen(true)} className="cursor-pointer text-primary-600 hover:underline">
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
							<Tooltip
								labelText={<i className="pl-4 fa-solid fa-circle-info"></i>}
								message={
									"Resale royalty entitles artists to a share of the sale price when their NFT is resold. We recommend keeping the resale royalty percentage between 1% to 10%."
								}
								tooltipLocation={"bottom"}
							/>
						</label>
						<input
							className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-500 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-500"
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

export default Step4Form;
