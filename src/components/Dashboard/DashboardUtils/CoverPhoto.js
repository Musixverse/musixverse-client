import { useRef } from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";

export default function CoverPhoto({ coverImage, setCoverImage }) {
    /**
     * Doubts:
     * Is the cover photo uploaded fitting the banner on the profile page?
     * 
     * On this page
     * Maintain aspect ratio of the element being cropped
    */
    const coverPicture = useRef(null);
    const { Moralis } = useMoralis();

    async function uploadFile(data) {
        const file = new Moralis.File("file", data);
        await file.saveIPFS();
        return file;
    }

    const handleCoverChange = async (event) => {
        const output = coverPicture.current;
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
            // When the media output has been loaded, remove the assgined memory
            URL.revokeObjectURL(output.src); // free memory
        };
        const file = await uploadFile(event.target.files[0]);
        setCoverImage(file.ipfs());
    };

    return (
        <div className="flex flex-col flex-1">
            <p className="mb-2 text-sm font-medium md:text-base md:mb-5 font-secondary">
                Cover Photo<i className="ml-2 text-base md:text-lg fa fa-info-circle"></i>
            </p>
            <label className="relative w-full h-[130px] md:h-[150px]" htmlFor="upload-cover-image">
                <div className={"w-full h-full hover:cursor-pointer"}>
                    <img
                        src={coverImage || "https://ipfs.moralis.io:2053/ipfs/QmSQ2s8TEKBAdZy3Pm6oy7CPDLZ7dEUQZJ89azN4a2AVUE"}
                        className="w-full h-full rounded-lg"
                        alt="cover photo"
                        ref={coverPicture}
                    ></img>
                </div>
                <input type="file" id="upload-cover-image" onChange={handleCoverChange} accept="image/*" className="hidden" />
            </label>
        </div>
    );
}
