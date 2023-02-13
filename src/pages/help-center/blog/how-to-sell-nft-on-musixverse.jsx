import Head from "next/head";
import { meta_description } from "@/config/constants";
import BlogProfile from "@/components/Blog/BlogProfile";
import BlogHeader from "@/components/Blog/BlogHeader";
import BlogImage from "@/components/Blog/BlogImage";
import BlogSubHeading from "@/components/Blog/BlogSubHeading";
import BlogContent from "@/components/Blog/BlogContent";
import BlogNoteContent from "@/components/Blog/BlogNoteContent";
import ContentBold from "@/components/Blog/ContentBold";
import AboutUs from "@/components/Blog/AboutUs";
import BlogLink from "@/components/Blog/BlogLink";

const HowToSellNFT = ({}) => {
	return (
		<>
			<Head>
				<title>Musixverse | How to sell NFT on Musixverse?</title>
				<meta name="description" content={meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-800">
				<div className="overflow-x-hidden justify-center w-full max-w-[768px] px-6 md:px-8 lg:px-0">
					<div className="py-36">
						<BlogProfile
							avatar={`https://miro.medium.com/max/113/1*FtvHUSJhezqK1lK7WZ_zDw.png`}
							username={`Musixverse`}
							name={`Musixverse`}
							lastupdated={new Date(2022,11,13).toLocaleDateString("en-us", { year: "numeric", month: "short", day: "numeric" })}
						/>
						<BlogHeader>How to Sell an NFT on Musixverse</BlogHeader>
						<BlogImage
							src={
								"https://miro.medium.com/v2/resize:fit:828/format:webp/1*feHh7Sz1_LGE-sN_lzFgCA.png"
							}
							alt={"cover art of sell NFT blog"}
							width={768}
							height={400}
						/>
						<BlogContent>
							This guide will teach you everything you need to know about selling an NFT on Musixverse. Whether you’re an artist looking to sell your Music NFT, or a collector looking to resell the NFT, we’ll show you how to do it!
							<br />
							<br />
							Let’s get started!
						</BlogContent>
						<BlogSubHeading>Prerequisite to Sell an NFT on Musixverse</BlogSubHeading>
						<BlogContent>
							To sell an NFT on Musixverse, you must be the current owner of that NFT. The artists can create & sell the NFTs while the collectors can resell the NFTs that they own.
						</BlogContent>
						<BlogNoteContent>
							If you’re an artist and want to know how to create NFTs, you can follow this <BlogLink link="https:/musixverse.com/help-center/blog/how-to-create-nft-on-musixverse">guide to create NFTs on Musixverse</BlogLink>. And if you want to buy an NFT from Musixverse, you can check out this <BlogLink link="https://medium.com/@musixverse/how-to-buy-an-nft-on-musixverse-5f630e590a69">guide to buy NFTs on Musixverse</BlogLink>.
						</BlogNoteContent>
						<BlogContent>
							By default when you create an NFT, it’s up for sale on the NFT Marketplace. And if you own any NFT, you can put it for sale on the marketplace anytime by following these steps:
						</BlogContent>
						<BlogSubHeading>Step 1: Choose the NFT That You Want to Sell</BlogSubHeading> 
						<BlogContent>
							Your profile page will show all the NFTs you own. Click on the NFT that you want to sell. If the NFT that you want to sell is a part of a collection, it will be present under the Collection tab (see the following screenshot for reference).
						</BlogContent> 
						<BlogImage
							src={"https://miro.medium.com/v2/resize:fit:828/format:webp/1*OWVXILYjgvfoyC3d9dvTMg.png"} 
							alt={"track details"}
							width={768}
							height={400}
						/>
						<BlogContent>
							The detailed track info page will open after you click the NFT card.
						</BlogContent>
						<BlogSubHeading>Step 2: Put Up the NFT on Sale</BlogSubHeading>
						<BlogImage
							src={"https://miro.medium.com/v2/resize:fit:828/format:webp/1*YBrL0_qcpLU-3HmbOsDswg.png"}
							alt={"nft on sale"}
							width={768}
							height={400}
						/>
						<BlogContent>
							Click on the Edit Price button if you want to change the selling price of the NFT. After you’re done editing the price, click on the Put Up for Sale button.
						</BlogContent>
						<BlogSubHeading>
							Confirm the transaction and that’s it! You’ve successfully put up your NFT for sale.
						</BlogSubHeading>
						<BlogNoteContent>
							<ContentBold>Note:</ContentBold> 
							It doesn’t cost anything to sell an NFT. You just need to pay the gas fees for the transaction and that gas fee is almost negligible.
						</BlogNoteContent>
						<BlogImage
							src={"https://miro.medium.com/v2/resize:fit:828/format:webp/1*oVQpu2tovGLkCl94S7eXMg.png"}
							alt={"confirm nft sell"}
							width={768}
							height={400}
						/>
						<BlogContent>
							Now other buyers would be able to buy the NFT from the NFT Marketplace (Mx Catalog).
						</BlogContent>
						<BlogNoteContent>
							<ContentBold>Note:</ContentBold> 
							You can put up or take down the NFT for sale anytime you want.
						</BlogNoteContent>
						<AboutUs />
					</div> 
				</div>
			</div>
		</>
	);
};

export default HowToSellNFT;
