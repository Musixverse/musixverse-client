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
                        type={"number"}
                        id="NFT-share-price" 
                        placeholder="Price" 
                        min={0}         
                    />
                    <label htmlFor="NFT-copies">
                        No. of copies of NFT
                    </label>
                    <input 
                        type={"number"}
                        id="NFT-copies" 
                        placeholder="No. of copies" 
                        min={0}         
                    />
                    <label htmlFor="NFT-royalty">
                        Resale Royalty Percentage
                    </label>
                    <input 
                        type={"number"}
                        id="NFT-royalty" 
                        placeholder="Resale Royalty Percentage" 
                        min={0}         
                    />
                    <label htmlFor="schedule">Schedule Your NFT Launch
                        <input type={"radio"} id="schedule-now" name="schedule" value="Schedule Now" /> Schedule Now
                        <input type={"radio"} id="schedule-later" name="schedule" value="Schedule for some time in the future" /> Schedule for some time in the future
                    </label>
                    <button>Next</button>
                </div>
            </div>
        </>
    );
};

export default CreateNFT4;