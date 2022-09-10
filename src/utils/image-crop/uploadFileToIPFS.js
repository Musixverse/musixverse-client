/**
 * If the uploaded File is null, then the function shall return
 */

export default async function uploadFileToIPFS(Moralis, fileToUpload) {
	if (fileToUpload === null) return null;
	const file = new Moralis.File("file", fileToUpload);
	console.log("we have file", file);
	await file.saveIPFS();
	console.log("file is saved on ipfs");
	return file.ipfs();
}
