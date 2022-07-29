import Head from "next/head";
import { MXV_CONTRACT_ADDRESS } from "../utils/smart-contract/constants";

function contractMetadataURI() {
    const contractMetadata = {
        name: "Musixverse",
        description: "Powering music ownership and distribution across the web and beyond.",
        image: "external-link-url/image.png",
        external_link: "https://www.musixverse.com",
        seller_fee_basis_points: 100,
        fee_recipient: MXV_CONTRACT_ADDRESS,
    };

    return (
        <>
            <Head>
                <title>Musixverse | Contract Metadata URI</title>
                <meta name="description" content="Musixverse is a Music NFT marketplace that will bring Artists and Fans together like never before and unlock novel models of communications and commerce." />
            </Head>

            <div className="mt-20">{JSON.stringify(contractMetadata)}</div>
        </>
    );
}

export default contractMetadataURI;
