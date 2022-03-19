import Head from "next/head";
import BasicDetails from "../../../components/ArtistRegistration/BasicDetails";

const Collector_Page = () => {
    return (
        <>
            <Head>
                <title>Musixverse | Artist Registration</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Component */}
            <BasicDetails/>
        </>
    );
};

export default Collector_Page;