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

            const res = tokens.map((nft, index) => {
                const metadata = JSON.parse(nft.metadata);

                if (metadata) {
                    console.log("tempArray:", tempArray);
                    let cardElem = (
                        <NFTCard
                            key={index}
                            songName={metadata.name}
                            artistName={metadata.artistName}
                            image={metadata.image}
                            songId={metadata.id}
                            tokenId={nft.token_id}
                            numberOfCopies={metadata.attributes[0].value}
                            contributorList={metadata.contributors}
                            localTokenId={localTokenId}
                        />
                    );

                    tempArray.push(cardElem);

                    if (index % 3 === 2 || index == tokens.length - 1) {
                        nftCards.push(tempArray);
                        tempArray = [];
                    }
                } else return null;
            });
            console.log("res", res);
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
