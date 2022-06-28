import Head from "next/head";
import Contactus from "../../components/ContactUs/ContactUs";

const ContactUs = ({}) => {
    return (
        <>
            <Head>
                <title>Musixverse | Contact Us</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-200">
                <div className="overflow-x-hidden w-full max-w-[1920px]">
                    <Contactus />
                </div>
            </div>
        </>
    );
};

export default ContactUs;
