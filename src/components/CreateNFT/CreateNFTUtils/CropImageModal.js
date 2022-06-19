import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import ImageCrop from './ImageCrop';

export default function CropImageModal({showModal, setShowModal, imageToCrop, setCroppedImage}){
    // console.log(props.showModal);
    // const {showModal, setShowModal, imageToCrop, setCroppedImage} = props;
    const cancelButtonRef = useRef(null)
    // console.log("hi: ",props.showModal);
    console.log(" from modal: ",imageToCrop);

    return(
        <Transition.Root show={showModal} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" initialFocus={cancelButtonRef} onClose={()=>setShowModal(false)}>
                <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                    {/* Background Grey Area */}
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <ImageCrop imageToCrop={imageToCrop} setCroppedImage={setCroppedImage} setShowModal={setShowModal}/>
                </div>
            </Dialog>
        </Transition.Root>
    );
}