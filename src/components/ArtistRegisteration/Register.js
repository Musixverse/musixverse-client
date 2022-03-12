
import Image from "next/Image";
import illustration_svg from "../../../public/assets/registeration/Illustration.svg";
import Notification_icon from "../../../public/assets/registeration/Notification.svg";
import Register_sub from "./ArtistRegUtils/Register_sub";

export default function Register(){
    return(
        <div className="p-4 pt-24">
            <div className="flex flex-row space-x-4 rounded-md bg-light-300 min-h-screen">
                {/* Left section */}
                <div className="flex flex-col space-y-16 w-1/2 items-start pt-16 pl-20">
                    <p className="text-5xl font-tertiary">LET&apos;S REVOLUTIONIZE THE MUSIC<br />INDUSTRY TOGETHER!</p>
                    <div>
                        <Image src={illustration_svg} width={400} height={400} alt="music illustration" />
                    </div>
                </div>

                {/* Right section */}
                <div className="bg-light-200 my-6 rounded-md px-10 pt-8">
                    <p className="text-5xl font-tertiary">SIGN UP</p>
                    <p className="text-[15px] font-secondary">What&apos;s the difference Between Artist & Collectors?</p>
                    {/* Components */}
                    <div className="space-y-3 pt-4">
                        <Register_sub artist={true} />
                        <Register_sub artist={false} />
                    </div>
                    <div className="flex space-x-4 pt-8">
                        <Image src={Notification_icon} width={20} height={20} alt="Notification" /> 
                        <p className="text-[15px] font-secondary">Don&apos;t worry, you can switch your user profile to <br />an artist profile at any stage you&apos;d like.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}