import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import Link from "next/link";
import { MXV_CONTRACT_ADDRESS, BLOCKCHAIN_NETWORK } from "../../utils/smart-contract/constants";
import NFTCard from "../../layout/NFTCard/NFTCard";

const DisplayNFTs = () => {
    const { Moralis, isInitialized } = useMoralis();
    const [tokens, setTokens] = useState([]);
    const [maxTokenIds, setMaxTokenIds] = useState([]);

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
        if (tokens) {
            const uniqueHashGroup = tokens.reduce((acc, token) => {
                if (!acc[token.token_uri]) {
                    acc[token.token_uri] = [];
                }

                acc[token.token_uri].push(token);
                return acc;
            }, {});

            setMaxTokenIds([]);
            Object.keys(uniqueHashGroup).forEach((uniqueHash) => {
                const result = uniqueHashGroup[uniqueHash].reduce((prev, curr) => {
                    return Number(prev.token_id) > Number(curr.token_id) ? prev : curr;
                }, {});

                let maxIdObj = { token_uri: uniqueHash, max_token_id: result.token_id };
                setMaxTokenIds((prev) => [...prev, maxIdObj]);
            });
        }
    }, [tokens]);

    // const fetchTokenIdMetadata = async () => {
    //     const options = {
    //         address: MXV_CONTRACT_ADDRESS,
    //         token_id: "1",
    //         chain: BLOCKCHAIN_NETWORK,
    //     };
    //     const tokenIdMetadata = await Moralis.Web3API.token.getTokenIdMetadata(options);
    //     console.log("tokenIdMetadata:", tokenIdMetadata);
    // };

    // const fetchTokensForCurrentAccount = async () => {
    //     const options = {
    //         chain: BLOCKCHAIN_NETWORK,
    //         token_id: "1",
    //         token_address: MXV_CONTRACT_ADDRESS,
    //     };
    //     const nftData = await Moralis.Web3API.account.getNFTsForContract(options);
    //     console.log("nftData:", nftData);asf
    //     setTokens(nftData.result);
    // };

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

                        // tokenid + total - maxTokenId
                        var localTokenId = "";
                        maxTokenIds.forEach((token) => {
                            if (nft.token_uri === token.token_uri)
                                localTokenId = Number(nft.token_id) + Number(metadata.attributes[0].value) - token.max_token_id;
                        });

                        console.log("metadata", metadata);
                        if (metadata) {
                            return (
                                <Link key={index} href={`/polygon/track/${nft.token_id}`} passHref={true}>
                                    <a>
                                        <NFTCard
                                            songName={metadata.title}
                                            artistName={metadata.artist}
                                            image={metadata.artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
                                            tokenId={nft.token_id}
                                            numberOfCopies={metadata.attributes[0].value}
                                            collaboratorList={metadata.collaborators}
                                            localTokenId={localTokenId}
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
