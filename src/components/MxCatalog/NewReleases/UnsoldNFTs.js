import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { useMoralisCloudFunction } from "react-moralis";
import UnsoldNFT from "./UnsoldNFT";
import LoadingContext from "../../../../store/loading-context";
import errorSvg from "/public/assets/success-failure-modals/error.svg";

const UnsoldNFTs = ({ appliedFilter }) => {
	const [loading, setLoading] = useContext(LoadingContext);
	const [tracksWhoseAllCopiesAreNotSold, setTracksWhoseAllCopiesAreNotSold] = useState([]);

	const { fetch: fetchTracksWhoseAllCopiesAreNotSold } = useMoralisCloudFunction(
		"fetchTracksWhoseAllCopiesAreNotSold",
		{ appliedFilter: appliedFilter },
		{ autoFetch: false }
	);

	useEffect(() => {
		setLoading(true);
		fetchTracksWhoseAllCopiesAreNotSold({
			onSuccess: async (object) => {
				setLoading(false);
				console.log(object);
				setTracksWhoseAllCopiesAreNotSold(object);
			},
			onError: (error) => {
				setLoading(false);
				console.log("fetchTracksWhoseAllCopiesAreNotSold Error:", error);
			},
		});
	}, [appliedFilter, fetchTracksWhoseAllCopiesAreNotSold]);

	return (
		<div className="w-full grid col-span-9 gap-y-[60px] gap-x-[80px] 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2">
			{tracksWhoseAllCopiesAreNotSold && tracksWhoseAllCopiesAreNotSold.length === 0 ? (
				<div className="w-full col-span-full flex flex-col justify-center items-center bg-light-300 py-48 rounded-2xl">
					<Image src={errorSvg} alt="error" height={60} width={60} />
					<div className="mt-8">No results found</div>
				</div>
			) : (
				tracksWhoseAllCopiesAreNotSold &&
				tracksWhoseAllCopiesAreNotSold.map((track, index) => {
					return <UnsoldNFT key={track.maxTokenId} track={track} index={index} />;
				})
			)}
		</div>
	);
};

export default UnsoldNFTs;
