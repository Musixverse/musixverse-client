import { useState, useEffect } from "react";
import Link from "next/link";
import { useMoralis } from "react-moralis";
import { MXV_CONTRACT_ADDRESS, BLOCKCHAIN_NETWORK } from "../../../utils/smart-contract/constants";
import NFTCard from "../../../layout/NFTCard/NFTCard";

const DisplayNFT = ({ track, index }) => {
    // const fetchTokenMetadata = async () => {
    //     if (token.metadata == null) {
    //         fetch(token.token_uri)
    //             .then((response) => {
    //                 return response.json();
    //             })
    //             .then((data) => {
    //                 setMetadata(data);
    //                 console.log("metadata:", metadata);
    //             });
    //     } else {
    //         setMetadata(JSON.parse(token.metadata));
    //     }
    // };

    // useEffect(async () => {
    //     await fetchTokenMetadata();
    // }, [token]);

    // useEffect(async () => {
    //     console.log("metadata:", metadata);
    // }, [metadata]);

    const { Moralis } = useMoralis();
    const [metadata, setMetadata] = useState("");

    const fetchTrackMetadata = async () => {
        const options = {
            address: MXV_CONTRACT_ADDRESS,
            token_id: track.purchasedTokens.at(0),
            chain: BLOCKCHAIN_NETWORK,
        };
        const token = await Moralis.Web3API.token.getTokenIdMetadata(options);

        if (token.metadata == null) {
            await fetch(token.token_uri)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    token.metadata = data;
                });
        }

        if (typeof token.metadata === "string") {
            const _metadata = JSON.parse(token.metadata);
            setMetadata(_metadata);
        } else {
            setMetadata(token.metadata);
        }
    };

    useEffect(async () => {
        await fetchTrackMetadata();
    }, []);

    if (metadata) {
        const soldOnceTrackData = {
            // This is passed only because we need Lowest Price being shown on the NFT Card
            tokenIdHavingLowestPrice: track.purchasedTokens.at(0),
        };

        return (
            <Link key={index} href={`/polygon/track/${track.purchasedTokens.at(0)}`} passHref={true}>
                <a>
                    <NFTCard
                        trackName={metadata.title}
                        artistName={metadata.artist}
                        image={metadata.artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
                        tokenId={track.purchasedTokens.at(0)}
                        numberOfCopies={metadata.attributes[0].value}
                        collaboratorList={metadata.collaborators}
                        soldOnceTrackData={soldOnceTrackData}
                    />
                </a>
            </Link>
        );
    } else return null;
};

export default DisplayNFT;
