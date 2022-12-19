import Head from "next/head";
import { meta_description } from "../../config/constants";
import Register from "../../components/Registration/Register";
import { useEffect, useContext } from "react";
import { useMoralis } from "react-moralis";
import LoadingContext from "../../../store/loading-context";

const Register_Page = () => {
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
				<title>Musixverse | Registration</title>
				<meta name="description" content={meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Register />
		</>
	);
};

export default Register_Page;
