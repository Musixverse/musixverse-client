import Link from "next/link";

export default function ReadSection() {
	return (
		<div className="flex flex-col items-center justify-center w-full">
			<h1 className="text-center text-3xl">Recommended Reads</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
				<div className="bg-white text-lg font-primary p-12 text-center rounded-lg cursor-pointer dark:bg-dark-600 shadow hover:shadow-primary-500 transition-all duration-500">
					<Link href="https://medium.com/@musixverse/how-to-create-an-nft-on-musixverse-15e58cb2bee1">How to Create an NFT on Musixverse</Link>
				</div>
				<div className="bg-white text-lg font-primary p-12 text-center rounded-lg cursor-pointer dark:bg-dark-600 shadow hover:shadow-primary-500 transition-all duration-500">
					<Link href="https://medium.com/@musixverse/how-to-buy-an-nft-on-musixverse-5f630e590a69">How to Buy an NFT on Musixverse</Link>
				</div>
				<div className="bg-white text-lg font-primary p-12 text-center rounded-lg cursor-pointer dark:bg-dark-600 shadow hover:shadow-primary-500 transition-all duration-500">
					<Link href="https://medium.com/@musixverse/how-to-sell-an-nft-on-musixverse-74353f8245a7">How to Sell an NFT on Musixverse?</Link>
				</div>
				<div className="bg-white text-lg font-primary p-12 text-center rounded-lg cursor-pointer dark:bg-dark-600 shadow hover:shadow-primary-500 transition-all duration-500">
					<Link href="https://medium.com/@musixverse/how-to-set-up-a-crypto-wallet-metamask-477be25c0f5f">How to Set Up a Crypto Wallet (MetaMask)?</Link>
				</div>
				<div className="bg-white text-lg font-primary p-12 text-center rounded-lg cursor-pointer dark:bg-dark-600 shadow hover:shadow-primary-500 transition-all duration-500">
					<Link href="https://medium.com/@musixverse/musixverse-nft-guidelines-3664764ecd7f">Musixverse NFT Guidelines</Link>
				</div>
				<div className="bg-white text-lg font-primary p-12 text-center rounded-lg cursor-pointer dark:bg-dark-600 shadow hover:shadow-primary-500 transition-all duration-500">
					<Link href="https://medium.com/@musixverse/how-to-show-off-your-musixverse-nft-on-instagram-a8622f99372e">How to Publish Your Musixverse NFTs on Instagram?</Link>
				</div>
			</div>
		</div>
	);
}
