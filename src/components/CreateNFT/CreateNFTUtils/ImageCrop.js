import { useState } from "react";
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

function ImageCrop({ imageToCrop, setCroppedImage, setShowModal }) {
    //imageToCrop is the user selected image
    //setCroppedImage is the cropped image state setter function
    const [cropConfig, setCropConfig] = useState(
        // default crop config
        {
            unit: "%",
            width: 640,
            aspect: 1 / 1
        }
    );
    const [imageRef, setImageRef] = useState();

    async function cropImage(crop) {
        if (imageRef && crop.width && crop.height) {
            const croppedImage = await getCroppedImage(
                imageRef,
                crop,
                "croppedImage.jpeg" // destination filename
            );
            // calling the props function to expose
            // croppedImage to the parent component
            URL.revokeObjectURL(imageToCrop);
            setCroppedImage(croppedImage);
        }
    }

    function getCroppedImage(sourceImage, cropConfig, fileName) {
        // creating the cropped image from the source image
        const canvas = document.createElement("canvas");
        const scaleX = sourceImage.naturalWidth / sourceImage.width;
        const scaleY = sourceImage.naturalHeight / sourceImage.height;
        canvas.width = cropConfig.width;
        canvas.height = cropConfig.height;
        const ctx = canvas.getContext("2d");

        ctx.drawImage(
            sourceImage,
            cropConfig.x * scaleX,
            cropConfig.y * scaleY,
            cropConfig.width * scaleX,
            cropConfig.height * scaleY,
            0,
            0,
            cropConfig.width,
            cropConfig.height
        );
        // Method 1
        //DataURL(memory loaded based) is less efficient than ObjectURL(reference based)
        // const base64Image = canvas.toDataURL("image/jpeg", 1);
        // return base64Image;

        // Method 2
        return new Promise((resolve, reject) => {
            canvas.toBlob((blob) => {
            // returning an error
            if (!blob) {
                reject(new Error("Canvas is empty"));
                return;
            }

            blob.name = fileName;
            // creating a Object URL representing the Blob object given
            const croppedImageUrl = URL.createObjectURL(blob);

            resolve(croppedImageUrl);
            }, "image/jpeg");
        });
    }

    return (
        <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
            <div className="relative inline-block overflow-hidden text-left align-bottom transition-all transform rounded-lg shadow-xl bg-none sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
                <div className="px-4 pt-5 pb-6 dark:bg-[rgba(255,255,255,0.06)] dark:backdrop-blur-[7px] backdrop-blur-[7px] bg-[rgba(255,255,255,0.7)] sm:p-8 sm:pb-6">
                    <div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            {/* Modal Heading */}
                            <Dialog.Title as="h3" className="mb-4 text-lg font-medium leading-6 text-gray-900 dark:text-light-100">
                                Crop NFT Cover Art
                            </Dialog.Title>
                            {/* Crop Component */}
                            <div className="flex items-center justify-center">
                                <ReactCrop
                                    src={imageToCrop}
                                    crop={cropConfig}
                                    ruleOfThirds
                                    imageStyle={{height: '270px'}}
                                    onImageLoaded={(imageRef) => setImageRef(imageRef)}
                                    onChange={(cropConfig) => setCropConfig(cropConfig)}
                                    crossorigin="anonymous" // to avoid CORS-related problems
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 dark:bg-[rgba(255,255,255,0.06)] dark:backdrop-blur-[7px] backdrop-blur-[7px] bg-[rgba(255,255,255,0.7)] sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                        type="button"
                        className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-[#676767] border border-transparent rounded-md shadow-sm dark:text-[#323232] bg-light-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-300 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => {URL.revokeObjectURL(imageToCrop);setShowModal(false);}}
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-100 hover:bg-primary-300 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => {setShowModal(false);cropImage(cropConfig);}}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </Transition.Child>
        //We can create a button so that on the button click it will render the final image nft
    );
}

ImageCrop.defaultProps = {
  setCroppedImage: () => {}
};

export default ImageCrop;