import { useState, useEffect } from "react";
import Image from "next/image";
import CtaButtons from "./CtaButtons";

export default function SongHeaderCta({ unlockTimestamp, price }) {
    const [maticUSD, setMaticUSD] = useState("");
    const [maticINR, setMaticINR] = useState("");
    const [saleStart, setSaleStart] = useState("");
    const [timeNow, setTimeNow] = useState(new Date());
    const unlockTime = new Date(unlockTimestamp * 1000);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeNow(new Date());
        }, 1000);
        return () => clearTimeout(timer);
    }, [timeNow]);

    async function fetchMaticUSD() {
        const COINBASE_BASE_URL = "https://api.coinbase.com/v2";
        const res = await fetch(`${COINBASE_BASE_URL}/prices/MATIC-USD/buy`);
        const result = await res.json();
        setMaticUSD((result.data.amount * price).toFixed(2));
    }

    async function fetchMaticINR() {
        const COINBASE_BASE_URL = "https://api.coinbase.com/v2";
        const res = await fetch(`${COINBASE_BASE_URL}/prices/MATIC-INR/buy`);
        const result = await res.json();
        setMaticINR((result.data.amount * price).toFixed(0));
    }

    useEffect(async () => {
        var date = new Date(unlockTimestamp * 1000);
        var dateStr =
            date.toLocaleString("default", {
                month: "long",
            }) +
            " " +
            date.getDate().toString() +
            " " +
            date.getFullYear().toString() +
            ", " +
            date.toLocaleTimeString() +
            " IST";
        setSaleStart(dateStr.toString());
    }, [unlockTimestamp]);

    useEffect(async () => {
        fetchMaticUSD();
        fetchMaticINR();
    }, [price]);

    let truncatednftPrice = price;
    if (price >= 1000000) {
        truncatednftPrice = Number((price / 1000000).toFixed(2)) + " M";
    } else if (price >= 1000) {
        truncatednftPrice = Number((price / 1000).toFixed(2)) + " K";
    }

    let truncatedmaticUSDPrice = maticUSD;
    if (maticUSD >= 1000000) {
        truncatedmaticUSDPrice = Number((maticUSD / 1000000).toFixed(2)) + " M";
    } else if (maticUSD >= 1000) {
        truncatedmaticUSDPrice = Number((maticUSD / 1000).toFixed(2)) + " K";
    }

    let truncatedmaticINRPrice = maticINR;
    if (maticINR >= 1000000) {
        truncatedmaticINRPrice = Number((maticINR / 1000000).toFixed(2)) + " M";
    } else if (maticINR >= 1000) {
        truncatedmaticINRPrice = Number((maticINR / 1000).toFixed(2)) + " K";
    }

    // Calculating difference between unlock time and current time
    const days = parseInt((unlockTime - timeNow) / (1000 * 60 * 60 * 24));
    const hours = parseInt((Math.abs(unlockTime - timeNow) / (1000 * 60 * 60)) % 24);
    const minutes = parseInt((Math.abs(unlockTime - timeNow) / (1000 * 60)) % 60);
    const seconds = parseInt((Math.abs(unlockTime - timeNow) / 1000) % 60);

    return (
        <div className="bg-light-200 p-5 pt-0 mt-0 rounded-lg dark:bg-dark-100">
            {Date.now() < unlockTimestamp * 1000 ? (
                <>
                    <div className="flex justify-between items-center mt-4">
                        <p className="font-primary text-sm">Sale starts {saleStart}</p>
                        <p className="font-bold text-lg font-primary">
                            {days > 0 ? (
                                <>
                                    {days === 1 ? (
                                        <>
                                            {days}
                                            <span className="text-xs ml-[0.8px] mr-1">Day</span>
                                        </>
                                    ) : (
                                        <>
                                            {days}
                                            <span className="text-xs ml-[0.8px] mr-1">Days</span>
                                        </>
                                    )}
                                </>
                            ) : null}
                            {hours === 0 || hours === 1 ? (
                                <>
                                    {hours}
                                    <span className="text-xs ml-[0.8px] mr-1">Hour</span>
                                </>
                            ) : (
                                <>
                                    {hours}
                                    <span className="text-xs ml-[0.8px] mr-1">Hours</span>
                                </>
                            )}
                            {minutes === 0 || hours === 1 ? (
                                <>
                                    {minutes}
                                    <span className="text-xs ml-[0.8px] mr-1">Minute</span>
                                </>
                            ) : (
                                <>
                                    {minutes}
                                    <span className="text-xs ml-[0.8px] mr-1">Minutes</span>
                                </>
                            )}
                            {seconds === 0 || hours === 1 ? (
                                <>
                                    {seconds}
                                    <span className="text-xs ml-[0.8px] mr-1">Seconds</span>
                                </>
                            ) : (
                                <>
                                    {seconds}
                                    <span className="text-xs ml-[0.8px] mr-1">Seconds</span>
                                </>
                            )}
                        </p>
                    </div>
                    <div className="flex-grow border-t-[3px] border-[#9a9a9a]"></div>
                </>
            ) : null}

            <div className="flex flex-col my-3">
                <p className="font-secondary font-normal text-base">Price</p>
                <div className="flex items-center">
                    <Image src={"/assets/matic-logo.svg"} width={25} height={25} alt="matic" />
                    <p className="mx-2 font-bold text-3xl font-primary">{truncatednftPrice}</p>
                    <p className="text-sm font-primary">
                        (approx. ₹{truncatedmaticINRPrice} or ${truncatedmaticUSDPrice})
                    </p>
                </div>
            </div>

            <CtaButtons />
        </div>
    );
}
