import Head from "next/head";
import { meta_description } from "../../constants";
import CollectorRegistration from "../../components/Registration/CollectorRegistration";
import { useEffect, useContext } from "react";
import { useMoralis } from "react-moralis";
import LoadingContext from "../../../store/loading-context";

const Collector_Page = () => {
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
				<title>Musixverse | Collector Registration</title>
				<meta name="description" content={meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<CollectorRegistration />
		</>
	);
};

export default Collector_Page;
