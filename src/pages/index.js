import Head from "next/head";
import ComingSoonPage from "../components/ComingSoon";

function Home() {
    return (
        <div>
            <Head>
                <title>Musixverse</title>
                <meta name="description" content="Powering music ownership and provenance across the web and beyond" />
            </Head>
            <ComingSoonPage />
        </div>
    );
}

export default Home;
