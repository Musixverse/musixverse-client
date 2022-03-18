import Head from "next/head";
import CollectorRegistration from "../../components/ArtistRegistration/CollectorRegistration";

const Collector_Page = () => {
    return (
        <>
            <Head>
                <title>Musixverse | Collector Registration</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Component */}
            <CollectorRegistration />
        </>
    );
};

export default Collector_Page;
