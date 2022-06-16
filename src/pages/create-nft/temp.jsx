import { useState } from "react";
import PreviewNftContext from "../../../store/preview-nft-context";
import ComprehensiveDetails from "../../components/CreateNFT/Step2";

export default function TempPage(){
    const [currStep, setCurrStep] = useState(1);
    return(
        <ComprehensiveDetails currStep={currStep} setCurrStep={setCurrStep}/>
    );
}