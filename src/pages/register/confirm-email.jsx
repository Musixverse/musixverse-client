import Head from "next/head";
import Confirm from "../../components/Registration/Confirm";

const Confirm_Page = () => {
    return (
        <>
            <Head>
                <title>Musixverse | Confirm Email</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Confirm />
        </>
    );
};

export default Confirm_Page;
