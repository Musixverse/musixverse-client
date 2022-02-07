import ethLogo from "../../../../public/assets/Eth_logo.svg";
import Image from "next/image";
import CtaButtons from "./CtaButtons";
import styles from "../../../../styles/SongInfo/PurchaseInfo.module.css";

export default function SongHeaderCta(){
    const NFTPrice = 0.02;
    let hours = 19;
    let minutes = 40;
    let seconds = 12;

    return (
        <div className="bg-light-200 p-5 rounded-lg">
            <div className="flex justify-between items-center">
                <p className="font-primary text-sm">Sale ends Feburary 4 2022 at 7:30am IST</p>
                <p className="font-bold text-lg font-primary">
                    {hours}<span className="text-xs ml-[0.8px] mr-1">Hours</span>
                    {minutes}<span className="text-xs ml-[0.8px] mr-1">Minutes</span>
                    {seconds}<span className="text-xs ml-[0.8px]">Seconds</span>
                </p>
            </div>

            <div className="flex-grow border-t-[3px] border-[#9a9a9a]"></div>

            <div className="flex flex-col my-3">
                <p className="font-secondary font-medium text-base">Price (x3 -3Copies)</p>
                <div className="flex items-center">
                    <Image src={ethLogo} width={20} height={40} alt="ethereum"/>
                    <p className="mx-2 font-bold text-3xl font-primary">{NFTPrice}</p>
                    <p className="text-sm font-primary">($74.38)</p>
                </div>
            </div>

            <CtaButtons/>
        </div>
    );
}