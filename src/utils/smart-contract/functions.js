import Web3 from "web3";
import Moralis from "moralis";
// Importing contract abi, address, and other variables
import { MXV_CONTRACT_ABI, MXV_CONTRACT_ADDRESS, BLOCKCHAIN_NETWORK_ID, RPC_URL } from "./constants";
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

    const provider = new Web3.providers.HttpProvider(RPC_URL);
    window.web3 = new Web3(provider);

    const web3 = window.web3;
    MUSIXVERSE = await new web3.eth.Contract(MXV_CONTRACT_ABI, MXV_CONTRACT_ADDRESS);
    await Moralis.enableWeb3();
    console.log("Contract connected");

    if (ethereum && (await ethereum.request({ method: "net_version" })) !== BLOCKCHAIN_NETWORK_ID.toString()) {
        await addPolygonTestnetNetwork();
    } else if (ethereum) {
        await addPolygonTestnetNetwork();
        window.web3 = new Web3(ethereum);
    }

    // if ((await web3.eth.net.getId()) === BLOCKCHAIN_NETWORK_ID) {
    //     MUSIXVERSE = await new web3.eth.Contract(MXV_CONTRACT_ABI, MXV_CONTRACT_ADDRESS);
    //     await Moralis.enableWeb3();
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
    metadataURI,
    collaborators,
    percentageContributions,
    resaleRoyaltyPercentage,
    onSale,
    unlockTimestamp,
    callerAddress
) {
    const sendOptions = {
        contractAddress: MXV_CONTRACT_ADDRESS,
        functionName: "mintTrackNFT",
        abi: MXV_CONTRACT_ABI,
        params: {
            amount: numberOfCopies,
            price: price,
            URIHash: metadataURI,
            collaborators: collaborators,
            percentageContributions: percentageContributions,
            resaleRoyaltyPercentage: resaleRoyaltyPercentage,
            onSale: onSale,
            unlockTimestamp: unlockTimestamp,
        },
    };

    const transaction = await Moralis.executeFunction(sendOptions);
    // Wait until the transaction is confirmed
    await transaction.wait();
}

async function purchaseMusicNFT(tokenId, price, callerAddress) {
    const _tokenId = parseInt(tokenId).toString();
    // const _price = web3.utils.fromWei(price.toString(), 'Ether')
    await MUSIXVERSE.methods.purchaseMusicNFT(_tokenId).send({ from: callerAddress, value: price });
}

async function updatePrice(tokenId, newPrice, callerAddress) {
    const _tokenId = parseInt(tokenId).toString();
    await MUSIXVERSE.methods.updatePrice(_tokenId, newPrice).send({ from: callerAddress });
}

async function toggleOnSale(tokenId, callerAddress) {
    const _tokenId = parseInt(tokenId).toString();
    await MUSIXVERSE.methods.toggleOnSale(_tokenId).send({ from: callerAddress });
}

async function uri(tokenId) {
    const _tokenUri = await MUSIXVERSE.methods.uri(tokenId).call();
    return _tokenUri;
}

async function ownerOf(tokenId) {
    const _tokenId = parseInt(tokenId).toString();
    return await MUSIXVERSE.methods.ownerOf(_tokenId).call();
}

async function contractURI() {
    return await MUSIXVERSE.methods.contractURI().call();
}

async function baseURI() {
    return await MUSIXVERSE.methods.baseURI().call();
}

async function getRoyaltyInfo(tokenId) {
    const _tokenId = parseInt(tokenId).toString();
    return await MUSIXVERSE.methods.getRoyaltyInfo(_tokenId).call();
}

async function getCurrentNftPrice(tokenId) {
    const _tokenId = parseInt(tokenId).toString();
    if (MUSIXVERSE) {
        var musicNft;
        await MUSIXVERSE.methods
            .musicNFTs(_tokenId)
            .call()
            .then(function (result) {
                musicNft = result;
            });
        return musicNft;
    }
}

module.exports = {
    addPolygonTestnetNetwork,
    connectSmartContract,
    mintTrackNFT,
    purchaseMusicNFT,
    updatePrice,
    toggleOnSale,
    uri,
    ownerOf,
    contractURI,
    baseURI,
    getRoyaltyInfo,
    getCurrentNftPrice,
};
