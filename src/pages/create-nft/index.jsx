import Head from "next/head";

const CreateNFT = ({ }) => {
    return (
        <>
            <Head>
                <title>Musixverse | Create NFT</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto pt-36 pb-20 min-h-screen">
                <div className="flex flex-wrap justify-center content-center items-center">
                    {/* Taking ISRC Code as Input */}
                    <label htmlFor="ISRC">
                        ISRC Number
                    </label>
                    <input 
                        type="text" 
                        id="ISRC" 
                        pattern="[a-zA-Z0-9]+" 
                        placeholder="ISRC Number" 
                        maxLength={12}         
                    />
                    <button>Next</button>
                </div>
            </div>
        </>
    );
};

export default CreateNFT;