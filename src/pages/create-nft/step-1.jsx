import Head from "next/head";
import Router from "next/router";

const CreateNFT = ({}) => {
    return (
        <>
            <Head>
                <title>Musixverse | Create NFT</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto pt-36 pb-20 min-h-screen">
                <div className="flex flex-wrap justify-center content-center items-center">
                    {/* Taking ISRC as Input */}
                    <div className="grid gap-y-10 justify-items-center">
                        <div>
                            <label htmlFor="isrc" className="text-2xl font-semibold">
                                ISRC (International Standard Recording Code)
                            </label>
                        </div>
                        <div className="w-2/5">
                            <input
                                type="text"
                                id="isrc"
                                pattern="[a-zA-Z0-9]+"
                                placeholder="Enter the ISRC here"
                                maxLength={12}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                            />
                            <p className="text-gray-600 text-xs italic">
                                Please enter the ISRC of your track in the box above. You can find this code on your music distributor&apos;s website. We use
                                this to pull in track data automatically to take a little burden off of you.
                            </p>
                        </div>
                        <div className="w-3/5 flex justify-between">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                                className="text-black text-md bg-light-300 font-primary rounded px-6 py-2"
                            >
                                Skip
                            </button>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    Router.push("/create-nft/step-2", undefined, { shallow: true });
                                }}
                                className="text-white text-md bg-primary-200 hover:bg-primary-300 font-primary rounded px-6 py-2"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateNFT;
