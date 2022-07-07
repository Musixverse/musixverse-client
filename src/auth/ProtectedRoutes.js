import { useState, useEffect, useContext } from "react";
import { appRoutes } from "./constants";
import { useMoralis } from "react-moralis";
import { useTheme } from "next-themes";
import Loading from "../layout/Loading/Loading";
import LoadingDark from "../layout/Loading/LoadingDark";
import LoadingContext from "../../store/loading-context";

// Check if user is on the client (browser) or server
const isBrowser = () => typeof window !== "undefined";

const ProtectedRoutes = ({ router, children }) => {
    const { theme } = useTheme();
    const [isLoading, setLoading] = useContext(LoadingContext);
    const [showContent, setShowContent] = useState(false);

    // Identify authenticated user
    const { isAuthenticated, user, isInitialized, isWeb3Enabled, enableWeb3, refetchUserData } = useMoralis();

    const protectedRoutes = [appRoutes.REGISTER, appRoutes.SETTINGS, appRoutes.CREATE_NFT];
    /**
     * @const pathIsProtected Checks if path exists in the protectedRoutes array
     */
    const pathIsProtected = protectedRoutes.some((route) => router.pathname.includes(route));

    // @dev These routes are protected until a user confirms their email
    const protectedRoutesForAuthenticatedUserEmailUnverified = [appRoutes.REGISTER, appRoutes.SETTINGS, appRoutes.CREATE_NFT];
    /**
     * @const pathIsProtectedForAuthenticatedUserEmailUnverified Checks if path exists in the protectedRoutesForAuthenticatedUserEmailUnverified array
     */
    const pathIsProtectedForAuthenticatedUserEmailUnverified = protectedRoutesForAuthenticatedUserEmailUnverified.some((route) =>
        router.pathname.includes(route)
    );

    // @dev These routes are protected for a logged in user
    const protectedRoutesForAuthenticatedUser = [appRoutes.REGISTER];
    /**
     * @const pathIsProtectedForAuthenticatedUser Checks if path exists in the protectedRoutesForAuthenticatedUser array
     */
    const pathIsProtectedForAuthenticatedUser = protectedRoutesForAuthenticatedUser.some((route) => router.pathname.includes(route));

    useEffect(async () => {
        if (isInitialized) {
            setShowContent(false);

            if (!isAuthenticated) {
                if (isBrowser() && pathIsProtected) {
                    router.push(appRoutes.HOMEPAGE);
                }
            } else {
                // Authenticated
                await refetchUserData();
                if (isBrowser() && !user.attributes.email) {
                    router.push(appRoutes.REGISTER);
                } else if (isBrowser() && pathIsProtectedForAuthenticatedUserEmailUnverified && !user.attributes.emailVerified) {
                    router.push(appRoutes.CONFIRM_EMAIL);
                } else if (isBrowser() && pathIsProtectedForAuthenticatedUser) {
                    router.push(appRoutes.HOMEPAGE);
                }
            }

            setShowContent(true);
            setLoading(false);
        }
    }, [router.pathname, isInitialized]);

    useEffect(() => {
        if (!isWeb3Enabled && isAuthenticated) enableWeb3();
    }, [isWeb3Enabled, isAuthenticated]);

    if (showContent) {
        return children;
    } else {
        setLoading(true);
        isLoading && theme === "light" ? <Loading /> : <LoadingDark />;
        return null;
    }
};

export default ProtectedRoutes;
