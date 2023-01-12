import Moralis from "moralis/node";
import { PARSE_APP_ID, PARSE_SERVER_URL } from "../../../config/constants";

const config = {
	domain: process.env.APP_DOMAIN,
	statement: "Please sign this message to authenticate",
	uri: process.env.NEXTAUTH_URL,
	timeout: 60,
};

export default async function handler(req, res) {
	const { address, chain, network } = req.body;

	// await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });
	await Moralis.start({ serverUrl: PARSE_SERVER_URL, appId: PARSE_APP_ID });

	try {
		// const message = await Moralis.Auth.requestMessage({
		// 	address,
		// 	chain,
		// 	network,
		// 	...config,
		// });
		const data = await Moralis.Cloud.run("requestMessage", {
			address: address,
			chain: chain,
			networkType: network,
		});

		// console.log(data.message);

		res.status(200).json(data);
	} catch (error) {
		res.status(400).json({ error });
		console.error(error);
	}
}
