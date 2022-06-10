import "../../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import Layout from "../components/WrapLayout/Layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as ga from "../../lib/google-analytics";

function App({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            ga.pageview(url);
        };

        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete");
        };
    }, [router.events]);

    return (
        <>
            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
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
