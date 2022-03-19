import Head from "next/head";

const Profile = ({}) => {
    return (
        <>
            <Head>
                <title>Musixverse | Profile</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto pt-36 pb-20 min-h-screen">
                <div className="flex flex-wrap justify-center content-center items-center">
                    <h1 className="text-4xl font-semibold">Profile</h1>
                </div>
            </div>
        </>
    );
};

export default Profile;
