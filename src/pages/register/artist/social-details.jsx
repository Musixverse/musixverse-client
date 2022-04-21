import Head from "next/head";
import SocialDetails from "../../../components/Registration/SocialDetails";

const ArtistSocialDetails = () => {
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

export default ArtistSocialDetails;
