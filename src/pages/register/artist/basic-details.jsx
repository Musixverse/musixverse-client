import Head from "next/head";
import BasicDetails from "../../../components/Registration/BasicDetails";

const ArtistBasicDetails = () => {
    return (
        <>
            <Head>
                <title>Musixverse | Artist Registration</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Component */}
            <BasicDetails />
        </>
    );
};

export default ArtistBasicDetails;
