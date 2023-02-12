import React from "react";
import BlogProfile from "../BlogProfile";
import BlogHeader from "../BlogHeader";
import BlogImage from "../BlogImage";
import BlogSubHeading from "../BlogSubHeading";
import BlogContent from "../BlogContent";
import BlogNoteContent from "../BlogNoteContent";
import ContentBold from "../ContentBold";
import AboutUs from "../AboutUs";
import BlogLink from "../BlogLink";

const publishNFT = () => {
    return(
      <div className="py-36">
        <BlogProfile
            avatar={`https://miro.medium.com/max/113/1*FtvHUSJhezqK1lK7WZ_zDw.png`}
            username={`Musixverse`}
            name={`Musixverse`}
            lastupdated={new Date(2022,11,10).toLocaleDateString("en-us", { year: "numeric", month: "short", day: "numeric" })}
        />
        <BlogHeader>How to Publish Your Musixverse NFTs on Instagram</BlogHeader>
        <BlogImage
            src={
                "https://miro.medium.com/max/828/1*MorOJCgmP_NajIVAwqiBWg.webp"
            }
            alt={"cover art showing instagram logo"}
            width={768}
            height={400}
        />
        <BlogContent>
            Artists inspire people and push culture forward every day around the world. With the introduction of incredible blockchain technology, they can now earn income from new tools, and fans can support their favorite artists by purchasing digital collectibles as non-fungible tokens (NFTs).
            <br />
            <br />
            Artists are now using new technologies like NFTs to take more control over their work and their relationships with fans. Recently, Meta created a breakthrough by introducing the Digital Collectibles feature to showcase NFTs on Instagram.
            <br />
            <br />
            With that said, you can easily publish the Musixverse NFTs on Instagram by following this step-by-step guide:
        </BlogContent>
        <BlogSubHeading>1. Buy an NFT on Musixverse</BlogSubHeading>
        <BlogImage
            src={"https://miro.medium.com/max/828/1*iXXAwOxJNWaRvaL0xBe1Ow.webp"}
            alt={"NFT Marketplace on Musixverse"}
            width={768}
            height={400}
            caption={"NFT Marketplace on Musixverse"}
        />
        <BlogContent>
            If you haven’t bought any NFTs from Musixverse yet, it’s the right time to head over to <BlogLink link="https://www.musixverse.com/">musixverse.com</BlogLink> and browse/buy NFTs from Mx Catalog.
            <br />
            <br />
            Mx Catalog is the NFT marketplace of Musixverse and it showcases all the Music NFTs created by the artists.
        </BlogContent>
        <BlogNoteContent>
            <ContentBold>Note:</ContentBold> 
            You can follow this <BlogLink link="https://medium.com/@musixverse/how-to-buy-an-nft-on-musixverse-5f630e590a69">step-by-step guide to buy an NFT on Musixverse</BlogLink>.
        </BlogNoteContent>
        <BlogSubHeading>2. Connect Your Wallet to Instagram</BlogSubHeading>
        <BlogImage
            src={"https://miro.medium.com/max/828/1*giHYOevXpJoCm5xqR3CCNw.webp"} 
            alt={"metamask wallet screen"}
            width={768}
            height={400}
        />
        <BlogContent>
            <ul className="list-disc list-inside">
            <li>Go to Instagram and open the settings menu.</li>
            <li>Click on “Digital Collectibles” and connect your wallet.</li>
            <li>Now, you’ll automatically see all the NFTs owned by that wallet. Click on the Musixverse NFT that you want to share.</li>
            </ul>
        </BlogContent>
        <BlogSubHeading>
            Woohoo! You have successfully added your Musixverse NFT on Instagram. Now click on the “Share to Feed” button to share the cool NFT that you own!
        </BlogSubHeading>  
        <BlogNoteContent>
            <ContentBold>Note:</ContentBold> 
            There are no fees associated with posting or sharing a digital collectible on Instagram.
        </BlogNoteContent>
        <BlogContent>
            You will be identified as the creator or owner of your NFT when you share it. Instagram verifies ownership of the collectible’s blockchain address in order to establish ownership.
        </BlogContent>

        <div className="flex text-4xl justify-center text-dark-600 tracking-widest">...</div>    
        <BlogSubHeading>FAQ’s</BlogSubHeading>
        <BlogSubHeading>
            1. Why my Musixverse NFT post on Instagram displays the ‘Unsupported’ message?
        </BlogSubHeading>
        <BlogImage
            src={"https://miro.medium.com/max/828/1*9FN9euOhY9toabP5I0OBdw.webp"}
            alt={"digital collectibles screen on instagram"}
            width={768}
            height={400}
        />
        <BlogContent>
            You may see a screen with the message ‘Unsupported’ as shown above. Do not worry. This is because Instagram does not support audio files in NFTs yet. The cover art will appear if you swipe and look at the second image.
            <br />
            <br />
            This “Unsupported” message will not be shown after you share the NFT. Only the cover art image will be visible to your followers.
        </BlogContent>
        <BlogNoteContent>
            “NFTs have opened the doors to new opportunities for me and other artists around the world. This new technology provides us with another outlet to make a living and to connect with our fans and collectors. Instagram has helped build careers for so many creatives, including myself, and now our communities can support us further by sharing our work on the platform.”

            - <BlogLink link="https://www.instagram.com/misshattan/?hl=en">@misshattan</BlogLink>
        </BlogNoteContent>
        <AboutUs />
      </div>  
    );
}

export default publishNFT;