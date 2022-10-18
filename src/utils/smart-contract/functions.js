import Web3 from "web3";
import Moralis from "moralis";
// Importing contract abi, address, and other variables
import { MUSIXVERSE_FACET_CONTRACT_ABI } from "../../constants";
var MUSIXVERSE;

async function addPolygonTestnetNetwork() {
	const { ethereum } = window;

	try {
		await ethereum.request({
			method: "wallet_switchEthereumChain",
			params: [{ chainId: "0x13881" }], // Hexadecimal version of 80001, prefixed with 0x
		});
	} catch (error) {
		if (error.code === 4902) {
			try {
				await ethereum.request({
					method: "wallet_addEthereumChain",
					params: [
						{
							chainId: "0x13881", // Hexadecimal version of 80001, prefixed with 0x
							chainName: "POLYGON Testnet",
							nativeCurrency: {
								name: "MATIC",
								symbol: "MATIC",
								decimals: 18,
							},
							rpcUrls: ["https://matic-mumbai.chainstacklabs.com/"],
							blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
							iconUrls: [""],
						},
					],
				});
			} catch (addError) {
				console.log("Did not add network");
			}
		}
	}
}

async function connectSmartContract() {
	const { ethereum } = window;

	const provider = new Web3.providers.HttpProvider(process.env.NEXT_PUBLIC_RPC_URL);
	window.web3 = new Web3(provider);

	const web3 = window.web3;
	MUSIXVERSE = await new web3.eth.Contract(MUSIXVERSE_FACET_CONTRACT_ABI, process.env.NEXT_PUBLIC_MXV_DIAMOND_ADDRESS);
	console.log("Contract connected");

	if (ethereum && (await ethereum.request({ method: "net_version" })) !== process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK_ID.toString()) {
		await addPolygonTestnetNetwork();
	} else if (ethereum) {
		await addPolygonTestnetNetwork();
		window.web3 = new Web3(ethereum);
	}

	// if ((await web3.eth.net.getId()) === process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK_ID) {
	//     MUSIXVERSE = await new web3.eth.Contract(MUSIXVERSE_FACET_CONTRACT_ABI, process.env.NEXT_PUBLIC_MXV_DIAMOND_ADDRESS);
	//     console.log("Contract connected");
	// }

	// if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) != -1) {
	//     alert("Opera");
	// } else if (navigator.userAgent.indexOf("Edg") != -1) {
	//     alert("Edge");
	// } else if (navigator.userAgent.indexOf("Chrome") != -1) {
	//     alert("Chrome");
	// } else if (navigator.userAgent.indexOf("Safari") != -1) {
	//     alert("Safari");
	// } else if (navigator.userAgent.indexOf("Firefox") != -1) {
	//     alert("Firefox");
	// } else if (navigator.userAgent.indexOf("MSIE") != -1 || !!document.documentMode == true) {
	//     //IF IE > 10
	//     alert("IE");
	// } else {
	//     alert("unknown");
	// }
}

async function mintTrackNFT(
	numberOfCopies,
	price,
	metadataHash,
	unlockableContentURIHash,
	collaborators,
	percentageContributions,
	resaleRoyaltyPercentage,
	onSale,
	unlockTimestamp
) {
	const sendOptions = {
		contractAddress: process.env.NEXT_PUBLIC_MXV_DIAMOND_ADDRESS,
		functionName: "mintTrackNFT",
		abi: MUSIXVERSE_FACET_CONTRACT_ABI,
		params: {
			data: [
				numberOfCopies,
				Moralis.Units.Token(String(price), "18"),
				metadataHash,
				unlockableContentURIHash,
				collaborators,
				percentageContributions,
				resaleRoyaltyPercentage,
				onSale,
				unlockTimestamp,
			],
		},
	};

	const transaction = await Moralis.executeFunction(sendOptions);
	// Wait until the transaction is confirmed
	await transaction.wait();
}

async function purchaseTrackNFT(tokenId, price) {
	const _tokenId = parseInt(tokenId).toString();

	const sendOptions = {
		contractAddress: process.env.NEXT_PUBLIC_MXV_DIAMOND_ADDRESS,
		functionName: "purchaseTrackNFT",
		abi: MUSIXVERSE_FACET_CONTRACT_ABI,
		params: {
			tokenId: _tokenId,
		},
		msgValue: Moralis.Units.Token(String(price), "18"),
	};

	const transaction = await Moralis.executeFunction(sendOptions);
	// Wait until the transaction is confirmed
	await transaction.wait();
}

