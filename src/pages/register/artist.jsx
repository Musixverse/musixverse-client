import Head from "next/head";
import ArtistRegisteration from "../../components/ArtistRegisteration/ArtistRegisteration";

const Artist_Page = () => {
    return (
        <>
            <Head>
                <title>Musixverse | Artist</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Component */}
            <ArtistRegisteration />
        </>
    );
};

export default Artist_Page;