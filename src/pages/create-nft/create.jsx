import Head from "next/head";
import CreateNFT from "../../components/CreateNFT/createNFT";

const Create = ({}) => {
    return (
        <>
            <Head>
                <title>Musixverse | Create NFT</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-200">
                <div className="overflow-x-hidden w-full max-w-[1920px] pt-24 px-16 xl:px-20 2xl:px-36">
                    <CreateNFT />
                </div>
            </div>
        </>
    );
};

export default Create;