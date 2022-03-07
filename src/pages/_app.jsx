import { useState } from "react";
import "../../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import Layout from "../components/WrapLayout/Layout";

function App({ Component, pageProps }) {
    const [error, setError] = useState({
        title: "",
        message: "",
        showErrorBox: false,
    });

    const [success, setSuccess] = useState({
        title: "",
        message: "",
        showSuccessBox: false,
    });

    const MORALIS_APP_ID = process.env.NEXT_PUBLIC_MORALIS_APP_ID;
    const MORALIS_SERVER_URL = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL;

    return (
        <>
            <Script src="https://kit.fontawesome.com/0366dd7992.js" crossOrigin="anonymous"></Script>
            <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
            <MoralisProvider appId={MORALIS_APP_ID} serverUrl={MORALIS_SERVER_URL}>
                <ThemeProvider attribute="class">
                    <Layout error={error} setError={setError} success={success} setSuccess={setSuccess}>
                        <Component {...pageProps} error={error} setError={setError} success={success} setSuccess={setSuccess} />
                    </Layout>
                </ThemeProvider>
            </MoralisProvider>
        </>
    );
}

export default App;
