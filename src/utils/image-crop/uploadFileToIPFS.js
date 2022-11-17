/**
 * If the uploaded File is null, then the function shall return
 */

export default async function uploadFileToIPFS(fileToUpload) {
	if (fileToUpload === null) return null;

	const ipfsUrl = await fetch(`${process.env.NEXT_PUBLIC_PARSE_SERVER_BASE_URL}/upload-file-to-ipfs`, {
		method: "POST",
		body: fileToUpload,
	})
		.then((response) => response.json())
		.then((res) => res.ipfsUrl);

	return ipfsUrl;
}
