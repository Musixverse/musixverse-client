import Head from "next/head";
import { meta_description } from "../config/constants";

function contractMetadataURI() {
	const contractMetadata = {
		name: "Musixverse",
		description: "Powering music ownership and distribution across the web and beyond.",
		image: "external-link-url/image.png",
		external_link: "https://www.musixverse.com",
		seller_fee_basis_points: 100,
		fee_recipient: process.env.NEXT_PUBLIC_MXV_DIAMOND_ADDRESS,
	};

	return (
		<>
			<Head>
				<title>Musixverse | Contract Metadata URI</title>
				<meta name="description" content={meta_description} />
			</Head>

			<div className="mt-20">{JSON.stringify(contractMetadata)}</div>
		</>
	);
}

export default contractMetadataURI;
