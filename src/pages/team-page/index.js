import Head from "next/head";
// import TeamPage from "../../components/TeamPage/TeamPage";

const Team = ({}) => {
    return (
        <>
            <Head>
                <title>Musixverse | Team Page</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-200">
                <div className="w-full max-w-[1920px] px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
                    {/* <TeamPage /> */}
                </div>
            </div>
        </>
    );
};

export default Team;
