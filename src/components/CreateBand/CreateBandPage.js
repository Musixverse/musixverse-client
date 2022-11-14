import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import RequiredAsterisk from "../../layout/RequiredAsterisk";
import BandButtons from "./CreateBandUtils/BandButtons";
import SelectAvatar from "../Registration/ArtistRegUtils/SelectAvatar";
import SendInviteModal from "../../layout/Modal/SendInviteModal";
import BandCreatedSuccessfullyModal from "./CreateBandUtils/BandCreatedSuccessfullyModal";
import Tooltip from "../../layout/Tooltip/Tooltip";
import LoadingContext from "../../../store/loading-context";
import StatusContext from "../../../store/status-context";
import { isBandUsernameValidAndAvailable } from "../../utils/Validate";
import { defaultAvatarUrls } from "../../config/constants";

const CreateBandPage = () => {
	const { user } = useMoralis();
	const [, setLoading] = useContext(LoadingContext);
	const [, , , setError] = useContext(StatusContext);

	const [bandName, setBandName] = useState("");
	const [bandUsername, setBandUsername] = useState("");
	const [bandDescription, setBandDescription] = useState("");
	const [avatar, setAvatar] = useState(defaultAvatarUrls[0]);
	const [bandMembers, setBandMembers] = useState([{ userId: "", name: "", username: "", role: "", address: "", avatar: "", hasAcceptedBandInvite: false }]);

	// Invite artist modal states
	const [isInvitationModalOpen, setInvitationModalOpen] = useState(false);
	const [invitedArtistEmail, setInvitedArtistEmail] = useState("");
	const [isBandCreatedSuccessfullyModalOpen, setIsBandCreatedSuccessfullyModalOpen] = useState(false);

	// Search band member states
	const [filteredUsers, setFilteredUsers] = useState("");
	const [usernameEntered, setUsernameEntered] = useState("");
	const [searchedUsername, setSearchedUsername] = useState("");

	// handle input change
	const handleInputChange = (e, index) => {
		const { name, value } = e.target;
		const list = [...bandMembers];
		list[index][name] = value;
		setBandMembers(list);
	};

	// handle click event of the Remove button
	const handleRemoveMemberClick = (index) => {
		const list = [...bandMembers];
		list.splice(index, 1);
		setBandMembers(list);
	};

	// handle click event of the Add button
	const handleAddMemberClick = () => {
		setBandMembers([...bandMembers, { userId: "", name: "", username: "", role: "", address: "", avatar: "", hasAcceptedBandInvite: false }]);
	};

	const setBandMemberInfo = async (user, index) => {
		const list = [...bandMembers];
		list[index]["userId"] = user.objectId;
		list[index]["name"] = user.name;
		list[index]["username"] = user.username;
		list[index]["address"] = user.ethAddress;
		list[index]["avatar"] = user.userInfo[0].avatar;
		setBandMembers(list);
		setFilteredUsers("");
		setUsernameEntered("");
		setSearchedUsername("");
	};

	const filterUsers = async (e) => {
		const keyword = e.target.value;
		if (keyword === "") {
			// If the text field is empty, show no users
			setFilteredUsers("");
		}
		setSearchedUsername(keyword);
	};

	const { fetch: fetchMatchingVerifiedArtists } = useMoralisCloudFunction(
		"fetchMatchingVerifiedArtists",
		{ username: searchedUsername },
		{
			autoFetch: false,
		}
	);
	useEffect(() => {
		if (searchedUsername !== "") {
			fetchMatchingVerifiedArtists({
				onSuccess: async (object) => {
					setFilteredUsers(
						await object.filter(function (userObj) {
							return !bandMembers.some(function (collaboratorObj) {
								return userObj.username === collaboratorObj.username; // return the ones with equal id
							});
						})
					);
				},
				onError: (error) => {
					console.log("fetchMatchingVerifiedArtists Error:", error);
				},
			});
		}
	}, [searchedUsername]);

	// Adding logged in user as default to bandMembers array state
	const { fetch: fetchUserInfoForAddingToBand } = useMoralisCloudFunction(
		"fetchUserInfoForAddingToBand",
		{ userId: user ? user.id : "" },
		{
			autoFetch: false,
		}
	);
	useEffect(() => {
		if (user) {
			fetchUserInfoForAddingToBand({
				onSuccess: async (object) => {
					setBandMembers([
						{
							userId: object.objectId,
							name: object.name,
							username: object.username,
							role: "",
							address: object.ethAddress,
							avatar: object.avatar,
							hasAcceptedBandInvite: true,
						},
					]);
				},
				onError: (error) => {
					console.log("fetchUserInfoForAddingToBand Error:", error);
				},
			});
		}
	}, [user, fetchUserInfoForAddingToBand]);

	// Create Band
	const { fetch: createBand } = useMoralisCloudFunction(
		"createBand",
		{ bandName: bandName, bandUsername: bandUsername, bandDescription: bandDescription, avatar: avatar, bandMembers: bandMembers },
		{ autoFetch: false }
	);
	const attemptBandCreation = async () => {
		// USERNAME CHECK
		const usernameCheck = await isBandUsernameValidAndAvailable(bandUsername);
		if (usernameCheck.status === false) {
			setError({
				title: usernameCheck.title || "Invalid credentials!",
				message: usernameCheck.message,
				showErrorBox: true,
			});
			return;
		}

		for (let idx in bandMembers) {
			if (bandMembers[idx].userId === "" || bandMembers[idx].role === "" || bandMembers[idx].address === "") {
				setError({
					title: "Invalid member details!",
					message: "Please select user carefully from the dropdown",
					showErrorBox: true,
				});
				return;
			}
		}

		setLoading(true);
		await createBand({
			onSuccess: async (object) => {
				setIsBandCreatedSuccessfullyModalOpen(true);
				setLoading(false);
			},
			onError: (error) => {
				setLoading(false);
				console.log("createBand Error:", error);
			},
		});
	};

	return (
		<>
			<div className="w-full flex flex-col items-center justify-center bg-light-200 dark:bg-dark-800">
				<div className="w-full max-w-[1920px] flex flex-col lg:flex-row items-center justify-center pt-36 pb-32 lg:pt-36 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
					<form
						onSubmit={async (e) => {
							e.preventDefault();
							await attemptBandCreation();
						}}
						className="w-full"
					>
						<div className="w-full rounded-2xl backdrop-blur-xl bg-light-100 dark:bg-dark-600 min-h-full sm:p-14 p-10 lg:pb-10">
							<div className="w-full">
								<p className="font-tertiary text-5xl">CREATE BAND</p>
							</div>

							<div className="w-full grid lg:grid-cols-3">
								<div className="w-full col-span-1 mt-8 font-semibold font-secondary">
									<p className="text-sm">
										BAND NAME
										<RequiredAsterisk />
									</p>
									<input
										type={"text"}
										value={bandName}
										onChange={(e) => setBandName(e.target.value)}
										className="w-full px-2 py-1 mt-1 border-2 border-[#777777] rounded-md shadow-sm outline-none focus:border-primary-500 focus:dark:border-primary-500 dark:bg-[#323232] dark:border-[#323232]"
										required
									></input>

									<p className="text-sm mt-4">
										USERNAME
										<RequiredAsterisk />
									</p>
									<input
										type={"text"}
										value={bandUsername}
										onChange={(e) => setBandUsername(e.target.value)}
										className="w-full px-2 py-1 mt-1 border-2 border-[#777777] rounded-md shadow-sm outline-none focus:border-primary-500 focus:dark:border-primary-500 dark:bg-[#323232] dark:border-[#323232]"
										required
									></input>
									<p className="text-[#777777] mt-1 font-normal text-xs">This will be the username of your band on Musixverse</p>

									<div className="flex flex-col flex-1 mt-6 space-y-2 sm:space-y-4">
										<div className="flex flex-col w-full space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
											<div className="flex-1 text-sm font-semibold md:text-base">
												<p className="text-sm">DESCRIPTION</p>
												<textarea
													value={bandDescription}
													onChange={(e) => setBandDescription(e.target.value)}
													className={
														"mt-1 dark:bg-[#323232] dark:focus:bg-[#1a1a1a] dark:border-[#323232] w-full p-2 border-[2px] border-[#777777] focus:border-[2px] focus:border-primary-500 dark:focus:border-primary-500 rounded focus:outline-none focus:shadow-none dark:focus:text-primary-500 font-normal resize-none"
													}
													name="bandDescription"
													rows="8"
												></textarea>
												<p className="text-[#777777] font-normal text-xs">Feel free to provide a description of your band</p>
											</div>
										</div>
									</div>
								</div>

								<div className="w-full col-span-2 pl-32">
									<SelectAvatar defaultAvatarUrls={defaultAvatarUrls} avatar={avatar} setAvatar={setAvatar} />

									<div className="mt-10 text-base">
										<span className="font-tertiary text-3xl">ADD MEMBERS</span>
										<Tooltip
											labelText={<i className="pl-3 fa-solid fa-circle-info"></i>}
											message={
												"Please note that the band members must have a verified artist profile before they can be added to your band."
											}
											tooltipLocation={"right"}
										/>
										<p className="flex justify-start text-sm text-[#777777]">
											We will send band invite emails to all members once you click the Create button.
										</p>
										<p className="flex justify-start text-sm text-[#777777]">
											You will not be able to create NFTs until all band members have verified their band invite email.
										</p>
									</div>

									<div className="flex flex-col gap-4 text-gray-700 mt-4">
										{bandMembers.map((member, index) => {
											return (
												<div key={index} className="flex gap-2">
													{index == 0 ? (
														<div className="relative basis-1/2">
															{member.avatar && (
																<div className="absolute flex items-center h-full ml-2">
																	<Image
																		src={member.avatar}
																		height="30"
																		width="30"
																		alt="member's avatar"
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
																value={member.name}
																readOnly
																required
															/>
														</div>
													) : (
														<div className="relative basis-1/2">
															{member.username ? (
																<>
																	{member.avatar && (
																		<div className="absolute flex items-center h-full ml-2">
																			<Image
																				src={member.avatar}
																				height="30"
																				width="30"
																				alt="member's avatar"
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
																		value={member.name}
																		readOnly
																		required
																	/>
																</>
															) : (
																<input
																	className="dark:text-light-100 dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-500 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-500"
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

															{!member.username && filteredUsers ? (
																<div className="absolute w-full">
																	{filteredUsers.length > 0 ? (
																		filteredUsers.map((user, idx) => (
																			<a key={user.objectId} className="flex flex-col basis-full">
																				{filteredUsers.length === 1 ? (
																					<button
																						type="button"
																						className="flex items-center justify-start px-3 py-2 rounded bg-zinc-100 dark:bg-dark-600 hover:text-light-100 dark:text-light-100 hover:bg-primary-500 dark:hover:bg-primary-500 text-start"
																						onClick={() => {
																							setBandMemberInfo(user, index);
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
																						className="flex items-center justify-start px-3 py-2 rounded-t bg-zinc-100 dark:bg-dark-600 hover:text-light-100 dark:text-light-100 hover:bg-primary-500 dark:hover:bg-primary-500 text-start"
																						onClick={() => {
																							setBandMemberInfo(user, index);
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
																						className="flex items-center justify-start px-3 py-2 rounded-b bg-zinc-100 dark:bg-dark-600 hover:text-light-100 dark:text-light-100 hover:bg-primary-500 dark:hover:bg-primary-500 text-start"
																						onClick={() => {
																							setBandMemberInfo(user, index);
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
																						className="flex items-center justify-start px-3 py-2 bg-zinc-100 dark:bg-dark-600 hover:text-light-100 dark:text-light-100 hover:bg-primary-500 dark:hover:bg-primary-500 text-start"
																						onClick={() => {
																							setBandMemberInfo(user, index);
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
																				className="justify-start px-6 py-3 rounded bg-zinc-100 hover:bg-gray-200 dark:bg-dark-600 dark:text-light-100 text-start"
																			>
																				<span className="text-xs">
																					No results found.&nbsp;&nbsp;
																					<a className="cursor-pointer text-primary-600 hover:underline">
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

													<div className="basis-1.5/5">
														<input
															className="dark:bg-[#323232] dark:border-[#323232] dark:text-light-100 dark:focus:border-primary-500 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-500"
															name="role"
															type="text"
															placeholder="Role. Eg. Drummer"
															value={member.role}
															onChange={(e) => handleInputChange(e, index)}
															required
														/>
													</div>

													{/* Button to remove band members */}
													{bandMembers.length !== 1 && index !== 0 && (
														<div className="flex justify-center items-center">
															<div
																onClick={() => handleRemoveMemberClick(index)}
																className="w-8 h-8 flex justify-center items-center rounded-lg transition-all duration-200 cursor-pointer dark:text-light-100 hover:bg-zinc-500/20 "
															>
																<i className="fa-solid fa-xmark"></i>
															</div>
														</div>
													)}
												</div>
											);
										})}
									</div>

									{/* Button to add more members */}
									{bandMembers.length < 10 && (
										<div className="flex items-center justify-start mt-4">
											<button
												type="button"
												className="rounded-full flex justify-center items-center w-8 h-8 bg-primary-500 hover:bg-primary-600 text-white"
												onClick={handleAddMemberClick}
											>
												+
											</button>
											<span className="pl-3 text-sm font-normal">Add more members</span>
										</div>
									)}

									<p className="text-xs text-[#777777] font-normal mt-6">
										Can&apos;t find your fellow band member here? Invite them to Musixverse-&nbsp;
										<a onClick={() => setInvitationModalOpen(true)} className="cursor-pointer text-primary-600 hover:underline">
											Send an invite
										</a>
									</p>
								</div>
							</div>
						</div>

						<BandButtons />
					</form>
				</div>
			</div>

			<SendInviteModal
				isOpen={isInvitationModalOpen}
				setOpen={setInvitationModalOpen}
				onClose={() => setInvitedArtistEmail("")}
				invitedArtistEmail={invitedArtistEmail}
				onEmailChange={(value) => setInvitedArtistEmail(value)}
			/>
			<BandCreatedSuccessfullyModal
				isOpen={isBandCreatedSuccessfullyModalOpen}
				setOpen={setIsBandCreatedSuccessfullyModalOpen}
				bandUsername={bandUsername}
			/>
		</>
	);
};

export default CreateBandPage;
