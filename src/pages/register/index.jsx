import Head from "next/head";
import Register from "../../components/ArtistRegistration/Register";

const Register_Page = () => {
    return (
        <>
            <Head>
                <title>Musixverse | Register</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Register />
            {/* <div className="w-full max-w-[1920px] min-h-screen"> */}
        </>
    );
};

export default Register_Page;
