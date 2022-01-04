import Head from "next/head";
import styles from "../styles/Home.module.css";

function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Musixverse</title>
                <meta name="description" content="The NFT Marketplace for Musicians and Fans" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Musixverse</h1>

                <p className={styles.description}>The NFT Marketplace for Musicians and Fans</p>
            </main>
        </div>
    );
}

export default Home;
