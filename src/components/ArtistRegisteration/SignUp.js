
import Image from "next/Image";
import illustration_svg from "../../../public/assets/registeration/Illustation.svg";
import Notification_icon from "../../../public/assets/registeration/Notification.svg";

export default function SignUp(){
    return(
        <div className="w-full h-screen max-w-[1920px]">
            <div className="flex flex-row space-x-4 rounded-md bg-light-300">
                {/* Left section */}
                <div>
                    <p>LET&apos;S REVOLUTIONIZE THE MUSIC<br />INDUSTRY TOGETHER!</p>
                    <Image src={illustration_svg} width={512} height={512} alt="music illustration" />
                </div>

                {/* Right section */}
                <div>
                    <p>SIGN UP</p>
                    <p>What&apos;s the difference Between Artist & Collectors?</p>
                    {/* Components */}

                    <div className="flex space-x-4">
                        <Image src={Notification_icon} width={20} height={20} alt="Notification" /> 
                        <p>Don&apos;t worry,you can switch your user profile to <br />an artist profile at any stage you&apos;d like.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}