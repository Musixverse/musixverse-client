import { Magic } from "magic-sdk";
import Web3 from "web3";

const polygonNodeOptions = {
	rpcUrl: "https://rpc-mumbai.maticvigil.com/",
	chainId: parseInt(process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK_ID),
};
export const magicMatic = new Magic(process.env.NEXT_PUBLIC_MAGICLINK_API_KEY, { network: polygonNodeOptions });
magicMatic.network = "matic";
export const magicWeb3 = new Web3(magicMatic.rpcProvider);
