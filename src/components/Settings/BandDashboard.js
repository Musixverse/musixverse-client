import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useMoralisCloudFunction } from "react-moralis";
import StatusContext from "../../../store/status-context";
import CustomButton from "../../layout/CustomButton";
import mxv_tick from "/public/assets/mxv_tick.svg";
import BandMembers from "./SettingsUtils/BandMembers";
import ProfileSection1 from "./SettingsUtils/ProfileSection1";
import ProfileSection2 from "./SettingsUtils/ProfileSection2";
import { sleep } from "../../utils/Sleep";
import { isNameValid, isBandUsernameValidAndAvailable } from "../../utils/Validate";

export default function BandDashboard({ bandsOfArtist }) {
	const router = useRouter();
	const [, , setSuccess, setError] = useContext(StatusContext);

	const [activeBand, setActiveBand] = useState(bandsOfArtist.length !== 0 ? bandsOfArtist[0] : null);
	// State Management
	const [avatar, setAvatar] = useState("");
	const [coverImage, setCoverImage] = useState("");
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [bio, setBio] = useState("");
	const [spotify, setSpotify] = useState("");
	const [instagram, setInstagram] = useState("");
	const [twitter, setTwitter] = useState("");
	const [facebook, setFacebook] = useState("");

	useEffect(() => {
		if (activeBand) {
			setAvatar(activeBand.avatar);
			setCoverImage(activeBand.coverImage);
			setName(activeBand.name);
			setUsername(activeBand.username);
			setBio(activeBand.bio ? activeBand.bio : "");
			setSpotify(activeBand.spotify ? activeBand.spotify : "");
			setInstagram(activeBand.instagram ? activeBand.instagram : "");
			setTwitter(activeBand.twitter ? activeBand.twitter : "");
			setFacebook(activeBand.facebook ? activeBand.facebook : "");
		}
	}, [activeBand]);

	// Update Band Information
	const bandData = {
		bandId: activeBand ? activeBand.objectId : null,
		avatar: avatar,
		coverImage: coverImage,
		name: name,
		username: username,
		bio: bio === "" ? undefined : bio,
		spotify: spotify === "" ? undefined : spotify,
		instagram: instagram === "" ? undefined : instagram,
		twitter: twitter === "" ? undefined : twitter,
		facebook: facebook === "" ? undefined : facebook,
	};
	const { fetch: updateBandInfo } = useMoralisCloudFunction("updateBandInfo", bandData, { autoFetch: false });
	const handleSave = async () => {
		try {
			if (name !== activeBand.name) {
				// Name CHECK
				const nameCheck = await isNameValid(name);
				if (nameCheck.status === false) {
					setError({
						title: nameCheck.title || "Invalid credentials!",
						message: nameCheck.message,
						showErrorBox: true,
					});
					return;
				}
			}
			if (username !== activeBand.username) {
				// USERNAME CHECK
				const usernameCheck = await isBandUsernameValidAndAvailable(username);
				if (usernameCheck.status === false) {
					setError({
						title: usernameCheck.title || "Invalid credentials!",
						message: usernameCheck.message,
						showErrorBox: true,
					});
					return;
				}
			}

			if (name !== "" && username !== "") {
				await updateBandInfo({
					onSuccess: async (data) => {
						setSuccess((prevState) => ({
							...prevState,
							title: "Profile updated!",
							message: "The band profile was updated successfully.",
							showSuccessBox: true,
						}));
						await fetch(`/api/revalidate-profile?path=/profile/band/${username}&secret=${process.env.NEXT_PUBLIC_REVALIDATE_SECRET}`);
						await sleep(1500);
						router.push(`/profile/band/${username}`);
					},
					onError: async (error) => {
						setError({
							title: "Error!",
							message: "There was an error updating the band profile.",
							showErrorBox: true,
						});
					},
				});
			}
		} catch (error) {
			console.log("ERROR-", error);
		}
		return;
	};

	return (
		<div className="flex flex-col w-full">
			<div className="flex-1 w-full p-10 bg-light-300 dark:bg-dark-600 rounded-xl">
				<div className="flex flex-col items-start justify-between w-full space-y-5 md:flex-row md:space-y-0">
					<div className="flex flex-col w-full space-y-8">
						<h1 className="text-4xl font-tertiary">BAND DASHBOARD</h1>

						<div className="font-secondary">
							<b>Are you part of a band and want to create a band profile?</b>

							<Link href="/create-band" passHref>
								<div className="w-fit">
									<CustomButton type="button" green={true} classes="text-sm px-6 py-2 mt-4">
										Create Band Profile
										<span className="ml-8 text-xl">
											<i className="fa-solid fa-arrow-right-long"></i>
										</span>
									</CustomButton>
								</div>
							</Link>
						</div>

						{activeBand && (
							<div className="pt-4">
								<div className="w-full border-t-[2px] border-[#9a9a9a]"></div>

								<p className="mt-10 text-3xl font-tertiary">YOUR BANDS</p>

								<div className="grid items-center grid-cols-3 mt-2">
									{bandsOfArtist.length > 0 &&
										bandsOfArtist.map((band) => {
											return (
												<div className="flex items-center mt-2" key={band.username}>
													<input
														id={`band-${band.username}`}
														type="radio"
														name="profileChooser"
														className="hidden"
														onClick={(e) => setActiveBand(band)}
														checked={activeBand.objectId === band.objectId}
														data-band-name={band.name}
														data-band-id={band.objectId}
													/>
													<label
														htmlFor={`band-${band.username}`}
														className="flex items-center text-sm font-normal cursor-pointer font-secondary"
													>
														<span className="inline-block w-6 h-6 mr-3 border-2 rounded-full border-[#363636] flex-no-shrink"></span>
														<div className="relative w-8 h-8 rounded">
															<Image
																src={band.avatar}
																layout="fill"
																objectFit="contain"
																alt="band's avatar"
																className="rounded-full"
															/>
														</div>
														<p className="flex items-center ml-2">
															{band.name}
															<span className="ml-1">
																{band.isBandVerified && <Image src={mxv_tick} width={14} height={14} alt="mxv_verified" />}
															</span>
														</p>
													</label>
												</div>
											);
										})}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>

			{activeBand && (
				<div className="flex flex-col w-full mt-10 mb-4">
					<p className="text-5xl font-tertiary">
						{activeBand.name}
						<span className="ml-2">{activeBand.isBandVerified && <Image src={mxv_tick} width={20} height={20} alt="mxv_verified" />}</span>

						<span className="ml-2 text-sm font-primary">
							<Link href={`/profile/band/${activeBand.username}`} passHref>
								<a>@{activeBand.username}</a>
							</Link>
						</span>
					</p>
				</div>
			)}

			{activeBand && (
				<>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							handleSave();
						}}
					>
						<ProfileSection1
							isBandSettings={true}
							avatar={avatar}
							setAvatar={setAvatar}
							coverImage={coverImage}
							setCoverImage={setCoverImage}
							username={username}
							setUsername={setUsername}
							name={name}
							setName={setName}
							bio={bio}
							setBio={setBio}
						/>

						<ProfileSection2
							spotify={spotify}
							setSpotify={setSpotify}
							instagram={instagram}
							setInstagram={setInstagram}
							twitter={twitter}
							setTwitter={setTwitter}
							facebook={facebook}
							setFacebook={setFacebook}
						/>
					</form>

					<BandMembers
						bandId={activeBand.objectId}
						username={username}
						bandMembers={activeBand.bandMembers}
						updatedBandMembersList={activeBand.updatedBandMembersList}
					/>
				</>
			)}
		</div>
	);
}
