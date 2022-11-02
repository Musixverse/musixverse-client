import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useMoralisCloudFunction } from "react-moralis";
import LoadingContext from "../../../../store/loading-context";
import StatusContext from "../../../../store/status-context";
import Modal from "../../../layout/Modal/Modal";
import { saveNftCreationProgress } from "./SaveNftCreationProgress";

const AddCollaboratorModal = ({ isOpen, setOpen, nftDraftMetadata, collaboratorList, setCollaboratorList, setInvitationModalOpen }) => {
	const [, setLoading] = useContext(LoadingContext);
	const [, , setSuccess, setError] = useContext(StatusContext);

	const [collaboratorToAdd, setCollaboratorToAdd] = useState([
		{ id: "", name: "", username: "", split: "", role: "Composer", address: "", avatar: "", hasAcceptedCollaboratorInvite: false },
	]);

	const router = useRouter();
	const { draft } = router.query;
	const { fetch: addCollaborator } = useMoralisCloudFunction("addCollaborator", { draftId: draft, collaborator: collaboratorToAdd[0] }, { autoFetch: false });

	const addSelectedCollaborator = async (e) => {
		e.preventDefault();

		setLoading(true);
		await addCollaborator({
			onSuccess: async (object) => {
				setSuccess((prevState) => ({
					...prevState,
					title: "Collaborator Added",
					message: "Selected Collaborator was added successfully!",
					showSuccessBox: true,
				}));

				await saveNftCreationProgress(nftDraftMetadata, draft);
				setCollaboratorList((prevState) => [...prevState, collaboratorToAdd[0]]);
				handleRemoveMemberClick();
			},
			onError: (error) => {
				setError((prevState) => ({
					...prevState,
					title: "Collaborator addition failed",
					message: "There was a problem in adding the collaborator. Please try again.",
					showErrorBox: true,
				}));
				console.log("addCollaborator Error:", error);
			},
		});

		setLoading(false);
		setOpen(false);
	};

	// Search band collaborator states
	const [filteredUsers, setFilteredUsers] = useState("");
	const [usernameEntered, setUsernameEntered] = useState("");
	const [searchedUsername, setSearchedUsername] = useState("");

	// handle click event of the Remove button
	const handleRemoveMemberClick = () => {
		setCollaboratorToAdd([{ id: "", name: "", username: "", split: "", role: "Composer", address: "", avatar: "", hasAcceptedCollaboratorInvite: false }]);
	};

	const setCollaboratorInfo = async (user, index) => {
		const list = [...collaboratorToAdd];
		list[index]["id"] = user.objectId;
		list[index]["name"] = user.name;
		list[index]["username"] = user.username;
		list[index]["address"] = user.ethAddress;
		list[index]["avatar"] = user.userInfo[0].avatar;
		setCollaboratorToAdd(list);
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
							return !collaboratorList.some(function (collaboratorObj) {
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

	return (
		<Modal
			isOpen={isOpen}
			image={
				<div className="mx-auto flex items-center relative justify-center h-24 w-24 text-4xl">
					<i className="fa-solid fa-user-plus"></i>
				</div>
			}
			title={"Add Collaborator"}
			content={
				<div>
					<form onSubmit={addSelectedCollaborator}>
						<div className="w-full flex justify-start">
							<div className="w-full flex flex-col gap-4 text-gray-700 mt-4">
								{collaboratorToAdd.map((collaborator, index) => {
									return (
										<div key={index} className="w-full flex">
											<div className="relative w-full">
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

												{!collaborator.username && filteredUsers ? (
													<div className="absolute w-full">
														{filteredUsers.length > 0 ? (
															filteredUsers.map((user, idx) => (
																<a key={user.objectId} className="flex flex-col basis-full">
																	{filteredUsers.length === 1 ? (
																		<button
																			type="button"
																			className="flex items-center justify-start px-3 py-2 rounded bg-zinc-100 dark:bg-dark-600 hover:text-light-100 dark:text-light-100 hover:bg-primary-500 dark:hover:bg-primary-500 text-start"
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
																			className="flex items-center justify-start px-3 py-2 rounded-t bg-zinc-100 dark:bg-dark-600 hover:text-light-100 dark:text-light-100 hover:bg-primary-500 dark:hover:bg-primary-500 text-start"
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
																			className="flex items-center justify-start px-3 py-2 rounded-b bg-zinc-100 dark:bg-dark-600 hover:text-light-100 dark:text-light-100 hover:bg-primary-500 dark:hover:bg-primary-500 text-start"
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
																			className="flex items-center justify-start px-3 py-2 bg-zinc-100 dark:bg-dark-600 hover:text-light-100 dark:text-light-100 hover:bg-primary-500 dark:hover:bg-primary-500 text-start"
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
																		setOpen(false);
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

											{collaborator.username && (
												<div className="ml-2 flex justify-center items-center">
													<div
														onClick={() => handleRemoveMemberClick()}
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
						</div>

						<p className="flex text-start text-xs text-[#777777] mt-10">
							We will send an NFT collaboration invite email to the selected collaborator once you click the &ldquo;Add Collaborator&rdquo;
							button.
						</p>
						<p className="text-start text-xs text-[#777777] mt-2">
							<b>Note:</b>&nbsp;You will not be able to create NFTs until all collaborators have verified the email invite.
						</p>

						<div className="flex justify-end mt-2">
							<div className="flex space-x-4">
								<button
									type="button"
									onClick={() => setOpen(false)}
									className="flex items-center mt-6 -mb-6 px-6 py-2 text-sm font-primary font-bold rounded-md bg-light-200 hover:bg-light-300 dark:bg-dark-800 dark:hover:bg-dark-800"
								>
									Cancel
								</button>
								<button
									type="submit"
									className="flex items-center mt-6 -mb-6 px-6 py-2 text-sm font-primary font-bold rounded-md bg-primary-500 hover:bg-primary-600 text-light-100"
								>
									Add Collaborator
									<span className="ml-6 text-lg">
										<i className="fa-solid fa-arrow-right-long"></i>
									</span>
								</button>
							</div>
						</div>
					</form>
				</div>
			}
			onClose={() => {
				setOpen(false);
			}}
		></Modal>
	);
};

export default AddCollaboratorModal;
