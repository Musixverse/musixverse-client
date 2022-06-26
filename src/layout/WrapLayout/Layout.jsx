import { useMoralis } from "react-moralis";
import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Watcher from "./Watcher";
import ErrorBox from "../Modal/ErrorBox";
import SuccessBox from "../Modal/SuccessBox";
import StatusContext from "../../../store/status-context";

const Layout = ({ children }) => {
    const { authError } = useMoralis();
    const [error, success, , setError] = useContext(StatusContext);
    const router = useRouter();

    useEffect(() => {
        if (authError) {
            if (
                authError.message !== "Web3Auth: User closed login modal." &&
                authError.message !== "Cannot execute Moralis.enableWeb3(), as Moralis Moralis.enableWeb3() already has been called, but is not finished yet "
            ) {
                setError((prevState) => ({
                    ...prevState,
                    title: "Auth failed!",
                    message: authError.message,
                    showErrorBox: true,
                }));
            }
        }
    }, [authError]);

    return (
        <div>
            <Watcher />
            <Navbar />
            {children}
            {error.showErrorBox && <ErrorBox />}
            {success.showSuccessBox && <SuccessBox />}
            {router.pathname !== "/cfh/cfb" && <Footer />}
        </div>
    );
};

export default Layout;
