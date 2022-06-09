import { useContext } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Watcher from "./Watcher";
import ErrorBox from "../Modal/ErrorBox";
import SuccessBox from "../Modal/SuccessBox";
import StatusContext from "../../../store/status-context";

const Layout = ({ children }) => {
    const [error, success, , setError] = useContext(StatusContext);
    const router = useRouter();

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
