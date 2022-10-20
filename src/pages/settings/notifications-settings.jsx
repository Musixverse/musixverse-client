import Head from "next/head";
import Moralis from "moralis/node";
import { MORALIS_APP_ID, MORALIS_SERVER_URL, meta_description } from "../../constants";
import SettingsNav from "../../components/Settings/SettingsNav";
import NotificationSettings from "../../components/Settings/NotificationSettings";
import { useMoralis } from "react-moralis";

export async function getServerSideProps(context) {
	try {
		const user = JSON.parse(context.req.cookies.currentUser);
		const _userId = user.objectId;
		await Moralis.start({ serverUrl: MORALIS_SERVER_URL, appId: MORALIS_APP_ID });

		const _userPreferences = await Moralis.Cloud.run("fetchUserPreferences", { userId: _userId });
		const userPreferences = JSON.parse(JSON.stringify(_userPreferences));

		return {
			props: { userPreferences }, // will be passed to the page component as props
		};
	} catch (error) {
		return { notFound: true, props: {} };
	}
}

export default function NotificationsSettings({ userPreferences }) {
	const { user } = useMoralis();

	return (
		<>
			<Head>
				<title>Musixverse | Settings</title>
				<meta name="description" content={meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex items-center justify-center bg-light-200 dark:bg-dark-200">
				<div className="flex-col lg:flex-row flex w-full max-w-[1920px] mt-28 mb-32 lg:mt-36 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
					<SettingsNav />
					<NotificationSettings walletAddress={user ? user.attributes.ethAddress : ""} userPreferences={userPreferences} />
				</div>
			</div>
		</>
	);
}
