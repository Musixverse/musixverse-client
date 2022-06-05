import Head from "next/head";
import styles from "../../styles/Home.module.css";

function ThankYou() {
    return (
        <>
            <div className={styles["home__container"]}>
                <Head>
                    <title>Musixverse | Thank You</title>
                    <meta name="description" content="Powering music ownership and provenance across the web and beyond" />
                </Head>

                <main className={styles["home__main"]}>
                    <h1 className="text-6xl font-primary font-semibold mb-2">Musixverse</h1>
                    <p className={styles["home__description"]}>
                        <i>Powering music ownership and provenance across the web and beyond</i>
                    </p>

                    <div className="flex flex-row justify-start sm:mt-24 mt-16 mb-10">
                        <div className="w-full grid grid-cols-5 gap-4">
                            <div className="col-span-5 p-10 border-2 border-gray-400 rounded-md">
                                <div className="font-tertiary text-5xl">Thank you for joining the mailing list!</div>
                                <div className="mt-16 font-secondary text-lg">Follow us on social media to stay in the loop and know more</div>

                                <div className="flex flex-wrap justify-center gap-2 mt-4">
                                    <a href="https://discord.com/invite/rXKb7rCqjG" target="_blank" rel="noreferrer">
                                        <button className="bg-light-300 text-dark-100 hover:text-primary-100 p-2 font-semibold inline-flex items-center rounded text-2xl">
                                            <i className="fab fa-discord"></i>
                                        </button>
                                    </a>

                                    <a href="https://twitter.com/musixverse" target="_blank" rel="noreferrer">
                                        <button className="bg-light-300 text-dark-100 hover:text-primary-100 p-2 font-semibold inline-flex items-center rounded text-2xl">
                                            <i className="fab fa-twitter"></i>
                                        </button>
                                    </a>

                                    <a href="https://www.instagram.com/musixverse/" target="_blank" rel="noreferrer">
                                        <button className="bg-light-300 text-dark-100 hover:text-primary-100 p-2 font-semibold inline-flex items-center rounded text-2xl">
                                            <i className="fab fa-instagram"></i>
                                        </button>
                                    </a>

                                    <a href="https://www.linkedin.com/company/musixverse/" target="_blank" rel="noreferrer">
                                        <button className="bg-light-300 text-dark-100 hover:text-primary-100 p-2 font-semibold inline-flex items-center rounded text-2xl">
                                            <i className="fab fa-linkedin"></i>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default ThankYou;
