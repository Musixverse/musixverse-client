import { useContext } from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import uploadFileToIPFS from "../../../utils/image-crop/uploadFileToIPFS";
import uploadMusic from "../../../../public/assets/create-nft/upload-music.svg";
import LoadingContext from "../../../../store/loading-context";

export default function AudioUpload({ uploadedSong, setUploadedSong }) {
    const { Moralis } = useMoralis();
    const [isLoading, setLoading] = useContext(LoadingContext);

    const handleAudioUpload = async (event) => {
        setLoading(true);
        var target = event.target;
        var fileToUpload = event.target.files[0];

        if (target.files && fileToUpload) {
            // var reader = new FileReader();
            // reader.onload = function (e) {
            //     setUploadedSong(e.target.result);
            // };
            // reader.readAsDataURL(fileToUpload);
            await uploadFileToIPFS(Moralis, fileToUpload).then((url) => setUploadedSong(url));
            setLoading(false);
        }
    };

    return (
        <>
            <input accept="audio/*" type="file" onChange={handleAudioUpload} className="hidden" id="uploadedNftAudio" name="audioFile" />
            <label
                className={
                    "flex items-center w-full p-2 mt-5 space-x-5 rounded-lg cursor-pointer dark:bg-[#2a2a2a] bg-light-100 hover:border-[#6cc027] border-2 border-light-100 dark:border-[#2a2a2a] hover:dark:border-[#6cc027]"
                }
                htmlFor="uploadedNftAudio"
            >
                <div
                    className={
                        "flex relative items-center justify-center w-[65px] h-[65px] rounded-lg bg-light-300 dark:bg-[#1d1d1d] border-2 " +
                        (uploadedSong === null ? "border-light-300 dark:border-dark-100" : "border-primary-200 dark:border-primary-200")
                    }
                >
                    <Image src={uploadMusic} objectFit="contain" alt="upload image art digital illustration"></Image>
                    <div className={uploadedSong === null ? "hidden" : "absolute bottom-2 right-1 bg-light-200 rounded-full h-[20px]"}>
                        <i className={"text-xl text-primary-200 fas fa-check-circle"}></i>
                    </div>
                </div>
                <div className="flex-1 font-secondary">
                    <h3 className="font-semibold">UPLOAD AUDIO FILE</h3>
                    {uploadedSong === null ? <p className="text-sm">Maximum file size: 500MB</p> : <p className="text-sm text-primary-200">Song Uploaded</p>}
                </div>
            </label>
        </>
    );
}
