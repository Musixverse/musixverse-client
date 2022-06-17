import Image from "next/image";
import uploadMusic from "../../../../public/assets/create-nft/upload-music.svg";

export default function AudioUpload(props){
    // console.log(props, props.uploadedSong)
    const handleAudioUpload = (e) => {
        var target = e.target;
        var file = e.target.files[0];        

        if (target.files && file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                props.setUploadedSong(e.target.result);
            }
            reader.readAsDataURL(file);
        }
    }

    return(
        <>
            <input accept="audio/*" type="file" onChange={handleAudioUpload} required className="hidden" id="uploadedNftAudio"/>
            <label className="flex items-center w-full p-2 mt-5 space-x-5 rounded-lg cursor-pointer bg-light-100" htmlFor="uploadedNftAudio">
                <div className="flex items-center justify-center w-[65px] h-[65px] rounded-lg bg-light-300">
                    <Image src={uploadMusic} objectFit="contain" alt="upload image art digital illustration"></Image>
                </div>
                <div className="flex items-center justify-between flex-1">
                    <div className="font-secondary">
                        <h3 className="font-semibold">UPLOAD AUDIO FILE</h3>
                        <p className="text-sm">Recommended minimum size: 10MB</p>
                    </div>
                    <div className={props.uploadedSong === null? "hidden":""}>
                        <i className="mr-8 text-xl text-primary-200 fas fa-check-circle"></i>
                    </div>
                </div>
            </label>
        </>
    );
}