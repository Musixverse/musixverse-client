const generalData = [
    {
        heading: "What is Musixverse?",
        body: "Musixverse is a decentralized application(dApp) for musicians to create NFTs of their music. These NFTs can then be traded and each time an NFT gets traded, the musician will get 5% of the trade as royalty!",
        content_id: "collapseOne",
    },
    {
        heading: "What is a decentralized application, aka dApp?",
        body: "Decentralized applications (dApps) are digital applications or programs that exist and run on a blockchain or P2P network of computers instead of a single computer, and are outside the purview and control of a single authority.",
        content_id: "collapseTwo",
    },
    {
        heading: "Why build a dApp on Polygon?",
        body: "This is a somewhat loaded question, but in simple terms the Polygon Network is faster and cheaper than the alternative smart contract platforms. It is more advanced and a better option for future projects to be built upon.",
        content_id: "collapseThree",
    },
    {
        heading: "Who is behind Musixverse?",
        body: "Everyone on the team page except Shivam Singh.",
        content_id: "collapseFour",
    },
    {
        heading: "Is this a platform like Spotify, just on blockchain? Or is it just a platform where users can trade individual tracks?",
        body: "Currently, Musixverse is a platform to trade individual NFTs of tracks. NFTs from artists can be looked at as stocks in the market. Just as buying stocks of companies that people believe to perform good in the future can result in massive profits, similarly, the value of these NFTs can skyrocket if that artist grows to be successful over time.",
        content_id: "collapseFive",
    },
];

const whatDoINeedData = [
    {
        heading: "A computer running a web browser like Chrome or Firefox",
        body: (
            <>
                <p className="text-sm text-primary-200 sm:text-base">Can I play on a mobile device?</p>
                <p>
                    You sure can! We currently support the Metamask wallet, and plan to integrate with other wallets like the Coinbase Wallet and Trust Wallet
                    in the future. Plus, we will be building a mobile app for Musixverse, so you&apos;ll soon be able to play anywhere!
                </p>
                <p className="mt-5 text-sm text-primary-200 sm:text-base">Can I log in from multiple computers?</p>
                <p>You can use Musixverse from multiple computers as long as you have your digital wallet installed on both.</p>
            </>
        ),
        content_id: "collapseOne",
    },
    {
        heading: "About Digital Wallets",
        body: (
            <>
                <p className="text-sm text-primary-200 sm:text-base">Installing your digital wallet</p>
                <ul className="mt-1 list-disc pl-7">
                    <li>To use Musixverse, you need a digital wallet. We only support the Metamask wallet currently.</li>
                    <li>
                        You&apos;ll need to put m1y in your wallet to make your first purchase. We can show you how to do that too. Just contact us through the
                        contact page and we&apos;ll reach out to you!
                    </li>
                    <li>A digital wallet acts like a bank account— make sure you don&apos;t forget your password or lose your recovery kit.</li>
                </ul>
                <p className="mt-5 text-sm text-primary-200 sm:text-base">What is a “wallet address”?</p>
                <p>
                    Your public wallet address (e.g. 0x48b7cedF1D50cE6595a027c9234D5e5Bef54E09C) is a unique identifier for your wallet. It&apos;s like your
                    bank account number and people can transfer funds to this address.
                </p>
            </>
        ),
        content_id: "collapseTwo",
    },
    {
        heading: "MATIC, a digital currency",
        body: (
            <>
                <p className="text-sm text-primary-200 sm:text-base">What is MATIC? Why do I need it?</p>
                <ul className="mt-1 list-disc pl-7">
                    <li>
                        MATIC is a digital currency that powers the Polygon network, which is what Musixverse is built on. MATIC acts like any other currency—
                        its value fluctuates with the market.
                    </li>
                    <li>You need to convert your currency (e.g. USD, INR, CAD, GBP) into MATIC to trade NFTs on Musixverse.</li>
                </ul>
            </>
        ),
        content_id: "collapseThree",
    },
];

