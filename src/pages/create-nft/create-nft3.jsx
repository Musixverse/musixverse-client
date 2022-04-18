import Head from "next/head";
import Router from "next/router";

const CreateNFT3 = ({ }) => {
    return (
        <>
            <Head>
                <title>Musixverse | Contributors</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto pt-36 pb-20 min-h-screen">
                <div className="flex flex-wrap justify-center content-center items-center">
                    TBD
                    <button onClick={Router.push('/create-nft/create-nft4',undefined,{shallow:true})}>Next</button>
                </div>
            </div>
        </>
    );
};

export default CreateNFT3;