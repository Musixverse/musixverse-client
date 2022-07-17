import { useState, useEffect, useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Moralis from "moralis/node";
import { useMoralis } from "react-moralis";
import { MXV_CONTRACT_ADDRESS, BLOCKCHAIN_NETWORK } from "../../../utils/smart-contract/constants";
import { getCurrentNftPrice } from "../../../utils/smart-contract/functions";
import TrackHeader from "../../../components/TrackInfo/TrackHeader";
import TrackDetails from "../../../components/TrackInfo/TrackDetails";
import PurchaseInfo from "../../../components/TrackInfo/PurchaseInfo";
import SalesHistory from "../../../components/TrackInfo/SalesHistory";
import SimilarTokens from "../../../components/TrackInfo/SimilarTokens";
import LoadingContext from "../../../../store/loading-context";

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

    // const tokenIdOwners = await Moralis.Web3API.token.getTokenIdOwners(options);

    // Fetch similar tokens
    let similarTokens;
    await Moralis.Cloud.run("fetchTokensWithSameTokenUri", { tokenId: tokenId, contractAddress: MXV_CONTRACT_ADDRESS, chain: BLOCKCHAIN_NETWORK }).then(
        (result) => {
            similarTokens = result;
        }
    );

    // Passing data to the Page using props
    return {
        props: { token, similarTokens },
    };
}

export default function TrackInfo({ token, similarTokens }) {
    const [isLoading, setLoading] = useContext(LoadingContext);

    const router = useRouter();
    const { tokenId } = router.query;
    const metadata = JSON.parse(token.metadata);

    const { Moralis } = useMoralis();
    const isWeb3Active = Moralis.ensureWeb3IsInstalled();
    const [price, setPrice] = useState("");

    const getPriceOf = async (tokenId) => {
        const result = await getCurrentNftPrice(tokenId);
        return result;
    };

    useEffect(async () => {
        setLoading(true);
        if (isWeb3Active) {
            const musicNft = await getPriceOf(tokenId);
            setPrice(Moralis.Units.FromWei(musicNft.price));
            setLoading(false);
        }
    }, [isWeb3Active]);

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
                        currentOwnerAddress={token.owner_of}
                        numberOfCopies={metadata.attributes[0].value}
                    />
                    <TrackDetails tokenId={tokenId} metadata={metadata} />
                    <div className="grid grid-cols-9 xl:grid-cols-5 gap-6 my-10">
                        <PurchaseInfo tokenId={tokenId} metadata={metadata} currentOwnerAddress={token.owner_of} price={price} />
                        <SalesHistory />
                    </div>
                    <SimilarTokens similarTokens={similarTokens} tokenId={tokenId} />
                </div>
            </div>
        </>
    );
}
