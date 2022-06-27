import { useState, useEffect, useContext } from "react";
import Head from "next/head";
import DashboardNav from "../../components/Dashboard/DashboardNav";
import ProfileSettings from "../../components/Dashboard/ProfileSettings";
import { useMoralis } from "react-moralis";
import StatusContext from "../../../store/status-context";
import { BLOCKCHAIN_NETWORK } from "../../utils/smart-contract/constants";

export default function Dashboard() {
    const [, , setSuccess] = useContext(StatusContext);
    const { user, isAuthenticated, setUserData, Moralis } = useMoralis();
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
            setBalance(_balanceAmount.toFixed(4));
        } catch (error) {
            console.log("ERROR-", error);
        }
    };

    useEffect(() => {
        fetchBalance();
        if (isAuthenticated) {
            setAvatar(user.attributes.avatar);
            setCoverImage(user.attributes.coverImage);
            setName(user.attributes.name);
            setUsername(user.attributes.username);
            setEmail(user.attributes.email);
            setBio(user.attributes.bio);
            setSpotify(user.attributes.spotify);
            setInstagram(user.attributes.instagram);
            setTwitter(user.attributes.twitter);
            setFacebook(user.attributes.facebook);
        }
    }, [isAuthenticated]);

    const handleSave = () => {
        try {
            if (username !== "" && email !== "") {
                setUserData({
                    avatar: avatar,
                    coverImage: coverImage,
                    name: name === "" ? undefined : name,
                    username: username === "" ? undefined : username,
                    email: email === "" ? undefined : email,
                    bio: bio === "" ? undefined : bio,
                    spotify: spotify,
                    instagram: instagram,
                    twitter: twitter,
                    facebook: facebook,
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

    if (!user) return null;
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
                        walletAddress={user.attributes.ethAddress}
                    />
                </div>
            </div>
        </>
    );
}
