import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import Link from "next/link";
import { MXV_CONTRACT_ADDRESS, BLOCKCHAIN_NETWORK } from "../../utils/smart-contract/constants";
import NFTCard from "../../layout/NFTCard/NFTCard";

const DisplayNFTs = () => {
    const { Moralis, isInitialized } = useMoralis();
    const [tokens, setTokens] = useState([]);

    const fetchTokens = async () => {
        const options = {
            address: MXV_CONTRACT_ADDRESS,
            chain: BLOCKCHAIN_NETWORK,
        };
        const nftData = await Moralis.Web3API.token.getNFTOwners(options);
        setTokens(nftData.result);
    };

    useEffect(() => {
        console.log("Tokens:", tokens);
    }, [tokens]);

    useEffect(() => {
        if (isInitialized) {
            fetchTokens();
        }
    }, [isInitialized]);

    return (
        <div className="flex px-36 max-w-[1920px] mx-auto pb-60 dark:bg-dark-200">
            <div className="grid grid-cols-5 gap-10">
                {tokens &&
                    tokens.map((nft, index) => {
                        const metadata = JSON.parse(nft.metadata);
                        console.log("metadata", metadata);

                        if (metadata) {
                            return (
                                <Link key={index} href={`/polygon/track/${nft.token_id}`} passHref={true}>
                                    <a>
                                        <NFTCard
                                            trackName={metadata.title}
                                            artistName={metadata.artist}
                                            image={metadata.artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
                                            tokenId={nft.token_id}
                                            numberOfCopies={metadata.attributes[0].value}
                                            collaboratorList={metadata.collaborators}
                                        />
                                    </a>
                                </Link>
                            );
                        } else return null;
                    })}
            </div>
        </div>
    );
};

export default DisplayNFTs;
