/**
 * If the uploaded File is null, then the hook shall return
 */
import { useMoralis } from "react-moralis";

export default function useSaveIPFS(uploadedFile){
    const { Moralis } = useMoralis();
    const uploadFileOnIPFS = async () => {
        if(uploadedFile === null)
            return null;
        const file = new Moralis.File("file", uploadedFile);
        await file.saveIPFS();
        return file.ipfs();
    }

    return uploadFileOnIPFS;
}