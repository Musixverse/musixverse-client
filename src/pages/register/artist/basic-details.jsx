import Head from "next/head";
import BasicDetails from "../../../components/Registration/BasicDetails";
import { useEffect, useContext } from "react";
import { useMoralis } from "react-moralis";
import LoadingContext from "../../../../store/loading-context";

const ArtistBasicDetails = () => {
    const { user, isInitialized } = useMoralis();
    // Context Management
    const [isLoading, setLoading] = useContext(LoadingContext);

    useEffect(() => {
        setLoading(true);
        if (isInitialized && user) {
            setLoading(false);
        }
        return () => {
            setLoading(false);
        };
    }, [isInitialized, user]);

    if (user.attributes.email) return null;
    return (
        <>
            <Head>
                <title>Musixverse | Artist Registration</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Component */}
            <BasicDetails />
        </>
    );
};

export default ArtistBasicDetails;
