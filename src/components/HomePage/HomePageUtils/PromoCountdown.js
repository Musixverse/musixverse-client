import { useState, useEffect } from "react";

export default function PromoCountdown() {
	const [timeLeft, setTimeLeft] = useState({
		days: "-",
		hours: "-",
		minutes: "-",
		seconds: "-",
	});

	useEffect(() => {
		const time = 1669353768;
		const countDownDate = new Date(time * 1000).getTime();
		const counterTimeout = setInterval(function () {
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
				seconds: seconds,
			});
			// If the count down is finished, Clear the timeout
			if (distance <= 0) clearInterval(counterTimeout);
		}, 1000);

		return () => {
			clearInterval(counterTimeout);
		};
	}, []);

	return (
		<>
			<div className="flex mt-2 space-x-2">
				<div className="w-[40px] lg:w-[54px] rounded-lg h-[38px] lg:h-[52px] bg-light-100 dark:bg-[rgb(77,76,77)] flex flex-col items-center justify-center">
					<h6 className="text-xs font-semibold lg:text-lg xl:text-xl 2xl:text-2xl">{timeLeft.days < 10 ? "0" + timeLeft.days : timeLeft.days}</h6>
					<p className="font-medium text-[8px]">{timeLeft.days > 1 ? "Days" : "Day"}</p>
				</div>
				<div className="w-[40px] lg:w-[54px] h-[38px] lg:h-[52px] rounded-lg bg-light-100 dark:bg-[rgb(77,76,77)] flex flex-col items-center justify-center">
					<h6 className="text-xs font-semibold lg:text-lg xl:text-xl 2xl:text-2xl">{timeLeft.hours < 10 ? "0" + timeLeft.hours : timeLeft.hours}</h6>
					<p className="font-medium text-[8px]">{timeLeft.hours > 1 ? "Hours" : "Hour"}</p>
				</div>
				<div className="w-[40px] lg:w-[54px] h-[38px] lg:h-[52px] rounded-lg bg-light-100 dark:bg-[rgb(77,76,77)] flex flex-col items-center justify-center">
					<h6 className="text-xs font-semibold lg:text-lg xl:text-xl 2xl:text-2xl">
						{timeLeft.minutes < 10 ? "0" + timeLeft.minutes : timeLeft.minutes}
					</h6>
					<p className="font-medium text-[8px]">{timeLeft.minutes > 1 ? "Mins" : "Min"}</p>
				</div>
				<div className="w-[40px] lg:w-[54px] h-[38px] lg:h-[52px] rounded-lg bg-light-100 dark:bg-[rgb(77,76,77)] flex flex-col items-center justify-center">
					<h6 className="text-xs font-semibold lg:text-lg xl:text-xl 2xl:text-2xl">
						{timeLeft.seconds < 10 ? "0" + timeLeft.seconds : timeLeft.seconds}
					</h6>
					<p className="font-medium text-[8px]">{timeLeft.seconds > 1 ? "Secs" : "Sec"}</p>
				</div>
			</div>
		</>
	);
}
