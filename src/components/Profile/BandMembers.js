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
		<div className="mt-8 -mb-8">
			<p className="text-3xl font-tertiary">Band Members</p>
			<div className="grid w-full grid-flow-col gap-8 pb-4 mt-2 overflow-scroll auto-cols-max">
				{bandMembersList.map((bandMember) => {
					return (
						<Link key={bandMember.userId} href={`/profile/${bandMember.username}`} passHref>
							<a>
								<div className="flex items-center justify-center py-2 pl-3 pr-8 rounded-full cursor-pointer group bg-light-100 dark:bg-dark-600 w-fit">
									<Image src={bandMember.avatar} width={40} height={40} alt="bandMember image" className="rounded-full" />
									<div className="flex flex-col ml-4">
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
