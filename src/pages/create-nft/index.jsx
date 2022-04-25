import Head from "next/head";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import ScrollToTop from "../../utils/ScrollToTop";
import ISRCInput from "../../components/CreateNFT/step-1";
import TrackDetails from "../../components/CreateNFT/step-2";
import ComprehensiveDetails from "../../components/CreateNFT/step-3";
import Contributors from "../../components/CreateNFT/step-4";
import NFTDetailsAndScheduling from "../../components/CreateNFT/step-5";

const CreateNFT = () => {
    const { Moralis } = useMoralis();

    // States
    const [step, setStep] = useState(1);
    const [isrc, setIsrc] = useState("");
    const [imageHash, setImageHash] = useState("");
    const [songHash, setSongHash] = useState("");
    const [trackTitle, setTrackTitle] = useState("");
    const [links, setLinks] = useState({
        spotifyLink: "",
        appleMusicLink: "",
        youtubeMusicLink: "",
        amazonMusicLink: "",
    });
    const [recordingYear, setRecordingYear] = useState("");
    const [vocals, setVocals] = useState(true);
    const [otherContributors, setOtherContributors] = useState(true);
    const [numberOfCopies, setNumberOfCopies] = useState("");
    const [nftPrice, setNftPrice] = useState("");
    const [resaleRoyaltyPercent, setResaleRoyaltyPercent] = useState("");
    const [releaseNow, setReleaseNow] = useState(true);

    // Continue to next step
    const nextStep = () => {
        setStep((currStep) => currStep + 1);
    };

    // Revert to previous step
    const prevStep = () => {
        setStep((currStep) => currStep - 1);
    };

    async function uploadFile(event) {
        event.preventDefault();
        const data = event.target.files[0];
        const file = new Moralis.File("file", data);
        await file.saveIPFS();
        return file;
    }

    const formOnSubmit = async () => {
        const _version = document.getElementById("version").textContent;
        const _genre = document.getElementById("genre").textContent;
        const _explicit = document.getElementById("explicit-content").textContent;
        // const object = {
        //     "id" : 1,
        //     "name": "I Spend Too Much Time",
        //     "artistName": "Ben Kessler",
        //     "createTime": 1644552284,
        //     "artistAddress": "0x3e6aDa9D5a6BF2105A5DE53CbDE010bac4C35d51",
        //     "description": "Lorem Ipsum is simply a dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic type",
        //     "image": "IMAGE_URL",
        //     "external_url": "https://www.musixverse.com/song-info/3",
        //     "background_color": "6cc027",
        //     "animation_url": "AUDIO_FILE_URL",
        //     "links": {
        //         spotify: "www.spotify.com",
        //         appleMusic: "www.applemusic.com",
        //         amazonMusic: "www.amazon.com",
        //         youtubeMusic: "www.youtube.com",
        //     },
        //     "attributes": [
        //         {
        //           "trait_type": "Genre",
        //           "value": "Pop"
        //         },
        //         {
        //           "trait_type": "Instruments",
        //           "value": ["Drums", "Piano","Violin", "Flute"]
        //         },
        //         {
        //           "trait_type": "Type of Lyrics",
        //           "value": “Rhyme”
        //         },
        //         {
        //           "trait_type": "Song Type",
        //           "value": “Literal”
        //         },
        //        {
        //           "trait_type": "Frequency",
        //           "value": “Bass heavy”
        //         },
        //        {
        //           "trait_type": "Instrument Type",
        //           "value": “Digital”
        //         },
        //        {
        //           "trait_type": "Sample Based",
        //           "value": false
        //         },
        //        {
        //           "trait_type": "Stamina",
        //           "value": 1.4
        //         }
        //     ]
        //   }
        const object = {
            key: "value",
        };
        const file = new Moralis.File("file.json", { base64: btoa(JSON.stringify(object)) });
        await file.saveIPFS();
    };

    const step1Values = { step, nextStep, isrc, setIsrc };
    const step2Values = { step, nextStep, prevStep, trackTitle, setTrackTitle, links, setLinks, setImageHash, setSongHash, uploadFile };
    const step3Values = { step, nextStep, prevStep, recordingYear, setRecordingYear, vocals, setVocals, otherContributors, setOtherContributors };
    const step4Values = { step, nextStep, prevStep };
    const step5Values = {
        step,
        prevStep,
        numberOfCopies,
        setNumberOfCopies,
        nftPrice,
        setNftPrice,
        resaleRoyaltyPercent,
        setResaleRoyaltyPercent,
        releaseNow,
        setReleaseNow,
        otherContributors,
    };

    switch (step) {
        case 1:
            return (
                <>
                    <Head>
                        <title>Musixverse | Create NFT - ISRC</title>
                        <meta name="description" content="Musixverse" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <ScrollToTop samePage={true} changingValue={step} />
                    <ISRCInput {...step1Values} />
                </>
            );

        case 2:
            return (
                <>
                    <Head>
                        <title>Musixverse | Create NFT - Track Details</title>
                        <meta name="description" content="Musixverse" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <ScrollToTop samePage={true} changingValue={step} />
                    <TrackDetails {...step2Values} />
                </>
            );

        case 3:
            return (
                <>
                    <Head>
                        <title>Musixverse | Create NFT - Comprehensive Details</title>
                        <meta name="description" content="Musixverse" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <ScrollToTop samePage={true} changingValue={step} />
                    <ComprehensiveDetails {...step3Values} />
                </>
            );

        case 4:
            return (
                <>
                    <Head>
                        <title>Musixverse | Create NFT - Contributors</title>
                        <meta name="description" content="Musixverse" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <ScrollToTop samePage={true} changingValue={step} />
                    <Contributors {...step4Values} />
                </>
            );

        case 5:
            return (
                <>
                    <Head>
                        <title>Musixverse | NFT Details & Scheduling</title>
                        <meta name="description" content="Musixverse" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <ScrollToTop samePage={true} changingValue={step} />
                    <NFTDetailsAndScheduling {...step5Values} />
                </>
            );
    }
};

export default CreateNFT;
