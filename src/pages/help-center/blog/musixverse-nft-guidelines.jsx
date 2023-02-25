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

const MusixverseGuidelines = ({}) => {
	return (
		<>
			<Head>
				<title>Musixverse | Musixverse NFT Guidelines</title>
				<meta name="description" content={meta_description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-800">
				<div className="overflow-x-hidden justify-center w-full max-w-[768px] px-6 md:px-8 lg:px-0">
					<div className="py-36">
						<BlogProfile
							avatar={`https://miro.medium.com/max/113/1*FtvHUSJhezqK1lK7WZ_zDw.png`}
							username={`musixverse`}
							name={`Musixverse`}
							lastupdated={new Date(2022, 11, 10).toLocaleDateString("en-us", { year: "numeric", month: "short", day: "numeric" })}
						/>
						<BlogHeader>Musixverse NFT Guidelines</BlogHeader>
						<BlogImage
							src={"https://miro.medium.com/max/828/1*u7NsPO8ojCpvAEeRUzNLRg.webp"}
							alt={"musixverse main tagline Hear It Own It Live It"}
							width={768}
							height={400}
						/>
						<BlogContent>
							Minting NFTs on Musixverse is a smooth process. In this guide, we present a standard guideline that you can follow to create your
							NFTs.
						</BlogContent>
						<BlogNoteContent>
							<ContentBold>Before you begin:</ContentBold>
							If you’re unsure of how to create an NFT on Musixverse, check out our{" "}
							<BlogLink link="https://medium.com/@musixverse/how-to-create-an-nft-on-musixverse-15e58cb2bee1">
								tutorial on creating NFTs
							</BlogLink>{" "}
							to get started.
						</BlogNoteContent>
						<BlogSubHeading>1. Finalize the Song</BlogSubHeading>
						<BlogContent>This is the song that you will package into the NFT</BlogContent>
						<BlogSubHeading>To Do:</BlogSubHeading>
						<BlogContent>
							<ul className="list-disc list-inside">
								<li>Identify the song that will be packaged in the NFT.</li>
								<li>Ensure that you have the audio recording available as an mp3 or wav file.</li>
							</ul>
						</BlogContent>
						<BlogSubHeading>Guidelines:</BlogSubHeading>
						<BlogContent>
							<ul className="list-disc list-inside">
								<li>This is obviously the key thing that you need to create an NFT on Musixverse.</li>
								<li>
									You should choose a high-quality audio recording but ideally try to keep it under 50 MB so that it quickly loads on
									Musixverse.
								</li>
								<li>
									You could package the final mastered recording of an original song that has already been released OR if you want to get more
									creative, you could package an interim version of the song that is close to your heart for some reason. Please remember that
									this is a collectible for your fans and so make it worth their investment :)
								</li>
								<li>
									Please ensure that you completely own the rights to the song you are packaging in the NFT. If you have any collaborators in
									the song and they own any rights, ensure that you add them as collaborators and share income and royalties generated from
									the sale of your NFTs.
								</li>
							</ul>
						</BlogContent>
						<BlogSubHeading>2. Finalize Cover Art</BlogSubHeading>
						<BlogContent>You will need a Cover Art of your NFT</BlogContent>
						<BlogSubHeading>To Do:</BlogSubHeading>
						<BlogContent>
							<ul className="list-disc list-inside">
								<li>Get the cover art ready. The recommended dimensions are 640 x 640 px.</li>
							</ul>
						</BlogContent>
						<BlogSubHeading>Guidelines:</BlogSubHeading>
						<BlogContent>
							<ul className="list-disc list-inside">
								<li>
									If the song you are creating the NFT of is already released on major streaming platforms, you could use the same cover art
									as the cover art of the already released song.
								</li>
								<li>
									If you want to get creative and give something exclusive to your fans, you can modify the existing cover art to give it the
									NFT theme or create a new cover art altogether.
								</li>
							</ul>
						</BlogContent>
						<BlogSubHeading>3. Onboard Collaborators</BlogSubHeading>
						<BlogContent>Collaborators: Ensure that they get their fair share</BlogContent>
						<BlogSubHeading>To Do:</BlogSubHeading>
						<BlogContent>
							<ul className="list-disc list-inside">
								<li>If your song has collaborators, and you want to give them credit and share revenue and royalty from the NFT,</li>
								<li>Inform them about Musixverse.</li>
								<li>Ask them to get ready to create a profile on musixverse when the platform is live.</li>
								<li>Provide us with their email id so we can notify them of key dates and their tasks to complete.</li>
								<li>Ask them to get in touch with us if they have questions.</li>
							</ul>
						</BlogContent>
						<BlogSubHeading>Guidelines:</BlogSubHeading>
						<BlogContent>
							<ul className="list-disc list-inside">
								<li>
									If your audio recording has collaborators who own rights alongside you, we highly recommend that you add them as
									collaborators with an assigned share of income from NFT sales. Adding them as collaborators will ensure that the NFT does
									not get created until they approve of it and they agree to their share of income. This is important so that there are no
									disputes later.
								</li>
								<li>
									If your audio recording has collaborators but you own the rights completely, you may still choose to add them as
									collaborators on the NFT as a gesture of goodwill and assign them an appropriate share of income from the NFT.
								</li>
							</ul>
						</BlogContent>
						<BlogSubHeading>4. What is the Story?</BlogSubHeading>
						<BlogContent>Tell the world why this song is close to your heart</BlogContent>
						<BlogSubHeading>To Do:</BlogSubHeading>
						<BlogContent>
							<ul className="list-disc list-inside">
								<li>Write down the story for the song and have it ready for the time you actually sit down to create the NFT.</li>
							</ul>
						</BlogContent>
						<BlogSubHeading>Guidelines:</BlogSubHeading>
						<BlogContent>
							<ul className="list-disc list-inside">
								<li>
									What is the story behind this song? Where did the idea come from? How did it come to life? Every NFT has a story. Tell the
									world why this song is close to your heart.
								</li>
								<li>Take some time to write down this story. It shows the world why this song and this NFT are important to you.</li>
								<li>It will help people connect with you and get to know you better.</li>
							</ul>
						</BlogContent>
						<BlogSubHeading>5. Finalize Unlockable Content</BlogSubHeading>
						<BlogContent>Share with your fans things that are closest to your heart</BlogContent>
						<BlogSubHeading>To Do:</BlogSubHeading>
						<BlogContent>
							<ul className="list-disc list-inside">
								<li>Finalize the digital content that you want to share with your fans.</li>
								<li>Any type of file can be shared: audio, video, image, or text.</li>
							</ul>
						</BlogContent>
						<BlogSubHeading>Guidelines:</BlogSubHeading>
						<BlogContent>
							<ul className="list-disc list-inside">
								<li>
									A lot is available for everyone to see on the internet. For unlockable content, choose things that are exclusive and no one
									has ever seen.
								</li>
								<li>
									It could be behind-the-seen pictures, interim recordings of the song, behind the scene videos, or the exclusive story behind
									the song. Anything that you think is worth sharing with your biggest fans?
								</li>
							</ul>
						</BlogContent>

						<AboutUs />
					</div>
				</div>
			</div>
		</>
	);
};

export default MusixverseGuidelines;
