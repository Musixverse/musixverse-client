import Link from "next/link";

export default function ReadSection() {
	return (
		<div className="flex flex-col items-center justify-center w-full">
			<h1 className="text-center text-3xl">Recommended Reads</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
				<div className="bg-white text-lg font-primary p-12 text-center rounded-lg cursor-pointer dark:bg-dark-600 shadow hover:shadow-primary-500 transition-all duration-500">
					<Link href="/help-center/blog/how-to-open-account">How do I open a Musixverse account?</Link>
				</div>
				<div className="bg-white text-lg font-primary p-12 text-center rounded-lg cursor-pointer dark:bg-dark-600 shadow hover:shadow-primary-500 transition-all duration-500">
					<Link href="/help-center/blog/crypto-wallets-mxv">What crypto wallets can I use with Musixverse?</Link>
				</div>
				<div className="bg-white text-lg font-primary p-12 text-center rounded-lg cursor-pointer dark:bg-dark-600 shadow hover:shadow-primary-500 transition-all duration-500">
					<Link href="/help-center/blog/how-to-sell">How do I sell an NFT?</Link>
				</div>
				<div className="bg-white text-lg font-primary p-12 text-center rounded-lg cursor-pointer dark:bg-dark-600 shadow hover:shadow-primary-500 transition-all duration-500">
					<Link href="/help-center/blog/how-to-create-nft">How do I create an NFT?</Link>
				</div>
				<div className="bg-white text-lg font-primary p-12 text-center rounded-lg cursor-pointer dark:bg-dark-600 shadow hover:shadow-primary-500 transition-all duration-500">
					<Link href="/help-center/blog/how-to-transact">How can I buy MATIC to transact on Musixverse?</Link>
				</div>
				<div className="bg-white text-lg font-primary p-12 text-center rounded-lg cursor-pointer dark:bg-dark-600 shadow hover:shadow-primary-500 transition-all duration-500">
					<Link href="/help-center/blog/how-to-verify">How do I verify my Artist Profile?</Link>
				</div>
			</div>
		</div>
	);
}
