import Image from "next/image";

export default function PreviewNft({nftName, uploadedImage}){

    // const [uploadedImage, , uploadedSong, , nftName, , nftPrice, ] = useContext(PreviewNftContext);
    /*
        Cases:
            1. When form is empty

        Things to be passed here as props:      
        1. Uploaded Image url/blob
        2. Uploaded audio file
        3. Artist Name
        4. NFT name
        5. Price of NFT
    */
    // console.log("here",props.uploadedImage);
    return(
        <div className="flex-1">
            <p className="mb-10 font-semibold font-secondary">Step 1 of 2</p>
            {/* Uploaded Art */}
            <div className="relative flex w-[222px] h-[190px]">
                {/* Cover art of NFT */}
                {uploadedImage === undefined? 
                    <div className="dark:bg-[#363636] bg-light-300 w-full h-full rounded-t-xl"></div>
                        :
                    <div className="absolute w-full h-full rounded-t-md">
                        {/* <img 
                            src={props.uploadedImage}
                            alt="NFT cover art" 
                            className="w-full h-full"
                        ></img> */}
                        <Image 
                            src={uploadedImage} 
                            alt="nft cover art" 
                            objectFit="cover" 
                            layout="fill" 
                            priority
                        />
                    </div>
                }
                {/* NFT audio file */}
                {/* {
                    props.uploadedSong?
                        null
                        :
                        <div></div>
                } */}
            </div>
            {/* Content provided */}
            {/* w222 h128 */}
            <div className="dark:bg-[#1D1D1D] bg-light-100 w-[222px] h-[128px] p-4 rounded-b-xl flex flex-col justify-between">
                <div className="flex justify-between w-full">
                    <div className="flex flex-col">
                        <p className="font-secondary text-[#1D1D1D] dark:text-light-200">Ben Kessler</p>
                        <p className="font-semibold font-secondary text-[#1D1D1D] dark:text-light-200 text-lg">{nftName} <span>#69</span></p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-secondary">Price</p>
                        <div className="flex items-center font-bold">
                            <Image src={"/assets/Eth_logo.svg"} width={12.5} height={25} alt="ethereum logo"/>
                            <span className="ml-1 sm:text-lg">0.3</span>
                        </div>
                    </div>
                </div>
                <div className="w-[150px] h-2 dark:bg-[#363636] bg-light-300 self-center rounded-lg"></div>
            </div>
        </div>
    );
}