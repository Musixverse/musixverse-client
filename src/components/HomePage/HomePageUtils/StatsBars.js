import Image from "next/image";

export default function Statsbar(props) {
    return (
        <div className="flex flex-col items-start p-5 md:p-2 md:items-center md:flex-row bg-light-100 dark:bg-dark-100 rounded-xl md:odd:w-10/12">
            <div className="relative w-full md:w-[165px] flex items-center mr-5 justify-start rounded-xl md:bg-right bg-cover">
                <div className="absolute flex w-full h-full overflow-hidden rounded-xl">
                    <Image src={props.imageSrc} alt="background Disc" objectFit="cover" layout="fill" priority></Image>
                </div>
                <h3 className="m-4 text-2xl z-[1] font-tertiary text-light-100">
                    {props.statsFirst} <br className="hidden md:inline-block"></br>
                    {props.statsLast}
                </h3>
            </div>
            <p className="font-secondary md:mt-0 mt-3 text-sm md:max-w-[60%]">{props.statsDetail}</p>
        </div>
    );
}
