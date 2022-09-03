import Image from "next/image";
import Link from "next/link";
import { useMoralisCloudFunction } from "react-moralis";

const DisplayCollaborator = ({ collaborator }) => {
	const { data: collaboratorInfo } = useMoralisCloudFunction(
		"fetchCollaborator",
		{ address: collaborator.address },
		{
			autoFetch: true,
		}
	);

	return (
		collaboratorInfo && (
			<Link href={`/profile/${collaboratorInfo.username}`} className="cursor-pointer">
				<a target="_blank" rel="noopener noreferrer">
					<div className="flex items-end mb-2 font-secondary text-sm">
						{collaboratorInfo.userInfo[0] && collaboratorInfo.userInfo[0].avatar && (
							<Image src={collaboratorInfo.userInfo[0].avatar} alt="collaborator's avatar" height="30" width="30" className="rounded-full" />
						)}
						<span className="ml-2">
							{collaborator.name}
							<i className="ml-2 mr-2 fa-solid fa-arrow-right-long text-xs"></i>
						</span>
						<span>{collaborator.role}</span>
						{/* <span className="ml-3">(Split: {collaborator.split}%)</span> */}
					</div>
				</a>
			</Link>
		)
	);
};

export default DisplayCollaborator;
