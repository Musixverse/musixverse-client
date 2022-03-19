import Head from "next/head";
import Register from "../../components/Registration/Register";

const Register_Page = () => {
    return (
        <>
            <Head>
                <title>Musixverse | Registration</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Register />
        </>
    );
};

export default Register_Page;
