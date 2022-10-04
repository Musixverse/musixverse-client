import Image from "next/image";

export default function HowToCreate(){
    return(
        <div>
            <h1>How do I Create an NFT?</h1>
            <p>
                Creating an NFT on Musixverse is easy! This guide explains how to set up your first NFT.
                <br />
                <br />
                On Musixverse, click the Create tab in the top left corner.
            </p>
            <div>
                <Image src="" alt="Create tab on Navbar" priority objectFit="contain"></Image>
            </div>
            <p>
                You&apos;ll be taken to the NFT item creation page, first agree to the terms and conditions and then follow these steps to create your own NFT.
            </p>
            <div>
                <Image src="" alt="NFT creation page 1" priority objectFit="contain"></Image>
            </div>
            <p>
                Step 1: Fill out all the track details on the page and upload the track. You may additionally upload the cover art for your track. 
            </p>
            <div>
                <Image src="" alt="NFT creation page 2" priority objectFit="contain"></Image>
            </div>
            <p>
                Step 2: Fill out all the additional details about the track. You may also attach track links to various streaming services such as Spotify and Amazon music.
            </p>
            <div>
                <Image src="" alt="NFT creation page 3" priority objectFit="contain"></Image>
            </div>
            <p>
                Step 3: Finally add the number of copies you want to create and the price of each copy (in matic). You can also add collaborators to your NFT and decide the percentage split among the collaborators. Additionally, you can add the resale royalty percentage and schedule when you want to launch the NFT.
            </p>
            <div>
                <Image src="" alt="NFT creation page 4" priority objectFit="contain"></Image>
            </div>
            <p>
                Once you&apos;re done customizing your NFT, click Create. Congrats, you&apos;ve just made your first NFT!
            </p>
        </div>
    );
}