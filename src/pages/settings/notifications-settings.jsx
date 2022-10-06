import Head from "next/head";
import { meta_description } from "../../constants";
import SettingsNav from "../../components/Settings/SettingsNav";
import NotificationSettings from "../../components/Settings/NotificationSettings";
import { useMoralis } from "react-moralis";

export default function NotificationsSettings() {
	const { user, isInitialized } = useMoralis();

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
					<NotificationSettings walletAddress={user ? user.attributes.ethAddress : ""} />
				</div>
			</div>
		</>
	);
}
