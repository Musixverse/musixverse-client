import Head from "next/head";
import { meta_description } from "../../constants";
import Image from "next/image";
import Link from "next/link";
import Moralis from "moralis/node";
import { MORALIS_APP_ID, MORALIS_SERVER_URL } from "../../constants";
import CustomButton from "../../layout/CustomButton";
import Tooltip from "../../layout/Tooltip/Tooltip";

export async function getServerSideProps(context) {
	try {
		const { bandId, memberId } = context.query;
		await Moralis.start({ serverUrl: MORALIS_SERVER_URL, appId: MORALIS_APP_ID });

		const bandData = await Moralis.Cloud.run("setArtistAcceptedBandInvite", { bandId: bandId, memberId: memberId });
		const band = JSON.parse(bandData);

		if (!band.name) {
			return {
				redirect: {
					destination: `/profile/band/${band.username}`,
					permanent: false,
				},
			};
		}

		return {
			props: { band }, // will be passed to the page component as props
		};
	} catch (error) {
		return { notFound: true, props: {} };
	}
}

const confirm = ({ band }) => {
	return (
		<>
			<Head>
				<title>Musixverse | Confirm Band Member</title>
				<meta name="description" content={meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="w-full flex flex-col items-center justify-center bg-light-200 dark:bg-dark-200">
				<div className="w-full max-w-[1920px] flex flex-col items-center justify-center pt-36 pb-32 lg:pt-36 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
					<div className="w-full items-center justify-center rounded-2xl backdrop-blur-xl bg-light-100 dark:bg-dark-100 min-h-full sm:p-14 py-14 px-6 text-center">
						<p className="text-5xl font-tertiary">Woohoo!</p>
						<p className="text-4xl font-tertiary mt-2">
							You&apos;ve confirmed being a member of <span className="text-primary-100">{band.name}</span>
						</p>

						<div className="flex items-center justify-center mt-8">
							<Image src={band.avatar} width="200" height="200" alt="Band avatar" className="rounded-lg" />
						</div>
						<p className="text-primary-100 mt-2">@{band.username}</p>

						{band.bio && <p className="w-full sm:w-2/3 mx-auto text-center mt-4">{band.bio}</p>}

						<div className="flex flex-col items-center justify-center mt-8">
							{band.bandMembers.map((member) => {
								return (
									<div
										className="w-full sm:w-1/3 flex p-2 mt-2 rounded items-center justify-center hover:bg-light-200 dark:hover:bg-dark-200"
										key={member.userId}
									>
										<Link href={`/profile/${member.username}`} passHref>
											<a target="_blank" rel="noopener noreferrer" className="w-full flex text-start cursor-pointer">
												<div className="flex flex-col self-center mr-2">
													{member.hasAcceptedBandInvite ? (
														<Tooltip
															labelText={
																<span className="text-primary-200 text-xl">
																	<i className="fa-solid fa-circle-check"></i>
																</span>
															}
															message={"Artist has accepted band invite."}
															tooltipLocation={"left"}
														/>
													) : (
														<Tooltip
															labelText={
																<span className="text-error-200 text-xl">
																	<i className="fa-solid fa-circle-xmark"></i>
																</span>
															}
															message={"Artist hasn't accepted the band invite yet."}
															tooltipLocation={"left"}
														/>
													)}
												</div>
												<Image src={member.avatar} height={50} width={50} alt="Band member avatar" className="rounded" />
												<div className="w-full flex justify-between">
													<div className="flex flex-col place-content-between">
														<p className="ml-4 text-sm font-semibold">{member.name}</p>
														<p className="ml-4 text-xs items-end">@{member.username}</p>
													</div>
													<div className="flex flex-col self-center">
														<p className="text-xs">{member.role}</p>
													</div>
												</div>
											</a>
										</Link>
									</div>
								);
							})}
						</div>
					</div>

					<Link href={`/profile/band/${band.username}`} passHref>
						<div>
							<CustomButton green={true} classes="text-sm px-8 py-3 mt-12 font-primary font-semibold">
								View Band Profile
								<span className="ml-12 text-xl">
									<i className="fa-solid fa-arrow-right-long"></i>
								</span>
							</CustomButton>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default confirm;
