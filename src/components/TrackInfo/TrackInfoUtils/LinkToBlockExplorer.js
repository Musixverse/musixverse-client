import Link from "next/link";
import { BLOCK_EXPLORER_URL } from "../../../utils/smart-contract/constants";

const LinkToBlockExplorer = ({ transactionHash }) => {
    return (
        <Link href={`${BLOCK_EXPLORER_URL}/tx/${transactionHash}`} className="cursor-pointer">
            <a target="_blank" rel="noopener noreferrer" className="ml-2">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
        </Link>
    );
};

export default LinkToBlockExplorer;
