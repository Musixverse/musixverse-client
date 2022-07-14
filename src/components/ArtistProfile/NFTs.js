import { useState, useEffect, useMemo } from "react";
import { useMoralis } from "react-moralis";
import { MXV_CONTRACT_ADDRESS, BLOCKCHAIN_NETWORK } from "../../utils/smart-contract/constants";
import NFTCard from "../../layout/NFTCard/NFTCard";
import Pager from "./ArtistProfileUtils/Pager";

export default function NFTs() {
    const { Moralis, isInitialized } = useMoralis();
    const [tokens, setTokens] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [nftCards, setNftCards] = useState([]);

    useEffect(() => {
        if (isInitialized) {
            console.log("HI");
            (async function () {
                const options = {
                    chain: BLOCKCHAIN_NETWORK,
                    token_address: MXV_CONTRACT_ADDRESS,
                };
                const nftData = await Moralis.Web3API.account.getNFTsForContract(options);
                setTokens(nftData.result);
            })();
        }
    }, [isInitialized, Moralis.Web3API.account]);

    useEffect(() => {
        if (tokens) {
            let tempArray = [];
            const nftCardsTemp = [];

            tokens.map((nft, idx)=>{
                const metadata = JSON.parse(nft.metadata);
                if(metadata){
                    tempArray.push(
                        <NFTCard
                            key={idx}
                            songName={metadata.name}
                            artistName={metadata.artistName}
                            image={metadata.image}
                            songId={metadata.id}
                            tokenId={nft.token_id}
                            numberOfCopies={metadata.attributes[0].value}
                            contributorList={metadata.contributors}
                        />
                    );
                    if(tempArray.length%3 == 0 || idx == tokens.length-1){
                        nftCardsTemp.push(tempArray);
                        tempArray = [];
                    }
                }
            });
            setNftCards(nftCardsTemp);
        }
    }, [tokens]);
    return (
        <>
            <div className="grid grid-cols-2 gap-6 my-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:my-11 md:gap-11">{nftCards[currentPage]}</div>
            {nftCards.length > 1? <Pager onPageChange={setCurrentPage} maxPages={nftCards.length} />: null}
        </>
    );
}
