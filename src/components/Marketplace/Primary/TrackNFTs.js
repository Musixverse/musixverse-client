import { useEffect } from "react";
import { useMoralisCloudFunction } from "react-moralis";
import TrackNFT from "./TrackNFT";

const TrackNFTs = () => {
    const { data: allTracks } = useMoralisCloudFunction("fetchAllTracks", { autoFetch: true });

    useEffect(() => {
        console.log("allTracks:", allTracks);
    }, [allTracks]);

    return (
        <div className="col-span-9 grid grid-cols-4 gap-10">
            {allTracks &&
                allTracks.map((token, index) => {
                    return <TrackNFT key={index} token={token} index={index} />;
                })}
        </div>
    );
};

export default TrackNFTs;