async function purchaseReferredTrackNFT(tokenId, referrer, price) {
	const _tokenId = parseInt(tokenId).toString();

	const sendOptions = {
		contractAddress: process.env.NEXT_PUBLIC_MXV_DIAMOND_ADDRESS,
		functionName: "purchaseReferredTrackNFT",
		abi: MUSIXVERSE_FACET_CONTRACT_ABI,
		params: {
			tokenId: _tokenId,
			referrer: referrer,
		},
		msgValue: Moralis.Units.Token(String(price), "18"),
	};

	const transaction = await Moralis.executeFunction(sendOptions);
	// Wait until the transaction is confirmed
	await transaction.wait();
}

async function updatePrice(tokenId, newPrice) {
	const _tokenId = parseInt(tokenId).toString();

	const sendOptions = {
		contractAddress: process.env.NEXT_PUBLIC_MXV_DIAMOND_ADDRESS,
		functionName: "updatePrice",
		abi: MUSIXVERSE_FACET_CONTRACT_ABI,
		params: {
			tokenId: _tokenId,
			newPrice: Moralis.Units.Token(String(newPrice), "18"),
		},
	};

	const transaction = await Moralis.executeFunction(sendOptions);
	// Wait until the transaction is confirmed
	await transaction.wait();
}

async function toggleOnSale(tokenId) {
	const _tokenId = parseInt(tokenId).toString();

	const sendOptions = {
		contractAddress: process.env.NEXT_PUBLIC_MXV_DIAMOND_ADDRESS,
		functionName: "toggleOnSale",
		abi: MUSIXVERSE_FACET_CONTRACT_ABI,
		params: {
			tokenId: _tokenId,
		},
	};

	const transaction = await Moralis.executeFunction(sendOptions);
	// Wait until the transaction is confirmed
	await transaction.wait();
}

async function unlockableContentUri(tokenId, callerAddress) {
	const _tokenId = parseInt(tokenId);

	const options = {
		chain: "mumbai",
		contractAddress: process.env.NEXT_PUBLIC_MXV_DIAMOND_ADDRESS,
		functionName: "unlockableContentUri",
		abi: MUSIXVERSE_FACET_CONTRACT_ABI,
		params: { mxvTokenId: _tokenId, from: callerAddress },
	};
	const _unlockableContentUri = await Moralis.executeFunction(options);
	return _unlockableContentUri;
}

async function updateCommentOnToken(tokenId, comment) {
	const _tokenId = parseInt(tokenId);

	const options = {
		chain: "mumbai",
		contractAddress: process.env.NEXT_PUBLIC_MXV_DIAMOND_ADDRESS,
		functionName: "updateCommentOnToken",
		abi: MUSIXVERSE_FACET_CONTRACT_ABI,
		params: {
			_tokenId: _tokenId,
			_comment: comment,
		},
	};

	const transaction = await Moralis.executeFunction(options);
	// Wait until the transaction is confirmed
	await transaction.wait();
}

// async function uri(tokenId) {
// 	const _tokenUri = await MUSIXVERSE.methods.uri(tokenId).call();
// 	return _tokenUri;
// }

// async function ownerOf(tokenId) {
// 	const _tokenId = parseInt(tokenId).toString();
// 	return await MUSIXVERSE.methods.ownerOf(_tokenId).call();
// }

// async function contractURI() {
// 	return await MUSIXVERSE.methods.contractURI().call();
// }

// async function baseURI() {
// 	return await MUSIXVERSE.methods.baseURI().call();
// }

// async function getRoyaltyInfo(tokenId) {
// 	const _tokenId = parseInt(tokenId).toString();
// 	return await MUSIXVERSE.methods.getRoyaltyInfo(_tokenId).call();
// }

// async function getCurrentNftPrice(tokenId) {
// 	const _tokenId = parseInt(tokenId).toString();
// 	if (MUSIXVERSE) {
// 		var trackNft;
// 		await MUSIXVERSE.methods
// 			.trackNFTs(_tokenId)
// 			.call()
// 			.then(function (result) {
// 				trackNft = result;
// 			});
// 		return trackNft;
// 	}
// }

module.exports = {
	addPolygonTestnetNetwork,
	connectSmartContract,
	mintTrackNFT,
	purchaseTrackNFT,
	purchaseReferredTrackNFT,
	updatePrice,
	toggleOnSale,
	unlockableContentUri,
	updateCommentOnToken,
	// uri,
	// ownerOf,
	// contractURI,
	// baseURI,
	// getRoyaltyInfo,
	// getCurrentNftPrice,
};
