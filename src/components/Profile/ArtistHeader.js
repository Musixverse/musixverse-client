import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import styles from "../../../styles/Profile/ArtistHeader.module.css";
import mxv_tick from "../../../public/assets/mxv_tick.svg";
import AboutArtist from "./ProfileUtils/AboutArtist";
import CustomButton from "../../layout/CustomButton";
import Stats from "./ProfileUtils/Stats";
import Tooltip from "../../layout/Tooltip/Tooltip";
import ShinyLoader from "../../layout/ShinyLoader";
import AuthModalContext from "../../../store/authModal-context";

export default function ArtistHeader({
	avatar,
	name,
	username,
	isArtist,
	isArtistVerified,
	instagram,
	facebook,
	twitter,
	bio,
	country,
	createdAt,
	setShowArtistBioModal,
	setShowReportModal,
}) {
	const { user } = useMoralis();
	const [, setAuthModalOpen] = useContext(AuthModalContext);

	const { fetch: fetchInstagramVerificationRequested, data: instagramVerificationRequested } = useMoralisCloudFunction(
		"fetchInstagramVerificationRequested",
		{ autoFetch: false }
	);

	useEffect(() => {
		if (user) {
			fetchInstagramVerificationRequested({
				onSuccess: async (object) => {},
				onError: (error) => {
					console.log("fetchInstagramVerificationRequested Error:", error);
				},
			});
		}
	}, [user, fetchInstagramVerificationRequested]);

	/*******************************
	 ********  FOLLOW USER  ********
	 *******************************/
	const [isFollowingProfileUser, setIsFollowingProfileUser] = useState(false);
	const { fetch: fetchIsFollowingUser } = useMoralisCloudFunction("fetchIsFollowingUser", { username: username });

	useEffect(() => {
		if (user) {
			fetchIsFollowingUser({
				onSuccess: async (object) => {
					setIsFollowingProfileUser(object);
				},
				onError: (error) => {
					console.log("fetchIsFollowingUser Error:", error);
				},
			});
		}
	}, [user, fetchIsFollowingUser]);

	const { fetch: followUser } = useMoralisCloudFunction("followUser", { username: username }, { autoFetch: false });
	const followProfileUser = () => {
		if (user) {
			followUser({
				onSuccess: async (object) => {
					if (object) {
						setIsFollowingProfileUser(true);
					} else {
						setIsFollowingProfileUser(false);
					}
				},
				onError: (error) => {
					console.log("followUser Error:", error);
				},
			});
		} else {
			setAuthModalOpen(true);
		}
	};

	return (
		<div className={"dark:bg-nav-dark dark:backdrop-blur-xl dark:backdrop-brightness-150 z-10 relative " + styles["artist-banner__container"]}>
			{/* Left section */}
			<div className={styles["artist-banner__section1"]}>
				<div className={styles["section1__artist-image"]}>
					{avatar ? (
						<Image
							priority
							src={avatar || "https://ipfs.moralis.io:2053/ipfs/Qmcn1aZ4PKUUzwpTncuSbruwLD98dtiNqvoJG5zm8EMwXZ"}
							objectFit="contain"
							width="200"
							height="200"
							alt="artist profile"
						/>
					) : (
						<ShinyLoader rounded={true} />
					)}
				</div>
				<div className="mt-4 mb-4 text-4xl md:text-5xl md:hidden font-tertiary xl:mb-0 xl:mt-2">
					{name}
					&nbsp;
					{isArtistVerified ? (
						<Image src={mxv_tick} width={20} height={20} alt="mxv_verified" className="ml-10" />
					) : user && username === user.attributes.username && instagramVerificationRequested ? (
						<span className="ml-2 font-primary text-sm text-gray-500">
							<Tooltip
								labelText={
									<Link href="/profile/verify" passHref>
										<i className="fa-solid fa-hourglass-half text-sm"></i>
									</Link>
								}
								message="Verification Pending..."
								tooltipLocation="bottom"
							></Tooltip>
						</span>
					) : user && username === user.attributes.username && user.attributes.isArtist ? (
						<Link href="/profile/verify" passHref>
							<a className="ml-4 font-primary text-sm hover:text-primary-100 cursor-pointer hover:underline">Verify your profile</a>
						</Link>
					) : null}
					<p className="font-primary text-sm text-center">@{username}</p>
				</div>

				<div className="mt-4">
					{/* Edit profile button (Make it render conditionally) */}
					{user && username === user.attributes.username ? (
						<Link href="/settings/profile-settings" passHref>
							<div className="m-auto mt-4">
								<CustomButton green={true} classes="text-sm px-8 py-3">
									Edit profile <i className="ml-1 fas fa-edit"></i>
								</CustomButton>
							</div>
						</Link>
					) : (
						<div className="m-auto mt-4">
							{isFollowingProfileUser ? (
								<div className="group">
									<CustomButton
										onClick={() => {
											followProfileUser();
										}}
										greenOutline={true}
										classes="text-base px-8 py-2 block group-hover:hidden dark:bg-dark-100"
									>
										Following
									</CustomButton>
									<CustomButton
										onClick={() => {
											followProfileUser();
										}}
										error={true}
										classes="text-base px-8 py-2 border-2 border-transparent hidden group-hover:block"
									>
										Unfollow
									</CustomButton>
								</div>
							) : (
								<CustomButton
									onClick={() => {
										followProfileUser();
									}}
									green={true}
									classes="text-base px-8 py-2 border-2 border-transparent"
								>
									Follow
								</CustomButton>
							)}
						</div>
					)}
				</div>
			</div>

			{/* Right Details section */}
			<div className={styles["artist-banner__section2"]}>
				<div className={styles["section2__artist-name"]}>
					<div className="md:block hidden font-tertiary mb-3 xl:mb-0 mt-3 xl:mt-2 text-6xl">
						{name}
						&nbsp;
						{isArtistVerified ? (
							<Image src={mxv_tick} width={20} height={20} alt="mxv_verified" className="ml-10" />
						) : user && username === user.attributes.username && instagramVerificationRequested ? (
							<span className="ml-2 font-primary text-sm text-gray-500">
								<Tooltip
									labelText={
										<Link href="/profile/verify" passHref>
											<i className="fa-solid fa-hourglass-half text-sm"></i>
										</Link>
									}
									message="Verification Pending..."
									tooltipLocation="bottom"
								></Tooltip>
							</span>
						) : user && username === user.attributes.username && !isArtistVerified && user.attributes.isArtist ? (
							<Link href="/profile/verify" passHref>
								<a className="ml-4 font-primary text-sm hover:text-primary-100 cursor-pointer hover:underline">Verify your profile</a>
							</Link>
						) : null}
						<p className="font-primary text-sm">@{username}</p>
					</div>

					<div className="flex flex-col items-end -mb-10">
						{/* Artist's Stats Section */}
						<Stats username={username} isArtist={isArtist} isFollowingProfileUser={isFollowingProfileUser} />
						{/* links to music platforms */}
						<div className="flex justify-center space-x-5 mt-4">
							{instagram ? (
								<Link href={instagram}>
									<a target="_blank" rel="noopener noreferrer" className="link-item">
										<i className="text-2xl fab fa-instagram hover:text-primary-100"></i>
									</a>
								</Link>
							) : null}
							{twitter ? (
								<Link href={twitter}>
									<a target="_blank" rel="noopener noreferrer" className="link-item">
										<i className="text-2xl fab fa-twitter hover:text-primary-100"></i>
									</a>
								</Link>
							) : null}
							{facebook ? (
								<Link href={facebook}>
									<a target="_blank" rel="noopener noreferrer" className="link-item">
										<i className="text-2xl fab fa-facebook-square hover:text-primary-100"></i>
									</a>
								</Link>
							) : null}
						</div>
					</div>
				</div>
				{/* About Artist section */}
				<AboutArtist
					username={username}
					name={name}
					bio={bio}
					country={country}
					createdAt={createdAt}
					setShowArtistBioModal={setShowArtistBioModal}
					setShowReportModal={setShowReportModal}
				/>
			</div>
		</div>
	);
}
