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

    useEffect(() => {
        setLoading(true);
        if (isInitialized && user) {
            fetchBalance();
            setName(user.attributes.name);
            setUsername(user.attributes.username);
            setEmail(user.attributes.email);
        }
        return () => {
            setLoading(false);
        };
    }, [user]);

    const { data: userInfo } = useMoralisQuery("UserInfo", (query) => query.equalTo("user", user), [user]);
    useEffect(() => {
        if (userInfo[0]) {
            setAvatar(userInfo[0].attributes.avatar);
            setAvatar(userInfo[0].attributes.avatar);
            setCoverImage(userInfo[0].attributes.coverImage);
            setBio(userInfo[0].attributes.bio ? userInfo[0].attributes.bio : "");
            setSpotify(userInfo[0].attributes.spotify ? userInfo[0].attributes.spotify : "");
            setInstagram(userInfo[0].attributes.instagram ? userInfo[0].attributes.instagram : "");
            setTwitter(userInfo[0].attributes.twitter ? userInfo[0].attributes.twitter : "");
            setFacebook(userInfo[0].attributes.facebook ? userInfo[0].attributes.facebook : "");
            setLoading(false);
        }
    }, [userInfo]);

    // Update User Information
    const userData = {
        avatar: avatar,
        coverImage: coverImage,
        bio: bio === "" ? undefined : bio,
        spotify: spotify === "" ? undefined : spotify,
        instagram: instagram === "" ? undefined : instagram,
        twitter: twitter === "" ? undefined : twitter,
        facebook: facebook === "" ? undefined : facebook,
    };
    const { fetch: updateUserInfo } = useMoralisCloudFunction("updateUserInfo", userData, { autoFetch: false });
    const handleSave = async () => {
        try {
            if (name !== "" && username !== "" && email !== "") {
                if (email === user.attributes.email && username === user.attributes.username) {
                    setUserData({
                        name: name === "" ? undefined : name,
                    });
                } else if (email === user.attributes.email) {
                    setUserData({
                        name: name === "" ? undefined : name,
                        username: username === "" ? undefined : username,
                    });
                } else {
                    setUserData({
                        name: name === "" ? undefined : name,
                        username: username === "" ? undefined : username,
                        email: email === "" ? undefined : email,
                    });
                }

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
