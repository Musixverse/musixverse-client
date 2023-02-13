import Image from 'next/image';

export default function ReadSection() {
	return (
		<div className="flex flex-col items-center justify-center w-full">
			<h1 className="text-center text-3xl font-semibold">Recommended Reads</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 font-medium">	
				<div className="group max-w-sm bg-light-100 rounded-lg cursor-pointer dark:bg-dark-600 shadow hover:shadow-lg hover:scale-105 transition-all duration-700">
					<a href="https://musixverse.com/help-center/blog/how-to-create-nft-on-musixverse" target="_blank" rel="noopener noreferrer">
						<img className="rounded-t-lg brightness-50 duration-700 group-hover:brightness-90" src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*VrXkEv2wJABf4l1bbZi_QQ.png" alt="blog coversart" />
					</a>
					<div className="p-5 text-lg font-primary dark:text-white">
						<a href="https://musixverse.com/help-center/blog/how-to-create-nft-on-musixverse" target="_blank" rel="noopener noreferrer">
							<h5 className="mb-2 tracking-tight">How to Create an NFT on Musixverse</h5>
						</a>
					</div>
				</div>
				<div className="group max-w-sm bg-light-100 rounded-lg cursor-pointer dark:bg-dark-600 shadow hover:shadow-lg hover:scale-105 transition-all duration-700">
					<a href="https://musixverse.com/help-center/blog/how-to-buy-nft-on-musixverse" target="_blank" rel="noopener noreferrer">
						<img className="rounded-t-lg brightness-50 duration-700 group-hover:brightness-90" src="https://miro.medium.com/max/828/1*DA2o69E8lKgnBYD3m61sXQ.webp" alt="blog coversart" />
					</a>
					<div className="p-5 text-lg font-primary dark:text-white">
						<a href="https://musixverse.com/help-center/blog/how-to-buy-nft-on-musixverse" target="_blank" rel="noopener noreferrer">
							<h5 className="mb-2 tracking-tight ">How to Buy an NFT on Musixverse</h5>
						</a>
					</div>
				</div>
				<div className="group max-w-sm bg-light-100 rounded-lg cursor-pointer dark:bg-dark-600 shadow hover:shadow-lg hover:scale-105 transition-all duration-700">
					<a href="https://musixverse.com/help-center/blog/how-to-sell-nft-on-musixverse" target="_blank" rel="noopener noreferrer">
						<img className="rounded-t-lg brightness-50 duration-700 group-hover:brightness-90" src="https://miro.medium.com/max/828/1*feHh7Sz1_LGE-sN_lzFgCA.webp" alt="blog coversart" />
					</a>
					<div className="p-5 text-lg font-primary dark:text-white">
						<a href="https://musixverse.com/help-center/blog/how-to-sell-nft-on-musixverse" target="_blank" rel="noopener noreferrer">
							<h5 className="mb-2 tracking-tight ">How to Sell an NFT on Musixverse?</h5>
						</a>
					</div>
				</div>
				<div className="group max-w-sm bg-light-100 rounded-lg cursor-pointer dark:bg-dark-600 shadow hover:shadow-lg hover:scale-105 transition-all duration-700">
					<a href="https://musixverse.com/help-center/blog/how-to-setup-cryptowallet" target="_blank" rel="noopener noreferrer">
						<img className="rounded-t-lg brightness-50 duration-700 group-hover:brightness-90" src="https://miro.medium.com/max/828/1*UABrYoWh8IJqSEdGzLWXPA.webp" alt="blog coversart" />
					</a>
					<div className="p-5 text-lg font-primary dark:text-white">
						<a href="https://musixverse.com/help-center/blog/how-to-setup-cryptowallet" target="_blank" rel="noopener noreferrer">
							<h5 className="mb-2 tracking-tight ">How to Set Up a Crypto Wallet (MetaMask)?</h5>
						</a>
					</div>
				</div>
				<div className="group max-w-sm bg-light-100 rounded-lg cursor-pointer dark:bg-dark-600 shadow hover:shadow-lg hover:scale-105 transition-all duration-700">
					<a href="https://musixverse.com/help-center/blog/musixverse-nft-guidelines" target="_blank" rel="noopener noreferrer">
						<img className="rounded-t-lg brightness-50 duration-700 group-hover:brightness-90" src="https://miro.medium.com/max/828/1*u7NsPO8ojCpvAEeRUzNLRg.webp" alt="blog coversart" />
					</a>
					<div className="p-5 text-lg font-primary dark:text-white">
						<a href="https://musixverse.com/help-center/blog/musixverse-nft-guidelines" target="_blank" rel="noopener noreferrer">
							<h5 className="mb-2 tracking-tight ">Musixverse NFT Guidelines</h5>
						</a>
					</div>
				</div>
				<div className="group max-w-sm  bg-light-100 rounded-lg cursor-pointer dark:bg-dark-600 shadow hover:shadow-lg hover:scale-105 transition-all duration-700">
					<a href="https://musixverse.com/help-center/blog/how-to-publish-nft-on-instagram" target="_blank" rel="noopener noreferrer">
						<img className="rounded-t-lg brightness-50 duration-700 group-hover:brightness-90" src="https://miro.medium.com/max/828/1*MorOJCgmP_NajIVAwqiBWg.webp" alt="blog coversart" />
					</a>
					<div className="p-5 text-lg font-primary dark:text-white">
						<a href="https://musixverse.com/help-center/blog/how-to-publish-nft-on-instagram" target="_blank" rel="noopener noreferrer">
							<h5 className="mb-2 tracking-tight ">How to Publish Your Musixverse NFTs on Instagram?</h5>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
