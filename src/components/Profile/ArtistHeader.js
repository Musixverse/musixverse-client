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
}) {
	const { user } = useMoralis();

	const { data: instagramVerificationRequested } = useMoralisCloudFunction("fetchInstagramVerificationRequested");

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
								labelText={<i className="fa-solid fa-hourglass-half text-sm"></i>}
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
				{/* links to music platforms */}
				<div className={styles["section1__social-icons"]}>
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
					<Link href="#" passHref>
						<div className="m-auto mt-4">
							<CustomButton green={false} classes="text-sm px-8 py-3">
								Follow
							</CustomButton>
						</div>
					</Link>
				)}
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
									labelText={<i className="fa-solid fa-hourglass-half text-sm"></i>}
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
					{/* Artist's Stats Section */}
					<Stats username={username} isArtist={isArtist} />
				</div>
				{/* About Artist section */}
				<AboutArtist username={username} name={name} bio={bio} country={country} createdAt={createdAt} setShowArtistBioModal={setShowArtistBioModal} />
			</div>
		</div>
	);
}
