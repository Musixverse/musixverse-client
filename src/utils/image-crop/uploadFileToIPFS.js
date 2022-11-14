/**
 * If the uploaded File is null, then the function shall return
 */

export default async function uploadFileToIPFS(Moralis, fileToUpload, fileType) {
	if (fileToUpload === null) return null;

	const result = await Moralis.Cloud.run("uploadtoIPFS", {
		fileToUpload: fileToUpload,
		ethAddress: Moralis.User.current().attributes.ethAddress,
		fileType: fileType,
	});
	return result[0].path;
}
