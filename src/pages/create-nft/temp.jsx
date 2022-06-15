import { useState } from "react";
import PreviewNftContext from "../../../store/preview-nft-context";
import ComprehensiveDetails from "../../components/CreateNFT/Step2";

export default function TempPage(){
    // const [uploadedImage, setUploadedImage] = useState(null);
    // const [uploadedSong, setUploadedSong] = useState();
    // const [nftName, setNftName] = useState(null);
    // const [nftPrice, setNftPrice] = useState(null);

    return(
        // <PreviewNftContext.Provider 
        //     value={[uploadedImage, setUploadImage, uploadedSong, setUploadedSong, nftName, setNftName, nftPrice, setNftPrice]}>
            <ComprehensiveDetails/>
        // </PreviewNftContext.Provider>
    );
}