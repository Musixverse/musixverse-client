import { useState, useEffect } from "react";
import Head from "next/head";
import { useMoralis } from "react-moralis";
import ErrorBox from "../../components/Modal/ErrorBox";
import SuccessBox from "../../components/Modal/SuccessBox";

const Profile = ({}) => {
    return (
        <>
            <Head>
                <title>Musixverse | Profile</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-wrap justify-center content-center items-center pt-32">
                <h1 className="text-4xl font-semibold">Profile</h1>
            </div>
        </>
    );
};

export default Profile;
