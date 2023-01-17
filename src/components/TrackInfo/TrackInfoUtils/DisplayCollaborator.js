import Image from "next/image";
import Link from "next/link";

const DisplayCollaborator = ({ collaborator, collaboratorUsers }) => {
	return collaboratorUsers.map((collaboratorUser) => {
		return (
			collaborator.address === collaboratorUser.ethAddress && (
				<Link href={`/profile/${collaboratorUser.username}`} key={collaboratorUser.ethAddress} passHref>
					<a className="cursor-pointer">
						{/* <div className="flex items-center mb-2 text-sm sm:items-end font-secondary">
							{collaboratorUser.avatar && (
								<Image src={collaboratorUser.avatar} alt="collaborator's avatar" height="30" width="30" className="rounded-full" />
							)}
							<span className="ml-2">
								{collaboratorUser.name}
								<i className="ml-2 mr-2 text-xs fa-solid fa-arrow-right-long"></i>
							</span>
							<span>{collaborator.role}</span>
							<span className="ml-3">(Split: {collaborator.split}%)</span>
						</div> */}

						<div className="flex items-center justify-center py-2 pl-3 pr-8 rounded-full cursor-pointer group bg-light-200 dark:bg-dark-600 w-fit">
							<Image src={collaboratorUser.avatar} width={40} height={40} alt="collaborator image" className="rounded-full" />
							<div className="flex flex-col ml-4">
								<div className="flex items-center space-x-4">
									<p className="text-sm">{collaboratorUser.name}</p>
									<p className="text-xs group-hover:text-primary-500">@{collaboratorUser.username}</p>
								</div>
								<p className="mt-2 text-xs">{collaborator.role}</p>
							</div>
						</div>
					</a>
				</Link>
			)
		);
	});
};

export default DisplayCollaborator;
