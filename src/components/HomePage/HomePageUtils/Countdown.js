import CountdownCard from "./CountdownCard";
import { useEffect, useState } from "react";

export default function Countdown(){
    const [timeLeft, setTimeLeft] = useState({
        days: "",
        hours: "",
        minutes: "",
        seconds: ""
    });
    
    useEffect(()=>{
        const countDownDate = new Date("Oct 24, 2022 00:00:00").getTime();
        const counterTimeout = setInterval(function() {
            // Get today's date and time
            const now = new Date().getTime();
    
            // Find the distance between now and the count down date
            const distance = countDownDate - now;
    
            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            setTimeLeft({
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            });
            // If the count down is finished, Clear the timeout
            if (distance < 0) 
                clearInterval(counterTimeout);
        }, 1000);
    },[])

    return(
        <div className="pb-12 mt-10 z-10 flex flex-col items-center justify-between relative w-full rounded-[5rem] bg-gradient-to-l from-[#408E00] to-[#193403]">
            {/* Counter */}
            <div className="flex space-x-5">
                <CountdownCard 
                    number={timeLeft.days < 10? ("0"+timeLeft.days): timeLeft.days} 
                    text={timeLeft.days > 1? "Days":"Day"}
                />
                <CountdownCard 
                    number={timeLeft.hours < 10? ("0"+timeLeft.hours): timeLeft.hours} 
                    text={timeLeft.hours > 1? "Hours":"Hour"}
                />
                <CountdownCard 
                    number={timeLeft.minutes < 10? ("0"+timeLeft.minutes): timeLeft.minutes} 
                    text={timeLeft.minutes > 1? "Minutes":"Minute"}
                />
                <CountdownCard 
                    number={timeLeft.seconds < 10? ("0"+timeLeft.seconds): timeLeft.seconds} 
                    text={timeLeft.seconds > 1? "Seconds":"Second"}
                />
            </div>
            {/* Intro text */}
            <div className="flex flex-col items-center justify-center w-full mt-16">
                <h5 className="text-3xl font-medium font-primary">Musixverse Beta Program is full</h5>
                <p className="text-2xl font-primary">we thank you for the overwhelming Intrest and support</p>
                <button className="py-2 mt-5 cursor-pointer px-14 rounded-3xl bg-primary-100 font-secondary hover:bg-primary-200 text-light-100">Join Our Waitlist for Priority access</button>
            </div>
        </div>
    );
}