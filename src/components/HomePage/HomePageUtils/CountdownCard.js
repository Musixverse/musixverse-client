export default function CountdownCard({number, text}){
    return(
        <div className="-mt-7 flex w-[166px] aspect-square backdrop-blur-[50px] backdrop-brightness-150 font-primary flex-col items-center justify-center rounded-[2rem]">
            <h3 className="text-[4rem] leading-[96px] font-semibold">{number}</h3>
            <p className="text-sm font-medium">{text}</p>
        </div>
    );
}