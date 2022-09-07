import Image from "next/image";
import { Fragment } from "react";


export default function HelpCard(help_icon,label){
    return(
        <Fragment>
            <div className="flex flex-col p-6 rounded-lg border-2 border-primary-100 bg-light-300 hover:ring-offset-primary-300">
                <div className="w-7">
                    <Image src={help_icon} alt={label} objectFit="cover" layout="fill" priority />
                </div>
                <p className="text-lg">{label}</p>
            </div>
        </Fragment>
    );
}