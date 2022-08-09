import Head from "next/head";
import { MXV_DIAMOND_ADDRESS } from "../constants";

function contractMetadataURI() {
	const contractMetadata = {
		name: "Musixverse",
		description: "Powering music ownership and distribution across the web and beyond.",
		image: "external-link-url/image.png",
		external_link: "https://www.musixverse.com",
		seller_fee_basis_points: 100,
		fee_recipient: MXV_DIAMOND_ADDRESS,
	};

	return (
		<>
			<Head>
				<title>Musixverse | Contract Metadata URI</title>
				<meta name="description" content="Powering music ownership and provenance across the web and beyond" />
			</Head>

			<div className="mt-20">{JSON.stringify(contractMetadata)}</div>
		</>
	);
}

export default contractMetadataURI;
