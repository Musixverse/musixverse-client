/**
 * If the uploaded File is null, then the function shall return
 */
import axios from "axios";

async function uploadFileToIPFS(fileToUpload, setLoading) {
	if (fileToUpload === null) return null;

	const result = await axios.post(`${process.env.NEXT_PUBLIC_PARSE_SERVER_BASE_URL}/upload-file-to-ipfs`, fileToUpload, {
		maxContentLength: Infinity,
		maxBodyLength: Infinity,
		onUploadProgress: (progressEvent) => {
			var _percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
			setLoading((prevState) => ({
				...prevState,
				showProgressBar: true,
				progress: _percentage,
			}));
		},
	});
	const ipfsHash = result.data.ipfsHash;

	const ipfsUrl = process.env.NEXT_PUBLIC_IPFS_NODE_URL + ipfsHash;
	return ipfsUrl;
}

async function dataURLtoFile(dataurl, filename) {
	// eslint-disable-next-line prefer-const
	const arr = dataurl.split(",");
	const mime = arr[0].match(/:(.*?);/)[1];
	const bstr = atob(arr[1]);
	let n = bstr.length;
	const u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new File([u8arr], filename, { type: mime });
}

async function uploadBase64ToIPFS(Moralis, fileToUpload, fileType, setLoading) {
	if (fileToUpload === null) return null;

	const file = await dataURLtoFile(fileToUpload, `${fileType}.jpeg`);

	const formData = new FormData();
	formData.append("ethAddress", Moralis.User.current().attributes.ethAddress);
	formData.append("fileType", fileType);
	formData.append("file", file);

	const result = await axios.post(`${process.env.NEXT_PUBLIC_PARSE_SERVER_BASE_URL}/upload-file-to-ipfs`, formData, {
		maxContentLength: Infinity,
		maxBodyLength: Infinity,
		headers: {
			"Content-Type": "multipart/form-data",
		},
		onUploadProgress: (progressEvent) => {
			var _percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
			setLoading((prevState) => ({
				...prevState,
				showProgressBar: true,
				progress: _percentage,
			}));
		},
	});
	const ipfsHash = result.data.ipfsHash;

	const ipfsUrl = process.env.NEXT_PUBLIC_IPFS_NODE_URL + ipfsHash;
	return ipfsUrl;
}

async function uploadJSONToIPFS(Moralis, fileToUpload, fileType) {
	if (fileToUpload === null) return null;

	const ipfsHash = await fetch(`${process.env.NEXT_PUBLIC_PARSE_SERVER_BASE_URL}/upload-json-to-ipfs`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json; charset=utf-8",
			Connection: "keep-alive",
			Accept: "*",
		},
		maxContentLength: Infinity,
		maxBodyLength: Infinity,
		body: JSON.stringify({
			ethAddress: Moralis.User.current().attributes.ethAddress,
			file: fileToUpload,
			fileType: fileType,
		}),
	})
		.then((response) => response.json())
		.then((res) => res.ipfsHash);

	const ipfsUrl = process.env.NEXT_PUBLIC_IPFS_NODE_URL + ipfsHash;
	return ipfsUrl;
}

module.exports = {
	uploadFileToIPFS,
	uploadBase64ToIPFS,
	uploadJSONToIPFS,
};
