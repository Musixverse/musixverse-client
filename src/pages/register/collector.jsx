import Head from "next/head";
import CollectorRegisteration from "../../components/ArtistRegisteration/CollectorRegisteration";

const Collector_Page = () => {
    return (
        <>
            <Head>
                <title>Musixverse | Collector</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Component */}
            <CollectorRegisteration/>
        </>
    );
};

export default Collector_Page;