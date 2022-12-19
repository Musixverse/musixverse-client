import { useState } from "react";
import TeamModal from "./TeamModal";
import MemberNft from "./MemberNFT";
import NewTeamModal from "./NewTeamModal";
import { coreTeam } from "../../config/constants";

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

	return (
		<>
			<h3 className="mt-32 text-3xl font-medium">Meet the BUIDLers</h3>
			<div className="flex flex-wrap justify-center w-full mt-10 mb-20 gap-8">
				{coreTeam.map((member, idx) => {
					return <MemberNft key={idx} {...{ ...member, setShowModal, currentlyPlaying, setCurrentlyPlaying, idx, setSelectedMember }} />;
				})}
			</div>
			{/* <TeamModal {...{ ...coreTeam[selectedMember], showModal, setShowModal }} /> */}
			<NewTeamModal isOpen={showModal} setOpen={setShowModal} {...{ ...coreTeam[selectedMember] }} />
		</>
	);
}
