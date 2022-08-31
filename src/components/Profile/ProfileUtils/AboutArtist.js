import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMoralis } from "react-moralis";
import styles from "../../../../styles/Profile/ArtistHeader.module.css";
import StatusContext from "../../../../store/status-context";

export default function AboutArtist({ username, name, bio, country, createdAt, setShowArtistBioModal }) {
	const { user } = useMoralis();
	const [joined, setJoined] = useState(false);

	useEffect(() => {
		if (createdAt) {
			const dateStr = createdAt.toDateString();
			const dateStrArr = dateStr.split(" ");
			setJoined("Joined " + dateStrArr[1] + ", " + dateStrArr[3]);
		}
	}, [createdAt]);

	let bioCharacters = bio;
	if (bioCharacters && bioCharacters.length > 250) bioCharacters = bioCharacters.substring(0, 250) + "...";

	const { asPath } = useRouter();
	const [, , setSuccess] = useContext(StatusContext);
	const [currentPageLink, setCurrentPageLink] = useState("");

	useEffect(() => {
		setCurrentPageLink(window.location.origin + asPath);
	}, [asPath]);

	const copyToClipboard = async () => {
		await navigator.clipboard.writeText(currentPageLink);
		setSuccess((prevState) => ({
			...prevState,
			title: "Profile Link Copied!",
			message: "The profile link has been copied to clipboard",
			showSuccessBox: true,
		}));
	};

	const sharableMessage = `Artists and Fans are collaborating on Musixverse! Where are you?\nJump into a new world of music fandom!\n\nCheck out ${name}'s profile on @musixverse- ${currentPageLink}`;
	const uriEncodedSharableText = encodeURI(sharableMessage);

	return (
		<>
			<div>
				{bio ? (
					<>
						<h4 className="font-bold text-[18px]">About</h4>
						{bioCharacters.length < 250 ? (
							<p className={"text-[12px] md:text-[15px] pt-3"}>{bio}</p>
						) : (
							<>
								<p className={"text-[12px] md:text-[15px] pt-3 " + styles["about_us"]}>{bioCharacters}</p>
								<button
									onClick={() => setShowArtistBioModal(true)}
									className="text-primary-200 hover:text-primary-300 text-[12px] md:text-[15px] mt-2"
								>
									Read More
								</button>
							</>
						)}
					</>
				) : username === user.attributes.username ? (
					<>
						<h4 className="font-bold text-[18px]">About</h4>
						<Link href="/settings/profile-settings" passHref>
							<p className={"text-[12px] md:text-[15px] pt-2 cursor-pointer " + styles["about_us"]}>Add your Bio.</p>
						</Link>
					</>
				) : (
					<>
						<h4 className="font-bold text-[18px]">About</h4>
						<p className={"text-[12px] md:text-[15px] pt-2 " + styles["about_us"]}>No information available</p>
					</>
				)}
			</div>

			{/* footer section */}
			<div className={styles["section2__artist-footer"]}>
				<div className="space-x-2 md:space-x-5">
					<span>{country ? country : "India"}</span>
					<span>{createdAt ? joined : "Joined Nov, 2020"}</span>
				</div>
				<div className="flex space-x-3 text-dark-100 dark:text-light-200">
					<button className="md:w-[36px] md:h-[36px] w-[28px] h-[28px] text-center rounded-full bg-gray-200 dark:bg-[#040404] hover:bg-light-300">
						<i className="text-xs md:text-sm fas fa-flag"></i>
					</button>

					<button className="md:w-[36px] md:h-[36px] w-[28px] h-[28px] text-center rounded-full bg-gray-200 dark:bg-[#040404] hover:bg-light-300 dark:hover:bg-dark-100 relative group">
						<i className="fa-solid fa-share-nodes text-lg"></i>

						<ul className="absolute pt-10 bg-transparent hidden right-0 top-0 z-10 text-sm font-medium text-left list-none border-none rounded-xl min-w-[250px] group-hover:block">
							<ul className="rounded-xl shadow-lg bg-light-100 dark:bg-dark-100 z-40">
								<li onClick={copyToClipboard}>
									<div className="flex items-center w-full rounded-t-xl px-4 py-3 bg-transparent cursor-pointer whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-200">
										<i className="fa-solid fa-copy text-lg"></i>
										<span className="ml-2">Copy Link</span>
									</div>
								</li>
								<li>
									<Link href={"https://twitter.com/intent/tweet?url=" + uriEncodedSharableText} passHref={true}>
										<a
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center w-full px-4 py-3 bg-transparent cursor-pointer whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-200"
										>
											<i className="fa-brands fa-twitter text-lg"></i>
											<span className="ml-2">Share on Twitter</span>
										</a>
									</Link>
								</li>
								<li>
									<Link
										href={`https://www.facebook.com/dialog/share?app_id=${process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}&display=popup&href=${currentPageLink}&redirect_uri=${currentPageLink}&hashtag=%23Musixverse`}
										passHref={true}
									>
										<a
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center w-full px-4 py-3 bg-transparent cursor-pointer whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-200"
										>
											<i className="fa-brands fa-facebook text-lg"></i>
											<span className="ml-2">Share on Facebook</span>
										</a>
									</Link>
								</li>
								<li>
									<Link href={`https://web.whatsapp.com/send?text=` + uriEncodedSharableText} passHref={true}>
										<a
											target="_blank"
											rel="noopener noreferrer"
											className="block w-full px-4 py-3 bg-transparent cursor-pointer whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-200"
										>
											<i className="fa-brands fa-whatsapp text-lg"></i>
											<span className="ml-2">Share on WhatsApp</span>
										</a>
									</Link>
								</li>
								<li>
									<Link href={`https://telegram.me/share/url?url=` + uriEncodedSharableText} passHref={true}>
										<a
											target="_blank"
											rel="noopener noreferrer"
											className="block w-full px-4 py-3 bg-transparent cursor-pointer whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-200"
										>
											<i className="fa-brands fa-telegram text-lg"></i>
											<span className="ml-2">Share on Telegram</span>
										</a>
									</Link>
								</li>
								<li>
									<Link
										href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentPageLink}&title=${sharableMessage}`}
										passHref={true}
									>
										<a
											target="_blank"
											rel="noopener noreferrer"
											className="block w-full px-4 py-3 bg-transparent cursor-pointer whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-200 rounded-b-xl"
										>
											<i className="fa-brands fa-linkedin text-lg"></i>
											<span className="ml-2">Share on LinkedIn</span>
										</a>
									</Link>
								</li>
							</ul>
						</ul>
					</button>
				</div>
			</div>
		</>
	);
}
