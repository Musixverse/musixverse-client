import Image from "next/image";
import Link from "next/link";

const BandMembers = ({ bandMembers, updatedBandMembersList }) => {
	const bandMembersList = [];
	bandMembers.map((bandMember) => {
		updatedBandMembersList.map((updatedBandMember) => {
			if (bandMember.userId === updatedBandMember._id && bandMember.hasAcceptedBandInvite) {
				updatedBandMember.role = bandMember.role;
				bandMembersList.push(updatedBandMember);
			}
		});
	});

	return (
		<div className="mt-8 -mb-4">
			<p className="font-tertiary text-3xl">Band Members</p>
			<div className="w-full grid grid-flow-col auto-cols-max mt-2 gap-8 pb-4 overflow-scroll">
				{bandMembersList.map((bandMember) => {
					return (
						<Link key={bandMember.userId} href={`/profile/${bandMember.username}`} passHref>
							<a target="_blank" rel="noopener noreferrer">
								<div className="group cursor-pointer pl-3 pr-8 py-2 bg-light-100 dark:bg-dark-600 rounded-full flex items-center justify-center  w-fit">
									<Image src={bandMember.avatar} width={40} height={40} alt="bandMember image" className="rounded-full" />
									<div className="ml-4 flex flex-col">
										<div className="flex items-center space-x-4">
											<p className="text-sm">{bandMember.name}</p>
											<p className="text-xs group-hover:text-primary-500">@{bandMember.username}</p>
										</div>
										<p className="text-xs">{bandMember.role}</p>
									</div>
								</div>
							</a>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default BandMembers;
