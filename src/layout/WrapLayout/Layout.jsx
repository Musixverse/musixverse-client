import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useMoralis } from "react-moralis";
import LoadingContext from "../../../store/loading-context";
import StatusContext from "../../../store/status-context";
import AuthModalContext from "../../../store/authModal-context";
import Loading from "../Loading/Loading";
import LoadingDark from "../Loading/LoadingDark";
import ErrorBox from "../Modal/ErrorBox";
import SuccessBox from "../Modal/SuccessBox";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AuthModal from "../Modal/AuthModal";

const Layout = ({ children }) => {
    const { authError } = useMoralis();
    const [error, success, , setError] = useContext(StatusContext);
    const [isLoading] = useContext(LoadingContext);
    const [authModalOpen, setAuthModalOpen] = useContext(AuthModalContext);

    const router = useRouter();
    const { theme } = useTheme();

    useEffect(() => {
        if (authError) {
            if (
                authError.message !== "Web3Auth: User closed login modal." &&
                authError.message !==
                    "Cannot execute Moralis.enableWeb3(), as Moralis Moralis.enableWeb3() already has been called, but is not finished yet " &&
                authError.message !== "MetaMask Message Signature: User denied message signature." &&
                authError.message !== "User closed modal"
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
            <Navbar authModalOpen={authModalOpen} setAuthModalOpen={setAuthModalOpen} />
            <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
            {children}
            {isLoading && theme === "light" ? <Loading /> : <LoadingDark />}
            {error.showErrorBox && <ErrorBox />}
            {success.showSuccessBox && <SuccessBox />}
            {router.pathname !== "/cfh/cfb" && <Footer />}
        </>
    );
};

export default Layout;
