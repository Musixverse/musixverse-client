import Head from "next/head";
import SocialDetails from "../../../components/Registration/SocialDetails";

const ArtistSocialDetails = ({ error, setError, success, setSuccess }) => {
    return (
        <>
            <Head>
                <title>Musixverse | Artist Registration</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Component */}
            <SocialDetails error={error} setError={setError} success={success} setSuccess={setSuccess} />
        </>
    );
};

export default ArtistSocialDetails;
