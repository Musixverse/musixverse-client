import Image from "next/image";
import Register_sub from "./Register_sub";
import Notification_icon from "../../../../public/assets/registeration/Notification.svg";

export default function ArtistOrUser(){
    return(
        <div className="flex flex-col justify-between h-full">
            <div>
                <p className="text-5xl font-tertiary">SIGN UP</p>
                <p className="text-[15px] font-secondary">
                    What&apos;s the difference Between Artist & Collectors?
                </p>
                <div className="mt-8 space-y-3">
                    <Register_sub artist={true} />
                    <Register_sub artist={false} />
                </div>
                <div className="flex items-start mt-12 space-x-4">
                    <Image src={Notification_icon} width={20} height={20} alt="Notification" /> 
                    <p className="text-[12px] font-secondary">Don&apos;t worry, you can switch your user profile to <br />an artist profile at any stage you&apos;d like.</p>
                </div>
            </div>
            <div className="w-16 h-1 mb-10 rounded-xl bg-primary-200"></div>
        </div>
    );
}