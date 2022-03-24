import { useRef } from "react";
import DefaultAvatar from "./DefaultAvatar";

export default function SelectAvatar() {
    const uploadedImage = useRef(null);
    const uploadImage = useRef(null);

    //Array of default arrays
    const urls = [
        "https://www.artnews.com/wp-content/uploads/2021/08/BAYC-8746.png?w=631",
        "https://lh3.googleusercontent.com/ppG4cJGe5bapx_fVYTaF7uN2vysBjuSFxlIh16Rd_sqsc-MRvsw2yOe-iP0RHZMXnaePLbnCO9hx4ti1GJQP6uteb32wbeua21ys3g=w361",
        "https://lh3.googleusercontent.com/MYlZWpUkY6436fmMSha_qmbJ3FTxhFzdcxphNmB8qSUxvgphKTiWVDEyG8zTyMPxHqzkQYN_kwsMQmHGp9wIfeWhCqwwJ32hTcZCPLg=w361",
        "https://lh3.googleusercontent.com/guWTxFAOxLKB2wVSICbVDPTzDV01_OPcNz5STMcvzRMmbZF6THBJaoKrmetK0yXix32SvqmJtxNw5NwhTFzVsfKnTlvZ1lQbdqakWw=w361",
        "https://lh3.googleusercontent.com/InqKM6IlUvOaSD93iBg_FZI_QAABak7jCtR3HaiGcGq8RLG2ql3xU50N3I7Bt3Epy-h5h3ZbAXxZ-Fqb93MrCDtzowTYb_qsyBggBg=w361", 
        "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960"
    ];

    const handleImageSelection = (selectedUrl)=>{
        const el = uploadedImage.current;
        el.src = selectedUrl;
        //Reset the uploaded file
        uploadImage.current.value = "";
    }

    const handleImageUpload = (event) => {
        const el = uploadedImage.current;
        const myMemoObj = URL.createObjectURL(event.target.files[0]);
        el.src = URL.createObjectURL(event.target.files[0]);
        URL.revokeObjectURL(myMemoObj); //Manging memo leak
    };

    return (
        <div className="flex">
            <img
                className={"w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] rounded-full"}
                ref={uploadedImage}
                src={urls[0]}
                alt="Selected Avatar"
            ></img>

            {/* Avatars */}
            <div className="max-w-[200px] ml-5">
                <p className="text-secondary text-[14px] sm:text-[15px] mb-2 font-secondary">Upload or select an Avatar</p>
                <div className="grid grid-cols-4 gap-x-1 gap-y-2">
                    <DefaultAvatar onImageSelection={handleImageSelection} urls={urls}/>
                    <label
                        htmlFor="upload-avatar"
                        className="flex items-center justify-center
                     text-dark-200 cursor-pointer w-[30px] h-[30px] sm:w-[39px] sm:h-[39px] rounded-full bg-light-300 hover:bg-[#bad9d5] text-[18px] sm:text-[20px]"
                    >
                        <i className="text-dark-200 fa fa-upload"></i>
                    </label>
                </div>
                <input ref={uploadImage} className="hidden" onChange={handleImageUpload} type={"file"} id="upload-avatar" accept="image/*" />
            </div>
        </div>
    );
}
