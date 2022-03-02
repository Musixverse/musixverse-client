import Head from "next/head";
import styles from "../../styles/Home.module.css";

function Home() {
    return (
        <div className={styles["home__container"]}>
            <Head>
                <title>Musixverse</title>
                <meta name="description" content="The NFT Marketplace for Musicians and Fans" />
            </Head>

            <main className={styles["home__main"]}>
                <h1 className={styles["home__title"]}>Musixverse</h1>
                <p className={styles["home__description"]}>The NFT Marketplace for Musicians and Fans</p>
            </main>
        </div>
    );
}

export default Home;
