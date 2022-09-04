import MusixverseFacet from "./utils/smart-contract/contracts/Musixverse/facets/MusixverseFacet.sol/MusixverseFacet.json";

/**************************************************************************/
/**********************    SEO Meta Descriptions   ************************/
/**************************************************************************/
export const title_main_page = "Musixverse | The Ultimate Music NFT Marketplace";
export const meta_description =
	"Musixverse is a Music NFT marketplace that will bring Artists and Fans together like never before and unlock novel models of communications and commerce.";
export const meta_description2 = "Powering music ownership and provenance across the web and beyond";
export const meta_description3 = "The NFT Marketplace for Musicians and Fans";

/**************************************************************************/
/***********************    BLOCKCHAIN CONSTANTS  *************************/
/**************************************************************************/
export const MUSIXVERSE_FACET_CONTRACT_ABI = MusixverseFacet.abi;
export const MXV_DIAMOND_ADDRESS = "0x41f5c7a23115DB0D7eEA771220a0f79e60c39cd5"; // Diamond Address
export const MUSIXVERSE_FACET_ADDRESS = "0x5258C95052B83155EEbCAe34aEABa06b56503439";
export const MUSIXVERSE_GETTERS_FACET_ADDRESS = "0xE823224657d7DAE3cc1cA3cb801C531D598913D4";
export const MUSIXVERSE_SETTERS_FACET_ADDRESS = "0x37f190DA094B07a9D6F100de52A6B91b71C7267D";
export const BLOCKCHAIN_NETWORK = "mumbai";
export const BLOCK_EXPLORER_URL = "https://mumbai.polygonscan.com";
export const BLOCKCHAIN_NETWORK_ID = 80001;
export const RPC_URL = "https://polygon-mumbai.g.alchemy.com/v2/8qorAGwStqgObuxITbYVAD3T2BI1jC36";

