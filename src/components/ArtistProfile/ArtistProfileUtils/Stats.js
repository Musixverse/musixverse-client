import Image from "next/image";
import recordImage from "../../../../public/assets/record_b.svg";

export default function Stats(){
    return(
            <div className="grid grid-cols-3 gap-5 p-5 font-medium rounded-2xl bg-light-200 backdrop-blur-2xl backdrop-brightness-150">
                <div className="text-center font-secondary">
                    <h1 className="text-2xl font-bold">535</h1>
                    <p>Following</p>
                </div>
                <div className="text-center">
                    <h1 className="text-2xl font-bold">23</h1>
                    <p>Followers</p>
                </div>
                <div className="text-center">
                    <h1 className="text-2xl font-bold"><Image src={recordImage} width={18} height={18} alt="records" />&nbsp;19</h1>
                    <p>Tracks Released</p>
                </div>
            </div>    
    );
}