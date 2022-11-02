import Web3 from "web3";
import Moralis from "moralis";
// Importing contract abi, address, and other variables
import { MUSIXVERSE_FACET_CONTRACT_ABI } from "../../config/constants";

var MUSIXVERSE;

async function addPolygonNetwork() {
	const { ethereum } = window;

	try {
		await ethereum.request({
			method: "wallet_switchEthereumChain",
			params: [
				{
					chainId:
						process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK_ID === "80001"
							? "0x13881" // Hexadecimal version of 80001, prefixed with 0x
							: process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK_ID === "137"
							? "0x89" // Hexadecimal version of 137, prefixed with 0x
							: null,
				},
			],
		});
	} catch (error) {
		if (error.code === 4902) {
			try {
				await ethereum.request({
					method: "wallet_addEthereumChain",
					params: [
						{
							chainId:
								process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK_ID === "80001"
									? "0x13881" // Hexadecimal version of 80001, prefixed with 0x
									: process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK_ID === "137"
									? "0x89" // Hexadecimal version of 137, prefixed with 0x
									: null,
							chainName:
								process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK_ID === "80001"
									? "Polygon Mumbai Testnet"
									: process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK_ID === "137"
									? "Polygon Mainnet"
									: null,
							nativeCurrency: {
								name: "MATIC",
								symbol: "MATIC",
								decimals: 18,
							},
							rpcUrls:
								process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK_ID === "80001"
									? ["https://matic-mumbai.chainstacklabs.com/"]
									: process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK_ID === "137"
									? ["https://matic-mainnet.chainstacklabs.com"]
									: null,
							blockExplorerUrls:
								process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK_ID === "80001"
									? ["https://mumbai.polygonscan.com/"]
									: process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK_ID === "137"
									? ["https://polygonscan.com/"]
									: null,
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
		await addPolygonNetwork();
	} else if (ethereum) {
		await addPolygonNetwork();
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
	if (window.localStorage.walletconnect) {
		await Moralis.enableWeb3({ provider: "walletconnect" });

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
		return;
	}

	const { ethereum } = window;
	const callerAddress = Moralis.User.current().attributes.ethAddress;
	if (callerAddress === ethereum.selectedAddress) {
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
	} else {
		window.ethereum.request({
			method: "wallet_requestPermissions",
			params: [
				{
					eth_accounts: {},
				},
			],
		});
		throw { title: "User is not connected to the same wallet", message: "Please connect to the same wallet as your Musixverse account." };
	}
}

async function purchaseTrackNFT(tokenId, price) {
	const _tokenId = parseInt(tokenId).toString();

	if (window.localStorage.walletconnect) {
		await Moralis.enableWeb3({ provider: "walletconnect" });

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
		return;
	}

	const { ethereum } = window;
	const callerAddress = Moralis.User.current().attributes.ethAddress;

	if (callerAddress === ethereum.selectedAddress) {
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
	} else {
		window.ethereum.request({
			method: "wallet_requestPermissions",
			params: [
				{
					eth_accounts: {},
				},
			],
		});
		throw { title: "User is not connected to the same wallet", message: "Please connect to the same wallet as your Musixverse account." };
	}
}

async function purchaseReferredTrackNFT(tokenId, referrer, price) {
	const _tokenId = parseInt(tokenId).toString();

	if (window.localStorage.walletconnect) {
		await Moralis.enableWeb3({ provider: "walletconnect" });

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
		return;
	}

	const { ethereum } = window;
	const callerAddress = Moralis.User.current().attributes.ethAddress;
	if (callerAddress === ethereum.selectedAddress) {
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
	} else {
		window.ethereum.request({
			method: "wallet_requestPermissions",
			params: [
				{
					eth_accounts: {},
				},
			],
		});
		throw { title: "User is not connected to the same wallet", message: "Please connect to the same wallet as your Musixverse account." };
	}
}

async function updatePrice(tokenId, newPrice) {
	const _tokenId = parseInt(tokenId).toString();

	if (window.localStorage.walletconnect) {
		await Moralis.enableWeb3({ provider: "walletconnect" });

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
		return;
	}

	const { ethereum } = window;
	const callerAddress = Moralis.User.current().attributes.ethAddress;
	if (callerAddress === ethereum.selectedAddress) {
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
	} else {
		window.ethereum.request({
			method: "wallet_requestPermissions",
			params: [
				{
					eth_accounts: {},
				},
			],
		});
		throw { title: "User is not connected to the same wallet", message: "Please connect to the same wallet as your Musixverse account." };
	}
}

async function toggleOnSale(tokenId) {
	const _tokenId = parseInt(tokenId).toString();

	if (window.localStorage.walletconnect) {
		await Moralis.enableWeb3({ provider: "walletconnect" });

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
		return;
	}

	const { ethereum } = window;
	const callerAddress = Moralis.User.current().attributes.ethAddress;
	if (callerAddress === ethereum.selectedAddress) {
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
	} else {
		window.ethereum.request({
			method: "wallet_requestPermissions",
			params: [
				{
					eth_accounts: {},
				},
			],
		});
		throw { title: "User is not connected to the same wallet", message: "Please connect to the same wallet as your Musixverse account." };
	}
}

async function unlockableContentUri(tokenId, callerAddress) {
	const _tokenId = parseInt(tokenId);

	if (window.localStorage.walletconnect) {
		await Moralis.enableWeb3({ provider: "walletconnect" });

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

	const { ethereum } = window;
	if (callerAddress === ethereum.selectedAddress) {
		const options = {
			chain: "mumbai",
			contractAddress: process.env.NEXT_PUBLIC_MXV_DIAMOND_ADDRESS,
			functionName: "unlockableContentUri",
			abi: MUSIXVERSE_FACET_CONTRACT_ABI,
			params: { mxvTokenId: _tokenId, from: callerAddress },
		};
		const _unlockableContentUri = await Moralis.executeFunction(options);
		return _unlockableContentUri;
	} else {
		window.ethereum.request({
			method: "wallet_requestPermissions",
			params: [
				{
					eth_accounts: {},
				},
			],
		});
		throw { title: "User is not connected to the same wallet", message: "Please connect to the same wallet as your Musixverse account." };
	}
}

async function updateCommentOnToken(tokenId, comment) {
	const _tokenId = parseInt(tokenId);

	if (window.localStorage.walletconnect) {
		await Moralis.enableWeb3({ provider: "walletconnect" });

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
		return;
	}

	const { ethereum } = window;
	const callerAddress = Moralis.User.current().attributes.ethAddress;
	if (callerAddress === ethereum.selectedAddress) {
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
	} else {
		window.ethereum.request({
			method: "wallet_requestPermissions",
			params: [
				{
					eth_accounts: {},
				},
			],
		});
		throw { title: "User is not connected to the same wallet", message: "Please connect to the same wallet as your Musixverse account." };
	}
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
	addPolygonNetwork,
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
