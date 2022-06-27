import { useState, useEffect, useContext } from "react";
import Head from "next/head";
import DashboardNav from "../../components/Dashboard/DashboardNav";
import ProfileSettings from "../../components/Dashboard/ProfileSettings";
import { useMoralis, useMoralisQuery, useMoralisCloudFunction } from "react-moralis";
import StatusContext from "../../../store/status-context";
import LoadingContext from "../../../store/loading-context";
import { BLOCKCHAIN_NETWORK } from "../../utils/smart-contract/constants";

export default function Dashboard() {
    const { user, setUserData, Moralis, isInitialized } = useMoralis();
    // Context Management
    const [isLoading, setLoading] = useContext(LoadingContext);
    const [, , setSuccess] = useContext(StatusContext);
    // State Management
    const [avatar, setAvatar] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [spotify, setSpotify] = useState("");
    const [instagram, setInstagram] = useState("");
    const [twitter, setTwitter] = useState("");
    const [facebook, setFacebook] = useState("");
    const [balance, setBalance] = useState(0);

    const fetchBalance = async () => {
        try {
            const options = { chain: BLOCKCHAIN_NETWORK };
            const _balance = await Moralis.Web3API.account.getNativeBalance(options);
            const _balanceAmount = parseFloat(_balance.balance) / 10 ** 18 === 0 ? "0" : parseFloat(_balance.balance) / 10 ** 18;
            setBalance(_balanceAmount > 0 ? _balanceAmount.toFixed(4) : 0);
        } catch (error) {
            console.log("ERROR-", error);
        }
    };

    const { fetch: fetchUserInfo } = useMoralisQuery("UserInfo", (query) => query.equalTo("user", user), [], { autoFetch: false });
    useEffect(() => {
        setLoading(true);
        if (isInitialized) {
            fetchBalance();
            if (user) {
                setName(user.attributes.name);
                setUsername(user.attributes.username);
                setEmail(user.attributes.email);
                fetchUserInfo({
                    onSuccess: (object) => {
                        setAvatar(object[0].attributes.avatar);
                        setCoverImage(object[0].attributes.coverImage);
                        setBio(object[0].attributes.bio);
                        setSpotify(object[0].attributes.spotify);
                        setInstagram(object[0].attributes.instagram);
                        setTwitter(object[0].attributes.twitter);
                        setFacebook(object[0].attributes.facebook);
                        setLoading(false);
                    },
                    onError: (error) => {
                        // The object was not retrieved successfully.
                        // error is a Moralis.Error with an error code and message.
                        console.log("fetchUserInfo Error:", error);
                    },
                });
            }
        }
        return () => {
            setLoading(false);
        };
    }, [user, isInitialized]);

    // Update User Information
    const userData = {
        avatar: avatar,
        coverImage: coverImage,
        bio: bio === "" ? undefined : bio,
        spotify: spotify,
        instagram: instagram,
        twitter: twitter,
        facebook: facebook,
    };
    const { fetch: updateUserInfo } = useMoralisCloudFunction("updateUserInfo", userData, { autoFetch: false });
    const handleSave = async () => {
        try {
            if (name !== "" && username !== "" && email !== "") {
                setUserData({
                    name: name === "" ? undefined : name,
                    username: username === "" ? undefined : username,
                    email: email === "" ? undefined : email,
                });

                await updateUserInfo({
                    onSuccess: (data) => {
                        setSuccess((prevState) => ({
                            ...prevState,
                            title: "Profile updated!",
                            message: "Your profile has been updated successfully.",
                            showSuccessBox: true,
                        }));
                    },
                });
            }
        } catch (error) {
            console.log("ERROR-", error);
        }
        return;
    };

    if (isLoading) return null;
    return (
        <>
            <Head>
                <title>Musixverse | Dashboard</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex items-center justify-center bg-light-200 dark:bg-dark-200">
                <div className="lg:flex-row flex-col flex w-full max-w-[1920px] mt-28 lg:mt-36 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
                    <DashboardNav />
                    <ProfileSettings
                        avatar={avatar}
                        setAvatar={setAvatar}
                        coverImage={coverImage}
                        setCoverImage={setCoverImage}
                        username={username}
                        setUsername={setUsername}
                        name={name}
                        setName={setName}
                        email={email}
                        setEmail={setEmail}
                        bio={bio}
                        setBio={setBio}
                        spotify={spotify}
                        setSpotify={setSpotify}
                        instagram={instagram}
                        setInstagram={setInstagram}
                        twitter={twitter}
                        setTwitter={setTwitter}
                        facebook={facebook}
                        setFacebook={setFacebook}
                        handleSave={handleSave}
                        balance={balance}
                        walletAddress={user ? user.attributes.ethAddress : ""}
                    />
                </div>
            </div>
        </>
    );
}
