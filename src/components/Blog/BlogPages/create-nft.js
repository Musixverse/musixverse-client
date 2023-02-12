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

const createNFT = () => {
    return(
      <div className="py-36">
        <BlogProfile
            avatar={`https://miro.medium.com/max/113/1*FtvHUSJhezqK1lK7WZ_zDw.png`}
            username={`Musixverse`}
            name={`Musixverse`}
            lastupdated={new Date(2022,11,13).toLocaleDateString("en-us", { year: "numeric", month: "short", day: "numeric" })}
        />
        <BlogHeader>How to Create an NFT on Musixverse</BlogHeader>
        <BlogImage
            src={
                "https://miro.medium.com/v2/resize:fit:828/format:webp/1*VrXkEv2wJABf4l1bbZi_QQ.png"
            }
            alt={"cover art"}
            width={768}
            height={400}
        />
        <BlogContent>
            Creating NFTs on Musixverse is a quick and easy process.
            This guide will show you how to create your own Music NFTs on Musixverse.
            <br />
            <br />
            Go to the <BlogLink link="https://musixverse.com/create-nft">Create NFT</BlogLink> page on Musixverse to get started.
        </BlogContent>
        <BlogImage
            src={"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*PTYj2oI1-vXiY3Tg3tQRcA.png"}
            alt={"create nft page"}
            width={768}
            height={400}
            caption={"Create NFT on Musixverse"}
        />
        <BlogNoteContent>
            <ContentBold>Note:</ContentBold> 
            You would only be able to create NFTs if you signed up as an artist during the registration process.
        </BlogNoteContent>
        <BlogContent>
            You’ll be taken to the NFT creation page, first read & agree to the terms & conditions 
            and then follow these steps to create your own NFT:
        </BlogContent>
        <BlogSubHeading>Step 1: Fill in Track Details</BlogSubHeading>  
        <BlogImage
            src={"https://miro.medium.com/v2/resize:fit:828/format:webp/1*XmhoxoZ5d1pQ1OLi3RnNfw.png"} 
            alt={"track details"}
            width={768}
            height={400}
        />
        <BlogContent>
            Fill out the basic track details including Track Title, Track Background, and Lyrics on this page. You also need to upload the Audio File and Cover Art of the track here. You may follow our suggested <BlogLink link="https://medium.com/@musixverse/musixverse-nft-guidelines-3664764ecd7f">guidelines to create NFTs</BlogLink> as it would complement you while creating NFTs.
        </BlogContent>
        <BlogNoteContent>
            <ContentBold>Note:</ContentBold> <BlogLink link="https://medium.com/@musixverse/musixverse-nft-guidelines-3664764ecd7f">Musixverse NFT Guidelines</BlogLink> is the complementary guide to this article. It describes the standard guideline that you can follow to create your NFTs.
        </BlogNoteContent>
        <BlogSubHeading>Step 2: Provide Comprehensive Details</BlogSubHeading>
        <BlogImage
            src={"https://miro.medium.com/v2/resize:fit:828/format:webp/1*JbjH-5bEuVDVtF4RPJfSmg.png"}
            alt={"comprehensive details"}
            width={768}
            height={400}
        />
        <BlogContent>Fill out all the additional details about the track including Genre, Track Origin, Track Links, etc.</BlogContent>
        <BlogSubHeading>Step 3: Share “Your Story”</BlogSubHeading>
        <BlogImage
            src={"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*cKFAogvqzVWGdt5V4D7KFg.png"}
            alt={"your story"}
            width={768}
            height={400}
        />
        <BlogContent>What is the story behind this song? Where did the idea come from? How did it come to life? Every NFT has a story. Tell the world why this song is close to your heart.</BlogContent>
        <BlogSubHeading>Step 4: Finalize Pricing & Splits</BlogSubHeading>
        <BlogImage
            src={"https://miro.medium.com/v2/resize:fit:828/format:webp/1*KYcXeBXLBvpPeHSobLDzGA.png"}
            alt={"pricing & splits"}
            width={768}
            height={400}
        />
        <BlogContent>
        Finally provide the number of copies you want to create and the price of each copy (in Matic). You can also add collaborators to your NFT and decide the percentage split among the collaborators.
        </BlogContent>
        <BlogNoteContent>
        <ContentBold>Note:</ContentBold> 
        If you’re part of a band, you can mint NFTs of songs collectively as a band, but first, you need to create a band profile for that. Follow our guide to know <BlogLink link="https://medium.com/@musixverse/how-to-create-a-band-profile-on-musixverse-1f627b5a91e7">how to create a band profile on Musixverse</BlogLink>.
        </BlogNoteContent>
        <BlogContent>
        Additionally, you need to provide the Resale Royalty Percentage that you would receive after each resells of the NFT.
        <br />
        <br />
        You can also schedule the launch of your NFT in case you don’t want to launch it right away. Once you’re done reviewing these details, click the Create button.
        </BlogContent>
        <BlogSubHeading>
            Congrats, you’ve just minted your first NFT on the Polygon Blockchain!
        </BlogSubHeading>
        <BlogNoteContent>
           <ContentBold>Suggestion:</ContentBold> Although you can create an NFT on Musixverse in a few minutes, we suggest to take your time to go through all the details. Note that you can always save your draft and come back to it any time you want.
        </BlogNoteContent>
        <AboutUs />
      </div>  
    );
}

export default createNFT;