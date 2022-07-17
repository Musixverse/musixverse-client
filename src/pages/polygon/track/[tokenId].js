import { useState, useEffect, useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Moralis from "moralis/node";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import { MXV_CONTRACT_ADDRESS, BLOCKCHAIN_NETWORK } from "../../../utils/smart-contract/constants";
import TrackHeader from "../../../components/TrackInfo/TrackHeader";
import TrackDetails from "../../../components/TrackInfo/TrackDetails";
import PurchaseInfo from "../../../components/TrackInfo/PurchaseInfo";
import SalesHistory from "../../../components/TrackInfo/SalesHistory";
import SimilarTokens from "../../../components/TrackInfo/SimilarTokens";
import LoadingContext from "../../../../store/loading-context";
import { ownerOf } from "../../../utils/smart-contract/functions";

// Fetching data over here using SSR and then passing in the components as props
export async function getServerSideProps({ query }) {
    const { tokenId } = query;

    const MORALIS_APP_ID = process.env.NEXT_PUBLIC_MORALIS_APP_ID;
    const MORALIS_SERVER_URL = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL;
    await Moralis.start({ serverUrl: MORALIS_SERVER_URL, appId: MORALIS_APP_ID });

    const options = {
        chain: BLOCKCHAIN_NETWORK,
        address: MXV_CONTRACT_ADDRESS,
        token_id: tokenId,
    };
    const token = await Moralis.Web3API.token.getTokenIdMetadata(options);

    // Fetch similar tokens
    let otherTokensOfTrack = [];
    await Moralis.Cloud.run("fetchOtherTokensOfTrack", { tokenId: tokenId }).then((result) => {
        otherTokensOfTrack = result;
    });

    // Passing data to the Page using props
    return {
        props: { token, otherTokensOfTrack },
    };
}

export default function TrackInfo({ token, otherTokensOfTrack }) {
    const router = useRouter();
    const { tokenId } = router.query;
    const metadata = JSON.parse(token.metadata);

    const { Moralis } = useMoralis();
    const { data: tokenPrice } = useMoralisCloudFunction("fetchTokenPrice", { tokenId: tokenId });
    const { data: currentOwnerAddress } = useMoralisCloudFunction("fetchTokenOwner", {
        chain: BLOCKCHAIN_NETWORK,
        address: MXV_CONTRACT_ADDRESS,
        tokenId: tokenId,
    });

    const [price, setPrice] = useState("");
    useEffect(async () => {
        if (tokenPrice) {
            setPrice(Moralis.Units.FromWei(tokenPrice));
        }
    }, [tokenPrice]);

    console.log("metadata", metadata);
    console.log("token", token);

    return (
        <>
            <Head>
                <title>Musixverse | Track Info</title>
                <meta name="description" content="The NFT Marketplace for Musicians and Fans" />
            </Head>

            <div className="flex flex-col items-center justify-center w-full bg-light-100 dark:bg-dark-200 pt-28 pb-20">
                <div className="w-full max-w-[1920px] px-16 xl:px-20 2xl:px-36">
                    <TrackHeader
                        image={metadata.artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
                        artworkInfo={metadata.artwork}
                        artistAddress={metadata.artistAddress}
                        title={metadata.title}
                        audio_url={metadata.audio.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
                        tokenId={tokenId}
                        unlockTimestamp={metadata.unlockTimestamp}
                        price={price}
                        currentOwnerAddress={currentOwnerAddress}
                        numberOfCopies={metadata.attributes[0].value}
                    />
                    <TrackDetails tokenId={tokenId} metadata={metadata} />
                    <div className="grid grid-cols-9 xl:grid-cols-5 gap-6 my-10">
                        <PurchaseInfo tokenId={tokenId} metadata={metadata} currentOwnerAddress={currentOwnerAddress} price={price} />
                        <SalesHistory />
                    </div>
                    <SimilarTokens otherTokensOfTrack={otherTokensOfTrack} tokenId={tokenId} metadata={metadata} />
                </div>
            </div>
        </>
    );
}
