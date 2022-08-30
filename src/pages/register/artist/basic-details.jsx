import Head from "next/head";
import { meta_description } from "../../../constants";
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

	return (
		<>
			<Head>
				<title>Musixverse | Artist Registration</title>
				<meta name="description" content={meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* Component */}
			<BasicDetails />
		</>
	);
};

export default ArtistBasicDetails;
