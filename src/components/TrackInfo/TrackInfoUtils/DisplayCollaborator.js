import Image from "next/image";
import Link from "next/link";

const DisplayCollaborator = ({ collaborator, collaboratorUsers }) => {
	return collaboratorUsers.map((collaboratorUser) => {
		return (
			collaborator.address === collaboratorUser.ethAddress && (
				<Link href={`/profile/${collaboratorUser.username}`} className="cursor-pointer" key={collaboratorUser.ethAddress}>
					<a target="_blank" rel="noopener noreferrer">
						<div className="flex items-center sm:items-end mb-2 font-secondary text-sm">
							{collaboratorUser.avatar && (
								<Image src={collaboratorUser.avatar} alt="collaborator's avatar" height="30" width="30" className="rounded-full" />
							)}
							<span className="ml-2">
								{collaboratorUser.name}
								<i className="ml-2 mr-2 fa-solid fa-arrow-right-long text-xs"></i>
							</span>
							<span>{collaborator.role}</span>
							{/* <span className="ml-3">(Split: {collaborator.split}%)</span> */}
						</div>
					</a>
				</Link>
			)
		);
	});
};

export default DisplayCollaborator;
