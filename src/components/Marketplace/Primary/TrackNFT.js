import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import Link from "next/link";
import { MXV_CONTRACT_ADDRESS, BLOCKCHAIN_NETWORK } from "../../../utils/smart-contract/constants";
import NFTCard from "../../../layout/NFTCard/NFTCard";

// // Fetching data over here using SSR and then passing in the components as props
// export async function getServerSideProps({ query }) {
//     const { tokenId } = query;

//     const MORALIS_APP_ID = process.env.NEXT_PUBLIC_MORALIS_APP_ID;
//     const MORALIS_SERVER_URL = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL;
//     await Moralis.start({ serverUrl: MORALIS_SERVER_URL, appId: MORALIS_APP_ID });

//     const options = {
//         chain: BLOCKCHAIN_NETWORK,
//         address: MXV_CONTRACT_ADDRESS,
//         token_id: tokenId,
//     };
//     const token = await Moralis.Web3API.token.getTokenIdMetadata(options);

//     // Fetch similar tokens
//     let otherTokensOfTrack = [];
//     await Moralis.Cloud.run("fetchOtherTokensOfTrack", { tokenId: tokenId }).then((result) => {
//         otherTokensOfTrack = result;
//     });

//     // Passing data to the Page using props
//     return {
//         props: { token, otherTokensOfTrack },
//     };
// }

const TrackNFT = ({ token, index }) => {
    const { Moralis } = useMoralis();
    console.log("token:", token);

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
        console.log(metadata);
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
