import Head from "next/head";
import axios from "axios";
import { useState, useEffect } from "react";
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
    const [spotifyAPIToken, setSpotifyAPIToken] = useState("");
    const [isrc, setIsrc] = useState("");
    const [imageHash, setImageHash] = useState("");
    const [songHash, setSongHash] = useState("");
    const [trackTitle, setTrackTitle] = useState("");
    const [links, setLinks] = useState({
        spotifyLink: "",
        appleMusicLink: "",
        amazonMusicLink: "",
        youtubeMusicLink: "",
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

    async function uploadFile(data) {
        const file = new Moralis.File("file", data);
        await file.saveIPFS();
        console.log(file.ipfs(), file.hash());
        return file;
    }

    const fetchSongDetails = async () => {
        if (isrc.length > 0) {
            const isrcResponse = await axios("https://api.spotify.com/v1/search", {
                method: "GET",
                params: {
                    q: "isrc:" + isrc,
                    type: "track",
                },
                headers: { Authorization: "Bearer " + spotifyAPIToken },
            });

            if (isrcResponse.data.tracks.items[0]) {
                setLinks((prevState) => ({
                    ...prevState,
                    spotifyLink: isrcResponse.data.tracks.items[0].external_urls.spotify,
                }));
                setTrackTitle(isrcResponse.data.tracks.items[0].name);
                console.log(isrcResponse.data.tracks.items[0].album.images[0].url);

                const _img = await axios.get(isrcResponse.data.tracks.items[0].album.images[0].url, { responseType: "blob" }).then((response) => {
                    return response.data;
                });
                const file = await uploadFile(_img);
                setImageHash(file.hash());
            }

            return isrcResponse.data.tracks.items[0];
        }
    };

    useEffect(() => {
        axios("https://accounts.spotify.com/api/token", {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Basic " + btoa(process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID + ":" + process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET),
            },
            data: "grant_type=client_credentials",
            method: "POST",
        }).then((tokenResponse) => {
            setSpotifyAPIToken(tokenResponse.data.access_token);
        });
    }, []);

    async function getLatestId() {
        // TODO: Write a function in the smart contract that returns the latest NFT ID
    }

    const formOnSubmit = async () => {
        const _id = getLatestId();
        const _version = document.getElementById("version").textContent;
        const _genre = document.getElementById("genre").textContent;
        const _explicit = document.getElementById("explicit-content").textContent;

        const object = {
            id: _id,
            name: "#" + "1 " + trackTitle,
            artistName: "Ben Kessler",
            createTime: 1644552284,
            artistAddress: "0x3e6aDa9D5a6BF2105A5DE53CbDE010bac4C35d51",
            description:
                "Lorem Ipsum is simply a dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic type",
            image: process.env.NEXT_PUBLIC_IPFS_NODE_URL + imageHash,
            external_url: "https://www.musixverse.com/polygon/song-info/" + _id,
            background_color: "6cc027",
            animation_url: process.env.NEXT_PUBLIC_IPFS_NODE_URL + songHash,
            links: {
                spotify: links.spotifyLink,
                appleMusic: links.appleMusicLink,
                amazonMusic: links.amazonMusicLink,
                youtubeMusic: links.youtubeMusicLink,
            },
            attributes: [
                {
                    trait_type: "ISRC",
                    value: isrc,
                },
                {
                    trait_type: "Number of copies",
                    value: numberOfCopies,
                },
                {
                    trait_type: "Track Origin (Version)",
                    value: _version,
                },
                {
                    trait_type: "Genre",
                    value: _genre,
                },
                {
                    trait_type: "Recording Year",
                    value: recordingYear,
                },
                {
                    trait_type: "Explicit",
                    value: _explicit,
                },
                {
                    trait_type: "Vocals",
                    value: vocals ? "Yes" : "No",
                },
                {
                    trait_type: "Other Contributors",
                    value: otherContributors ? "Yes" : "No",
                },
            ],
        };

        const file = new Moralis.File("file.json", { base64: btoa(JSON.stringify(object)) });
        await file.saveIPFS();
    };

    const step1Values = { step, nextStep, isrc, setIsrc, fetchSongDetails };
    const step2Values = { step, nextStep, prevStep, trackTitle, setTrackTitle, links, setLinks, imageHash, setImageHash, setSongHash, uploadFile };
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
