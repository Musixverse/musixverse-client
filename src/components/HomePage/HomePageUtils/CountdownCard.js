export default function CountdownCard({number, text}){
    return(
        <div className="-mt-7 flex w-[145px] lg:w-[166px] aspect-square backdrop-blur-[50px] backdrop-brightness-150 font-primary flex-col items-center justify-center rounded-[2rem]">
            <h3 className="text-[3.25rem] lg:text-[3.75rem] xl:text-[4rem] leading-[70px] lg:leading-[96px] font-semibold">{number}</h3>
            <p className="text-sm font-medium">{text}</p>
        </div>
    );
}