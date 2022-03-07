import { useMoralis } from "react-moralis";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ErrorBox from "../Modal/ErrorBox";

const Layout = ({ children }) => {
    const [showErrorBox, setShowErrorBox] = useState(false);
    const { authError } = useMoralis();

    useEffect(() => {
        if (authError) {
            setShowErrorBox(true);
        }
    }, [authError]);

    return (
        <div>
            <Navbar />
            {children}
            {authError && <ErrorBox title={"Auth failed!"} message={authError.message} showErrorBox={showErrorBox} setShowErrorBox={setShowErrorBox} />}
            <Footer />
        </div>
    );
};

export default Layout;
