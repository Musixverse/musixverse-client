import Head from "next/head";

const CreateNFT4 = ({ }) => {
    return (
        <>
            <Head>
                <title>Musixverse | NFT Details & Scheduling</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto pt-36 pb-20 min-h-screen">
                <div className="flex flex-wrap justify-center content-center items-center">
                    <label htmlFor="NFT-share-price">
                        Price of Individual NFT
                    </label>
                    <input 
                        type={number}
                        id="NFT-share-price" 
                        placeholder="Price" 
                        min={0}         
                    />
                    <label htmlFor="NFT-copies">
                        No. of copies of NFT
                    </label>
                    <input 
                        type={number}
                        id="NFT-copies" 
                        placeholder="No. of copies" 
                        min={0}         
                    />
                    <label htmlFor="NFT-royalty">
                        Resale Royalty Percentage
                    </label>
                    <input 
                        type={number}
                        id="NFT-royalty" 
                        placeholder="Resale Royalty Percentage" 
                        min={0}         
                    />
                    <label>
                        Schedule Your NFT launch
                    </label>
                    <label>
                        <input type="radio" value="option1" checked={true} />
                        Release Now
                    </label>
                    <label>
                        <input type="radio" value="option2" />
                        Schedule for some time in the future
                    </label>
                    <button>Next</button>
                </div>
            </div>
        </>
    );
};

export default CreateNFT4;