import Head from "next/head";
import SongHeader from "../../components/SongInfo/SongHeader";
import SongDetails from "../../components/SongInfo/SongDetails";
import PurchaseInfo from "../../components/SongInfo/PurchaseInfo";
import SalesHistory from "../../components/SongInfo/SalesHistory";
import NewsLetter from "../../Layouts/NewsLetter";
import Banner from "../../components/SongInfo/Banner";

export default function songInfo() {
    //Fetch data over here using SSG and then pass data in the
    //components as props
    const onSale = true;
    return (
        // <div className="flex flex-col items-center justify-center w-full bg-light-100 dark:bg-dark-200 ">
        //     {onSale? <Banner/>:null}
        //     <div  className="flex flex-col justify-center items-center max-w-[1500px]">
        //         <SongHeader/>
        //         <SongDetails />
        //         <div className="flex w-full justify-center my-10 max-w-[1500px]">
        //             <PurchaseInfo/>
        //             <SalesHistory/>
        //         </div>
        //     </div>
        //     <NewsLetter/>
        // </div>
        <>
            <Head>
                <title>Musixverse | Song Info</title>
                <meta name="description" content="The NFT Marketplace for Musicians and Fans" />
            </Head>

            <div className="flex flex-col items-center justify-center w-full bg-light-100 dark:bg-dark-200">
                {onSale ? <Banner /> : null}
                <div className="w-full max-w-[1920px] px-16 xl:px-20 2xl:px-36">
                    <SongHeader />
                    <SongDetails />
                    <div className="grid grid-cols-9 xl:grid-cols-5 gap-6 my-10">
                        <PurchaseInfo />
                        <SalesHistory />
                    </div>
                </div>
                <NewsLetter />
            </div>
        </>
    );
}
