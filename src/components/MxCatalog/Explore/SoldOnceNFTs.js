import { useState, useEffect, useContext } from "react";
import { useMoralisCloudFunction } from "react-moralis";
import SoldOnceNFT from "./SoldOnceNFT";
import LoadingNftCards from "../Utils/LoadingNftCards";
import NoResultsFound from "../Utils/NoResultsFound";
import LoadingContext from "../../../../store/loading-context";

const SoldOnceNFTs = ({ appliedFilter, tracks }) => {
	const [isLoading, setLoading] = useContext(LoadingContext);
	const [tracksWhoseCopiesAreSoldOnce, setTracksWhoseCopiesAreSoldOnce] = useState(tracks);
	const [hasLoadedOnce, setLoadedOnce] = useState(false);

	const { fetch: fetchTracksWhoseCopiesAreSoldOnce } = useMoralisCloudFunction(
		"fetchTracksWhoseCopiesAreSoldOnce",
		{ appliedFilter: appliedFilter },
		{ autoFetch: false }
	);

	useEffect(() => {
		if (hasLoadedOnce) {
			setLoading({
				status: true,
				title: "Applying Filter...",
			});
			fetchTracksWhoseCopiesAreSoldOnce({
				onSuccess: async (object) => {
					setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
					setTracksWhoseCopiesAreSoldOnce(object);
				},
				onError: (error) => {
					setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
					console.log("fetchTracksWhoseCopiesAreSoldOnce Error:", error);
				},
			});
		}
		setLoadedOnce(true);
	}, [appliedFilter, fetchTracksWhoseCopiesAreSoldOnce]);

	return (
		<>
			{isLoading.status ? (
				<LoadingNftCards />
			) : !isLoading.status && tracksWhoseCopiesAreSoldOnce && tracksWhoseCopiesAreSoldOnce.length === 0 ? (
				<NoResultsFound />
			) : (
				tracksWhoseCopiesAreSoldOnce &&
				tracksWhoseCopiesAreSoldOnce.map((track, index) => {
					return <SoldOnceNFT key={track.maxTokenId} track={track} />;
				})
			)}
		</>
	);
};

export default SoldOnceNFTs;
