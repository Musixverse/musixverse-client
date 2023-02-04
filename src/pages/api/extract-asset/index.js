const Jimp = require("jimp");
// const puppeteer = require("puppeteer");
const chrome = require('chrome-aws-lambda');

let puppeteer;

if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
//   chrome = require('chrome-aws-lambda');
  puppeteer = require('puppeteer-core');
} else {
  // running locally.
  puppeteer = require('puppeteer');
}

export default async function handler(req, res) {
	try {
		const mxv_logo = `<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width="142.123" height="28.264" viewBox="0 0 142.123 28.264"> <defs> <style>.cls-1{fill: #fff;}</style> </defs> <g id="Layer_1" data-name="Layer 1"> <ellipse id="Ellipse_1" data-name="Ellipse 1" class="cls-1" cx="3.834" cy="3.648" rx="3.834" ry="3.648" transform="translate(2.546 20.325)"/> <path id="Path_1" data-name="Path 1" class="cls-1" d="M381.842,28.259l-16.147-.066-5.912-7.657L352.3,28.194H335.6l1.472-1.507L363.021,0h17.025l-.009,2.038c-.384.014-.7.013-.913.01a2.815,2.815,0,0,0-.676.027,1.764,1.764,0,0,0-.648.28l-1.01.929c-1.378,1.272-2.409,2.32-4.323,4.306-1.031,1.066-2.186,2.268-3.448,3.589L379.682,25.3a4.352,4.352,0,0,0,1.014.591,4.575,4.575,0,0,0,1.149.307Z" transform="translate(-286.188 0.004)"/> <path id="Path_2" data-name="Path 2" class="cls-1" d="M667.87,0h14.712l14.871,28.194H683.568c-.894-1.739-12.44-24.148-13.387-25.306a2.639,2.639,0,0,0-.808-.654,2.7,2.7,0,0,0-1.5-.216Z" transform="translate(-569.536 0.004)"/> <path id="Path_3" data-name="Path 3" class="cls-1" d="M200.772,26.2l.018,1.961H184.08q.019-1.027.038-2.057a1.674,1.674,0,0,0,.939-.375,1.646,1.646,0,0,0,.537-1.394q.186-10.95.052-22.125-.013-1.121-.031-2.241h16.14L201.7,2.015a6.558,6.558,0,0,0-.789,0,1.845,1.845,0,0,0-1.256.373,1.4,1.4,0,0,0-.327,1.184L199.3,24.305a1.72,1.72,0,0,0,.286,1.128A1.919,1.919,0,0,0,200.772,26.2Z" transform="translate(-156.977 0.03)"/> <path id="Path_4" data-name="Path 4" class="cls-1" d="M15.647.024c1.193,2.26,2.235,4.4,3.428,6.458,2.341,4.043,4.745,8.054,7.178,12.048a1.082,1.082,0,0,1-.19,1.464l-5.557,6.764c-.168.206-.349.4-.505.615-.817,1.121-1.472,1.093-2.194-.052-2.519-4.028-5.019-8.067-7.583-12.069C7.484,10.976,4.681,6.736,1.9,2.484a1.7,1.7,0,0,0-.465-.471A2.24,2.24,0,0,0,.009,1.7L0,0Z" transform="translate(0 0.004)"/> <path id="Path_5" data-name="Path 5" class="cls-1" d="M329.91,0H346.5l3.335,4.063q-3.882,3.8-7.706,7.922-.442.474-.87.944a.665.665,0,0,1-.427.184.7.7,0,0,1-.549-.28c-4.226-5.324-7.293-9.187-7.774-9.84a2.1,2.1,0,0,0-.764-.663,2.163,2.163,0,0,0-1.014-.224l-.77.01Q329.935,1.061,329.91,0Z" transform="translate(-281.336 0.004)"/> <path id="Path_6" data-name="Path 6" class="cls-1" d="M841.9,0h18.166V1.994a3.6,3.6,0,0,0-1.914.454A3.184,3.184,0,0,0,857.1,3.471c-.5.754-2.58,4.55-5.3,9.806l-.932,1.7a.749.749,0,0,1-.451.227.832.832,0,0,1-.805-.524Z" transform="translate(-717.943 0.004)"/> </g></svg>`;
		const { artistName, songName, numberOfCopies, coverArtURL, artistProfilePicture } = req.body;
		let style = `<html><head><style>@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;500;600;700&display=swap');*{box-sizing:border-box;}body,html{margin:0;padding:0;box-sizing:border-box;}.asset-container{display:flex;flex-direction:column;width:1080px;height:1920px;}.upper-body{background-image:url(${coverArtURL});background-repeat:no-repeat;background-size:cover;width:1080px;height:1067px;position:relative;}.upper-intro{poition:absolute;top:0;left:0;width:1080px;height:100%;background-color:rgba(0,0,0,0.6);}.info-div{padding:6rem;display:flex;flex-direction:column;height:100%;justify-content:space-between;}.top-header{display:flex;width:100%;justify-content:space-between;align-items:flex-start;}.upper-intro p{margin:0;width:fit-content;color:white;font-family:'Bebas Neue',cursive;font-size:52px;font-weight:500;}p.mint-text{letter-spacing:0.15mm;}.upper-intro .mint-text{padding-inline:2.5rem;padding-block:0.5rem;background-color:#6cc027;border-radius:2.5rem;}.num-copies{display:flex;flex-direction:column;align-items:flex-end;}.num-copies p:first-child{line-height:1;font-size:103px;font-weight:500;text-align:right;}.num-copies p:last-child{line-height:1;font-size:25px;font-family:'Poppins',sans-serif;font-weight:600;}.bottom-header h1{color:white;font-family:'Poppins',sans-serif;font-size:86px;line-height:1.15;}.lower-body{background-color:#000;display:flex;flex-direction:column;height:853px;width:1080px;padding:6rem}.song-title{color:#57c001;font-size:150px;line-height:1;font-family:'Bebas Neue',cursive;font-weight:500;margin:0 0 1.75rem}.artist-info div p,.footer{color:#fff;font-family:Poppins,sans-serif}.artist-info{display:flex;align-items:center}.artist-profile-pic{width:100px;height:100px;border-radius:50%}.artist-info div p{margin:0 0 0 2.25rem;font-weight:600}.artist-info div p:first-child{font-size:25px}.artist-name{display:flex;align-items:flex-end}.artits-name img{margin-left:1rem}.artist-info div p:last-child{font-size:39px}.footer{display:flex;margin-top:auto;flex-direction:column}.footer p:first-child{font-weight:600;font-size:25px}.footer p:last-child{color:grey;font-size:12px}</style></head><body>`;
		let upperBody =
			`<div class="asset-container"><div class="upper-body"><div class="upper-intro"><div class="info-div"><div class="top-header"><p class="mint-text">JUST MINTED</p><div class="num-copies"><p>#${numberOfCopies}</p><p>Copies Remaining</p></div></div><div class="bottom-header"><h1>Check out <br> my new NFT!</h1></div></div></div></div><div class="lower-body"> <h1 class="song-title">${songName}</h1> <div class="artist-info"> <img src=${artistProfilePicture} class="artist-profile-pic"> <div> <p>Song by</p><div class="artist-name"> <p>` +
			artistName +
			`</p></div></div></div><div class="footer"> <p>Minted On</p>${mxv_logo}<br> <p>Your NFT comes with exclusive perks that are only available to you, the NFT owner, as long as you continue to own the NFT.<br>The artist appreciates your support and has put together self-curated items exclusively for you.</p></div></div></div></body></html>`;
		const html = style + upperBody;

		const browser = await puppeteer.launch({
			args: [...chrome.args, '--hide-scrollbars', '--disable-web-security'],
			defaultViewport: chrome.defaultViewport,
			executablePath: await chrome.executablePath,
			headless: true,
			ignoreHTTPSErrors: true,
		});
		const page = await browser.newPage();
		await page.setViewport({ width: 1080, height: 1920 });
		if (artistName && songName && numberOfCopies) {
			await page.setContent(html);
		}
		const buffer = await page.screenshot({
			encoding: "binary",
			type: "png",
		});
		await browser.close();
		const image = await Jimp.read(buffer);
		const pngBuffer = await image.getBufferAsync(Jimp.MIME_PNG);
		res.setHeader("Content-Type", "image/png");
		res.statusCode = 200;
		res.json({ buffer: "data:image/png;base64," + pngBuffer.toString("base64") });
	} catch (error) {
		console.log(error);
		res.statusCode = 500;
		return res.json({ error: "Something went wrong" });
	}
}
