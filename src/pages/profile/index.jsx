import { useEffect } from "react";
import Head from "next/head";
import { useMoralis } from "react-moralis";

const Profile = ({}) => {
    const { user, isAuthenticated, Moralis } = useMoralis();

    async function fetchUpdatedUser() {
        if (user) {
            user = await Moralis.User.current().fetch();
            console.log(user);
        }
    }

    useEffect(() => {
        fetchUpdatedUser();
    }, []);

    return (
        <>
            <Head>
                <title>Musixverse | Profile</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto pt-36 pb-20">
                {user && isAuthenticated && !user.attributes.emailVerified ? (
                    <div className="flex flex-wrap justify-center content-center items-center">
                        <h1 className="text-4xl font-semibold">Please verify your email</h1>
                    </div>
                ) : (
                    <div className="flex flex-wrap justify-center content-center items-center">
                        <h1 className="text-4xl font-semibold">Profile</h1>
                    </div>
                )}
            </div>
        </>
    );
};

export default Profile;