/**************************************************************************/
/************************    TRACK ATTRIBUTES    **************************/
/**************************************************************************/
export const trackOriginArray = [
	"Original",
	"Cover",
	"Remix",
	"Live",
	"Remastered",
	"Radio Edit",
	"Instrumental",
	"Bonus Cut",
	"Acapella",
	"Acoustic",
	"Extended version",
	"Deluxe",
	"Original Motion Picture Soundtrack",
	"Production Music",
	"Single Edit",
	"Mashup",
	"Bootleg remix",
	"Explicit version",
	"Clean version ",
	"Lo-fi version",
	"Reverb",
	"Duet",
	"Parody",
];
export const genreArray = [
	"Acoustic",
	"Alternative",
	"Anime",
	"Big Band",
	"Blues",
	"Children’s Music",
	"Classical",
	"Comedy",
	"Commercial",
	"Contemporary",
	"Country",
	"Dance",
	"Dance-pop",
	"Disney",
	"Easy Listening",
	"Electronic",
	"Enka",
	"French Pop",
	"Folk",
	"German Folk",
	"German Pop",
	"Fitness & Workout",
	"Hip-Hop",
	"Holiday",
	"Indie Folk",
	"Indie Pop",
	"Industrial",
	"Inspirational",
	"Instrumental",
	"J-Pop",
	"Jazz",
	"Jingles",
	"K-Pop",
	"Karaoke",
	"Kayokyoku",
	"Latin",
	"Lo-fi",
	"Lullabies",
	"Metal",
	"Musical",
	"New Age",
	"Opera",
	"Pop",
	"Post-Disco",
	"Progressive",
	"Punk",
	"R&B",
	"Rap",
	"Reggae",
	"Rock",
	"Soundtrack",
	"Spoken Word",
	"Stories",
	"Tex-Mex/Tejano",
	"Vocal",
];
export const parentalAdvisoryArray = [
	"Explicit",
	"Clean (There is another version of this track that is explicit, but this is the clean version)",
	"Not Explicit",
];
export const languageArray = [
	"Hindi",
	"English",
	"Arabic",
	"Armenian",
	"Assamese",
	"Awadhi",
	"Bengali",
	"Bhojpuri",
	"Chinese",
	"Czech",
	"Danish",
	"Dutch",
	"English",
	"Filipino",
	"Finnish",
	"French",
	"German",
	"Greek",
	"Gujarati",
	"Haryanvi",
	"Hebrew",
	"Hindi",
	"Hungarian",
	"Icelandic",
	"Indonesian",
	"Irish",
	"Italian",
	"Japanese",
	"Kannada",
	"Kashmiri",
	"Konkani",
	"Korean",
	"Malayalam",
	"Maltese",
	"Mandarin",
	"Marathi",
	"Nepali",
	"Odia",
	"Pahari",
	"Persian",
	"Polish",
	"Portuguese",
	"Punjabi",
	"Rajasthani",
	"Romanian",
	"Russian",
	"Serbian",
	"Spanish",
	"Swedish",
	"Tamil",
	"Telugu",
	"Thai",
	"Turkish",
	"Ukrainian",
	"Urdu",
];
export const tagsAvailable = [
	{ value: "Aggressive", label: "Aggressive" },
	{ value: "Alternative", label: "Alternative" },
	{ value: "Angry", label: "Angry" },
	{ value: "Beautiful", label: "Beautiful" },
	{ value: "Calm", label: "Calm" },
	{ value: "Cheerful", label: "Cheerful" },
	{ value: "Chill", label: "Chill" },
	{ value: "Cool", label: "Cool" },
	{ value: "Country", label: "Country" },
	{ value: "Dance", label: "Dance" },
	{ value: "Delicate", label: "Delicate" },
	{ value: "Depressing", label: "Depressing" },
	{ value: "Dreamy", label: "Dreamy" },
	{ value: "Electronic", label: "Electronic" },
	{ value: "Exciting", label: "Exciting" },
	{ value: "Fierce", label: "Fierce" },
	{ value: "Folk", label: "Folk" },
	{ value: "Fun", label: "Fun" },
	{ value: "Gloomy", label: "Gloomy" },
	{ value: "Happy", label: "Happy" },
	{ value: "Hostile", label: "Hostile" },
	{ value: "Humorous", label: "Humorous" },
	{ value: "Indie", label: "Indie" },
	{ value: "Jazz", label: "Jazz" },
	{ value: "Joyful", label: "Joyful" },
	{ value: "Love", label: "Love" },
	{ value: "Lyrical", label: "Lyrical" },
	{ value: "Merry", label: "Merry" },
	{ value: "Metal", label: "Metal" },
	{ value: "Miserable", label: "Miserable" },
	{ value: "Oldies", label: "Oldies" },
	{ value: "Patriotic", label: "Patriotic" },
	{ value: "Peaceful", label: "Peaceful" },
	{ value: "Pop", label: "Pop" },
	{ value: "Quiet", label: "Quiet" },
	{ value: "Rebellious", label: "Rebellious" },
	{ value: "Relaxed", label: "Relaxed" },
	{ value: "Rock", label: "Rock" },
	{ value: "Sad", label: "Sad" },
	{ value: "Sadness", label: "Sadness" },
	{ value: "Satisfying", label: "Satisfying" },
	{ value: "Silly", label: "Silly" },
	{ value: "Sleepy", label: "Sleepy" },
	{ value: "Soft", label: "Soft" },
	{ value: "Somber", label: "Somber" },
	{ value: "Soothing", label: "Soothing" },
	{ value: "Sorrow", label: "Sorrow" },
	{ value: "Soul", label: "Soul" },
	{ value: "Tense", label: "Tense" },
	{ value: "Tragic", label: "Tragic" },
	{ value: "80s", label: "80s" },
	{ value: "90s", label: "90s" },
];

/**************************************************************************/
/***********************    MARKETPLACE FILTERS    ************************/
/**************************************************************************/
export const duration = ["<100s", "100-150s", "151-200s", "201-250s", "251-300s", "301-350s", "351-400s", ">400s"];
export const numberOfCollaborators = [1, 2, 3, 4, 5];
export const nftStatus = ["On Sale", "Not on Sale", "Coming Soon"];
export const numberOfCopies = [
	"1 (Single Drop)",
	"2",
	"3",
	"4",
	"5",
	"6-10",
	"11-20",
	"21-30",
	"31-40",
	"41-50",
	"51-60",
	"61-70",
	"71-80",
	"81-90",
	"91-100",
	">100",
];
export const resaleRoyaltyRanges = [
	"1%",
	"2%",
	"3%",
	"4%",
	"5%",
	"6%-10%",
	"11%-20%",
	"21%-30%",
	"31%-40%",
	"41%-50%",
	"51%-60%",
	"61%-70%",
	"71%-80%",
	"81%-90%",
	"91%-100%",
];
export const minRecordingYear = 1950;

/**************************************************************************/
/********************    Report Profile Filters    ************************/
/**************************************************************************/
export const reportProfileFilters = [
	"Their content is abusive and hateful",
	"They're pretending to be me",
	"They're pretending to be someone else",
	"Their profile info and/or images include abusive or hateful content",
	"Their NFTs contain explicit and sensitive content",
	"It appears their account is hacked",
	"Other",
];

export const DISCORD_SUPPORT_CHANNEL_INVITE_LINK = "https://discord.gg/b4B8YhKpfy";
