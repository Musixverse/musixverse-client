import Head from "next/head";
import { meta_description } from "../../constants/index";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { useMoralis, useMoralisQuery, useNewMoralisObject, useMoralisCloudFunction } from "react-moralis";
import ScrollToPageTop from "../../utils/ScrollToPageTop";
import CreateNFTIntro from "../../components/CreateNFT/step-0";
import TrackDetails from "../../components/CreateNFT/step-1";
import ComprehensiveDetails from "../../components/CreateNFT/step-2";
import PricingAndSplits from "../../components/CreateNFT/step-3";
import SuccessModal from "../../components/CreateNFT/CreateNFTUtils/SuccessModal";
import SaveDraftSuccessModal from "../../components/CreateNFT/CreateNFTUtils/SaveDraftSuccessModal";
import { mintTrackNFT } from "../../utils/smart-contract/functions";
import { BLOCKCHAIN_NETWORK_ID, MXV_DIAMOND_ADDRESS } from "../../constants";
import LoadingContext from "../../../store/loading-context";

const CreateNFT = () => {
	const [isLoading, setLoading] = useContext(LoadingContext);
	const { Moralis, user } = useMoralis();

	// States
	const [step, setStep] = useState(draft ? 1 : 0);
	const [trackTitle, setTrackTitle] = useState("");
	const [trackBackground, setTrackBackground] = useState("");
	const [audioFileUrl, setAudioFileUrl] = useState(null);
	const [audioFileDuration, setAudioFileDuration] = useState(null);
	const [audioFileMimeType, setAudioFileMimeType] = useState(null);
	const [coverArtUrl, setCoverArtUrl] = useState(null);
	const [coverArtMimeType, setCoverArtMimeType] = useState(null);
	const [creditCoverArtArtist, setCreditCoverArtArtist] = useState(true);
	const [coverArtArtist, setCoverArtArtist] = useState({ id: "", name: "", username: "", address: "", avatar: "", email: "" });
	const [lyrics, setLyrics] = useState(null);
	const [trackOrigin, setTrackOrigin] = useState("Original");
	const [genre, setGenre] = useState("Hip-Hop");
	const [recordingYear, setRecordingYear] = useState(new Date().getFullYear());
	const [parentalAdvisory, setParentalAdvisory] = useState("Explicit");
	const [vocals, setVocals] = useState(true);
	const [language, setLanguage] = useState("Hindi");
	const [location, setLocation] = useState("India");
	const [isrc, setIsrc] = useState("");
	const [tags, setTags] = useState([]);
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
	const [unlockTimestamp, setUnlockTimestamp] = useState(new Date().getTime());
	// Creation success modal state
	const [createNFTSuccess, setCreateNFTSuccess] = useState(false);
	// Draft saved modal state
	const [saveDraftSuccess, setSaveDraftSuccess] = useState(false);

	// Continue to next step
	const nextStep = () => {
		setStep((currStep) => currStep + 1);
	};

	// Revert to previous step
	const prevStep = () => {
		setStep((currStep) => currStep - 1);
	};

	// Setting data if a draft is opened
	const router = useRouter();
	const { draft } = router.query;
	const { fetch: getDraftNftData } = useMoralisCloudFunction(
		"getDraftNftData",
		{ objectId: draft },
		{
			autoFetch: false,
		}
	);
	useEffect(() => {
		if (draft) {
			getDraftNftData({
				onSuccess: async (_draft) => {
					if (_draft) {
						setTrackTitle(_draft.attributes.title);
						setTrackBackground(_draft.attributes.description);
						setAudioFileUrl(_draft.attributes.audio);
						setAudioFileDuration(_draft.attributes.duration);
						setAudioFileMimeType(_draft.attributes.mimeType);
						setCoverArtUrl(_draft.attributes.artwork.uri);
						setCoverArtMimeType(_draft.attributes.artwork.mimeType);
						setCreditCoverArtArtist(_draft.attributes.creditCoverArtArtist);
						setCoverArtArtist(_draft.attributes.coverArtArtist);
						setLyrics(_draft.attributes.lyrics);
						setTrackOrigin(_draft.attributes.trackOrigin);
						setGenre(_draft.attributes.genre);
						setRecordingYear(_draft.attributes.recordingYear);
						setParentalAdvisory(_draft.attributes.parentalAdvisory);
						setVocals(_draft.attributes.vocals);
						setLanguage(_draft.attributes.language);
						setLocation(_draft.attributes.location);
						setIsrc(_draft.attributes.isrc);
						setTags(_draft.attributes.tags);
						setLinks(_draft.attributes.links);
						setNumberOfCopies(_draft.attributes.numberOfCopies);
						setNftPrice(_draft.attributes.nftPrice);
						setCollaboratorList(_draft.attributes.collaboratorList);
						setResaleRoyaltyPercent(_draft.attributes.resaleRoyaltyPercent);
						setReleaseNow(_draft.attributes.releaseNow);
						setUnlockTimestamp(_draft.attributes.unlockTimestamp);

						setStep(1);
						router.replace("/create-nft?draft=" + _draft.id, undefined, { shallow: true });
					}
				},
				onError: (error) => {
					console.log("deleteNftDraft Error:", error);
					router.replace("/create-nft", undefined, { shallow: true });
				},
			});
		} else if (draft == undefined) {
			setStep(0);
		}
	}, [draft]);

	// Adding logged in user as default to the collaboratorList
	const { data: userInfo } = useMoralisQuery("UserInfo", (query) => query.equalTo("user", user), [user]);
	useEffect(() => {
		if (user && userInfo[0]) {
			// setTrackTitle("Rap God");
			// setTrackBackground(
			// 	"Lorem Ipsum is simply a dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic type"
			// );
			// setCoverArtUrl("https://ipfs.moralis.io:2053/ipfs/QmQSTneVQ2Xde3XzuXKQWkwipdS8Voh9xDDWLGju83xJWa");
			// setCoverArtMimeType("image/jpeg");
			// setAudioFileUrl("https://ipfs.moralis.io:2053/ipfs/QmUA4TiKp1AiiJhCmnPgij4B5cmFrmtUjsBPADEtgRZxaH");
			// setAudioFileDuration("90.30");
			// setAudioFileMimeType("audio/mpeg");
			// setLyrics("");
			// 		setIsrc("USUM72208965");
			// 		setLinks({
			// 			spotifyLink: "https://open.spotify.com/track/6gI9b2VsoWhjhIuIeToDVs?si=abfe744344f04c4d",
			// 			appleMusicLink:
			// 				"https://music.apple.com/us/album/1626195790?app=music&at=11laLe&ct=LFV_a8488c4eb6c29dd9e04fa7ed8a69fad5&itscg=30440&itsct=catchall_p1&lId=25738567&cId=none&sr=1&src=Linkfire&ls=1",
			// 			amazonMusicLink:
			// 				"https://music.amazon.com/albums/B0B2CCS4WD?tag=univemuisc-central-21&ie=UTF8&linkCode=as2&ascsubtag=a8488c4eb6c29dd9e04fa7ed8a69fad5&ref=dmm_acq_soc_in_u_lfire_lp_x_a8488c4eb6c29dd9e04fa7ed8a69fad5",
			// 			youtubeMusicLink: "",
			// 			other: "https://www.jiosaavn.com/track/die-hard/H1AvZE1lYwY",
			// 		});
			// 		setNumberOfCopies(4);
			// 		setNftPrice(12.4);
			// 		setResaleRoyaltyPercent(5);
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
		}
	}, [user, userInfo]);

	// Delete draft from the database after NFT is created
	const { fetch: deleteNftDraft } = useMoralisCloudFunction(
		"deleteNftDraft",
		{ objectId: draft },
		{
			autoFetch: false,
		}
	);
	const deleteDraft = async () => {
		await deleteNftDraft({
			onSuccess: async (object) => {
				// Draft deleted from database
			},
			onError: (error) => {
				console.log("deleteNftDraft Error:", error);
			},
		});
	};

	// Save invited artwork artist if they are not on Musixverse yet
	const { save: saveInvitedArtworkArtist } = useNewMoralisObject("InvitedArtworkArtist");
	// Function to run when Create NFT button is pressed
	const nftCreateFormOnSubmit = async () => {
		setLoading(true);
		const reducedCollaboratorList = collaboratorList.reduce((result, { name, address, split, role }) => {
			result.push({ name, address, split, role });
			return result;
		}, []);

		var lyricsFile;
		if (lyrics) {
			lyricsFile = new Moralis.File("lyricsFile.txt", { base64: btoa(unescape(encodeURIComponent(lyrics))) });
			await lyricsFile.saveIPFS();
		}

		const _tags = tags.map((tag) => tag.value);

		let invitedArtworkArtistId;
		if (creditCoverArtArtist && !coverArtArtist.address) {
			const invitedArtworkArtistInfo = {
				user: user,
				userId: user.id,
				invitedArtistName: coverArtArtist.name,
				invitedArtistEmail: coverArtArtist.email,
			};
			await saveInvitedArtworkArtist(invitedArtworkArtistInfo, {
				onSuccess: (obj) => {
					invitedArtworkArtistId = obj.id;
				},
				onError: (error) => {
					// Execute any logic that should take place if the save fails.
					// error is a Moralis.Error with an error code and message.
					console.log("saveInvitedArtworkArtist error:", error);
					return;
				},
			});
		}

		const _unlockTimestamp = Math.round(unlockTimestamp / 1000);

		const nftMetadata = {
			version: "1.0",
			title: trackTitle,
			artist: user.attributes.name,
			artistAddress: user.attributes.ethAddress,
			description: trackBackground,
			audio: "ipfs://" + audioFileUrl.replace("https://ipfs.moralis.io:2053/ipfs/", ""),
			duration: audioFileDuration,
			mimeType: audioFileMimeType,
			artwork: {
				uri: "ipfs://" + coverArtUrl.replace("https://ipfs.moralis.io:2053/ipfs/", ""),
				mimeType: coverArtMimeType,
				artist: creditCoverArtArtist ? coverArtArtist.name : "",
				artistAddress: creditCoverArtArtist ? coverArtArtist.address : "",
				invitedArtistId: coverArtArtist.address ? "" : invitedArtworkArtistId,
			},
			lyrics: lyrics ? "ipfs://" + lyricsFile.hash() : "",
			genre: genre,
			language: language,
			locationCreated: location,
			isrc: isrc,
			tags: _tags,
			links: {
				spotify: links.spotifyLink,
				appleMusic: links.appleMusicLink,
				amazonMusic: links.amazonMusicLink,
				youtubeMusic: links.youtubeMusicLink,
				other: links.other,
			},
			collaborators: reducedCollaboratorList,
			license: "ipfs://" + coverArtUrl.replace("https://ipfs.moralis.io:2053/ipfs/", ""), // TODO
			unlockTimestamp: _unlockTimestamp,
			chainDetails: {
				chainId: BLOCKCHAIN_NETWORK_ID,
				contractAddress: MXV_DIAMOND_ADDRESS,
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
					value: parentalAdvisory.startsWith("Clean") ? "Clean" : parentalAdvisory,
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

		const file = new Moralis.File("file.json", { base64: btoa(unescape(encodeURIComponent(JSON.stringify(nftMetadata)))) });
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

		try {
			await mintTrackNFT(numberOfCopies, nftPrice, metadataHash, collaborators, percentageContributions, resaleRoyaltyPercent, onSale, _unlockTimestamp);
			// TODO: Uncomment the line below
			// await deleteDraft();
			setLoading(false);
			setCreateNFTSuccess(true);
		} catch (error) {
			setLoading(false);
		}
	};

	const nftDraftMetadata = {
		step: step,
		title: trackTitle,
		description: trackBackground,
		audio: audioFileUrl,
		duration: audioFileDuration,
		mimeType: audioFileMimeType,
		artwork: {
			uri: coverArtUrl,
			mimeType: coverArtMimeType,
			artist: creditCoverArtArtist ? coverArtArtist.name : "",
			artistAddress: creditCoverArtArtist ? coverArtArtist.address : "",
			invitedArtistId: "",
		},
		creditCoverArtArtist: creditCoverArtArtist,
		coverArtArtist: coverArtArtist,
		lyrics: lyrics,
		trackOrigin: trackOrigin,
		genre: genre,
		recordingYear: recordingYear,
		parentalAdvisory: parentalAdvisory,
		vocals: vocals,
		language: language,
		location: location,
		isrc: isrc,
		tags: tags,
		links: links,
		numberOfCopies: numberOfCopies,
		nftPrice: nftPrice,
		collaboratorList: collaboratorList,
		resaleRoyaltyPercent: resaleRoyaltyPercent,
		releaseNow: releaseNow,
		unlockTimestamp: unlockTimestamp,
	};
	const step0Values = { nextStep, nftDraftMetadata };
	const step1Values = {
		step,
		prevStep,
		nextStep,
		trackTitle,
		setTrackTitle,
		trackBackground,
		setTrackBackground,
		coverArtUrl,
		setCoverArtUrl,
		coverArtMimeType,
		setCoverArtMimeType,
		creditCoverArtArtist,
		setCreditCoverArtArtist,
		coverArtArtist,
		setCoverArtArtist,
		audioFileUrl,
		setAudioFileUrl,
		audioFileDuration,
		setAudioFileDuration,
		audioFileMimeType,
		setAudioFileMimeType,
		lyrics,
		setLyrics,
		nftPrice,
		numberOfCopies,
		collaboratorList,
		setSaveDraftSuccess,
		nftDraftMetadata,
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
		setSaveDraftSuccess,
		nftDraftMetadata,
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
		unlockTimestamp,
		setUnlockTimestamp,
		nftCreateFormOnSubmit,
		setSaveDraftSuccess,
		nftDraftMetadata,
	};

	switch (step) {
		case 0:
			return (
				<>
					<Head>
						<title>Musixverse | Create NFT</title>
						<meta name="description" content={meta_description} />
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
						<meta name="description" content={meta_description} />
						<link rel="icon" href="/favicon.ico" />
					</Head>
					<ScrollToPageTop samePage={true} changingValue={step} />
					<TrackDetails {...step1Values} />
					<SaveDraftSuccessModal isOpen={saveDraftSuccess} setOpen={setSaveDraftSuccess} setStep={setStep} />
				</>
			);

		case 2:
			return (
				<>
					<Head>
						<title>Musixverse | Create NFT - Comprehensive Details</title>
						<meta name="description" content={meta_description} />
						<link rel="icon" href="/favicon.ico" />
					</Head>
					<ScrollToPageTop samePage={true} changingValue={step} />
					<ComprehensiveDetails {...step2Values} />
					<SaveDraftSuccessModal isOpen={saveDraftSuccess} setOpen={setSaveDraftSuccess} setStep={setStep} />
				</>
			);

		case 3:
			return (
				<>
					<Head>
						<title>Musixverse | Create NFT - Pricing and Splits</title>
						<meta name="description" content={meta_description} />
						<link rel="icon" href="/favicon.ico" />
					</Head>
					<ScrollToPageTop samePage={true} changingValue={step} />
					<PricingAndSplits {...step3Values} />
					<SuccessModal isOpen={createNFTSuccess} />
					<SaveDraftSuccessModal isOpen={saveDraftSuccess} setOpen={setSaveDraftSuccess} setStep={setStep} />
				</>
			);
	}
};

export default CreateNFT;
