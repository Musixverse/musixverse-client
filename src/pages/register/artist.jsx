import Head from "next/head";
import ArtistRegistration from "../../components/ArtistRegistration/ArtistRegistration";

const Artist_Page = () => {
    return (
        <>
            <Head>
                <title>Musixverse | Artist Registration</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Component */}
            <ArtistRegistration />
        </>
    );
};

export default Artist_Page;
