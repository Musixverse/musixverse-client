import Head from "next/head";
import CollectorRegistration from "../../components/Registration/CollectorRegistration";

const Collector_Page = () => {
    return (
        <>
            <Head>
                <title>Musixverse | Collector Registration</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CollectorRegistration/>
        </>
    );
};

export default Collector_Page;
