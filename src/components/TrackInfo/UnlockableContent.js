export default function UnlockableContent({}) {
	const unlockableContentItems = [
		{
			name: "Secret Message from the Artist",
			description:
				"A secret message that the artist wants to share with you. This may include details like instructions about setting up a 1:1 call with the artist.",
		},
		{
			name: "Special feature on the artist’s profile page for top 3 fans",
			description: "Get a chance to get featured among the 'Top Fans' section on the artist's profile.",
		},
		{
			name: "Access to Artist's Musixverse Discord Community",
			description: "A special community of all NFT holders (read. top fans) of the artist on Discord.",
		},
		// {
		// 	name: "Exclusive Images",
		// 	description:
		// 		"These are images that are not visible to the general public. You'll have exclusive access to these images as long as you hold the NFT.",
		// },
		// {
		// 	name: "Exclusive Audios/Videos",
		// 	description:
		// 		"These are audio/video files that are not visible to the general public. You'll have exclusive access to these images as long as you hold the NFT.",
		// },
		// {
		// 	name: "Comment Wall",
		// 	description: "Make a public comment on the song. Prove you were a supporter from way back in the day.",
		// },
		// { name: "Pre-release info for upcoming NFTs", description: "Be the first to know about future music NFT drops by the artist on Musixverse." },
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
		<div className="w-full flex flex-col p-8 border-2 bg-light-200 border-light-300 dark:bg-dark-100 dark:border-dark-100 rounded-xl mt-12">
			<h1 className="font-tertiary text-4xl">
				REWARDS<i className="fa-solid fa-award ml-2 text-3xl"></i>
			</h1>
			<p className="text-[#777777] font-normal text-xs">Perks that you get after purchasing this music NFT</p>

			<p className="text-sm font-semibold mt-6">About the Unlockable Content</p>

			<div className="flex mt-2 space-x-8">
				<div className="text-sm">
					A message that the artist wants to share with you. This will include details like what benefits will you get after purchasing the music NFT.
				</div>
				<div className="grid grid-cols-3 items-start gap-4">
					{unlockableContentItems.map((item, index) => {
						return (
							<div
								className="h-full flex flex-col px-6 py-6 bg-light-100 dark:bg-dark-200 rounded-lg duration-300 shadow hover:shadow-primary-100"
								key={index}
							>
								<p className="text-sm font-semibold">{item.name}</p>
								<p className="text-xs mt-2">{item.description}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
