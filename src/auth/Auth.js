import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import { useMoralis } from "react-moralis";

const Auth = () => {
    const { user, refetchUserData, Moralis, isInitialized } = useMoralis();

    /* Revoke access to Registration pages from any unauthenticated user */
    const router = useRouter();
    // TODO: Uncomment useEffects

    useEffect(() => {
        if (isInitialized) {
            const currentUser = Moralis.User.current();
            if (!currentUser) {
                if (router.pathname.startsWith("/register")) {
                    Router.push("/", undefined, { shallow: true });
                }
                if (router.pathname.startsWith("/dashboard")) {
                    Router.push("/", undefined, { shallow: true });
                }
            } else {
                if (router.pathname.startsWith("/register") && user.attributes.email && user.attributes.emailVerified) {
                    Router.push("/", undefined, { shallow: true });
                }
            }
        }
    }, [router.pathname, isInitialized]);

    /* Fetch updated user details */
    async function fetchUpdatedUser() {
        if (user) {
            // user = await Moralis.User.current().fetch();
            await refetchUserData();
        }
    }

    /* Handle the flow of registration pages */
    useEffect(() => {
        console.log("User:", user);
        if (user) {
            fetchUpdatedUser();
            if (!user.attributes.email) {
                Router.push("/register", undefined, { shallow: true });
            } else if (!user.attributes.emailVerified) {
                Router.push("/register/confirm-email", undefined, { shallow: true });
            } else {
                // DO NOTHING
            }
        }
    }, [user]);

    return <span></span>;
};

export default Auth;
