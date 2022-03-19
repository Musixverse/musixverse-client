import Head from "next/head";
import CollectorRegistration from "../../components/Registration/CollectorRegistration";

const Collector_Page = ({ error, setError, success, setSuccess }) => {
    return (
        <>
            <Head>
                <title>Musixverse | Collector Registration</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CollectorRegistration error={error} setError={setError} success={success} setSuccess={setSuccess} />
        </>
    );
};

export default Collector_Page;
