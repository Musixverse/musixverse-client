import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import Link from "next/link";
import { MXV_CONTRACT_ADDRESS, BLOCKCHAIN_NETWORK } from "../../../utils/smart-contract/constants";
import NFTCard from "../../../layout/NFTCard/NFTCard";

const TrackNFT = ({ token, index }) => {
    const { Moralis } = useMoralis();
    const [metadata, setMetadata] = useState();

    const fetchTrackMetadata = async () => {
        const options = {
            address: MXV_CONTRACT_ADDRESS,
            token_id: token.unsoldTokens.at(-1),
            chain: BLOCKCHAIN_NETWORK,
        };
        const singleToken = await Moralis.Web3API.token.getTokenIdMetadata(options);
        const _metadata = JSON.parse(singleToken.metadata);
        setMetadata(_metadata);
    };

    useEffect(async () => {
        await fetchTrackMetadata();
    }, []);

    if (metadata) {
        const unsoldTrackData = {
            primaryMarketplacePrice: token.price,
            unsoldTokens_size: token.unsoldTokens_size,
            purchasedTokens_size: token.purchasedTokens_size,
        };

        return (
            <Link key={index} href={`/polygon/track/${token.unsoldTokens.at(-1)}`} passHref={true}>
                <a>
                    <NFTCard
                        trackName={metadata.title}
                        artistName={metadata.artist}
                        image={metadata.artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
                        tokenId={token.unsoldTokens.at(-1)}
                        numberOfCopies={metadata.attributes[0].value}
                        collaboratorList={metadata.collaborators}
                        unsoldTrackData={unsoldTrackData}
                    />
                </a>
            </Link>
        );
    } else return null;
};

export default TrackNFT;
