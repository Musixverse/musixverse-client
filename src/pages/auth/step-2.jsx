import { useState, useEffect, useContext } from "react";
import Head from "next/head";
import Router from "next/router";
import { useMoralis } from "react-moralis";
import StatusContext from "../../../store/status-context";

const Settings = () => {
    const { user, isAuthenticated, setUserData, Moralis } = useMoralis();
    const [, , setSuccess, ] = useContext(StatusContext);
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

            <div className="container pb-20 mx-auto pt-36">
                <div className="flex flex-wrap items-center content-center justify-center">
                    <h1 className="text-4xl font-semibold">Almost there!</h1>
                </div>
                <div className="flex flex-wrap items-center content-center justify-center pt-16">
                    <h1 className="text-3xl font-semibold">Hi {username}</h1>
                </div>
                <div className="flex flex-wrap items-center content-center justify-center pt-4">
                    <h1 className="text-lg font-semibold">
                        Your wallet: {user && user.attributes.accounts} <span className="ml-20">Balance: {balance} MATIC</span>
                    </h1>
                </div>
                <form onSubmit={handleSave}>
                    <div className="flex flex-wrap items-center content-center justify-center pt-12">
                        <div className="w-1/2 px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="username">
                                Name*
                            </label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                id="name"
                                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-gray-100 focus:border-gray-500"
                                placeholder="Your name"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center content-center justify-center">
                        <div className="w-1/2 px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="username">
                                Username*
                            </label>
                            <input
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                id="username"
                                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-gray-100 focus:border-gray-500"
                                placeholder="Your username"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center content-center justify-center">
                        <div className="w-1/2 px-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="email">
                                Email*
                            </label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-gray-100 focus:border-gray-500"
                                placeholder="Your email"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center content-center justify-center mt-8">
                        <button
                            type="submit"
                            className="px-5 py-2 font-medium text-white transition-all border-4 border-white rounded-lg text-md bg-primary-100 hover:bg-primary-300 active:bg-grey-900 focus:outline-none"
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
