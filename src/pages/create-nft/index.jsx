import Head from "next/head";
import { useState, useEffect, useContext } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import ScrollToPageTop from "../../utils/ScrollToPageTop";
import CreateNFTIntro from "../../components/CreateNFT/step-0";
import TrackDetails from "../../components/CreateNFT/step-1";
import ComprehensiveDetails from "../../components/CreateNFT/step-2";
import PricingAndSplits from "../../components/CreateNFT/step-3";
import SuccessModal from "../../components/CreateNFT/CreateNFTUtils/SuccessModal";
import { mintTrackNFT } from "../../utils/smart-contract/functions";
import { BLOCKCHAIN_NETWORK_ID, MXV_CONTRACT_ADDRESS } from "../../utils/smart-contract/constants";
import LoadingContext from "../../../store/loading-context";

const CreateNFT = () => {
    const [isLoading, setLoading] = useContext(LoadingContext);
    const { Moralis, user } = useMoralis();
    const { data: userInfo } = useMoralisQuery("UserInfo", (query) => query.equalTo("user", user), [user]);

    // States
    const [step, setStep] = useState(1);
    const [trackTitle, setTrackTitle] = useState("");
    const [trackBackground, setTrackBackground] = useState("");
    const [coverArtUrl, setCoverArtUrl] = useState(null);
    const [coverArtMimeType, setCoverArtMimeType] = useState(null);
    const [creditCoverArtArtist, setCreditCoverArtArtist] = useState(false);
    const [coverArtArtist, setCoverArtArtist] = useState({ id: "", name: "", username: "", address: "", avatar: "", email: "" });
    const [audioFileUrl, setAudioFileUrl] = useState(null);
    const [audioFileDuration, setAudioFileDuration] = useState(null);
    const [audioFileMimeType, setAudioFileMimeType] = useState(null);
    const [lyrics, setLyrics] = useState("");
    const [trackOrigin, setTrackOrigin] = useState("Original");
    const [genre, setGenre] = useState("Afrobeat");
    const [recordingYear, setRecordingYear] = useState(new Date().getFullYear());
    const [parentalAdvisory, setParentalAdvisory] = useState("Explicit");
    const [vocals, setVocals] = useState(true);
    const [language, setLanguage] = useState("Hindi");
    const [location, setLocation] = useState("India");
    const [isrc, setIsrc] = useState("");
    const [tags, setTags] = useState("");
    const [links, setLinks] = useState({
        spotifyLink: "",
        appleMusicLink: "",
        amazonMusicLink: "",
        youtubeMusicLink: "",
        other: "",
    });
    const [numberOfCopies, setNumberOfCopies] = useState("");
    const [nftPrice, setNftPrice] = useState("");
    const [collaboratorList, setCollaboratorList] = useState([{ id: "", name: "", username: "", split: "", role: "", address: "", avatar: "" }]);
    const [resaleRoyaltyPercent, setResaleRoyaltyPercent] = useState("");
    const [releaseNow, setReleaseNow] = useState(true);
    const [unlockTimestamp, setUnlockTimestamp] = useState(Math.round(new Date().getTime() / 1000));

    // Creation success modal
    const [createNFTSuccess, setCreateNFTSuccess] = useState(false);

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
            setTrackTitle("Rap God");
            setTrackBackground(
                "Lorem Ipsum is simply a dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic type"
            );
            setCoverArtUrl("https://ipfs.moralis.io:2053/ipfs/QmQSTneVQ2Xde3XzuXKQWkwipdS8Voh9xDDWLGju83xJWa");
            setCoverArtMimeType("image/jpeg");
            setAudioFileUrl("https://ipfs.moralis.io:2053/ipfs/QmUA4TiKp1AiiJhCmnPgij4B5cmFrmtUjsBPADEtgRZxaH");
            setAudioFileDuration("90.30");
            setAudioFileMimeType("audio/mpeg");
            setLyrics("");
            setIsrc("USUM72208965");
            setLinks({
                spotifyLink: "https://open.spotify.com/track/6gI9b2VsoWhjhIuIeToDVs?si=abfe744344f04c4d",
                appleMusicLink:
                    "https://music.apple.com/us/album/1626195790?app=music&at=11laLe&ct=LFV_a8488c4eb6c29dd9e04fa7ed8a69fad5&itscg=30440&itsct=catchall_p1&lId=25738567&cId=none&sr=1&src=Linkfire&ls=1",
                amazonMusicLink:
                    "https://music.amazon.com/albums/B0B2CCS4WD?tag=univemuisc-central-21&ie=UTF8&linkCode=as2&ascsubtag=a8488c4eb6c29dd9e04fa7ed8a69fad5&ref=dmm_acq_soc_in_u_lfire_lp_x_a8488c4eb6c29dd9e04fa7ed8a69fad5",
                youtubeMusicLink: "",
                other: "https://www.jiosaavn.com/track/die-hard/H1AvZE1lYwY",
            });
            setNumberOfCopies(4);
            setNftPrice(12.4);
            setCollaboratorList([
                {
                    id: user.id,
                    name: user.attributes.name,
                    username: user.attributes.username,
                    split: 100,
                    role: "Singer",
                    address: user.attributes.ethAddress,
                    avatar: userInfo[0].attributes.avatar,
                },
            ]);
            setResaleRoyaltyPercent(5);
        }
    }, [user, userInfo]);

    const nftCreateFormOnSubmit = async () => {
        setLoading(true);
        const reducedCollaboratorList = collaboratorList.reduce((result, { id, name, address, split, role }) => {
            result.push({ id, name, address, split, role });
            return result;
        }, []);

        var lyricsFile;
        if (lyrics) {
            lyricsFile = new Moralis.File("lyricsFile.txt", { base64: btoa(lyrics) });
            await lyricsFile.saveIPFS();
        }

        const _tags = tags.map((tag) => tag.value);

        const nftMetadata = {
            version: "1.0",
            title: trackTitle,
            artist: user.attributes.name,
            artistAddress: user.attributes.ethAddress,
            description: trackBackground,
            audio: "ipfs://" + audioFileUrl.replace("https://ipfs.moralis.io:2053/ipfs/", ""),
            duration: audioFileDuration,
            mimeType: audioFileMimeType,
            language: language,
            artwork: {
                uri: "ipfs://" + coverArtUrl.replace("https://ipfs.moralis.io:2053/ipfs/", ""),
                mimeType: coverArtMimeType,
                artistId: creditCoverArtArtist ? coverArtArtist.id : "",
                artist: creditCoverArtArtist ? coverArtArtist.name : "",
                artistAddress: creditCoverArtArtist ? coverArtArtist.address : "",
                artistEmail: creditCoverArtArtist ? coverArtArtist.email : "",
            },
            unlockTimestamp: unlockTimestamp,
            collaborators: reducedCollaboratorList,
            links: {
                spotify: links.spotifyLink,
                appleMusic: links.appleMusicLink,
                amazonMusic: links.amazonMusicLink,
                youtubeMusic: links.youtubeMusicLink,
                other: links.other,
            },
            genre: genre,
            tags: _tags,
            lyrics: lyrics ? "ipfs://" + lyricsFile.hash() : "",
            license: "ipfs://" + coverArtUrl.replace("https://ipfs.moralis.io:2053/ipfs/", ""), // TODO
            isrc: isrc,
            locationCreated: location,
            chainDetails: {
                chainId: BLOCKCHAIN_NETWORK_ID,
                contractAddress: MXV_CONTRACT_ADDRESS,
            },
            // OpenSea standard ⬇️
            name: user.attributes.name + " - " + trackTitle,
            image: "ipfs://" + coverArtUrl.replace("https://ipfs.moralis.io:2053/ipfs/", ""),
            animation_url: "ipfs://" + audioFileUrl.replace("https://ipfs.moralis.io:2053/ipfs/", ""),
            background_color: "5AB510",
            external_url: "https://www.musixverse.com",
            attributes: [
                {
                    trait_type: "Number of Copies",
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
                    trait_type: "Parental Advisory",
                    value: parentalAdvisory,
                },
                {
                    trait_type: "Vocals",
                    value: vocals ? "Yes" : "No",
                },
                {
                    trait_type: "Other Collaborators",
                    value: collaboratorList.length > 1 ? "Yes" : "No",
                },
            ],
        };

        console.log("nftMetadata:", nftMetadata);

        const file = new Moralis.File("file.json", { base64: btoa(JSON.stringify(nftMetadata)) });
        await file.saveIPFS();

        const metadataHash = file.hash();
        const collaborators = collaboratorList.reduce((result, { address }) => {
            result.push(address);
            return result;
        }, []);
        const percentageContributions = collaboratorList.reduce((result, { split }) => {
            result.push(split);
            return result;
        }, []);
        const onSale = true;

        await mintTrackNFT(
            numberOfCopies,
            nftPrice,
            metadataHash,
            collaborators,
            percentageContributions,
            resaleRoyaltyPercent,
            onSale,
            unlockTimestamp,
            user.attributes.ethAddress
        );
        setLoading(false);
        setCreateNFTSuccess(true);
    };

    const step0Values = { nextStep };
    const step1Values = {
        step,
        nextStep,
        trackTitle,
        setTrackTitle,
        trackBackground,
        setTrackBackground,
        coverArtUrl,
        setCoverArtUrl,
        setCoverArtMimeType,
        creditCoverArtArtist,
        setCreditCoverArtArtist,
        coverArtArtist,
        setCoverArtArtist,
        audioFileUrl,
        setAudioFileUrl,
        setAudioFileDuration,
        setAudioFileMimeType,
        lyrics,
        setLyrics,
        nftPrice,
        numberOfCopies,
        collaboratorList,
    };
    const step2Values = {
        step,
        nextStep,
        prevStep,
        trackTitle,
        coverArtUrl,
        audioFileUrl,
        setTrackOrigin,
        setGenre,
        recordingYear,
        setRecordingYear,
        setParentalAdvisory,
        vocals,
        setVocals,
        setLanguage,
        setLocation,
        isrc,
        setIsrc,
        tags,
        setTags,
        links,
        setLinks,
        nftPrice,
        numberOfCopies,
        collaboratorList,
        genre,
        trackOrigin,
        parentalAdvisory,
        language,
        location,
    };
    const step3Values = {
        step,
        prevStep,
        coverArtUrl,
        audioFileUrl,
        trackTitle,
        numberOfCopies,
        setNumberOfCopies,
        nftPrice,
        setNftPrice,
        collaboratorList,
        setCollaboratorList,
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
                        <title>Musixverse | Create NFT - Comprehensive Details</title>
                        <meta name="description" content="Musixverse" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <ScrollToPageTop samePage={true} changingValue={step} />
                    <ComprehensiveDetails {...step2Values} />
                </>
            );

        case 3:
            return (
                <>
                    <Head>
                        <title>Musixverse | Create NFT - Pricing and Splits</title>
                        <meta name="description" content="Musixverse" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <ScrollToPageTop samePage={true} changingValue={step} />
                    <SuccessModal isOpen={createNFTSuccess} />
                    <PricingAndSplits {...step3Values} />
                </>
            );
    }
};

export default CreateNFT;
