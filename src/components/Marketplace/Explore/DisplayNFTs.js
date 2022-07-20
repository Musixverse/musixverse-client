import { useState, useEffect } from "react";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import { MXV_CONTRACT_ADDRESS, BLOCKCHAIN_NETWORK } from "../../../utils/smart-contract/constants";
import DisplayNFT from "./DisplayNFT";

const DisplayNFTs = () => {
    // const { Moralis, isInitialized } = useMoralis();
    // const [tokens, setTokens] = useState([]);

    // const fetchTokens = async () => {
    //     const options = {
    //         address: MXV_CONTRACT_ADDRESS,
    //         chain: BLOCKCHAIN_NETWORK,
    //     };
    //     const nftData = await Moralis.Web3API.token.getNFTOwners(options);
    //     setTokens(nftData.result);
    // };

    // useEffect(() => {
    //     if (isInitialized) {
    //         fetchTokens();
    //     }
    // }, [isInitialized]);

    // useEffect(() => {
    //     console.log("Tokens:", tokens);
    // }, [tokens]);

    const { data: tracksWhoseCopiesAreSoldOnce } = useMoralisCloudFunction("fetchTracksWhoseCopiesAreSoldOnce", { autoFetch: true });

    useEffect(() => {
        console.log("tracksWhoseCopiesAreSoldOnce:", tracksWhoseCopiesAreSoldOnce);
    }, [tracksWhoseCopiesAreSoldOnce]);

    return (
        <div className="col-span-9 grid grid-cols-4 gap-10">
            {tracksWhoseCopiesAreSoldOnce &&
                tracksWhoseCopiesAreSoldOnce.map((track, index) => {
                    return <DisplayNFT key={index} track={track} index={index} />;
                })}
        </div>
    );
};

export default DisplayNFTs;
