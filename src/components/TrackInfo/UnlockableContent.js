import { useEffect, useState, useContext } from "react";
import { useMoralis } from "react-moralis";
import StatusContext from "../../../store/status-context";
import { unlockableContentUri } from "../../utils/smart-contract/functions";
import UnlockableContentModal from "./TrackInfoUtils/UnlockableContentModal";
import { sleep } from "../../utils/Sleep";

export default function UnlockableContent({ tokenId, currentOwnerAddress, unlockableContent, collaborators }) {
	const { user } = useMoralis();
	const [, , , setError] = useContext(StatusContext);
	const [unlockableContentUriData, setUnlockableContentUriData] = useState(null);
	const [isUnlockableContentModalOpen, setUnlockableContentModalOpen] = useState(false);
	const [selectedUnlockableItem, setSelectedUnlockableItem] = useState("");
	const [selectedUnlockableItemIndex, setSelectedUnlockableItemIndex] = useState(0);

	useEffect(() => {
		const getUnlockableContentUri = async () => {
			try {
				await sleep(1000);
				const _unlockableContentUri = await unlockableContentUri(tokenId, user.attributes.ethAddress);
				const res = await fetch(_unlockableContentUri);
				const data = await res.json();
				setUnlockableContentUriData(data);
			} catch (err) {
				if (err.title === "User is not connected to the same wallet") {
					setError({
						title: err.title,
						message: err.message,
						showErrorBox: true,
					});
				}
			}
		};

		if (tokenId && user && currentOwnerAddress === user.attributes.ethAddress) {
			getUnlockableContentUri();
		}
	}, [user, tokenId, currentOwnerAddress, setError]);

	const unlockableContentItems = [
		{
			name: "Secret Message from the Artist",
			description:
				"A secret message that the artist wants to share with you. This may include details like instructions about setting up a 1:1 call with the artist.",
			unlockableHeading: "Secret Message",
			unlockableItemText: unlockableContentUriData ? unlockableContentUriData.secretMessage : null,
		},
		{
			name: "Special feature on the artist’s profile page for top 3 fans",
			description: "Get a chance to get featured among the 'Top Fans' section on the artist's profile.",
			unlockableHeading: "Special feature",
			unlockableItemText:
				"Congratulations! You can see yourself featured on the artist's profile page if you're among the Top NFT holders by number of NFTs.",
		},
		{
			name: "Access to Artist's Musixverse Discord Community",
			description: "A special community of all NFT holders (read. top fans) of the artist on Discord.",
			unlockableHeading: "Access to Discord Community",
			unlockableItemText:
				"You can now access the artist's Discord community. Send a message on the Musixverse Discord server and we'll add you right away.",
		},
		{
			name: "Comment Wall",
			description: "Make a public comment on the song. Prove you were a supporter from way back in the day.",
			unlockableHeading: "Post a Comment",
			unlockableItemText: "Click on this card to post a comment on this track NFT page. Your comment will be public.",
		},
		// {
		// 	name: "Pre-release info for upcoming NFTs",
		// 	description: "Be the first to know about future music NFT drops by the artist on Musixverse.",
		// 	unlockableHeading: "Pre-release info for upcoming NFTs",
		// 	unlockableItemText:
		// 		"You will be the first to know about future music NFT releases by this artist on Musixverse. We will send you an email whenever a new track NFT is released.",
		// },
		{
			name: "Exclusive Images",
			description:
				"These are images that are not visible to the general public. You'll have exclusive access to these images as long as you hold the NFT.",
			unlockableHeading: "Exclusive Images",
			unlockableItemText: "Click on this card to view all exclusive images.",
			unlockableItemData: unlockableContentUriData ? unlockableContentUriData.exclusiveImages : null,
		},
		{
			name: "Exclusive Audios",
			description:
				"These are audio files that are not visible to the general public. You'll have exclusive access to these files as long as you hold the NFT.",
			unlockableHeading: "Exclusive Audios",
			unlockableItemText: "Click on this card to view all exclusive audios.",
			unlockableItemData: unlockableContentUriData ? unlockableContentUriData.exclusiveAudios : null,
		},
		{
			name: "Exclusive Videos",
			description:
				"These are video files that are not visible to the general public. You'll have exclusive access to these videos as long as you hold the NFT.",
			unlockableHeading: "Exclusive Videos",
			unlockableItemText: "Click on this card to view all exclusive videos.",
			unlockableItemData: unlockableContentUriData ? unlockableContentUriData.exclusiveVideos : null,
		},
		// { name: "Project Files & Demos", description: "Files for the track and earlier versions of it too!" },
		// {
		// 	name: "Exclusive First Listen",
		// 	description: "Collectors get exclusive first listen access to all future drops from the artist as soon as they mint their release.",
		// },
		// {
		// 	name: "Chat",
		// 	description:
		// 		"Stop being lost in a sea of followers. Get access to a private chat with the artist on Musixverse. You'll have chat access as long as you hold the NFT.",
		// },
		// {
		// 	name: "1:1 call/video meeting",
		// 	description: "Hop on a 1:1 call/video meeting with the artist and have a conversation you always wanted to have with the artist you love!",
		// },
		// {
		// 	name: "Personalized Goodies or Merch",
		// 	description: "Get merch and goodies with the artist's branding. Connect with the artist and let them know where to deliver.",
		// },
	];

	return (
		<>
			<div
				className={
					"w-full flex flex-col p-8 border-2 bg-light-200 border-light-300 dark:bg-dark-600 dark:border-dark-600 rounded-xl " +
					(collaborators.length > 1 ? "mt-8" : "mt-12")
				}
			>
				<h1 className="font-tertiary text-4xl">
					REWARDS<i className="fa-solid fa-award ml-2 text-3xl"></i>
				</h1>
				<p className="text-[#777777] font-normal text-xs">Perks that you get after purchasing this music NFT</p>

				{unlockableContent.about && <p className="text-sm font-semibold mt-6">About the Unlockable Content</p>}

				<div className={"flex space-x-8 " + (unlockableContent.about ? "mt-2" : "mt-6")}>
					{unlockableContent.about && (
						<div className="text-sm max-w-[300px] max-h-[150px] overflow-y-scroll pr-2 whitespace-pre-wrap">{unlockableContent.about}</div>
					)}
					<div className="grid sm:grid-cols-3 items-start gap-4">
						{unlockableContentItems.map((item, index) => {
							let truncatedUnlockableItemText = item.unlockableItemText;

							if (
								(unlockableContent.secretMessage && index === 0) ||
								index === 1 ||
								index === 2 ||
								index === 3 ||
								(unlockableContent.exclusiveImages > 0 && index === 4) ||
								(unlockableContent.exclusiveAudios > 0 && index === 5) ||
								(unlockableContent.exclusiveVideos > 0 && index === 6)
							) {
								if (item.unlockableItemText && item.unlockableItemText.length > 120) {
									truncatedUnlockableItemText = truncatedUnlockableItemText.substring(0, 120) + "...";
								}

								return (
									<div
										key={index}
										className={
											"group relative w-full h-full flex flex-col rounded-lg bg-light-100 dark:bg-dark-800 shadow hover:shadow-primary-500 overflow-hidden transition-all duration-700 unlockable-content-card " +
											(unlockableContentUriData ? "cursor-pointer" : "cursor-not-allowed")
										}
										onClick={() => {
											if (unlockableContentUriData && (index === 0 || index === 3 || index === 4 || index === 5 || index === 6)) {
												setSelectedUnlockableItem(unlockableContentItems[index]);
												setSelectedUnlockableItemIndex(index);
												setUnlockableContentModalOpen(true);
											}
										}}
									>
										<div
											className="relative flex flex-col w-full h-full px-6 py-6 transition-all duration-100 delay-200 group-hover:opacity-0"
											key={index}
										>
											<p className="text-sm font-semibold">{item.name}</p>
											<p className="text-xs mt-2">{item.description}</p>
											<span className="absolute bottom-2 right-3">
												{unlockableContentUriData ? (
													<i className="fa-solid fa-lock-open text-primary-500"></i>
												) : (
													<i className="fa-solid fa-lock"></i>
												)}
											</span>
										</div>

										{unlockableContentUriData ? (
											<div className="absolute flex w-full h-full px-6 py-6 justify-center items-center transition-all duration-100 delay-200 unlockable-content-card-back opacity-0 group-hover:opacity-100">
												<div className="relative flex flex-col w-full h-full justify-start items-start">
													<p className="text-sm font-semibold">{item.unlockableHeading}</p>
													<p className="text-xs mt-2">
														{index === 0 ? truncatedUnlockableItemText : item.unlockableItemText}&nbsp;&nbsp;
														{index === 0 && <span className="text-primary-500 underline">Read more</span>}
													</p>
												</div>
											</div>
										) : (
											<div className="absolute flex flex-col w-full h-full justify-center items-center transition-all duration-100 delay-200 unlockable-content-card-back opacity-0 group-hover:opacity-100">
												<i className="fa-solid fa-lock text-4xl"></i>
												<p className="mt-2 text-xs">Buy now to view</p>
											</div>
										)}
									</div>
								);
							}
						})}
					</div>
				</div>
			</div>
			<UnlockableContentModal
				isOpen={isUnlockableContentModalOpen}
				setOpen={setUnlockableContentModalOpen}
				tokenId={tokenId}
				selectedUnlockableItemIndex={selectedUnlockableItemIndex}
				selectedUnlockableItem={selectedUnlockableItem}
			/>
		</>
	);
}
