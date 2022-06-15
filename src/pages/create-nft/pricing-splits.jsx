import Head from "next/head";
import PricingAndSplits from "../../components/CreateNFT/pricing-splits";

const PricingSplits = ({}) => {
    return (
        <>
            <Head>
                <title>Musixverse | Pricing & Splits</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-200">
                <div className="overflow-x-hidden w-full max-w-[1920px] pt-24 px-16 xl:px-20 2xl:px-36">
                    <PricingAndSplits />
                </div>
            </div>
        </>
    );
};

export default PricingSplits;