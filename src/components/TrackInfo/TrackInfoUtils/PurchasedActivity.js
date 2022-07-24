import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import { BLOCKCHAIN_NETWORK } from "../../../utils/smart-contract/constants";
import { convertTimestampToDate } from "../../../utils/ConvertTimestampToDate";
import LinkToBlockExplorer from "./LinkToBlockExplorer";
import auction from "../../../../public/assets/auction.svg";
import styles from "../../../../styles/TrackInfo/Activity.module.css";

const PurchasedActivity = ({ activity }) => {
    const { Moralis } = useMoralis();
    const [transaction, setTransaction] = useState("");
    const { data: fetchedUser } = useMoralisCloudFunction("fetchUsernameFromAddress", { address: transaction.from_address });

    const getTransactionDetails = async () => {
        const options = {
            chain: BLOCKCHAIN_NETWORK,
            transaction_hash: activity.transaction_hash,
        };
        const _transaction = await Moralis.Web3API.native.getTransaction(options);
        setTransaction(_transaction);
    };

    useEffect(async () => {
        await getTransactionDetails();
    }, [activity]);

    return (
        <>
            <div className={"dark:bg-dark-200 " + styles["sales-history__action"]}>
                <Image src={auction} alt="minting logo" width={25} height={25}></Image>
            </div>

            <div className="ml-3 font-secondary">
                <p className="font-medium">
                    Purchased for &nbsp;
                    <Image src={"/assets/matic-logo.svg"} width={15} height={15} alt="matic" />
                    <span className="ml-1 font-primary font-semibold">{Moralis.Units.FromWei(activity.price)}</span>
                </p>

                <p className="text-[#8a8a8a] text-sm">
                    by&nbsp;
                    {fetchedUser ? (
                        <Link href={`/profile/${fetchedUser.username}`} className="cursor-pointer">
                            <a target="_blank" rel="noopener noreferrer">
                                @{fetchedUser.username}&nbsp;
                            </a>
                        </Link>
                    ) : null}
                    on&nbsp;
                    {convertTimestampToDate(activity.block_timestamp)}
                    <LinkToBlockExplorer transactionHash={activity.transaction_hash} />
                </p>
            </div>
        </>
    );
};

export default PurchasedActivity;