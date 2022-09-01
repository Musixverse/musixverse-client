import Image from "next/image";
import Link from "next/link";
import { useMoralis } from "react-moralis";

export default function NoNfts({ username }) {
	const { user } = useMoralis();

	return (
		<div className="flex flex-col items-center justify-center w-full p-20 mt-10 mb-20 rounded-xl dark:bg-dark-100 bg-light-100">
			<div className="mb-5 rounded-full flex items-center justify-center w-[120px] h-[120px] bg-light-200 dark:bg-dark-200">
				<Image src={"/assets/profile/no-nfts.svg"} width={70} height={42} alt="music jazz" />
			</div>

			<div className="flex flex-col items-center space-y-3">
				{username === user.attributes.username ? (
					<p className="font-secondary mb-8">You don&apos;t have any items to display</p>
				) : (
					<p className="font-secondary mb-8">No items to display</p>
				)}

				{/* If artist then render create nft other wise buy nft */}
				{username === user.attributes.username && user.attributes.isArtist ? (
					<Link href={"/create-nft"} passHref>
						<button className="py-2 font-medium text-center px-14 hover:bg-primary-200 bg-primary-100 rounded-3xl text-light-100">
							Create NFTs
						</button>
					</Link>
				) : username === user.attributes.username ? (
					<Link href={"/mxcatalog/new-releases"} passHref>
						<button className="py-2 font-medium text-center px-14 hover:bg-primary-200 bg-primary-100 rounded-3xl text-light-100">Buy NFTs</button>
					</Link>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}