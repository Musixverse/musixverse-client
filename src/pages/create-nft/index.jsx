import Head from "next/head";
import Moralis from "moralis/node";
import { MORALIS_APP_ID, MORALIS_SERVER_URL, meta_description } from "../../config/constants";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { useMoralis, useNewMoralisObject, useMoralisCloudFunction } from "react-moralis";
import ScrollToPageTop from "../../utils/ScrollToPageTop";
import CreateNFTIntro from "../../components/CreateNFT/step-0";
import TrackDetails from "../../components/CreateNFT/step-1";
import ComprehensiveDetails from "../../components/CreateNFT/step-2";
import UnlockableContent from "../../components/CreateNFT/step-3";
import PricingAndSplits from "../../components/CreateNFT/step-4";
import SuccessModal from "../../components/CreateNFT/CreateNFTUtils/SuccessModal";
import SaveDraftSuccessModal from "../../components/CreateNFT/CreateNFTUtils/SaveDraftSuccessModal";
import { mintTrackNFT } from "../../utils/smart-contract/functions";
import LoadingContext from "../../../store/loading-context";
import StatusContext from "../../../store/status-context";

export async function getServerSideProps(context) {
	try {
		await Moralis.start({ serverUrl: MORALIS_SERVER_URL, appId: MORALIS_APP_ID });

		const user = JSON.parse(context.req.cookies.currentUser);
		const _userInfo = await Moralis.Cloud.run("fetchUserInfoForNftCreation", { userAddress: user.ethAddress });
		const userInfo = JSON.parse(JSON.stringify(_userInfo));

		return {
			props: { userInfo }, // will be passed to the page component as props
		};
	} catch (error) {
		return { notFound: true, props: {} };
	}
}