const aboutMxvData = [
    {
        heading: "Are Musixverse NFTs like Bitcoin?",
        body: (
            <>
                <ul className="list-disc pl-7">
                    <li>
                        NFTs on Musixverse are NOT a cryptocurrency. They&apos;re a cryptocollectibles. The real-world analogy for a cryptocurrency is dollars
                        or rupees; a cryptocollectible&apos;s real world analogy is closer to assets like baseball cards or fine art.
                    </li>
                    <li>
                        As dictated by the smart contract, any NFT you own belongs to you. Like any product or property you can own, the market price is
                        determined by supply and demand.
                    </li>
                </ul>
            </>
        ),
        content_id: "collapseOne",
    },
    {
        heading: "Are Musixverse NFTs ERC-721 tokens?",
        body: "This is quite ambiguous. We comply with the ERC-721 standard but Musixverse is a custom contract, which means that it doesn't comply completely with any standards.",
        content_id: "collapseTwo",
    },
    {
        heading: "Where are the tracks and cover images for the Musixverse NFTs stored?",
        body: "The actual tracks and images of the NFTs are too large to store on the blockchain, so we store the tracks and images on IPFS, and then embed the hashes into our smart contract.",
        content_id: "collapseThree",
    },
    {
        heading: "How does the price of an NFT change?",
        body: "The price of an NFT goes up by 20% of the current price after every sale. Also, the current owner can change the price of the NFT anytime they want.",
        content_id: "collapseFour",
    },
    {
        heading: "Will the original creator get royalty everytime the NFT is sold?",
        body: "Yes, the artist will receive a royalty of 5% everytime the NFT is sold.",
        content_id: "collapseFive",
    },
    {
        heading: "What is the breakdown of a transaction?",
        body: "After the creation of an NFT, if a buyer wishes to buy it, the musician will receive 99% of the transaction amount and 1% will be contributed towards the platform fee. On subsequent transactions, the musician will receive 5% as royalty, the previous owner will receive 94% of the transaction amount, and a meagre 1% will be contributed towards the platform fee.",
        content_id: "collapseSix",
    },
    {
        heading: "Links to which platforms can be included by the musician?",
        body: "Currently, we provide support for Spotify, Apple Music, Amazon Music, and YouTube Music.",
        content_id: "collapseSeven",
    },
    {
        heading: "Why do we take gas fee from users?",
        body: "It is required by the blockchain to pay a small amount for performing transactions. We could have created the smart contract in a way so that the gas fee would be deducted from our account, but we didn't do it to reduce spammers, so that only genuine artists upload their music to create NFTs.",
        content_id: "collapseEight",
    },
    {
        heading:
            "Why would a budding artist want to sell a NFT to a single person when their main objective is to create an audience by giving the track out for free for the world to listen to?",
        body: "The artist will still be able to do that. It is true that the main objective of an artist is to expand their audience but they still require monetary support along the way. We, at Musixverse, enable artists to get this support.",
        content_id: "collapseNine",
    },
];

const buyingAndSellingData = [
    {
        heading: "How do I get an NFT on Musixverse?",
        body: "Buy one from the Marketplace, which you can look through using the Library page. Click on one card and then purchase from the Track Info page.",
        content_id: "collapseOne",
    },
    {
        heading: "How can a buyer resell the NFT?",
        body: "A buyer can put the NFT on the Musixverse marketplace and any interested buyer can purchase the NFT for the specified price.",
        content_id: "collapseTwo",
    },
    {
        heading: "Where’s my NFT? I just bought one but it’s not showing up in my account!",
        body: (
            <>
                <ul className="list-disc pl-7">
                    <li>
                        Transactions on the blockchain can take a few minutes to process, and then it can take a few more minutes for our website to sync with
                        the blockchain.
                    </li>
                    <li>
                        Don&apos;t worry, though. If the transaction was successful the NFT belongs to you, and it will show up. The blockchain doesn&apos;t
                        lie.
                    </li>
                </ul>
            </>
        ),
        content_id: "collapseThree",
    },
    {
        heading: "How do I sell an NFT that I own?",
        body: "You can go to the Track Info page and put up the NFT on sale. If any buyer is interested in purchasing the NFT for the price that you have specified, then they can just buy it from you and it will be sold.",
        content_id: "collapseFour",
    },
    {
        heading: "I sold a track NFT. Where’s my MATIC?",
        body: "If you successfully sold an NFT through our marketplace, the other user definitely sent MATIC. Since the user paid for the sale through our smart contract, the payment isn’t reflected as a typical IN/OUT transaction in Polygonscan. (Polygonscan is a read-only interface for the Polygon network that shows all events on the blockchain.)",
        content_id: "collapseFive",
    },
    {
        heading: "When I tried to buy an NFT, it said, “Currently not for sale.” Why is it so?",
        body: "This message is triggered when the current owner of the NFT decides to take the NFT down from the marketplace. They may do this because they want to HODL it.",
        content_id: "collapseSix",
    },
    {
        heading: "I can’t access my wallet. Can you recover my NFTs?",
        body: (
            <>
                <ul className="list-disc pl-7">
                    <li>Unfortunately, no.</li>
                    <li>
                        If you lose access to your wallet, we can&apos;t recover your NFTs. It&apos;s not an issue of it being against our policy or being too
                        difficult; it&apos;s literally impossible.
                    </li>
                    <li>
                        Our smart contracts secure each NFT on Musixverse so that the developers can&apos;t edit, access, or reassign them. This protects your
                        NFTs from hackers and anyone else who would steal them. Unfortunately, it also means we can&apos;t simply ‘recover’ an NFT on
                        Musixverse.
                    </li>
                </ul>
            </>
        ),
        content_id: "collapseSeven",
    },
    {
        heading: "Where does my MATIC go when I buy an NFT?",
        body: "After the creation of an NFT, if a buyer wishes to buy it, the musician will receive 99% of the transaction amount and 1% will be contributed towards the platform fee. On subsequent transactions, the musician will receive 5% as royalty, the previous owner will receive 94% of the transaction amount, and a meagre 1% will be contributed towards the platform fee. Finally, you will become the owner of the NFT!",
        content_id: "collapseEight",
    },
    {
        heading: "Would the creator of the track have any distribution rights after the trade has occurred and they have sold it to someone else?",
        body: "Yes, the distribution rights will remain with the artist and they will have full control over the track.",
        content_id: "collapseNine",
    },
    {
        heading: "What are the rights of a buyer after buying the NFT?",
        body: "The buyer can use the track anywhere they want, but not for monetary benefits. The buyer just owns a copy of the track (i.e. the NFT), not the track itself.",
        content_id: "collapseTen",
    },
];

