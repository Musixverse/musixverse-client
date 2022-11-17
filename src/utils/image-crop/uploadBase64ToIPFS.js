export default async function uploadBase64ToIPFS(Moralis, fileToUpload, fileType) {
	if (fileToUpload === null) return null;

	const ipfsUrl = await fetch(`${process.env.NEXT_PUBLIC_PARSE_SERVER_BASE_URL}/upload-base64-to-ipfs`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json; charset=utf-8",
			Connection: "keep-alive",
			Accept: "*",
		},
		body: JSON.stringify({
			file: fileToUpload,
			ethAddress: Moralis.User.current().attributes.ethAddress,
			fileType: fileType,
		}),
	})
		.then((response) => response.json())
		.then((res) => res.ipfsUrl);

	return ipfsUrl;
}
