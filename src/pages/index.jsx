import Head from "next/head";
import styles from "../../styles/Home.module.css";

function Home() {
    return (
        <div className={styles["home__container"]}>
            <Head>
                <title>Musixverse</title>
                <meta name="description" content="Powering music ownership and provenance across the web and beyond" />
            </Head>

            <main className={styles["home__main"]}>
                <h1 className={styles["home__title"]}>Musixverse</h1>
                <p className={styles["home__description"]}>Powering music ownership and provenance across the web and beyond</p>
            </main>
        </div>
    );
}

export default Home;
