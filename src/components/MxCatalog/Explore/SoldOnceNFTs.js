import { useState, useEffect, useContext } from "react";
import { useMoralisCloudFunction } from "react-moralis";
import SoldOnceNFT from "./SoldOnceNFT";
import LoadingNftCards from "../Utils/LoadingNftCards";
import NoResultsFound from "../Utils/NoResultsFound";
import LoadingContext from "../../../../store/loading-context";

const SoldOnceNFTs = ({ appliedFilter }) => {
	const [loading, setLoading] = useContext(LoadingContext);
	const [tracksWhoseCopiesAreSoldOnce, setTracksWhoseCopiesAreSoldOnce] = useState(false);

	const { fetch: fetchTracksWhoseCopiesAreSoldOnce } = useMoralisCloudFunction(
		"fetchTracksWhoseCopiesAreSoldOnce",
		{ appliedFilter: appliedFilter },
		{ autoFetch: false }
	);

	useEffect(() => {
		setLoading(true);
		fetchTracksWhoseCopiesAreSoldOnce({
			onSuccess: async (object) => {
				setLoading(false);
				setTracksWhoseCopiesAreSoldOnce(object);
			},
			onError: (error) => {
				setLoading(false);
				console.log("fetchTracksWhoseCopiesAreSoldOnce Error:", error);
			},
		});
	}, [appliedFilter, fetchTracksWhoseCopiesAreSoldOnce]);

	return (
		<>
			{loading ? (
				<LoadingNftCards />
			) : !loading && tracksWhoseCopiesAreSoldOnce.length === 0 ? (
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
