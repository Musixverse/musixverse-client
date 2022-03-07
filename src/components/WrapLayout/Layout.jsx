import { useMoralis } from "react-moralis";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ErrorBox from "../Modal/ErrorBox";
import SuccessBox from "../Modal/SuccessBox";

const Layout = ({ children, error, setError, success, setSuccess }) => {
    const { authError } = useMoralis();

    useEffect(() => {
        if (authError) {
            setError((prevState) => ({
                ...prevState,
                title: "Auth failed!",
                message: authError.message,
                showErrorBox: true,
            }));
        }
    }, [authError]);

    return (
        <div>
            <Navbar />
            {children}
            {error.showErrorBox && <ErrorBox error={error} setError={setError} />}
            {success.showSuccessBox && <SuccessBox success={success} setSuccess={setSuccess} />}
            <Footer />
        </div>
    );
};

export default Layout;
