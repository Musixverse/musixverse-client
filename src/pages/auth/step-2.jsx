import { useState, useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import { useMoralis } from "react-moralis";

const Settings = ({ error, setError, success, setSuccess }) => {
    const { user, isAuthenticated, setUserData, Moralis } = useMoralis();
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [balance, setBalance] = useState(0);

    const fetchBalance = async () => {
        try {
            const options = { chain: "matic testnet" };
            const _balance = await Moralis.Web3API.account.getNativeBalance(options);
            const _balanceAmount = parseFloat(_balance.balance) / 10 ** 18 === 0 ? "0" : parseFloat(_balance.balance) / 10 ** 18;
            setBalance(_balanceAmount.toFixed(4));
        } catch (error) {
            console.log("ERROR-", error);
        }
    };

    useEffect(() => {
        fetchBalance();
        if (isAuthenticated) {
            setName(user.attributes.name);
            setUsername(user.attributes.username);
            setEmail(user.attributes.email);
        }
    }, [isAuthenticated]);

    const handleSave = async () => {
        if (username !== "" && email !== "") {
            await setUserData({
                name: name === "" ? undefined : name,
                username: username === "" ? undefined : username,
                email: email === "" ? undefined : email,
            });
            setSuccess((prevState) => ({
                ...prevState,
                title: "Profile updated!",
                message: "Your profile has been updated successfully.",
                showSuccessBox: true,
            }));

            Router.push("/profile", undefined, { shallow: true });
        }
        return;
    };

    return (
        <>
            <Head>
                <title>Musixverse | Sign Up</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto pt-36 pb-20">
                <div className="flex flex-wrap justify-center content-center items-center">
                    <h1 className="text-4xl font-semibold">Almost there!</h1>
                </div>
                <div className="flex flex-wrap justify-center content-center items-center pt-16">
                    <h1 className="text-3xl font-semibold">Hi {username}</h1>
                </div>
                <div className="flex flex-wrap justify-center content-center items-center pt-4">
                    <h1 className="text-lg font-semibold">
                        Your wallet: {user && user.attributes.accounts} <span className="ml-20">Balance: {balance} MATIC</span>
                    </h1>
                </div>
                <form onSubmit={handleSave}>
                    <div className="flex flex-wrap justify-center content-center items-center pt-12">
                        <div className="w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="username">
                                Name*
                            </label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                id="name"
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500"
                                placeholder="Your name"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center content-center items-center">
                        <div className="w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="username">
                                Username*
                            </label>
                            <input
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                id="username"
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500"
                                placeholder="Your username"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center content-center items-center">
                        <div className="w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                Email*
                            </label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500"
                                placeholder="Your email"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center content-center items-center mt-8">
                        <button
                            type="submit"
                            className="px-5 py-2 rounded-lg text-md font-medium text-white bg-primary-100 hover:bg-primary-300 active:bg-grey-900 focus:outline-none border-4 border-white transition-all"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Settings;
