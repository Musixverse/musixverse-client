import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import Script from "next/script";
// import Layout from "../pageComponents/WrapLayout/Layout";

function App({ Component, pageProps }) {
    const MORALIS_APP_ID = process.env.NEXT_PUBLIC_MORALIS_APP_ID;
    const MORALIS_SERVER_URL = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL;

    return (
        <>
            <Script src="https://kit.fontawesome.com/0366dd7992.js" crossorigin="anonymous"></Script>
            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                crossorigin="anonymous"
            ></Script>
            <MoralisProvider appId={MORALIS_APP_ID} serverUrl={MORALIS_SERVER_URL}>
                {/* <Layout> */}
                <Component {...pageProps} />
                {/* </Layout> */}
            </MoralisProvider>
        </>
    );
}

export default App;
