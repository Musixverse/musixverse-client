import { useEffect } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import { useMoralis } from "react-moralis";

const Watcher = () => {
    // const { user, isAuthenticated, refetchUserData } = useMoralis();

    /* Revoke access to Registration pages from any unauthenticated user */
    // const router = useRouter();
    // TODO: Uncomment useEffects

    // useEffect(() => {
    //     if (router.pathname.startsWith("/register") && !user) {
    //         Router.push("/", undefined, { shallow: true });
    //     }
    //     if (router.pathname.startsWith("/profile") && !user) {
    //         Router.push("/", undefined, { shallow: true });
    //     }
    // }, [router.pathname]);

    // /* Fetch updated user details */
    // async function fetchUpdatedUser() {
    //     if (user) {
    //         // user = await Moralis.User.current().fetch();
    //         await refetchUserData();
    //         console.log(user);
    //     }
    // }

    // /* Handle the flow of registration pages */
    // useEffect(() => {
    //     console.log("User:", user);
    //     if (user) {
    //         fetchUpdatedUser();
    //         if (!user.attributes.email) {
    //             Router.push("/register", undefined, { shallow: true });
    //         } else if (!user.attributes.emailVerified) {
    //             Router.push("/register/confirm-email", undefined, { shallow: true });
    //         } else {
    //             // DO NOTHING
    //         }
    //     }
    // }, [user]);

    return <span></span>;
};

export default Watcher;
