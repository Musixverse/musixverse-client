import { useEffect } from "react";
import { useMoralisCloudFunction } from "react-moralis";
import TrackNFT from "./TrackNFT";

const TrackNFTs = () => {
    const { data: tracksWhoseAllCopiesAreNotSold } = useMoralisCloudFunction("fetchTracksWhoseAllCopiesAreNotSold", { autoFetch: true });

    useEffect(() => {
        console.log("tracksWhoseAllCopiesAreNotSold:", tracksWhoseAllCopiesAreNotSold);
    }, [tracksWhoseAllCopiesAreNotSold]);

    return (
        <div className="col-span-9 grid grid-cols-4 gap-10">
            {tracksWhoseAllCopiesAreNotSold &&
                tracksWhoseAllCopiesAreNotSold.map((track, index) => {
                    return <TrackNFT key={index} track={track} index={index} />;
                })}
        </div>
    );
};

export default TrackNFTs;
