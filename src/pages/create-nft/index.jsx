import Head from "next/head";
import { useState, useEffect, useContext } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import ScrollToPageTop from "../../utils/ScrollToPageTop";
import CreateNFTIntro from "../../components/CreateNFT/step-0";
import TrackDetails from "../../components/CreateNFT/step-1";
import PricingAndSplits from "../../components/CreateNFT/step-2";
import { mintTrackNFT } from "../../utils/smart-contract/functions";
import LoadingContext from "../../../store/loading-context";

const CreateNFT = () => {
    // TODO: Add song background and unlockable content page in step 3
    const [isLoading, setLoading] = useContext(LoadingContext);
    const { Moralis, user } = useMoralis();
    const { data: userInfo } = useMoralisQuery("UserInfo", (query) => query.equalTo("user", user), [user]);

    // States
    const [step, setStep] = useState(1);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [uploadedSong, setUploadedSong] = useState(null);
    const [trackTitle, setTrackTitle] = useState("");
    const [trackOrigin, setTrackOrigin] = useState("Original");
    const [genre, setGenre] = useState("Afrobeat");
    const [explicit, setExplicit] = useState("Explicit");
    const [recordingYear, setRecordingYear] = useState(new Date().getFullYear());
    const [vocals, setVocals] = useState(true);
    const [links, setLinks] = useState({
        spotifyLink: "",
        appleMusicLink: "",
        amazonMusicLink: "",
        youtubeMusicLink: "",
        otherLink: "",
    });
    const [contributorList, setContributorList] = useState([{ id: "", name: "", username: "", split: "", role: "", walletAddress: "", avatar: "" }]);
    const [numberOfCopies, setNumberOfCopies] = useState("");
    const [nftPrice, setNftPrice] = useState("");
    const [resaleRoyaltyPercent, setResaleRoyaltyPercent] = useState("");
    const [releaseNow, setReleaseNow] = useState(true);
    const [unlockTimestamp, setUnlockTimestamp] = useState(Math.round(new Date().getTime() / 1000));

    // Continue to next step
    const nextStep = () => {
        setStep((currStep) => currStep + 1);
    };

    // Revert to previous step
    const prevStep = () => {
        setStep((currStep) => currStep - 1);
    };

    useEffect(() => {
        if (user && userInfo[0]) {
            setTrackTitle("Die Hard");
            setLinks({
                spotifyLink: "https://open.spotify.com/track/6gI9b2VsoWhjhIuIeToDVs?si=abfe744344f04c4d",
                appleMusicLink:
                    "https://music.apple.com/us/album/1626195790?app=music&at=11laLe&ct=LFV_a8488c4eb6c29dd9e04fa7ed8a69fad5&itscg=30440&itsct=catchall_p1&lId=25738567&cId=none&sr=1&src=Linkfire&ls=1",
                amazonMusicLink:
                    "https://music.amazon.com/albums/B0B2CCS4WD?tag=univemuisc-central-21&ie=UTF8&linkCode=as2&ascsubtag=a8488c4eb6c29dd9e04fa7ed8a69fad5&ref=dmm_acq_soc_in_u_lfire_lp_x_a8488c4eb6c29dd9e04fa7ed8a69fad5",
                youtubeMusicLink: "",
                otherLink: "",
            });
            setUploadedImage("https://ipfs.moralis.io:2053/ipfs/QmQSTneVQ2Xde3XzuXKQWkwipdS8Voh9xDDWLGju83xJWa");
            setUploadedSong("https://ipfs.moralis.io:2053/ipfs/QmUA4TiKp1AiiJhCmnPgij4B5cmFrmtUjsBPADEtgRZxaH");
            setNumberOfCopies(4);
            setNftPrice(10.8);
            setResaleRoyaltyPercent(5);
            setContributorList([
                {
                    id: user.id,
                    name: user.attributes.name,
                    username: user.attributes.username,
                    split: 80,
                    role: "Singer",
                    walletAddress: user.attributes.ethAddress,
                    avatar: userInfo[0].attributes.avatar,
                },
            ]);
        }
    }, [user, userInfo]);

    const nftCreateFormOnSubmit = async () => {
        setLoading(true);
        const reducedContributorList = contributorList.reduce((result, { id, name, walletAddress, split, role }) => {
            result.push({ id, name, walletAddress, split, role });
            return result;
        }, []);

        const nftMetadata = {
            name: trackTitle,
            description:
                "Lorem Ipsum is simply a dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic type",
            image: process.env.NEXT_PUBLIC_IPFS_NODE_URL + uploadedImage.replace("https://ipfs.moralis.io:2053/ipfs/", ""),
            background_color: "5AB510",
            animation_url: process.env.NEXT_PUBLIC_IPFS_NODE_URL + uploadedSong.replace("https://ipfs.moralis.io:2053/ipfs/", ""),
            artistName: user.attributes.name,
            artistAddress: user.attributes.ethAddress,
            links: {
                spotify: links.spotifyLink,
                appleMusic: links.appleMusicLink,
                amazonMusic: links.amazonMusicLink,
                youtubeMusic: links.youtubeMusicLink,
            },
            contributors: reducedContributorList,
            unlockTimestamp: unlockTimestamp,
            attributes: [
                {
                    trait_type: "Number of copies",
                    value: numberOfCopies.toString(),
                },
                {
                    trait_type: "Resale Royalty Percentage",
                    value: resaleRoyaltyPercent.toString(),
                },
                {
                    trait_type: "Track Origin (Version)",
                    value: trackOrigin,
                },
                {
                    trait_type: "Genre",
                    value: genre,
                },
                {
                    trait_type: "Recording Year",
                    value: recordingYear.toString(),
                },
                {
                    trait_type: "Explicit",
                    value: explicit,
                },
                {
                    trait_type: "Vocals",
                    value: vocals ? "Yes" : "No",
                },
                {
                    trait_type: "Other Contributors",
                    value: contributorList.length > 1 ? "Yes" : "No",
                },
            ],
        };

        console.log("nftMetadata:", nftMetadata);

        const file = new Moralis.File("file.json", { base64: btoa(JSON.stringify(nftMetadata)) });
        await file.saveIPFS();

        const metadataURI = file.hash();
        const contributors = contributorList.reduce((result, { walletAddress }) => {
            result.push(walletAddress);
            return result;
        }, []);
        const percentageContributions = contributorList.reduce((result, { split }) => {
            result.push(split);
            return result;
        }, []);
        const onSale = true;

        await mintTrackNFT(
            numberOfCopies,
            window.web3.utils.toWei(String(nftPrice), "Ether"),
            metadataURI,
            contributors,
            percentageContributions,
            resaleRoyaltyPercent,
            onSale,
            unlockTimestamp,
            user.attributes.ethAddress
        );
        setLoading(false);
    };

    const step0Values = { nextStep };
    const step1Values = {
        step,
        nextStep,
        prevStep,
        uploadedImage,
        setUploadedImage,
        uploadedSong,
        setUploadedSong,
        trackTitle,
        setTrackTitle,
        setGenre,
        setTrackOrigin,
        setExplicit,
        recordingYear,
        setRecordingYear,
        vocals,
        setVocals,
        links,
        setLinks,
        nftPrice,
        numberOfCopies,
        contributorList,
    };
    const step2Values = {
        step,
        prevStep,
        uploadedImage,
        uploadedSong,
        trackTitle,
        contributorList,
        setContributorList,
        numberOfCopies,
        setNumberOfCopies,
        nftPrice,
        setNftPrice,
        resaleRoyaltyPercent,
        setResaleRoyaltyPercent,
        releaseNow,
        setReleaseNow,
        setUnlockTimestamp,
        nftCreateFormOnSubmit,
    };

    switch (step) {
        case 0:
            return (
                <>
                    <Head>
                        <title>Musixverse | Create NFT</title>
                        <meta name="description" content="Musixverse" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <ScrollToPageTop samePage={true} changingValue={step} />
                    <CreateNFTIntro {...step0Values} />
                </>
            );

        case 1:
            return (
                <>
                    <Head>
                        <title>Musixverse | Create NFT - Track Details</title>
                        <meta name="description" content="Musixverse" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <ScrollToPageTop samePage={true} changingValue={step} />
                    <TrackDetails {...step1Values} />
                </>
            );

        case 2:
            return (
                <>
                    <Head>
                        <title>Musixverse | Create NFT - Pricing and Splits</title>
                        <meta name="description" content="Musixverse" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <ScrollToPageTop samePage={true} changingValue={step} />
                    <PricingAndSplits {...step2Values} />
                </>
            );
    }
};

export default CreateNFT;
