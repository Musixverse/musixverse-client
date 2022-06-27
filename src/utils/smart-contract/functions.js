import Web3 from "web3";
// Importing contract abi, address, and other variables
import { MXV_CONTRACT_ABI, MXV_CONTRACT_ADDRESS } from "./constants";
var MUSIXVERSE;

async function connectSmartContract() {
    const { ethereum } = window;

    async function addPolygonTestnetNetwork() {
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

    if (ethereum) {
        window.web3 = new Web3(ethereum);
        await addPolygonTestnetNetwork();
    } else if (ethereum && (await ethereum.request({ method: "net_version" })) !== "80001") {
        window.web3 = new Web3(window.web3.currentProvider);
        await addPolygonTestnetNetwork();
    } else {
        window.web3 = new Web3(new Web3.providers.HttpProvider("https://speedy-nodes-nyc.moralis.io/9aef181628e87a4be542999f/polygon/mumbai"));
        // window.alert(
        //     "Non-Ethereum browser detected. You cannot perform any transactions on the blockchain, however you will still be able to watch all content present on the blockchain. To make transactions you should consider installing Metamask"
        // );
    }

    const web3 = window.web3;
    MUSIXVERSE = await new web3.eth.Contract(MXV_CONTRACT_ABI, MXV_CONTRACT_ADDRESS);
    console.log("Contract connected");
}

async function mintTrackNFT(numberOfCopies, price, metadataURIs, contributors, percentageContributions, resaleRoyaltyPercentage, onSale, callerAddress) {
    await MUSIXVERSE.methods
        .mintTrackNFT(numberOfCopies, price, metadataURIs, contributors, percentageContributions, resaleRoyaltyPercentage, onSale)
        .send({ from: callerAddress });
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

module.exports = { connectSmartContract, mintTrackNFT, purchaseMusicNFT, updatePrice, toggleOnSale, uri, ownerOf, contractURI, baseURI, getRoyaltyInfo };
