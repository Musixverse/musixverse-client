import { useState, useEffect, useContext } from "react";
import { appRoutes } from "./constants";
import { useMoralis } from "react-moralis";
import { useTheme } from "next-themes";
import Loading from "../layout/Loading/Loading";
import LoadingDark from "../layout/Loading/LoadingDark";
import LoadingContext from "../../store/loading-context";
import AccessLevelContext from "../../store/accessLevel-context";

// Check if user is on the client (browser) or server
const isBrowser = () => typeof window !== "undefined";

const ProtectedRoutes = ({ router, children }) => {
	const { theme } = useTheme();
	const [isLoading, setLoading] = useContext(LoadingContext);
	// Level 0: New user who is not signed in
	// Level 1: Signed up user who hasn't chosen between a collector/artist profile
	// Level 2: Signed up collector who hasn't verified email
	// Level 3: Signed up collector with verified email
	// Level 4: Signed up artist who hasn't verified email
	// Level 5: Signed up artist with verified email who does not have a verified artist profile
	// Level 6: Signed up artist with a verified artist profile
	const [accessLevel, setAccessLevel] = useContext(AccessLevelContext);

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

	async function refetchData() {
		await refetchUserData();
	}

	useEffect(() => {
		function checkPath() {
			if (isInitialized) {
				setShowContent(false);

				if (!isAuthenticated) {
					if (isBrowser() && pathIsProtected) {
						router.push(appRoutes.HOMEPAGE);
					}
				} else {
					// Authenticated
					refetchData();
					if (isBrowser() && !user.attributes.email) {
						if (!router.pathname.startsWith(appRoutes.REGISTER)) router.push(appRoutes.REGISTER);
					} else if (isBrowser() && pathIsProtectedForAuthenticatedUserEmailUnverified && !user.attributes.emailVerified) {
						router.push(appRoutes.CONFIRM_EMAIL);
					} else if (isBrowser() && pathIsProtectedForAuthenticatedUser) {
						router.push(appRoutes.HOMEPAGE);
					}
				}

				setShowContent(true);
				setLoading(false);
			}
		}
		checkPath();
	}, [router.pathname, isInitialized, isAuthenticated]);

	// Setting access level
	useEffect(() => {
		if (isInitialized) {
			if (!isAuthenticated) {
				setAccessLevel(0);
			} else {
				// Authenticated
				refetchData();
				if (isBrowser() && !user.attributes.email) {
					setAccessLevel(1);
				} else if (isBrowser() && !user.attributes.emailVerified && !user.attributes.isArtist) {
					setAccessLevel(2);
				} else if (isBrowser() && user.attributes.emailVerified && !user.attributes.isArtist) {
					setAccessLevel(3);
				} else if (isBrowser() && !user.attributes.emailVerified && user.attributes.isArtist) {
					setAccessLevel(4);
				} else if (isBrowser() && user.attributes.emailVerified && user.attributes.isArtist && user.attributes.isArtistVerified) {
					setAccessLevel(6);
				} else if (isBrowser() && user.attributes.emailVerified && user.attributes.isArtist) {
					setAccessLevel(5);
				}
			}
		}
	}, [router.pathname, isInitialized, isAuthenticated]);

	useEffect(() => {
		if (!isWeb3Enabled && isAuthenticated) enableWeb3();
	}, [isWeb3Enabled, isAuthenticated, enableWeb3]);

	if (showContent) {
		return children;
	} else {
		// setLoading(true);
		isLoading && theme === "light" ? <Loading /> : <LoadingDark />;
		return null;
	}
};

export default ProtectedRoutes;
