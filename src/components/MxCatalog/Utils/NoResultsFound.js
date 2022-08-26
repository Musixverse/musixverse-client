import Image from "next/image";
import errorSvg from "/public/assets/success-failure-modals/error.svg";

const NoResultsFound = () => {
	return (
		<div className="w-full col-span-full flex flex-col justify-center items-center bg-light-300 py-48 rounded-2xl">
			<Image src={errorSvg} alt="error" height={60} width={60} />
			<div className="mt-8">No results found</div>
		</div>
	);
};

export default NoResultsFound;
