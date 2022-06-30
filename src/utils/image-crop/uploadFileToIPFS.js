/**
 * If the uploaded File is null, then the function shall return
 */

export default async function uploadFileToIPFS(Moralis, fileToUpload) {
    if (fileToUpload === null) return null;
    const file = new Moralis.File("file", fileToUpload);
    await file.saveIPFS();
    return file.ipfs();
}
