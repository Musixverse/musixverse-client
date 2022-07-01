import { useRef, useContext } from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import LoadingContext from "../../../../store/loading-context";

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
    const [isLoading, setLoading] = useContext(LoadingContext);

    async function uploadFile(data) {
        const file = new Moralis.File("file", data);
        await file.saveIPFS();
        return file;
    }

    const handleCoverChange = async (event) => {
        setLoading(true);
        const output = coverPicture.current;
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
            // When the media output has been loaded, remove the assgined memory
            URL.revokeObjectURL(output.src); // free memory
        };
        const file = await uploadFile(event.target.files[0]);
        setCoverImage(file.ipfs());
        setLoading(false);
    };

    return (
        <div className="flex flex-col flex-1">
            <p className="mb-2 text-sm font-medium md:text-base md:mb-5 font-secondary">
                Cover Photo<i className="ml-2 text-base md:text-lg fa fa-info-circle"></i>
            </p>
            <label className="relative w-full h-[130px] md:h-[150px]" htmlFor="upload-cover-image">
                <div className={"w-full h-full hover:cursor-pointer"}>
                    <img
                        src={coverImage || "https://ipfs.moralis.io:2053/ipfs/Qmcn1aZ4PKUUzwpTncuSbruwLD98dtiNqvoJG5zm8EMwXZ"}
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
