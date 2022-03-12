
import Head from "next/head";
import Register from "../../components/ArtistRegisteration/Register";

const Register_Page = () => {
    return (
        <>
            <Head>
                <title>Musixverse | Register</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-full max-w-[1920px] min-h-screen">
                <Register />       
            </div>
        </>
    );
};

export default Register_Page;