import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";

const Layout = ({ children }) => {
    const [showErrorBox, setShowErrorBox] = useState(false);

    return (
        <div>
            <Navbar showErrorBox={showErrorBox} setShowErrorBox={setShowErrorBox} />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
