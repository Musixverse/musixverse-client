import Head from "next/head";
import BannerCFB from "../../components/CFB/BannerCFB";
import CFB1 from "../../components/CFB/CFB1";
// import CFB2 from "../../components/CFB/CFB2";
import CFB3 from "../../components/CFB/CFB3";
import CFB4 from "../../components/CFB/CFB4";
import CFB5 from "../../components/CFB/CFB5";


const CFB = ({}) => {
    return (
        <>
            <Head>
                <title>Musixverse | Community Feedback Board</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col items-center justify-center w-full">
                <div className="w-full max-w-[1920px]">
                    <BannerCFB />
                    <CFB1 />
                    {/* <CFB2 /> */}
                    <CFB3 />
                    <CFB4 />
                    <CFB5 />
                </div>
            </div>
        </>
    );
};

export default CFB;
