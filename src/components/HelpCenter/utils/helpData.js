import Link from "next/link";

export const gettingStarted = [
	{
		heading: "What is Mx Catalog?",
		body: "Mx Catalog is Musixverse’s  NFT marketplace. It is the one-stop shop for all types of music NFTs on Musixverse and communities centered around them. It is the place where you can buy, sell, and trade Music NFTs on Musixverse.",
		content_id: "collapseOne",
	},
	{
		heading: "What is a crypto wallet?",
		body: "A crypto wallet (or cryptocurrency wallet) is software or hardware that enables users to store and use cryptocurrency.",
		content_id: "collapseTwo",
	},
	{
		heading: "I am an Artist, what do I need to do to get started on Musixverse?",
		body: "As an artist, you just need to have a crypto wallet and a government-issued ID (to verify your profile) to get started on Musixverse.",
		content_id: "collapseThree",
	},
	{
		heading: "I am a collector, what do I need to do to get started on Musixverse?",
		body: "As a collector, you need to have a crypto wallet and love for music & music NFTs to get started on Musixverse.",
		content_id: "collapseFour",
	},
	{
		heading: "How do I verify my profile?",
		body: (
			<>
				<p>
					After you sign up to MXV as an artist, you’ll automatically get redirected to the Artist Verification page, you can verify your profile
					there with the help of on-screen instructions. Musixverse uses a third party verification service provided by <strong>Persona</strong> to
					verify government ID.
					<br />
					You can also go to the{" "}
					<span className="font-medium underline underline-offset-2 text-primary-500">
						<Link href="/profile/verify">Artist Verification</Link>
					</span>{" "}
					page to verify your profile. Provide details including your <strong> real name, stage name, and government-issued ID,</strong> and then
					connect your <strong>Twitter</strong> account to get verified.
					<br />
					Musixverse takes artist verification seriously to ensure the platform is spam and scam free.
				</p>
			</>
		),
		content_id: "collapseFive",
	},
	{
		heading: "What wallet can I use with Musixverse?",
		body: "You can use Metamask or WalletConnect with Musixverse.",
		content_id: "collapseSix",
	},
	{
		heading: "How can I buy MATIC to transact on Musixverse?",
		body: "To buy MATIC, you can use any crypto exchange like Binance, CoinDCX, or WazirX. You can simply buy USDT for INR on Binance P2P or add INR to CoinDCX or WazirX using the bank transfer option to buy USDT. Once you have USDT, you can go to MATICUSDT pair and place a buy order. Once you have MATIC, you can withdraw it to your decentralized wallet, and you can easily transact on Musixverse.",
		content_id: "collapseSeven",
	},
];

export const buyNFT = [
	{
		heading: "Who can buy an NFT on Musixverse?",
		body: "Anyone with a crypto wallet can buy an NFT on Musixverse",
		content_id: "collapseOne",
	},
	{
		heading: "What is required to buy an NFT on Musixverse?",
		body: (
			<>
				<p>The following things are required to buy an NFT on Musixverse:</p>
				<ul className="list-disc pl-4">
					<li>Metamask/WalletConnect Wallet</li>
					<li>MATIC in your wallet</li>
					<li>Collector/Artist Account</li>
				</ul>
			</>
		),
		content_id: "collapseTwo",
	},
	{
		heading: "How do I buy an NFT on Musixverse?",
		body: (
			<>
				<p>You can buy an NFT on Musixverse in 3 simple steps:</p>
				<ul className="list-disc pl-4">
					<li>
						Go to the Mx Catalog page and choose the NFT that you want to buy. Make use of all the filters provided on the sidebar to help you
						choose the right NFT to buy.
					</li>
					<li>Click on the NFT that you want to buy and then click on the Buy Now button to proceed further.</li>
					<li>After you click on Buy Now, Metamask/WalletConnect will open up. Pay the required matic to complete the transaction and that’s it!</li>
					<li>The NFT will then show up in your collection.</li>
				</ul>
			</>
		),
		content_id: "collapseThree",
	},
	{
		heading: "What is the difference between buying directly from the artist or buying from other collectors?",
		body: "When you buy from an artist, all funds in the transaction go to the artist. When you buy from other collectors, the artist also receives a royalty and the collector gets paid the remaining amount.",
		content_id: "collapseFour",
	},
	{
		heading: "I am an Artist. Can I buy the NFT from other creators?",
		body: "Yes, you can.",
		content_id: "collapseFive",
	},
	{
		heading: "What is the breakdown of the transaction if I buy an NFT?",
		body: (
			<>
				<p>
					If Person A buys an NFT from Person B for an amount TOTAL, then:
					<br />
					<br />
					1% -&gt; Platform Fee (or 0.1% -&gt; Sharer/Referrer & 0.9% -&gt; Platform Fee)
					<br />
					&lt;ROYALTY_PERCENTAGE&gt; -&gt; Artist (100 - ROYALTY_PERCENTAGE - Platform Fee)% -&gt; Person B
				</p>
			</>
		),
		content_id: "collapseSix",
	},
	{
		heading: "How much does it cost to buy an NFT?",
		body: "You need to pay for 2 things to buy an NFT- the cost of NFT and the gas fees. The cost of the NFT is decided by the NFT creator or the collector who is reselling the NFT. As we are operating on the Polygon blockchain, the gas fee is as low as $0.01.",
		content_id: "collapseSeven",
	},
];

