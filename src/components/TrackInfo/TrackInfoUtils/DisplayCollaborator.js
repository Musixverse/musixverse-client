import Image from "next/image";
import Link from "next/link";

const DisplayCollaborator = ({ collaborator, collaboratorUsers }) => {
	return collaboratorUsers.map((collaboratorUser) => {
		return (
			collaborator.address === collaboratorUser.ethAddress && (
				<Link href={`/profile/${collaboratorUser.username}`} key={collaboratorUser.ethAddress} passHref>
					<a target="_blank" rel="noopener noreferrer" className="cursor-pointer">
						{/* <div className="flex items-center sm:items-end mb-2 font-secondary text-sm">
							{collaboratorUser.avatar && (
								<Image src={collaboratorUser.avatar} alt="collaborator's avatar" height="30" width="30" className="rounded-full" />
							)}
							<span className="ml-2">
								{collaboratorUser.name}
								<i className="ml-2 mr-2 fa-solid fa-arrow-right-long text-xs"></i>
							</span>
							<span>{collaborator.role}</span>
							<span className="ml-3">(Split: {collaborator.split}%)</span>
						</div> */}

						<div className="group cursor-pointer pl-3 pr-8 py-2 bg-light-200 dark:bg-dark-600 rounded-full flex items-center justify-center  w-fit">
							<Image src={collaboratorUser.avatar} width={40} height={40} alt="collaborator image" className="rounded-full" />
							<div className="ml-4 flex flex-col">
								<div className="flex items-center space-x-4">
									<p className="text-sm">{collaboratorUser.name}</p>
									<p className="text-xs group-hover:text-primary-500">@{collaboratorUser.username}</p>
								</div>
								<p className="text-xs mt-2">{collaborator.role}</p>
							</div>
						</div>
					</a>
				</Link>
			)
		);
	});
};

export default DisplayCollaborator;
