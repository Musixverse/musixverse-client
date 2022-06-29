import Head from "next/head";
import NotAnArtist from "../../components/CreateNFT/not-an-artist";

const notanartist = ({}) => {
    return (
        <>
            <Head>
                <title>Musixverse | Not an Artist</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-200">
                <div className="overflow-x-hidden w-full max-w-[1920px]">
                    <NotAnArtist />
                </div>
            </div>
        </>
    );
};

export default notanartist;