export const sellNFT = [
	{
		heading: "Who can sell an NFT on Musixverse?",
		body: (
			<>
				<ul className="list-disc pl-4">
					<li>Artists can create NFTs and sell</li>
					<li>Collectors can resell</li>
				</ul>
			</>
		),
		content_id: "collapseOne",
	},
	{
		heading: "What is required to sell an NFT on Musixverse?",
		body: "You need to be the current owner of the NFT to sell an NFT on Musixverse.",
		content_id: "collapseTwo",
	},
	{
		heading: "How do I sell an NFT on Musixverse?",
		body: "By default when you create an NFT, it’s up for sale on the NFT Marketplace. And if you own any NFT, you can put it for sale on marketplace anytime. You can do that using the “Put Up for Sale” button that’s present on the NFT’s track info page.",
		content_id: "collapseThree",
	},
	{
		heading: "What happens when I sell an NFT?",
		body: "When you successfully sell an NFT, MATIC equivalent to the price of the NFT will be transferred to your wallet. The NFT will disappear from your profile and will now appear on the buyer’s profile. The complete ownership of the NFT will be transferred to the buyer.",
		content_id: "collapseFour",
	},
	{
		heading: "How can I list the NFT that I own on the marketplace?",
		body: "You can list the NFT that you own on marketplace using the “Put Up for Sale” button that’s present on the NFT’s track info page.",
		content_id: "collapseFive",
	},
	// {
	//     heading: "What is the difference between an artist selling the NFT vs. a collector selling it?",
	//     body: "yet to be decided",
	//     content_id: "collapseSix",
	// },
	// {
	//     heading: "What is the breakdown of the transaction if I sell an NFT?",
	//     body: "yet to be decided",
	//     content_id: "collapseSeven",
	// },
	{
		heading: "How much does it cost to sell an NFT?",
		body: "It doesn’t cost anything to sell an NFT. You just need to pay the gas fees for the transaction and that gas fee is almost negligible.",
		content_id: "collapseSix",
	},
];

export const createNFT = [
	{
		heading: "Who can create an NFT on Musixverse?",
		body: (
			<>
				<p>
					Anyone with a verified Artist account can create an NFT on Musixverse. &nbsp;
					<span className="font-medium underline underline-offset-2 text-primary-500">
						<Link href="/profile/verify">How do I verify my profile?</Link>
					</span>
				</p>
			</>
		),
		content_id: "collapseOne",
	},
	{
		heading: "What are the prerequisites to create an NFT on Musixverse?",
		body: (
			<>
				<p>
					Before you create an NFT on Musixverse, you need to have the following prerequisites ready:
					<ul className="list-disc pl-4">
						<li>Metamask/WalletConnect Wallet</li>
						<li>
							MATIC in your wallet (to pay gas fees while minting an NFT, it’s close to negligible). You may be eligible to get free MATIC from
							Musixverse to cover the gas fee. Drop us an email on{" "}
							<span className="font-medium underline underline-offset-2 text-primary-500">
								<Link href="mailto:contact@musixverse.com?subject=REQUEST MATIC FOR GAS FEE">team@musixverse.com</Link>
							</span>
							.
						</li>
						<li>Artist Account</li>
						<li>Verified Profile</li>
					</ul>
				</p>
			</>
		),
		content_id: "collapseTwo",
	},
	{
		heading: "How do I create an NFT on Musixverse?",
		body: "Head on to the create page, fill in all the details, and create/schedule your NFT. That’s all you need to do to create an NFT on Musixverse.",
		content_id: "collapseThree",
	},
	{
		heading: "Tips for NFT creation.",
		body: (
			<>
				<ul className="list-disc pl-4">
					<li>
						<strong>Price & Quantity:</strong> The general rule of thumb is – the more the quantity, the lower the price, the fewer the quantity,
						the higher the price. Set the price for your NFTs with humility, but raise the floor price steadily and consistently as the market
						responds. Musixverse recommends limiting the quantity to create exclusivity.
					</li>
					<li>
						<strong>Royalty Percentage:</strong> There’s no bar on the royalty percentage that you want to give to your NFT collectors. However, we
						recommend keeping it between 2% to 5%.
					</li>
					<li>
						<strong>Collaborators:</strong> Include all the collaborators who worked with you while creating a song. If they haven’t already signed
						up yet, don’t forget to invite them. You will find an option to invite them while creating the NFT. While you will not be able to
						complete NFT creation until they are on the platform, we will save your progress for you to pick up where you left.
					</li>
					<li>
						<strong>Cover Art:</strong>
						<ul className="list-disc pl-4">
							<li>File types supported: Any image file</li>
							<li>Max file size: 1 GB</li>
							<li>Recommended size: 640 x 640 px</li>
						</ul>
					</li>
					<li>
						<strong>Audio File:</strong>
						<ul className="list-disc pl-4">
							<li>File types supported: Any audio file</li>
							<li>Max file size: 1 GB</li>
						</ul>
					</li>
					<li>
						<strong>Links to music platforms:</strong> Provide links of the song that you already released to the streaming platforms like Spotify,
						Apple Music, etc
					</li>
				</ul>
			</>
		),
		content_id: "collapseFour",
	},
	{
		heading: "How much does it cost to create an NFT?",
		body: "It costs less than $0.01 to create an NFT.",
		content_id: "collapseFive",
	},
];
