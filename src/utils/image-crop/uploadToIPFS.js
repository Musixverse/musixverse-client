/**
 * If the uploaded File is null, then the hook shall return
 */

export default function uploadToIPFS(Moralis, uploadedFile) {
    const uploadFileOnIPFS = async () => {
        if (uploadedFile === null) return null;
        const file = new Moralis.File("file", uploadedFile);
        await file.saveIPFS();
        return file.ipfs();
    };
    return uploadFileOnIPFS;
}
