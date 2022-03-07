import { useState, useEffect } from "react";
import Head from "next/head";
import { useMoralis } from "react-moralis";
import ErrorBox from "../../components/Modal/ErrorBox";

const Settings = ({ error, setError, success, setSuccess }) => {
    const { user, isAuthenticated, setUserData, userError, Moralis } = useMoralis();
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [twitter, setTwitter] = useState("");
    const [spotify, setSpotify] = useState("");
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
            setBio(user.attributes.bio);
            setFacebook(user.attributes.facebook);
            setInstagram(user.attributes.instagram);
            setTwitter(user.attributes.twitter);
            setSpotify(user.attributes.spotify);
        }
    }, [isAuthenticated]);

    const handleSave = () => {
        try {
            if (username !== "" && email !== "") {
                setUserData({
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
            }
        } catch (error) {
            console.log("ERROR-", error);
        }
        return;
    };

    return (
        <>
            <Head>
                <title>Musixverse | Settings</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto pt-36 pb-20">
                <div className="flex flex-wrap justify-center content-center items-center">
                    <h1 className="text-4xl font-semibold">Settings</h1>
                </div>
                <div className="flex flex-wrap justify-center content-center items-center pt-16">
                    <h1 className="text-3xl font-semibold">Hi {user && user.attributes.username}</h1>
                </div>
                <div className="flex flex-wrap justify-center content-center items-center pt-4">
                    <h1 className="text-lg font-semibold">
                        Your wallet: {user && user.attributes.accounts} <span className="ml-20">Balance: {balance} MATIC</span>
                    </h1>
                </div>
                <div className="flex flex-wrap justify-center content-center items-center pt-12">
                    <div className="w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="username">
                            Name
                        </label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            id="name"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500"
                            placeholder="Your name"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap justify-center content-center items-center">
                    <div className="w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            id="username"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500"
                            placeholder="Your username"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap justify-center content-center items-center">
                    <div className="w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500"
                            placeholder="Your email"
                        />
                    </div>
                </div>

                <div className="flex flex-wrap justify-center content-center items-center">
                    <div className="w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            Your Story (Bio)
                        </label>
                        <textarea
                            rows="6"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            id="bio"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500"
                            placeholder="Tell your story to the world..."
                        ></textarea>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center content-center items-center">
                    <div className="w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            Facebook
                        </label>
                        <input
                            value={facebook}
                            onChange={(e) => setFacebook(e.target.value)}
                            id="facebook"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500"
                            placeholder="Your Facebook Profile URL"
                        />
                    </div>
                </div>

                <div className="flex flex-wrap justify-center content-center items-center">
                    <div className="w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            Instagram
                        </label>
                        <input
                            value={instagram}
                            onChange={(e) => setInstagram(e.target.value)}
                            id="instagram"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500"
                            placeholder="Your Instagram Profile URL"
                        />
                    </div>
                </div>

                <div className="flex flex-wrap justify-center content-center items-center">
                    <div className="w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            Twitter
                        </label>
                        <input
                            value={twitter}
                            onChange={(e) => setTwitter(e.target.value)}
                            id="twitter"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500"
                            placeholder="Your Twitter Profile URL"
                        />
                    </div>
                </div>

                <div className="flex flex-wrap justify-center content-center items-center">
                    <div className="w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            Spotify
                        </label>
                        <input
                            value={spotify}
                            onChange={(e) => setSpotify(e.target.value)}
                            id="spotify"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500"
                            placeholder="Your Spotify Profile URL"
                        />
                    </div>
                </div>

                {userError && (
                    <div className="flex flex-wrap justify-center content-center items-center">
                        <ErrorBox title="User change failed!" message={userError.message} />
                    </div>
                )}

                <div className="flex flex-wrap justify-center content-center items-center mt-8">
                    <button
                        type="button"
                        className="px-5 py-2 rounded-xl text-sm font-medium text-white bg-primary-100 hover:bg-primary-300 active:bg-grey-900 focus:outline-none border-4 border-white transition-all"
                        onClick={handleSave}
                    >
                        Save changes
                    </button>
                </div>
            </div>
        </>
    );
};

export default Settings;
