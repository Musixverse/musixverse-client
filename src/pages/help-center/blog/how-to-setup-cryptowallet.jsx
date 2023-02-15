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

const HowToSetupCryptoWallet = ({}) => {
	return (
		<>
			<Head>
				<title>Musixverse | How to setup a Crypto Wallet?</title>
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
							lastupdated={new Date(2022,11,11).toLocaleDateString("en-us", { year: "numeric", month: "short", day: "numeric" })}
						/>
						<BlogHeader>How to Set Up a Crypto Wallet (MetaMask)</BlogHeader>
						<BlogImage
							src={
								"https://miro.medium.com/max/828/1*UABrYoWh8IJqSEdGzLWXPA.webp"
							}
							alt={"metamask logo"}
							width={768}
							height={400}
						/>
						<BlogContent>
							A crypto wallet is a gateway to all of your web3 assets. It provides a secure way for you to access your cryptocurrencies/NFTs and allows you to transact with others over the blockchain.
							<br />
							<br />
							The setup process is fairly simple. This is a brief guide on how to configure the MetaMask wallet on the browser, which should only take a few minutes.
						</BlogContent>
						<BlogNoteContent>
							If you already know what a crypto wallet is and what MetaMask is, feel free to directly jump to the 3rd section.
						</BlogNoteContent>
						<BlogContent>
							You’ll be taken to the NFT creation page, first read & agree to the terms & conditions 
							and then follow these steps to create your own NFT:
						</BlogContent>
						<BlogSubHeading>What Is a Crypto Wallet? Explain Like I’m Five</BlogSubHeading> 
						<BlogContent>
							If you want to purchase crypto/NFT, you’ll need to get a crypto wallet first. A crypto wallet is a digital space that keeps your crypto/NFT secure in the same way a regular bank account would keep your cash safe.
							<br />
							<br />
							Each crypto wallet has a public and private key that functions similarly to a bank account number and PIN. The public key allows others to send you cryptocurrency while the private key allows you to spend cryptocurrency from the same address.
						</BlogContent>
						<BlogSubHeading>What Is MetaMask?</BlogSubHeading>    
						<BlogContent>
							MetaMask is one of the most popular crypto wallets that’s freely available as a smartphone app or web browser extension. You can download it directly onto your phone or your web browser similar to any browser extension.
							<br />
							<br />
							It is always connected to the internet so you can easily transfer your digital assets whenever you want. <BlogLink link="https://www.musixverse.com/">Musixverse</BlogLink> supports most of the crypto wallets, however, we recommend you to use the MetaMask wallet as it’s the most secure and easy-to-use wallet.
						</BlogContent> 
						<BlogSubHeading>How to Install the MetaMask Browser Extension</BlogSubHeading>
						<BlogContent>
							In this guide, we will install the MetaMask wallet on the Chrome browser. Even though the steps may slightly differ for other browsers, this guide will give you a general idea of what needs to be done.
							<br />
							<br />
							To get started with MetaMask, go to the official <BlogLink link="https://metamask.io/">website</BlogLink> and download the extension for your browser. For example, on Chrome, you will see the following screen:
						</BlogContent>   
						<BlogImage
							src={"https://miro.medium.com/max/828/1*7jSpRGJAsQexo4ov9muP9Q.webp"} 
							alt={"metamask official website"}
							width={768}
							height={400}
						/>
						<BlogContent>
							As soon as you have downloaded MetaMask, you will be able to see a small fox icon in the top right corner of your screen.
						</BlogContent>
						<BlogNoteContent>
							To make the extension more accessible on the browser bar, click on the grey puzzle icon to open your extensions. Then, next to the MetaMask extension, click the pin icon to pin it to your browser bar.
						</BlogNoteContent>
						<BlogSubHeading>Step 2: Provide Comprehensive Details</BlogSubHeading>
						<BlogImage
							src={"https://miro.medium.com/v2/resize:fit:828/format:webp/1*JbjH-5bEuVDVtF4RPJfSmg.png"}
							alt={"comprehensive details"}
							width={768}
							height={400}
						/>
						<BlogSubHeading>How to Set Up MetaMask Wallet on Your Browser</BlogSubHeading>
						<BlogContent>
							Now that you’ve added the extension to your browser, it’s time to head to MetaMask and create an account. Click on the MetaMask extension icon (fox icon) in your Chrome browser that’s located in the top right corner of the screen.
							<br />
							<br />
							Once MetaMask is open, you will be prompted to either “Import wallet” or “Create a Wallet”. Now, since you are setting up your MetaMask account for the first time, select the latter.
						</BlogContent>
						<BlogImage
							src={"https://miro.medium.com/max/828/1*QvsatItfVNmV7dlJ0p_SiQ.webp"}
							alt={"create password metamask"}
							width={768}
							height={400}
						/>
						<BlogContent>
							Once you’ve opted to create a new account, you will be asked to accept the terms of use, and then create a new password. You can set your password to whatever you want.
						</BlogContent>
						<BlogImage
							src={"https://miro.medium.com/max/828/1*2OX_Mxj7F5pSJkOjzz_BWg.webp"}
							alt={"secret key screen"}
							width={768}
							height={400}
						/>
						<BlogContent>
							After this, you’ll come across a 12-word ‘Seed Phrase’. It’s kind of like a master password that allows you to access the crypto stored within. DO NOT FORGET to write it down somewhere safe. It’s very important.
						</BlogContent>
						<BlogImage
							src={"https://miro.medium.com/max/828/1*JYzm-NG9lpCWlNZ-MGR-zA.webp"}
							alt={"confirm secret key screen"}
							width={768}
							height={400}
						/>
						<BlogContent>
							Now you’ll need to verify your secret phrase. Verify the phrase by selecting the previously generated phrase in the right order.
							<br />
							<br />
							Again, if you lose it, no one can help you recover the secret phrase, so it’s very important that you store it offline in some safe place. We suggest writing it down on paper. Do not share it with anyone, not even with your best friend :)
						</BlogContent>
						<BlogNoteContent>
							<ContentBold>Warning:</ContentBold>
							Musixverse will never ask you for your secret seed phrase. You should always keep it to yourself. If you ever do get asked for these phrases, it’s likely a scam.
						</BlogNoteContent>
						<BlogContent>
							And that’s it! Your crypto wallet is all set up! Now you can use your wallet to house eye-catching NFTs and other tokens.
						</BlogContent>
						<BlogImage
							src={"https://miro.medium.com/max/828/1*8Bt-c_ZT_TIQUUojkLBiEg.webp"}
							alt={"metamask main wallet screen"}
							width={768}
							height={400}
						/>
						<BlogSubHeading>How to Set Up MetaMask on Mobile</BlogSubHeading>
						<BlogContent>
							The process of creating a crypto wallet on your mobile device is similar to the process of creating one on a desktop computer. Instead of downloading an extension for your browser, you need to download MetaMask from the App Store or Google Play store. As with the desktop process, the most important part is documenting your seed phrase so that you can use it to access your account from other devices.
						</BlogContent>
						<BlogNoteContent>
							MetaMask has asnwered some of the most <BlogLink link="https://metamask.io/faqs/">frequently asked questions</BlogLink> that one might come across. Look over it if you ever feel the need.
							<br />
							<br />
							Anyways, if you come across any problem while buying an NFT or anything else, you can always reach out to us at: <BlogLink link="mailto:contact@musixverse.com">contact@musixverse.com</BlogLink>
						</BlogNoteContent>
						<BlogSubHeading>Next Steps</BlogSubHeading>
						<BlogContent>
							Once your crypto wallet is ready, head over to <BlogLink link="https://musixverse.com/">musixverse.com</BlogLink> and click on the Connect Wallet button. Connect your wallet and sign up as an artist or a collector. Now, you’re ready to explore Musixverse!
						</BlogContent>
						<AboutUs />
					</div> 
				</div>
			</div>
		</>
	);
};

export default HowToSetupCryptoWallet;
