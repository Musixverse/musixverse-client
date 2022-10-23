export default function CountdownCard({number, text}){
    return(
        <div className="-mt-7 flex w-[80px] sm:w-[120px] md:w-[135px] lg:w-[166px] aspect-square backdrop-blur-[50px] backdrop-brightness-150 font-primary flex-col items-center justify-center rounded-2xl sm:rounded-[2rem]">
            <h3 className="text-2xl sm:text-[2.5rem] md:text-[2.9rem] lg:text-[3.75rem] xl:text-[4rem]  leading-[40px] sm:leading-[50px] md:leading-[65px] lg:leading-[96px] font-semibold">{number}</h3>
            <p className="text-xs font-medium sm:text-sm">{text}</p>
        </div>
    );
}