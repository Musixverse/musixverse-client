import Head from "next/head";

const Trending = ({}) => {
    return (
        <>
            <Head>
                <title>Musixverse | Trending</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto pt-36 pb-20 min-h-screen">
                <div className="flex flex-wrap justify-center content-center items-center">
                    <h1 className="text-4xl font-semibold">Trending</h1>
                </div>
            </div>
        </>
    );
};

export default Trending;
