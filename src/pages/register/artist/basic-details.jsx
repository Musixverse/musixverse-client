import Head from "next/head";
import BasicDetails from "../../../components/Registration/BasicDetails";

const ArtistBasicDetails = ({ error, setError, success, setSuccess }) => {
    return (
        <>
            <Head>
                <title>Musixverse | Artist Registration</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Component */}
            <BasicDetails error={error} setError={setError} success={success} setSuccess={setSuccess} />
        </>
    );
};

export default ArtistBasicDetails;
