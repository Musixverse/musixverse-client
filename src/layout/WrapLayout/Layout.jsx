import { useMoralis } from "react-moralis";
import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Auth from "../../auth/Auth";
import Loading from "../Loading/Loading";
import LoadingDark from "../Loading/LoadingDark";
import ErrorBox from "../Modal/ErrorBox";
import SuccessBox from "../Modal/SuccessBox";
import LoadingContext from "../../../store/loading-context";
import StatusContext from "../../../store/status-context";

const Layout = ({ children }) => {
    const { authError } = useMoralis();
    const [error, success, , setError] = useContext(StatusContext);
    const [isLoading] = useContext(LoadingContext);
    const router = useRouter();
    const { theme } = useTheme();

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
        <>
            <Auth />
            <Navbar />
            {children}
            {isLoading && theme === "light" ? <Loading /> : <LoadingDark />}
            {error.showErrorBox && <ErrorBox />}
            {success.showSuccessBox && <SuccessBox />}
            {router.pathname !== "/cfh/cfb" && <Footer />}
        </>
    );
};

export default Layout;
