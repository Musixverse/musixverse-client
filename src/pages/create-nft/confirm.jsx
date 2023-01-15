import Head from "next/head";
import { meta_description } from "../../config/constants";
import Image from "next/image";
import Link from "next/link";
import Moralis from "moralis/node";
import { PARSE_APP_ID, PARSE_SERVER_URL } from "../../config/constants";
import CustomButton from "../../layout/CustomButton";
import Tooltip from "../../layout/Tooltip/Tooltip";
import PreviewDraft from "../../components/CreateNFT/CreateNFTUtils/PreviewDraft";

export async function getServerSideProps(context) {
	try {
		const { draftId, collaboratorId } = context.query;
		await Moralis.start({ serverUrl: PARSE_SERVER_URL, appId: PARSE_APP_ID });

		const nftDraftData = await Moralis.Cloud.run("setArtistAcceptedNftCollaborationInvite", { draftId: draftId, collaboratorId: collaboratorId });
		const nftDraft = JSON.parse(nftDraftData);

		if (!nftDraft) {
			return {
				redirect: {
					destination: `/`,
					permanent: false,
				},
			};
		}

		return {
			props: { nftDraft }, // will be passed to the page component as props
		};
	} catch (error) {
		return { notFound: true, props: {} };
	}
}

const confirm = ({ nftDraft }) => {
	return (
		<>
			<Head>
				<title>Musixverse | Confirm NFT Collaboration</title>
				<meta name="description" content={meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="w-full flex flex-col items-center justify-center bg-light-200 dark:bg-dark-800">
				<div className="w-full max-w-[1920px] flex flex-col items-center justify-center pt-36 pb-32 lg:pt-36 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
					<div className="w-full flex flex-col items-center justify-center rounded-2xl backdrop-blur-xl bg-light-100 dark:bg-dark-600 min-h-full sm:p-14 py-14 px-6 text-center">
						<p className="text-5xl font-tertiary">Woohoo!</p>
						<p className="text-4xl font-tertiary mt-2">
							You&apos;ve confirmed that you are a collaborator in <span className="text-primary-500">{nftDraft.title}</span>
						</p>

						<div className="mt-16">
							<PreviewDraft draft={nftDraft} chosenProfileOrBand={nftDraft.chosenProfileOrBand} />
						</div>

						<div className="w-full sm:w-1/3 flex flex-col items-center justify-center mt-10">
							{nftDraft.collaboratorList.map((collaborator) => {
								return (
									<div
										className="w-full flex p-2 mt-2 rounded items-center justify-center hover:bg-light-200 dark:hover:bg-dark-800"
										key={collaborator.id}
									>
										<Link href={`/profile/${collaborator.username}`} passHref>
											<a target="_blank" rel="noopener noreferrer" className="w-full flex text-start cursor-pointer">
												<div className="flex flex-col self-center mr-2">
													{collaborator.hasAcceptedCollaboratorInvite ? (
														<Tooltip
															labelText={
																<span className="text-primary-600 text-xl">
																	<i className="fa-solid fa-circle-check"></i>
																</span>
															}
															message={"Artist has accepted collaborator invite."}
															tooltipLocation={"left"}
														/>
													) : (
														<Tooltip
															labelText={
																<span className="text-error-600 text-xl">
																	<i className="fa-solid fa-circle-xmark"></i>
																</span>
															}
															message={"Artist hasn't accepted the collaborator invite yet."}
															tooltipLocation={"left"}
														/>
													)}
												</div>
												<Image src={collaborator.avatar} height={50} width={50} alt="Band collaborator avatar" className="rounded" />
												<div className="w-full flex justify-between">
													<div className="flex flex-col place-content-between">
														<p className="ml-4 text-sm font-semibold">{collaborator.name}</p>
														<p className="ml-4 text-xs items-end">@{collaborator.username}</p>
													</div>
													<div className="flex flex-col place-content-between">
														<p className="text-xs">{collaborator.role}</p>
														<p className="text-xs">{collaborator.split ? <>{collaborator.split}%</> : ""}</p>
													</div>
												</div>
											</a>
										</Link>
									</div>
								);
							})}
						</div>
					</div>

					<Link href={`/mxcatalog/new-releases`} passHref>
						<div>
							<CustomButton type="button" green={true} classes="text-sm px-8 py-3 mt-12 font-primary font-semibold">
								Go to Mx Catalog
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
