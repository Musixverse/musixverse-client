import { useEffect, useContext } from "react";
import { useMoralis } from "react-moralis";
import Head from "next/head";
import { meta_description } from "@/config/constants";
import BasicDetails from "@/components/Registration/BasicDetails";
import LoadingContext from "@/store/loading-context";

const ArtistBasicDetails = () => {
	const { user, isInitialized } = useMoralis();
	// Context Management
	const [, setLoading] = useContext(LoadingContext);

	useEffect(() => {
		setLoading({
			status: true,
		});
		if (isInitialized && user) {
			setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
		}
		return () => {
			setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
		};
	}, [isInitialized, user, setLoading]);

	return (
		<>
			<Head>
				<title>Musixverse | Artist Registration</title>
				<meta name="description" content={meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<BasicDetails />
		</>
	);
};

export default ArtistBasicDetails;
