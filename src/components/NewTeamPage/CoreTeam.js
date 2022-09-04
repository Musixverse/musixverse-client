import { useState } from "react";
import TeamModal from "./TeamModal";
import MemberNft from "./MemberNFT";

export default function CoreTeam() {
    const [showModal, setShowModal] = useState(false);
    const [selectedMember, setSelectedMember] = useState(0);
    const [currentlyPlaying, setCurrentlyPlaying] = useState();
    /**
     * name, memberImage, uploadedTrack, nftPrice, numberOfCopies, socials, user
     * id: "", name: "", username: "", split: "", role: "", walletAddress: "", avatar: ""
     *
     * On this page:
     * shift setting of modal into member NFT
     * Add audio player
     * Maybe add a disco bg gradient on play
     */
    const coreTeam = [
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
            memberImage: "/assets/teampage/ShivamT.jpg",
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
    return (
        <>
            <h3 className="mt-32 text-3xl font-medium">Meet the BUIDLers</h3>
            <div className="flex flex-wrap justify-center w-full mt-10 mb-20 gap-8">
                {coreTeam.map((member, idx) => {
                    return <MemberNft key={idx} {...{ ...member, setShowModal, currentlyPlaying, setCurrentlyPlaying, idx, setSelectedMember }} />;
                })}
            </div>
            <TeamModal {...{ ...coreTeam[selectedMember], showModal, setShowModal }} />
        </>
    );
}
