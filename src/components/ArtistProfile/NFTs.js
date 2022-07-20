import { useState, useEffect } from "react";
import Link from "next/link";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import { MXV_CONTRACT_ADDRESS, BLOCKCHAIN_NETWORK } from "../../utils/smart-contract/constants";
import NFTCard from "../../layout/NFTCard/NFTCard";
import Pager from "./ArtistProfileUtils/Pager";

export default function NFTs({ username }) {
    const { Moralis, isInitialized } = useMoralis();
    const [tokens, setTokens] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [nftCards, setNftCards] = useState([]);

    const { data: profileUser } = useMoralisCloudFunction("fetchAddressFromUsername", { username: username });

    useEffect(() => {
        if (tokens) {
            tokens.map(async (token) => {
                if (token.metadata == null) {
                    await fetch(token.token_uri)
                        .then((response) => {
                            return response.json();
                        })
                        .then((data) => {
                            token.metadata = JSON.stringify(data);
                        });
                }
            });
        }
    }, [tokens]);

    useEffect(() => {
        if (isInitialized && profileUser) {
            (async function () {
                const options = {
                    chain: BLOCKCHAIN_NETWORK,
                    token_address: MXV_CONTRACT_ADDRESS,
                    address: profileUser.ethAddress,
                };
                const nftData = await Moralis.Web3API.account.getNFTsForContract(options);
                console.log(nftData);
                setTokens(nftData.result);
            })();
        }
    }, [isInitialized, profileUser]);

    useEffect(() => {
        if (tokens) {
            let tempArray = [];
            const nftCardsTemp = [];

            tokens.map((nft, idx) => {
                const metadata = JSON.parse(nft.metadata);
                if (metadata) {
                    tempArray.push(
                        <Link key={idx} href={`/polygon/track/${nft.token_id}`} passHref={true}>
                            <a>
                                <NFTCard
                                    trackName={metadata.title}
                                    artistName={metadata.artist}
                                    image={metadata.artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
                                    tokenId={nft.token_id}
                                    numberOfCopies={metadata.attributes[0].value}
                                    collaboratorList={metadata.collaborators}
                                    // localTokenId={localTokenId}
                                />
                            </a>
                        </Link>
                    );
                    if (tempArray.length % 5 == 0 || idx == tokens.length - 1) {
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
            {nftCards.length > 1 ? <Pager onPageChange={setCurrentPage} maxPages={nftCards.length} /> : null}
        </>
    );
}
