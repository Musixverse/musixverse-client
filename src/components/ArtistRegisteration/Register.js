
import Image from "next/Image";
import illustration_svg from "../../../public/assets/registeration/Illustration.svg";
import Notification_icon from "../../../public/assets/registeration/Notification.svg";
import Register_sub from "./ArtistRegUtils/Register_sub";

export default function Register(){
    return(
        <div className="p-4 pt-24">
            <div className="flex flex-row space-x-4 rounded-md bg-light-300">
                {/* Left section */}
                <div className="flex flex-col w-1/2 items-start pt-10 pl-10">
                    <p className="text-5xl font-tertiary">LET&apos;S REVOLUTIONIZE THE MUSIC<br />INDUSTRY TOGETHER!</p>
                    <Image src={illustration_svg} width={300} height={300} alt="music illustration" />
                </div>

                {/* Right section */}
                <div className="w-1/2">
                    <p>SIGN UP</p>
                    <p>What&apos;s the difference Between Artist & Collectors?</p>
                    {/* Components */}
                    <Register_sub category="artist" />
                    <Register_sub category="collector" />

                    <div className="flex space-x-4">
                        <Image src={Notification_icon} width={20} height={20} alt="Notification" /> 
                        <p>Don&apos;t worry,you can switch your user profile to <br />an artist profile at any stage you&apos;d like.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}