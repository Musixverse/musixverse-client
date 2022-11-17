import MusixverseFacet from "../utils/smart-contract/contracts/Musixverse/facets/MusixverseFacet.sol/MusixverseFacet.json";
import MusixverseGettersFacet from "../utils/smart-contract/contracts/Musixverse/facets/MusixverseGettersFacet.sol/MusixverseGettersFacet.json";
import MusixverseSettersFacet from "../utils/smart-contract/contracts/Musixverse/facets/MusixverseSettersFacet.sol/MusixverseSettersFacet.json";

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
export const MUSIXVERSE_GETTERS_FACET_CONTRACT_ABI = MusixverseGettersFacet.abi;
export const MUSIXVERSE_SETTERS_FACET_CONTRACT_ABI = MusixverseSettersFacet.abi;

/**************************************************************************/
/*******************************    PARSE  ********************************/
/**************************************************************************/
export const PARSE_APP_ID = process.env.NEXT_PUBLIC_PARSE_APP_ID;
export const PARSE_SERVER_URL = process.env.NEXT_PUBLIC_PARSE_SERVER_URL;

/**************************************************************************/
/******************    Array of default avatar urls   *********************/
/**************************************************************************/
export const defaultAvatarUrls = [
	"https://ipfs.moralis.io:2053/ipfs/QmU7YuBCLpu5E5sgL3LW38KUvgDqX6qDERsxX4qtxd3U5v",
	"https://ipfs.moralis.io:2053/ipfs/QmcY5bjpmP7DLtuMH1emM2akEzb9y8rjgm4VUfdeN22Bze",
	"https://ipfs.moralis.io:2053/ipfs/QmdDoE5NGrT6scSUHDSNTwqVXP4WpPEpAALKH1yrLUdCwm",
	"https://ipfs.moralis.io:2053/ipfs/QmUFw2VJnZirSukMpUs7U4gMeKBw1v321NJt26D5s4PuBL",
	"https://ipfs.moralis.io:2053/ipfs/QmetsQ5gRrGb8vgySJPB1vNeaQVBMWbqhr4MJ9THg5rFyM",
	"https://ipfs.moralis.io:2053/ipfs/QmQLG2gWQjZK8KD2cifDymfKtYfXjraGAWYAn3XMhz2UCS",
];

export const defaultBandAvatarUrls = [
	"https://ipfs.moralis.io:2053/ipfs/QmYta74C5UFJEHijpczsQV5Kc1RydfPt2bR8kEcoyJcgai/0xe17a44ea7a3f01a5da0366fae40f3b33fab326b4/avatar",
	"https://ipfs.moralis.io:2053/ipfs/QmVVGmWw8aSmVLMMHpv5z19K78ZBA5K1eFiSr9i7owt8qB/0xe17a44ea7a3f01a5da0366fae40f3b33fab326b4/avatar",
	"https://ipfs.moralis.io:2053/ipfs/QmQvW3q8KKgbaecQLxnBLgGFMb6XwMcfxHaHwy7tdmB6oG/0xe17a44ea7a3f01a5da0366fae40f3b33fab326b4/avatar",
	"https://ipfs.moralis.io:2053/ipfs/QmUgHXD9FyoncWKymoWCxYvZHe5XtufNgy4hGmeETMjemU/0xe17a44ea7a3f01a5da0366fae40f3b33fab326b4/avatar",
	"https://ipfs.moralis.io:2053/ipfs/QmSLRrwkugpHiXAZNQSq4mucYukVTpMoyPtgTRNQcixDby/0xe17a44ea7a3f01a5da0366fae40f3b33fab326b4/avatar",
	"https://ipfs.moralis.io:2053/ipfs/QmWqhJDYpdL5XceW46kqyLwAbYiihXSwkjQUt5TGPQ2g6C/0xe17a44ea7a3f01a5da0366fae40f3b33fab326b4/avatar",
];

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
export const collaboratorRoles = [
	"Composer",
	"Instrumentalist",
	"Lyricist",
	"Mastering Engineer",
	"Mentor",
	"Mixer",
	"Mixing Engineer",
	"Music Arranger",
	"Music Director",
	"Music Manager",
	"Music Producer",
	"Musician",
	"Recording Engineer",
	"Remixer",
	"Singer",
	"Songwriter",
	"Studio Engineer",
	"Vocalist",
	"Writer",
];

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

/**************************************************************************/
/**********************    Report NFT Filters    **************************/
/**************************************************************************/
export const reportNftFilters = [
	"The content is abusive and hateful",
	"This track was originally created by me",
	"This track was originally created by someone else",
	"The cover art includes abusive/explicit or hateful content",
	"The track audio includes abusive/explicit or hateful content",
	"The track contains explicit and sensitive content",
	"The track data appears to be incorrect",
	"The track was originally created by a collaborator who is not mentioned",
	"Other",
];

