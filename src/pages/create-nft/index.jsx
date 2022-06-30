import Head from "next/head";
import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import ScrollToTop from "../../utils/ScrollToTop";
import CreateNFTIntro from "../../components/CreateNFT/step-0";
import TrackDetails from "../../components/CreateNFT/step-1";
import PricingAndSplits from "../../components/CreateNFT/step-2";
import { mintTrackNFT, uri } from "../../utils/smart-contract/functions";

const CreateNFT = () => {
    // TODO: Add song background and unlockable content page in step 3
    const { Moralis, user } = useMoralis();

    // States
    const [step, setStep] = useState(1);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [uploadedSong, setUploadedSong] = useState(null);
    const [trackTitle, setTrackTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [trackOrigin, setTrackOrigin] = useState("");
    const [explicit, setExplicit] = useState("");
    const [recordingYear, setRecordingYear] = useState(new Date().getFullYear());
    const [vocals, setVocals] = useState(true);
    const [links, setLinks] = useState({
        spotifyLink: "",
        appleMusicLink: "",
        amazonMusicLink: "",
        youtubeMusicLink: "",
        otherLink: "",
    });
    const [contributorList, setContributorList] = useState([{ ContributorName: "", Split: "", Role: "" }]);
    const [numberOfCopies, setNumberOfCopies] = useState("");
    const [nftPrice, setNftPrice] = useState("");
    const [resaleRoyaltyPercent, setResaleRoyaltyPercent] = useState("");
    const [releaseNow, setReleaseNow] = useState(true);

    useEffect(() => {
        console.log("releaseNow:", releaseNow);
    }, [releaseNow]);

    // Continue to next step
    const nextStep = () => {
        setStep((currStep) => currStep + 1);
    };

    // Revert to previous step
    const prevStep = () => {
        setStep((currStep) => currStep - 1);
    };

    async function uploadFile(data) {
        const file = new Moralis.File("file", data);
        await file.saveIPFS();
        console.log(file.ipfs(), file.hash());
        return file;
    }

    async function getLatestId() {
        // TODO: Write a function in the smart contract that returns the latest NFT ID
    }

    const nftCreateFormOnSubmit = async () => {
        // const _id = getLatestId();
        // const _id = 1;
        // const _version = document.getElementById("version").textContent;
        // const _genre = document.getElementById("genre").textContent;
        // const _explicit = document.getElementById("explicit-content").textContent;

        // const object = {
        //     id: _id,
        //     name: "#" + "1 " + trackTitle,
        //     artistName: "Ben Kessler",
        //     createTime: 1644552284,
        //     artistAddress: "0x3e6aDa9D5a6BF2105A5DE53CbDE010bac4C35d51",
        //     description:
        //         "Lorem Ipsum is simply a dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic type",
        //     image: process.env.NEXT_PUBLIC_IPFS_NODE_URL + imageHash,
        //     external_url: "https://www.musixverse.com/polygon/song-info/" + _id,
        //     background_color: "6cc027",
        //     animation_url: process.env.NEXT_PUBLIC_IPFS_NODE_URL + songHash,
        //     links: {
        //         spotify: links.spotifyLink,
        //         appleMusic: links.appleMusicLink,
        //         amazonMusic: links.amazonMusicLink,
        //         youtubeMusic: links.youtubeMusicLink,
        //     },
        //     contributors: {},
        //     attributes: [
        //         {
        //             trait_type: "Number of copies",
        //             value: numberOfCopies,
        //         },
        //         {
        //             trait_type: "Track Origin (Version)",
        //             value: _version,
        //         },
        //         {
        //             trait_type: "Genre",
        //             value: _genre,
        //         },
        //         {
        //             trait_type: "Recording Year",
        //             value: recordingYear,
        //         },
        //         {
        //             trait_type: "Explicit",
        //             value: _explicit,
        //         },
        //         {
        //             trait_type: "Vocals",
        //             value: vocals ? "Yes" : "No",
        //         },
        //         {
        //             trait_type: "Other Contributors",
        //             value: otherContributors ? "Yes" : "No",
        //         },
        //     ],
        // };

        // const testObject = {
        //     id: 1,
        //     name: "#" + "1 " + "I Spend Too Much Time!",
        //     artistName: "Ben Kessler",
        //     createTime: Date.now(),
        //     artistAddress: user.attributes.accounts[0],
        //     description:
        //         "Lorem Ipsum is simply a dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic type",
        //     image: process.env.NEXT_PUBLIC_IPFS_NODE_URL + "QmWyp8EUit437Ge3ADi3Xghz4DSk5uBg5WnB99eQpW8nbE",
        //     external_url: "https://www.musixverse.com/polygon/song-info/" + 1,
        //     background_color: "6cc027",
        //     animation_url: process.env.NEXT_PUBLIC_IPFS_NODE_URL + "QmUA4TiKp1AiiJhCmnPgij4B5cmFrmtUjsBPADEtgRZxaH",
        //     links: {
        //         spotify: "https://open.spotify.com/track/2cvOfKHOHgwQlLiuLKP2xR?si=d132b7ed31624775",
        //         appleMusic: "https://music.apple.com/dm/album/myself/1477886950?i=1477887485",
        //         amazonMusic: "",
        //         youtubeMusic: "https://music.youtube.com/watch?v=gqthPT8vK7o&feature=share",
        //     },
        //     contributors: [
        //         {
        //             name: "Ben Kessler",
        //             address: user.attributes.accounts[0],
        //             role: "Vocalist",
        //             contribution: "100",
        //         },
        //     ],
        //     attributes: [
        //         {
        //             trait_type: "Number of copies",
        //             value: 1,
        //         },
        //         {
        //             trait_type: "Track Origin (Version)",
        //             value: "Cover",
        //         },
        //         {
        //             trait_type: "Genre",
        //             value: "Pop",
        //         },
        //         {
        //             trait_type: "Recording Year",
        //             value: "2021",
        //         },
        //         {
        //             trait_type: "Explicit",
        //             value: "Not explicit",
        //         },
        //         {
        //             trait_type: "Vocals",
        //             value: "Yes",
        //         },
        //         {
        //             trait_type: "Other Contributors",
        //             value: "No",
        //         },
        //     ],
        // };

        // const file = new Moralis.File("file.json", { base64: btoa(JSON.stringify(testObject)) });
        // await file.saveIPFS();

        // const numberOfCopies = 1;
        // const price = 1.2;
        // const metadataURIs = [file.hash()];
        // const contributors = [user.attributes.accounts[0]];
        // const percentageContributions = [100];
        // const resaleRoyaltyPercentage = 5;
        // const onSale = true;
        // mintTrackNFT(
        //     numberOfCopies,
        //     window.web3.utils.toWei(String(price), "Ether"),
        //     metadataURIs,
        //     contributors,
        //     percentageContributions,
        //     resaleRoyaltyPercentage,
        //     onSale,
        //     user.attributes.accounts[0]
        // );
        console.log(await uri(2));
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
                    <ScrollToTop samePage={true} changingValue={step} />
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
                    <ScrollToTop samePage={true} changingValue={step} />
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
                    <ScrollToTop samePage={true} changingValue={step} />
                    <PricingAndSplits {...step2Values} />
                </>
            );
    }
};

export default CreateNFT;
