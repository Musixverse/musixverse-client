import Image from "next/image";
import Link from "next/link";
import create_nav from "../../../../public/assets/blog/create-nft/create_tab.png";
import create_page from "../../../../public/assets/blog/create-nft/create_page.png";
import create_page_1 from "../../../../public/assets/blog/create-nft/create_page_1.png";
import create_page_2 from "../../../../public/assets/blog/create-nft/create_page_2.png";
import create_page_3 from "../../../../public/assets/blog/create-nft/create_page_3.png";


export default function HowToCreate(){
    return(
        <div className="font-primary space-y-8 px-24">
            <h1 className="text-3xl font-medium text-center">How do I Create an NFT?</h1>
            <p>
                Creating an NFT on Musixverse is easy! This guide explains how to set up your first NFT.
                <br />
                <br />
                On Musixverse, click the <span className="font-medium underline underline-offset-2 text-primary-100"><Link href="/create-nft">Create</Link> </span> tab in the top left corner.
            </p>
            <div className="flex justify-center">
                <Image src={create_nav} alt="Create tab on Navbar" priority objectFit="contain"></Image>
            </div>
            <p>
                You&apos;ll be taken to the NFT item creation page, first agree to the terms and conditions and then follow these steps to create your own NFT.
            </p>
            <div className="flex justify-center">
                <Image src={create_page} alt="NFT creation page 1" priority objectFit="contain"></Image>
            </div>
            <p>
                <span className="font-medium">Step 1:</span>Fill out all the track details on the page and upload the track. You may additionally upload the cover art for your track. 
            </p>
            <div className="flex justify-center">
                <Image src={create_page_1} alt="NFT creation page 2" priority objectFit="contain"></Image>
            </div>
            <p>
                <span className="font-medium">Step 2:</span>Fill out all the additional details about the track. You may also attach track links to various streaming services such as Spotify and Amazon music.
            </p>
            <div className="flex justify-center">
                <Image src={create_page_2} alt="NFT creation page 3" priority objectFit="contain"></Image>
            </div>
            <p>
                <span className="font-medium">Step 3:</span>Finally add the number of copies you want to create and the price of each copy (in matic). You can also add collaborators to your NFT and decide the percentage split among the collaborators. Additionally, you can add the resale royalty percentage and schedule when you want to launch the NFT.
            </p>
            <div className="flex justify-center">
                <Image src={create_page_3} alt="NFT creation page 4" priority objectFit="contain"></Image>
            </div>
            <p>
                Once you&apos;re done customizing your NFT, click Create. <span className="font-medium">Congrats, you&apos;ve just made your first NFT!</span>
            </p>
        </div>
    );
}