import Image from "next/image";

const NoResultsFound = () => {
	return (
		<div className="w-full col-span-full flex flex-col justify-center items-center bg-light-300 dark:bg-dark-600 py-44 rounded-2xl">
			<div className="rounded-full flex items-center justify-center w-[120px] h-[120px] bg-light-200 dark:bg-dark-800">
				<Image src={"/assets/profile/no-nfts.svg"} width={70} height={42} alt="music jazz" />
			</div>

			<div className="mt-8">No tracks to display</div>
		</div>
	);
};

export default NoResultsFound;
