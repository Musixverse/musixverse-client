import Head from "next/head";
// import styles from "../../styles/Home.module.css";
import Banner from "../components/HomePage/HomePage_Banner";
import Section2 from "../components/HomePage/HomePage_section2";
import Section3 from "../components/HomePage/HomePage_section3";
import Section4 from "../components/HomePage/HomePage_section4";

function Home() {
    return (
        <>
            <Head>
                <title>Musixverse</title>
                <meta name="description" content="Powering music ownership and provenance across the web and beyond" />
            </Head>

            <div className="flex flex-col items-center justify-center bg-light-200 dark:bg-dark-200">
                <div className="flex flex-col w-full max-w-[1920px] mt-28 lg:mt-36 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
                    <Banner />
                    <Section2 />
                    <Section3 />
                </div>
                <Section4 />
            </div>
        </>
    );
}

export default Home;
