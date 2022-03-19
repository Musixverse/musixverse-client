import Head from "next/head";
import Banner from "../../../components/ArtistProfile/Banner";
import ArtistHeader from "../../../components/ArtistProfile/ArtistHeader";
import Filter from "../../../components/ArtistProfile/Filter";
import NFTs from "../../../components/ArtistProfile/NFTs";
import NewsLetter from "../../../layout/NewsLetter";

export default function artistProfile() {
    return (
        <>
            <Head>
                <title>Musixverse | Collector Profile</title>
                <meta name="description" content="The NFT Marketplace for Musicians and Fans" />
            </Head>

            <div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-200">
                <Banner />
                <div className="w-full max-w-[1920px] px-16 xl:px-20 2xl:px-36">
                    <ArtistHeader />
                    <Filter />
                    <NFTs />
                </div>
                <NewsLetter />
            </div>
        </>
    );
}