export const DISCORD_INVITE_LINK = "https://discord.com/invite/rXKb7rCqjG";
export const DISCORD_SUPPORT_CHANNEL_INVITE_LINK = "https://discord.gg/b4B8YhKpfy";

/**************************************************************************/
/**********************    Team Details    **************************/
/**************************************************************************/
export const coreTeam = [
	{
		memberImage: "/assets/teampage/Pushpit.jpg",
		name: "Pushpit",
		fullName: "Pushpit Bhardwaj",
		title: "CEO",
		role: "Lead Developer",
		dob: "2207",
		profileTrack: "/sounds/TeamPage/Pushpit.mp3",
		socialLinks: {
			twitter: "https://twitter.com/Pushpit07",
			linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj/",
			github: "https://github.com/Pushpit07",
		},
		description: `Pushpit has had a wide variety of experiences from working at various startups, where he developed softwares and lead teams. He is a strong proponent of blockchain technology and believes this technology is going to play an important role in shaping the companies of the future. At Musixverse, Pushpit is responsible for maintaining branding, business development, talent sourcing, and smart contract development. When Pushpit isn’t developing, he’s catching up on the crypto space and avidly hitting the gym.`,
	},
	{
		memberImage: "https://pbs.twimg.com/profile_images/1526874368948613120/8bvBlnVx_400x400.jpg",
		name: "Yuvraj",
		fullName: "Yuvraj Chandra",
		title: "COO",
		role: "Product Manager",
		dob: "2103",
		profileTrack: "/sounds/TeamPage/Yuvraj.mp3",
		socialLinks: {
			twitter: "https://twitter.com/Yuvi2103/",
			linkedin: "https://www.linkedin.com/in/yuvrajchandra/",
			github: "https://github.com/Yuvrajchandra",
		},
		description: `Yuvraj is a hardcore programmer who loves to solve problems with code and content. He is the intersection of Tech, Programming, UX, Blockchain, and Product Management. At Musixverse, Yuvraj is responsible for planning, developing, marketing, and continuous improvement of the product. His ultimate goal is to make sure the team is "building the right product and building the product right".`,
	},
	{
		memberImage: "/assets/teampage/Sparsh.jpg",
		fullName: "Sparsh Sharma",
		name: "Sparsh",
		title: "CTO",
		dob: "2510",
		role: "Lead Frontend Engineer",
		profileTrack: "/sounds/TeamPage/Sparsh.mp3",
		socialLinks: {
			twitter: "https://twitter.com/Sparsh_2510",
			linkedin: "https://linkedin.com/in/sparsharma",
			github: "https://github.com/sparshsharma2510",
		},
		description: `Sparsh is a passionate developer who loves to break and build things. For Musixverse he is inclined towards developing the front-end of the platform. At the core, he is a problem solver and loves tinkering with different web development technologies. He usually talks in Java and sometimes in JavaScript. He also has a special place in his heart for Astrophysics, and he spends his leisure time vibing to Lo-fi music or stargazing.`,
	},
	{
		memberImage: "https://pbs.twimg.com/profile_images/1473511548039491584/udoH0U6p_400x400.jpg",
		fullName: "Shivam Singh",
		name: "Shivam",
		title: "CCO",
		dob: "0511",
		role: "Lead Graphics Designer",
		profileTrack: "/sounds/TeamPage/Shivam.mp3",
		socialLinks: {
			twitter: "https://twitter.com/Shivamc504",
			linkedin: "https://www.linkedin.com/in/shivam-singh-bb9bb818a/",
			github: "https://github.com/Shivamsingh-c17",
		},
		description: `Shivam is an aesthetic designer who uses the power of design to create stunning graphics. You can find him exploring the breaths and depths of the design world. He handles everything related to design at Musixverse "MXV". Shivam has the ability to fight each and every problem through his creative designs. Innovative and creative are the two words that describe him best.`,
	},
	{
		memberImage: "/assets/teampage/Ayush.jpg",
		fullName: "Ayush Gupta",
		name: "Ayush",
		title: "CIO",
		role: "Core Developer",
		dob: "0110",
		profileTrack: "/sounds/TeamPage/Ayush.mp3",
		socialLinks: {
			twitter: "https://twitter.com/AyushGu68644268?t=3coInw3KN0FFz85sEvOo1Q&s=08",
			linkedin: "https://www.linkedin.com/in/ayush-gupta-274445200",
			github: "https://github.com/ayushgupta0110",
		},
		description: `Ayush is a PRO developer who loves to convert designs into codes. He has been practicing Frontend Development for the last few years by developing mini-projects and has developed a good grasp over ReactJS too. Ayush also loves to get his hands dirty on various domains of the Computer Science world. At Musixverse, you can find him either killing bugs or developing new features for the platform.`,
	},
];
