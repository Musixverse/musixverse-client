import DetailsInputGroup from "./DetailsInputGroup";
import ImageUpload from "./ImageUpload";
import AudioUpload from "./AudioUpload";

export default function Step1Form({uploadedImage, setUploadedImage, uploadedSong, setUploadedSong, nftName, setNftName}){
    return(
        <div className="flex space-x-20 flex-2 lg:flex-row">
            {/* Details */}
            <div className="font-semibold font-secondary">
                <p className="mb-10">DETAILS</p>
                <p>TRACK TITLE</p>
                <input 
                    type={"text"}
                    required
                    value={nftName}
                    onChange={(e) => {
                        setNftName(e.target.value);
                    }}
                    className="w-full p-1 border-2 border-[#777777] rounded-md shadow-sm outline-none focus:border-primary-100"
                ></input>
                <p className="text-[#777777] mt-1 mb-10 font-normal text-[13px] max-w-[75%]">Feel free to include featured artists and version info in the track title</p>
                
                {/* Input Group */}
                <DetailsInputGroup/>

                <p className="mt-5">Does this track contain any singing, rapping or any other vocals</p>
                <div className="flex items-center mt-1 space-x-5">
                    <div className="flex items-center">
                        <input id="othervocalsyes" type="radio" name="radio" defaultChecked className="hidden" />
                        <label htmlFor="othervocalsyes" className="flex items-center text-sm font-normal cursor-pointer font-secondary">
                            <span className="inline-block w-6 h-6 mr-1 border-2 rounded-full border-[#363636] flex-no-shrink"></span>
                            Yes
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input id="othervocalsno" type="radio" name="radio" className="hidden" />
                        <label htmlFor="othervocalsno" className="flex items-center text-sm font-normal cursor-pointer font-secondary">
                            <span className="inline-block w-6 h-6 mr-1 border-2 rounded-full border-[#363636] flex-no-shrink"></span>
                            No
                        </label>
                    </div>
                </div>
            </div>
            {/* Uploads */}
            <div>
                <p className="mb-10 font-semibold">UPLOADS</p>
                {/* UPLOAD NFT ASSETS */}
                <ImageUpload uploadedImage={uploadedImage} setUploadedImage={setUploadedImage}/>

                <AudioUpload uploadedSong={uploadedSong} setUploadedSong={setUploadedSong}/>

                {/* SHARE LINKS */}
                <p className="mt-16 mb-3 font-semibold font-secondary">TRACK LINKS</p>
                <div className="flex justify-between w-full space-x-3">
                    <input className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100" type={"url"} placeholder="Spotify Track Link"/>
                    <input className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100" type={"url"} placeholder="Apple Music Track Link"/>
                </div>
                <div className="flex justify-between w-full mt-3 space-x-3">
                    <input className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100" type={"url"} placeholder="Amazon Music Track Link"/>
                    <input className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100" type={"url"} placeholder="Youtube Music Track Link"/>
                </div>
                <input className="mt-3 dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100" type={"url"} placeholder="Other Track Link"/>
            </div>
        </div>
    );
}