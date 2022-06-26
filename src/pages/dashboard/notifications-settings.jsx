import Head from "next/head";
import { useMoralis } from "react-moralis";
import DashboardNav from "../../components/Dashboard/DashboardNav";
import NotificationSettings from "../../components/Dashboard/NotificationSettings";

export default function NotificationsSettings() {
    const { user } = useMoralis();

    if (!user) return null;
    return (
        <>
            <Head>
                <title>Musixverse | Dashboard</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex items-center justify-center bg-light-200 dark:bg-dark-200">
                <div className="flex-col lg:flex-row flex w-full max-w-[1920px] mt-28 lg:mt-36 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
                    <DashboardNav />
                    <NotificationSettings walletAddress={user.attributes.ethAddress} />
                </div>
            </div>
        </>
    );
}
