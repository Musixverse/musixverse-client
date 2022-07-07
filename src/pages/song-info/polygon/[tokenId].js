import Head from "next/head";
import { useRouter } from "next/router";
import Moralis from "moralis/node";
import { MXV_CONTRACT_ADDRESS, BLOCKCHAIN_NETWORK } from "../../../utils/smart-contract/constants";
import SongHeader from "../../../components/SongInfo/SongHeader";
import SongDetails from "../../../components/SongInfo/SongDetails";
import PurchaseInfo from "../../../components/SongInfo/PurchaseInfo";
import SalesHistory from "../../../components/SongInfo/SalesHistory";

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

    // Passing data to the Page using props
    return {
        props: { token },
    };
}

export default function songInfo({ token }) {
    const router = useRouter();
    const { tokenId } = router.query;
    const metadata = JSON.parse(token.metadata);

    console.log("metadata", metadata);
    console.log("tokenId", tokenId);

    return (
        <>
            <Head>
                <title>Musixverse | Song Info</title>
                <meta name="description" content="The NFT Marketplace for Musicians and Fans" />
            </Head>

            <div className="flex flex-col items-center justify-center w-full bg-light-100 dark:bg-dark-200 pt-28 pb-20">
                <div className="w-full max-w-[1920px] px-16 xl:px-20 2xl:px-36">
                    <SongHeader
                        image={metadata.image}
                        artistAddress={metadata.artistAddress}
                        name={metadata.name}
                        animation_url={metadata.animation_url}
                        tokenId={tokenId}
                        unlockTimestamp={metadata.unlockTimestamp}
                    />
                    <SongDetails tokenId={tokenId} metadata={metadata} />
                    <div className="grid grid-cols-9 xl:grid-cols-5 gap-6 my-10">
                        <PurchaseInfo />
                        <SalesHistory />
                    </div>
                </div>
            </div>
        </>
    );
}
