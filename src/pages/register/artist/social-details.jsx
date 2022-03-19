import Head from "next/head";
import SocialDetails from "../../../components/ArtistRegistration/SocialDetails";


const Collector_Page = () => {
    return (
        <>
            <Head>
                <title>Musixverse | Artist Registration</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Component */}
            <SocialDetails/>
        </>
    );
};

export default Collector_Page;