import Head from "next/head";
import { meta_description } from "../../constants";
import CoreTeam from "../../components/NewTeamPage/CoreTeam";

const TeamPage = ({}) => {
	return (
		<>
			<Head>
				<title>Musixverse | Team Page</title>
				<meta name="description" content={meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex items-center justify-center w-full bg-light-200 dark:bg-dark-200">
				<div className="w-full max-w-[1920px] items-center flex flex-col px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
					<CoreTeam />
				</div>
			</div>
		</>
	);
};

export default TeamPage;
