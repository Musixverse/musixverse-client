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
        window.alert(
            "Non-Ethereum browser detected. You cannot perform any transactions on the blockchain, however you will still be able to watch all content present on the blockchain. To make transactions you should consider installing Metamask"
        );
    }

    const web3 = window.web3;
    MUSIXVERSE = await new web3.eth.Contract(MXV_CONTRACT_ABI, MXV_CONTRACT_ADDRESS);
    console.log("Contract connected");
}

async function mintTrackNFT(numberOfCopies, price, metadataURIs, contributors, percentageContributions, onSale, address) {
    // window.web3.utils.toWei(_price, "Ether"),
    // await MUSIXVERSE.methods.mintTrackNFT(numberOfCopies, price, metadataURIs, contributors, percentageContributions, onSale).send({ from: address });
    await MUSIXVERSE.methods.mintTrackNFT(numberOfCopies, metadataURIs, contributors, percentageContributions).send({ from: address });
}

async function uri(tokenId) {
    const _tokenUri = await MUSIXVERSE.methods.uri(tokenId).call();
    return _tokenUri;
}

// async function purchaseSong(id, price, _artistAddress, _artistName) {
//     const _id = parseInt(id).toString();
//     // const _price = web3.utils.fromWei(price.toString(), 'Ether')

//     setLoading(true);

//     musixverse.methods
//         .purchaseSong(_id)
//         .send({ from: account, value: price })
//         .once("receipt", async (receipt) => {
//             if (account !== _artistAddress) {
//                 await createMessagingChannel(_artistAddress, _artistName);
//                 await createTeamChannel(_artistAddress, _artistName);
//             }
//             setLoading(false);
//             setShowTradeSuccess(true);
//         })
//         .catch(function (error) {
//             setLoading(false);
//             setShowError(true);
//             // if (error.code === 4001) {
//             // 	window.location.reload();
//             // }
//         });
// }

module.exports = { connectSmartContract, mintTrackNFT, uri };