const CreateNFT = ({ userInfo }) => {
	const [, setLoading] = useContext(LoadingContext);
	const [, , , setError] = useContext(StatusContext);
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
	const [countryOfOrigin, setCountryOfOrigin] = useState(userInfo && userInfo.country ? userInfo.country : null);
	const [stateOfOrigin, setStateOfOrigin] = useState(userInfo && userInfo.state ? userInfo.state : null);
	const [location, setLocation] = useState(userInfo && userInfo.city ? userInfo.city : null);
	const [isrc, setIsrc] = useState("");
	const [tags, setTags] = useState([]);
	const [links, setLinks] = useState({
		spotifyLink: "",
		appleMusicLink: "",
		amazonMusicLink: "",
		youtubeMusicLink: "",
		other: "",
	});
	// Unlockable Content
	const [unlockableContent, setUnlockableContent] = useState({
		about: "",
		secretMessage: "",
		exclusiveImages: [],
		exclusiveAudios: [],
		exclusiveVideos: [],
	});
	const [numberOfCopies, setNumberOfCopies] = useState("");
	const [nftPrice, setNftPrice] = useState("");
	const [chosenProfileOrBand, setChosenProfileOrBand] = useState({ objectId: "profile" });
	const [collaboratorList, setCollaboratorList] = useState([
		{ id: "", name: "", username: "", split: "", role: "", address: "", avatar: "", hasAcceptedCollaboratorInvite: true },
	]);
	const [resaleRoyaltyPercent, setResaleRoyaltyPercent] = useState("");
	const [releaseNow, setReleaseNow] = useState(true);
	const [unlockTimestamp, setUnlockTimestamp] = useState(new Date().getTime());

	// Drafts
	const [nftDrafts, setNftDrafts] = useState(userInfo.nftDrafts);
	// Creation success modal state
	const [createNFTSuccess, setCreateNFTSuccess] = useState(false);
	// Draft saved modal state
	const [saveDraftSuccess, setSaveDraftSuccess] = useState(false);
	// Personal Profile Collaborator Data
	const [personalProfileCollaborator, setPersonalProfileCollaborator] = useState([]);
	// Verified Bands Of artist
	const verifiedBandsOfArtist = userInfo.verifiedBandsOfArtist;

	// Continue to next step
	const nextStep = () => {
		setStep((currStep) => currStep + 1);
	};

	// Revert to previous step
	const prevStep = () => {
		setStep((currStep) => currStep - 1);
	};

	useEffect(() => {
		if (step == 0 && user) {
			router.replace("/create-nft", undefined, { shallow: true });
			setTrackTitle("");
			setTrackBackground("");
			setAudioFileUrl(null);
			setAudioFileDuration(null);
			setAudioFileMimeType(null);
			setCoverArtUrl(null);
			setCoverArtMimeType(null);
			setCreditCoverArtArtist(true);
			setCoverArtArtist({ id: "", name: "", username: "", address: "", avatar: "", email: "" });
			setLyrics(null);
			setTrackOrigin("Original");
			setGenre("Hip-Hop");
			setRecordingYear(new Date().getFullYear());
			setParentalAdvisory("Explicit");
			setVocals(true);
			setLanguage("Hindi");
			setCountryOfOrigin(userInfo && userInfo.country ? userInfo.country : null);
			setStateOfOrigin(userInfo && userInfo.state ? userInfo.state : null);
			setLocation(userInfo && userInfo.city ? userInfo.city : null);
			setIsrc("");
			setTags([]);
			setLinks({ spotifyLink: "", appleMusicLink: "", amazonMusicLink: "", youtubeMusicLink: "", other: "" });
			setUnlockableContent({
				about: "",
				secretMessage: "",
				exclusiveImages: [],
				exclusiveAudios: [],
				exclusiveVideos: [],
			});
			setNumberOfCopies("");
			setNftPrice("");
			setChosenProfileOrBand({ objectId: "profile" });
			setCollaboratorList([
				{
					id: user.id,
					name: user.attributes.name,
					username: user.attributes.username,
					split: 100,
					role: "Singer",
					address: user.attributes.ethAddress,
					avatar: userInfo.avatar,
					hasAcceptedCollaboratorInvite: true,
				},
			]);
			setResaleRoyaltyPercent("");
			setReleaseNow(true);
			setUnlockTimestamp(new Date().getTime());
		}
	}, [step, user]);

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
	const { fetch: getUpdatedCollaboratorList } = useMoralisCloudFunction(
		"getUpdatedCollaboratorList",
		{ objectId: draft },
		{
			autoFetch: false,
		}
	);
	useEffect(() => {
		if (draft && user) {
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
						setCountryOfOrigin(_draft.attributes.countryOfOrigin);
						setStateOfOrigin(_draft.attributes.stateOfOrigin);
						setIsrc(_draft.attributes.isrc);
						setTags(_draft.attributes.tags);
						setLinks(_draft.attributes.links);
						setUnlockableContent(_draft.attributes.unlockableContent);
						setNumberOfCopies(_draft.attributes.numberOfCopies);
						setNftPrice(_draft.attributes.nftPrice);
						await getUpdatedCollaboratorList({
							onSuccess: async (_updatedCollaboratorList) => {
								let updatedCollaboratorList = [];
								for (var idx in _draft.attributes.collaboratorList) {
									for (var i in _updatedCollaboratorList) {
										const _collaborator = _draft.attributes.collaboratorList[idx];
										const _updatedCollaborator = _updatedCollaboratorList[i];

										if (_collaborator.id === _updatedCollaborator._id) {
											updatedCollaboratorList.push({
												id: _collaborator.id,
												name: _updatedCollaborator.name,
												username: _updatedCollaborator.username,
												split: _collaborator.split,
												role: _collaborator.role,
												address: _collaborator.address,
												avatar: _updatedCollaborator.avatar,
												hasAcceptedCollaboratorInvite: _collaborator.hasAcceptedCollaboratorInvite,
											});
										}
									}
								}
								setCollaboratorList(updatedCollaboratorList);
							},
							onError: (error) => {
								console.log("getUpdatedCollaboratorList Error:", error);
							},
						});
						setChosenProfileOrBand(_draft.attributes.chosenProfileOrBand);
						setResaleRoyaltyPercent(_draft.attributes.resaleRoyaltyPercent);
						setReleaseNow(_draft.attributes.releaseNow);
						setUnlockTimestamp(_draft.attributes.unlockTimestamp);

						setStep(1);
						router.replace("/create-nft?draft=" + _draft.id, undefined, { shallow: true });
					}
				},
				onError: (error) => {
					console.log("getDraftNftData Error:", error);
					router.replace("/create-nft", undefined, { shallow: true });
				},
			});
		} else if (draft == undefined) {
			setStep(0);
		}
	}, [draft, user]);

	// Adding logged in user as default to the collaboratorList
	useEffect(() => {
		if (user && userInfo) {
			setCollaboratorList([
				{
					id: user.id,
					name: user.attributes.name,
					username: user.attributes.username,
					split: 100,
					role: "Singer",
					address: user.attributes.ethAddress,
					avatar: userInfo.avatar,
					hasAcceptedCollaboratorInvite: true,
				},
			]);
			setPersonalProfileCollaborator([
				{
					id: user.id,
					name: user.attributes.name,
					username: user.attributes.username,
					split: 100,
					role: "Singer",
					address: user.attributes.ethAddress,
					avatar: userInfo.avatar,
				},
			]);
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
			// setIsrc("USUM72208965");
			// setLinks({
			// 	spotifyLink: "https://open.spotify.com/track/6gI9b2VsoWhjhIuIeToDVs?si=abfe744344f04c4d",
			// 	appleMusicLink:
			// 		"https://music.apple.com/us/album/1626195790?app=music&at=11laLe&ct=LFV_a8488c4eb6c29dd9e04fa7ed8a69fad5&itscg=30440&itsct=catchall_p1&lId=25738567&cId=none&sr=1&src=Linkfire&ls=1",
			// 	amazonMusicLink:
			// 		"https://music.amazon.com/albums/B0B2CCS4WD?tag=univemuisc-central-21&ie=UTF8&linkCode=as2&ascsubtag=a8488c4eb6c29dd9e04fa7ed8a69fad5&ref=dmm_acq_soc_in_u_lfire_lp_x_a8488c4eb6c29dd9e04fa7ed8a69fad5",
			// 	youtubeMusicLink: "",
			// 	other: "https://www.jiosaavn.com/track/die-hard/H1AvZE1lYwY",
			// });
			// setNumberOfCopies(4);
			// setNftPrice(12.4);
			// setResaleRoyaltyPercent(5);
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

		// Personal profile or band profile
		let _chosenProfileOrBandElem = "";
		const profileOrBandChoices = document.getElementsByName("profileChooser");
		for (let i = 0; i < profileOrBandChoices.length; i++) {
			if (profileOrBandChoices[i].checked) {
				_chosenProfileOrBandElem = profileOrBandChoices[i];
			}
		}

		const nftMetadata = {
			version: "1.0",
			title: trackTitle,
			artist: _chosenProfileOrBandElem.id === "profile" ? user.attributes.name : _chosenProfileOrBandElem.getAttribute("data-band-name"),
			artistAddress: user.attributes.ethAddress,
			bandId: _chosenProfileOrBandElem.id === "profile" ? null : _chosenProfileOrBandElem.getAttribute("data-band-id"),
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
			location: {
				countryOfOrigin: countryOfOrigin,
				stateOfOrigin: stateOfOrigin,
				cityOfOrigin: location,
			},
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
			numberOfCollaborators: reducedCollaboratorList.length,
			license: "ipfs://" + coverArtUrl.replace("https://ipfs.moralis.io:2053/ipfs/", ""), // TODO
			unlockTimestamp: _unlockTimestamp,
			chainDetails: {
				chainId: process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK_ID,
				contractAddress: process.env.NEXT_PUBLIC_MXV_DIAMOND_ADDRESS,
			},
			unlockableContent: {
				about: unlockableContent.about,
				secretMessage: unlockableContent.secretMessage.length > 0 ? true : false,
				exclusiveImages: unlockableContent.exclusiveImages.length,
				exclusiveAudios: unlockableContent.exclusiveAudios.length,
				exclusiveVideos: unlockableContent.exclusiveVideos.length,
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
					value: parseInt(recordingYear),
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
					trait_type: "Has Collaborators",
					value: collaboratorList.length > 1 ? "Yes" : "No",
				},
			],
		};
		const file = new Moralis.File("file.json", { base64: btoa(unescape(encodeURIComponent(JSON.stringify(nftMetadata)))) });
		await file.saveIPFS();

		const unlockableContentData = {
			about: unlockableContent.about,
			secretMessage: unlockableContent.secretMessage,
			exclusiveImages: unlockableContent.exclusiveImages,
			exclusiveAudios: unlockableContent.exclusiveAudios,
			exclusiveVideos: unlockableContent.exclusiveVideos,
		};
		const unlockableContentFile = new Moralis.File("unlockableContentFile.json", {
			base64: btoa(unescape(encodeURIComponent(JSON.stringify(unlockableContentData)))),
		});
		await unlockableContentFile.saveIPFS();

		const collaborators = collaboratorList.reduce((result, { address }) => {
			result.push(address);
			return result;
		}, []);
		const percentageContributions = collaboratorList.reduce((result, { split }) => {
			result.push(split);
			return result;
		}, []);
		const onSale = true;

		const metadataHash = file.hash();
		const unlockableContentURIHash = unlockableContentFile.hash();
		try {
			await mintTrackNFT(
				numberOfCopies,
				nftPrice,
				metadataHash,
				unlockableContentURIHash,
				collaborators,
				percentageContributions,
				resaleRoyaltyPercent,
				onSale,
				_unlockTimestamp
			);
			await fetch(`/api/revalidate-mxcatalog?path=/mxcatalog/new-releases&secret=${process.env.NEXT_PUBLIC_REVALIDATE_SECRET}`);
			await fetch(`/api/revalidate-profile?path=/profile/${user.attributes.username}&secret=${process.env.NEXT_PUBLIC_REVALIDATE_SECRET}`);
			// TODO: Uncomment the line below
			await deleteDraft();
			setLoading(false);
			setCreateNFTSuccess(true);
		} catch (error) {
			setLoading(false);
			console.error(error);
			if (error.title === "User is not connected to the same wallet") {
				setError({
					title: error.title,
					message: error.message,
					showErrorBox: true,
				});
			}
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
		recordingYear: parseInt(recordingYear),
		parentalAdvisory: parentalAdvisory,
		vocals: vocals,
		language: language,
		countryOfOrigin: countryOfOrigin,
		stateOfOrigin: stateOfOrigin,
		location: location,
		isrc: isrc,
		tags: tags,
		links: links,
		unlockableContent: unlockableContent,
		numberOfCopies: numberOfCopies,
		nftPrice: nftPrice,
		chosenProfileOrBand: chosenProfileOrBand,
		collaboratorList: collaboratorList,
		resaleRoyaltyPercent: resaleRoyaltyPercent,
		releaseNow: releaseNow,
		unlockTimestamp: unlockTimestamp,
	};
	const step0Values = { nextStep, chosenProfileOrBand, userInfo, nftDraftMetadata, nftDrafts, setNftDrafts };
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
		chosenProfileOrBand,
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
		countryOfOrigin,
		setCountryOfOrigin,
		stateOfOrigin,
		setStateOfOrigin,
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
		chosenProfileOrBand,
	};
	const step3Values = {
		step,
		nextStep,
		prevStep,
		trackTitle,
		coverArtUrl,
		audioFileUrl,
		nftPrice,
		numberOfCopies,
		collaboratorList,
		setSaveDraftSuccess,
		nftDraftMetadata,
		chosenProfileOrBand,
		unlockableContent,
		setUnlockableContent,
	};
	const step4Values = {
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
		verifiedBandsOfArtist,
		personalProfileCollaborator,
		chosenProfileOrBand,
		setChosenProfileOrBand,
	};

	switch (step) {
		case 0:
			return user ? (
				<>
					<Head>
						<title>Musixverse | Create NFT</title>
						<meta name="description" content={meta_description} />
						<link rel="icon" href="/favicon.ico" />
					</Head>
					<ScrollToPageTop samePage={true} changingValue={step} />
					<CreateNFTIntro {...step0Values} />
				</>
			) : null;

		case 1:
			return user ? (
				<>
					<Head>
						<title>Musixverse | Create NFT - Track Details</title>
						<meta name="description" content={meta_description} />
						<link rel="icon" href="/favicon.ico" />
					</Head>
					<ScrollToPageTop samePage={true} changingValue={step} />
					<TrackDetails {...step1Values} />
					<SaveDraftSuccessModal isOpen={saveDraftSuccess} setOpen={setSaveDraftSuccess} />
				</>
			) : null;

		case 2:
			return user ? (
				<>
					<Head>
						<title>Musixverse | Create NFT - Comprehensive Details</title>
						<meta name="description" content={meta_description} />
						<link rel="icon" href="/favicon.ico" />
					</Head>
					<ScrollToPageTop samePage={true} changingValue={step} />
					<ComprehensiveDetails {...step2Values} />
					<SaveDraftSuccessModal isOpen={saveDraftSuccess} setOpen={setSaveDraftSuccess} />
				</>
			) : null;

		case 3:
			return user ? (
				<>
					<Head>
						<title>Musixverse | Create NFT - Unlockable Content</title>
						<meta name="description" content={meta_description} />
						<link rel="icon" href="/favicon.ico" />
					</Head>
					<ScrollToPageTop samePage={true} changingValue={step} />
					<UnlockableContent {...step3Values} />
					<SaveDraftSuccessModal isOpen={saveDraftSuccess} setOpen={setSaveDraftSuccess} />
				</>
			) : null;

		case 4:
			return user ? (
				<>
					<Head>
						<title>Musixverse | Create NFT - Pricing and Splits</title>
						<meta name="description" content={meta_description} />
						<link rel="icon" href="/favicon.ico" />
					</Head>
					<ScrollToPageTop samePage={true} changingValue={step} />
					<PricingAndSplits {...step4Values} />
					<SuccessModal isOpen={createNFTSuccess} setOpen={setCreateNFTSuccess} />
					<SaveDraftSuccessModal isOpen={saveDraftSuccess} setOpen={setSaveDraftSuccess} />
				</>
			) : null;
	}
};

export default CreateNFT;
