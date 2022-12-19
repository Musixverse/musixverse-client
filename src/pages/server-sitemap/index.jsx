import { getServerSideSitemap } from "next-sitemap";
import Moralis from "moralis/node";
import { PARSE_APP_ID, PARSE_SERVER_URL } from "../../config/constants";

export async function getServerSideProps(context) {
	try {
		await Moralis.start({ serverUrl: PARSE_SERVER_URL, appId: PARSE_APP_ID });

		const tokens = await Moralis.Cloud.run("fetchAllTokens");
		const fields = tokens.map((token) => ({
			loc: `${process.env.NEXT_PUBLIC_MUSIXVERSE_CLIENT_BASE_URL}/track/polygon/${token.tokenId}`,
			lastmod: token.block_timestamp.toISOString(),
		}));

		return getServerSideSitemap(context, fields);
	} catch (error) {
		return { notFound: true, props: {} };
	}
}

export default function ServerSitemap() {}
