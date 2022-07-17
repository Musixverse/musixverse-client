import Head from "next/head";
import MarketplaceHeader from "../../components/Marketplace/Utils/MarketplaceHeader";
import MarketplaceChooser from "../../components/Marketplace/Utils/MarketplaceChooser";
import FilterSection from "../../components/Marketplace/Utils/FilterSection";
import DisplayNFTs from "../../components/Marketplace/Explore/DisplayNFTs";

const Explore = ({}) => {
    return (
        <>
            <Head>
                <title>Musixverse | Explore</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MarketplaceHeader />
            <MarketplaceChooser />

            <div className="w-full flex pr-24 max-w-[1920px] mx-auto pb-60 dark:bg-dark-200">
                <div className="w-full grid grid-cols-12 space-x-20">
                    <FilterSection />
                    <DisplayNFTs />
                </div>
            </div>
        </>
    );
};

export default Explore;