const TransactionsAndTechnicalData = [
    {
        heading: "What’s Polygonscan?",
        body: "Polygonscan is a read-only interface for the Polygon network. It tells you everything that’s happened on the blockchain. It helps you verify that transactions were successful, and tracks other helpful details about transactions and addresses.",
        content_id: "collapseOne",
    },
    {
        heading: "What is the gas fee for uploading the NFT?",
        body: "Gas fee on the Polygon Network can range between 0.02 to 1 INR.",
        content_id: "collapseTwo",
    },
    {
        heading: "Tell me more about ‘gas’.",
        body: (
            <>
                <ul className="list-disc pl-7">
                    <li>
                        ‘Gas’ is a shorthand used to describe the cost of powering a transaction or contract in Polygon, which is the blockchain network that
                        Musixverse is built on.
                    </li>
                    <li>
                        Because blockchain is decentralized, every transaction is distributed through multiple computers, not a central server. This ensures
                        each token — in this case, each NFT on Musixverse — is secure and one-of-a-kind. It also takes a lot of computational power, which is
                        covered by the cost of gas.
                    </li>
                    <li>
                        ‘Gas’ is composed of two parts: Gas Price and Gas Limit. Gas Price is what you offer to pay the miners for each operation to execute the
                        smart contract. Gas Limit is how many operations you let them to do before they run out of gas and drop the transaction.
                    </li>
                </ul>
            </>
        ),
        content_id: "collapseThree",
    },
    {
        heading: "What should be the size of a music file to be uploaded?",
        body: "The file size should remain below a 100MB limit.",
        content_id: "collapseFour",
    },
    {
        heading: "Help! My problem wasn’t addressed here. How do I contact the Musixverse team?",
        body: (
            <>
                <ul className="list-disc pl-7">
                    <li>
                        You can contact us at <span className="font-medium text-primary-300">contact@Musixverse.com</span>. Please include any relevant NFT IDs,
                        links, or transaction hashes so we can support you as quickly as possible.
                    </li>
                    <li>
                        You can also check our Discord community channel. Your fellow NFT owners are often just as helpful as we are, and usually much quicker
                        at addressing your concerns.
                    </li>
                </ul>
            </>
        ),
        content_id: "collapseFive",
    },
];

const communityData = [
    {
        heading: "Is there an official Twitter/Discord?",
        body: "We have an official Musixverse Discord group as well as a Twitter account. Check out by clicking the icons in the website footer.",
        content_id: "collapseOne",
    },
    {
        heading: "Why join Discord?",
        body: "Our Discord group is the official gathering place for our community. HODLers come to learn about the platform, chat about their strategies, and participate in community events. Join us!",
        content_id: "collapseTwo",
    },
    {
        heading: "Where do I find out about platform updates?",
        body: "We discuss all the happenings through our official Twitter handle and in the Discord group, including peeks into our development process and leaks about our newest features. You can access our handles anytime from the links at the footer of the site.",
        content_id: "collapseThree",
    },
    {
        heading: "How do I contact the Musixverse team?",
        body: (
            <p>
                You can contact us at <span className="font-medium text-primary-300">contact@Musixverse.com</span>. Please include any relevant NFT IDs, links,
                or transaction hashes so we can support you as quickly as possible.
            </p>
        ),
        content_id: "collapseFour",
    },
];

export { generalData, whatDoINeedData, aboutMxvData, buyingAndSellingData, TransactionsAndTechnicalData, communityData };
