import Head from "next/head";
import Moralis from "moralis/node";
import { MORALIS_APP_ID, MORALIS_SERVER_URL, meta_description } from "../../constants";
import SettingsNav from "../../components/Settings/SettingsNav";
import BandDashboard from "../../components/Settings/BandDashboard";

export async function getServerSideProps(context) {
	try {
		await Moralis.start({ serverUrl: MORALIS_SERVER_URL, appId: MORALIS_APP_ID });

		const user = JSON.parse(context.req.cookies.currentUser);
		// Bands whose invite the artist has accepted via email
		const bandsOfArtist = await Moralis.Cloud.run("fetchBandsOfArtist", { ethAddress: user.ethAddress, userId: user.objectId });

		return {
			props: { bandsOfArtist }, // will be passed to the page component as props
		};
	} catch (error) {
		return { notFound: true, props: {} };
	}
}

export default function DashboardForBands({ bandsOfArtist }) {
	return (
		<>
			<Head>
				<title>Musixverse | Settings</title>
				<meta name="description" content={meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex items-center justify-center bg-light-200 dark:bg-dark-800">
				<div className="flex-col lg:flex-row flex w-full max-w-[1920px] mt-28 mb-32 lg:mt-36 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
					<SettingsNav />
					<BandDashboard bandsOfArtist={bandsOfArtist} />
				</div>
			</div>
		</>
	);
}
