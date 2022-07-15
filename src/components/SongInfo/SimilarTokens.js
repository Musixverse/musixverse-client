import { useState, useEffect } from "react";
import Link from "next/link";
import NFTCard from "../../layout/NFTCard/NFTCard";

const SimilarTokens = ({ similarTokens, tokenId }) => {
    const [maxTokenId, setMaxTokenId] = useState("");

    useEffect(() => {
        if (similarTokens) {
            const result = similarTokens.reduce((prev, curr) => {
                return Number(prev.token_id) > Number(curr.token_id) ? prev : curr;
            }, {});
            setMaxTokenId(result.token_id);
        }
    }, [similarTokens]);

    return (
        <>
            <h1 className="font-tertiary text-4xl mt-20 mb-8">OTHER NFTs OF THIS TRACK</h1>
            <div className="flex max-w-[1920px] mx-auto dark:bg-dark-200">
                <div className="grid grid-cols-5 gap-10">
                    {similarTokens &&
                        similarTokens.map((nft, index) => {
                            const metadata = JSON.parse(nft.metadata);

                            // tokenid + total - maxTokenId
                            var localTokenId = Number(nft.token_id) + Number(metadata.attributes[0].value) - maxTokenId;

                            if (metadata && nft.token_id !== tokenId) {
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
        </>
    );
};

export default SimilarTokens;
