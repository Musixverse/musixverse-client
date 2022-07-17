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
            token_id: token.attributes.maxTokenId,
            chain: BLOCKCHAIN_NETWORK,
        };
        const singleToken = await Moralis.Web3API.token.getTokenIdMetadata(options);
        const metadata = JSON.parse(singleToken.metadata);
        setMetadata(metadata);
    };

    useEffect(async () => {
        await fetchTrackMetadata();
    }, []);

    if (metadata) {
        return (
            <Link key={index} href={`/`} passHref={true}>
                <a>
                    <NFTCard
                        trackName={metadata.title}
                        artistName={metadata.artist}
                        image={metadata.artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
                        tokenId={token.attributes.maxTokenId}
                        numberOfCopies={metadata.attributes[0].value}
                        collaboratorList={metadata.collaborators}
                        primaryMarketplacePrice={token.attributes.price}
                    />
                </a>
            </Link>
        );
    } else return null;
};

export default TrackNFT;
