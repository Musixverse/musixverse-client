import Head from "next/head";
import LibraryHeader from "../../components/Library/LibraryHeader";
import DisplayNFTs from "../../components/Library/DisplayNFTs";

const Library = ({}) => {
    return (
        <>
            <Head>
                <title>Musixverse | Library</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <LibraryHeader />

            <DisplayNFTs />
        </>
    );
};

export default Library;
