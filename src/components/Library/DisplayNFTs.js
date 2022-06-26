import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { MXV_CONTRACT_ADDRESS, BLOCKCHAIN_NETWORK } from "../../utils/smart-contract/constants";
import NFTCard from "../../layout/NFTCard/NFTCard";

const DisplayNFTs = () => {
    const { Moralis, isInitialized } = useMoralis();
    const [Tokens, setTokens] = useState("");

    const fetchTokens = async () => {
        const options = {
            address: MXV_CONTRACT_ADDRESS,
            chain: BLOCKCHAIN_NETWORK,
        };
        const nftData = await Moralis.Web3API.token.getNFTOwners(options);
        console.log("nftData:", nftData);
        setTokens(nftData.result);
    };

    // const fetchTokenIdMetadata = async () => {
    //     const options = {
    //         address: MXV_CONTRACT_ADDRESS,
    //         token_id: "1",
    //         chain: BLOCKCHAIN_NETWORK,
    //     };
    //     const tokenIdMetadata = await Moralis.Web3API.token.getTokenIdMetadata(options);
    //     console.log("tokenIdMetadata:", tokenIdMetadata);
    // };

    // const fetchTokensForCurrentAccount = async () => {
    //     const options = {
    //         chain: BLOCKCHAIN_NETWORK,
    //         token_id: "1",
    //         token_address: MXV_CONTRACT_ADDRESS,
    //     };
    //     const nftData = await Moralis.Web3API.account.getNFTsForContract(options);
    //     console.log("nftData:", nftData);
    //     setTokens(nftData.result);
    // };

    useEffect(() => {
        if (isInitialized) {
            fetchTokens();
            // fetchTokenIdMetadata();
        }
    }, [isInitialized]);

    return (
        <div className="container mx-auto pb-60">
            <div className="grid grid-cols-5 gap-10">
                {Tokens &&
                    Tokens.map((nft, index) => {
                        const metadata = JSON.parse(nft.metadata);
                        console.log("metadata:", metadata);

                        return <NFTCard key={index} songName={metadata.name} artistName={metadata.artistName} image={metadata.image} songId={metadata.id} />;
                    })}
            </div>
        </div>
    );
};

export default DisplayNFTs;
