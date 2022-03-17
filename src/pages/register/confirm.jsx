import Head from "next/head";
import ConfirmPage from "../../components/ArtistRegistration/Confirm";

const Confirm_Page = () => {
    return (
        <>
            <Head>
                <title>Musixverse | Confirm</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Component */}
            <ConfirmPage />
        </>
    );
};

export default Confirm_Page;
