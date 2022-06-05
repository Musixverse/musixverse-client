import "../../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import Layout from "../components/WrapLayout/Layout";

function App({ Component, pageProps }) {
    return (
        <>
            <Script src="https://kit.fontawesome.com/0366dd7992.js" crossOrigin="anonymous"></Script>
            <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>

            <ThemeProvider attribute="class">
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    );
}

export default App;
