import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { MXV_CONTRACT_ADDRESS, BLOCKCHAIN_NETWORK } from "../../utils/smart-contract/constants";
import NFTCard from "../../layout/NFTCard/NFTCard";
import Pager from "./ArtistProfileUtils/Pager";

export default function NFTs() {
    const { Moralis, isInitialized } = useMoralis();
    // 0-based indexing
    const [tokens, setTokens] = useState("");
    const [currentPage, setCurrentPage] = useState(0);

    const fetchTokens = async () => {
        const options = {
            chain: BLOCKCHAIN_NETWORK,
            token_address: MXV_CONTRACT_ADDRESS,
        };
        const nftData = await Moralis.Web3API.account.getNFTsForContract(options);
        setTokens(nftData.result);
    };

    useEffect(() => {
        console.log("tempArray:", tempArray);
        console.log("nftCards:", nftCards);
    }, [tempArray, nftCards]);

    let tempArray = [];
    let nftCards = [];
    useEffect(() => {
        if (tokens) {
            console.log("Tokens:", tokens);

            for (let index in tokens) {
                const metadata = JSON.parse(tokens[index].metadata);

                if (metadata) {
                    tempArray.push(
                        <NFTCard
                            trackName={metadata.title}
                            artistName={metadata.artist}
                            image={metadata.artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
                            tokenId={tokens[index].token_id}
                            numberOfCopies={metadata.attributes[0].value}
                            collaboratorList={metadata.collaborators}
                        />
                    );

                    if (index % 3 === 2 || index == tokens.length - 1) {
                        nftCards.push(tempArray);
                        console.log("nftCards::::", nftCards);
                        tempArray = [];
                    }
                }
            }
        }
    }, [tokens]);

    useEffect(() => {
        if (isInitialized) {
            fetchTokens();
        }
    }, [isInitialized]);

    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 my-8 gap-6 md:my-11 md:gap-11">{nftCards[currentPage]}</div>
            <Pager onPageChange={setCurrentPage} maxPages={nftCards.length} />
        </>
    );
}
