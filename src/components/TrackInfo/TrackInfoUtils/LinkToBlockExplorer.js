import Link from "next/link";

const LinkToBlockExplorer = ({ transactionHash }) => {
	return (
		<Link href={`${process.env.NEXT_PUBLIC_BLOCK_EXPLORER_URL}/tx/${transactionHash}`} className="cursor-pointer">
			<a className="ml-2">
				<i className="fa-solid fa-arrow-up-right-from-square"></i>
			</a>
		</Link>
	);
};

export default LinkToBlockExplorer;
