const { Fragment, useState, useEffect } = require("react");
const { Transition } = require("@headlessui/react");

// Inspiration from- https://gist.github.com/clqu/32883b5bc2146bdc545a261b49c3c5eb
module.exports = ({
    isOpen = "",
    image = "",
    title = "",
    content = "",
    buttons = [],
    classes = "",
    onClose = "",
    onConfirm = "",
    onDiscard = "",
    children,
}) => {
    let [isModalOpen, setIsModalOpen] = useState(isOpen);

    useEffect(() => {
        setIsModalOpen(isModalOpen);
        if (!isModalOpen) {
            document.documentElement.style.overflow = "auto";
        } else {
            document.documentElement.style.overflow = "hidden";
        }
    }, [isModalOpen]);

    useEffect(() => {
        setIsModalOpen(isOpen);
    }, [isOpen]);

    const handleChange = () => {
        setIsModalOpen(!isModalOpen);
    };

    const closeModal = () => {
        handleChange();
        onClose();
    };

    return (
        <>
            <div onClick={() => handleChange()}>{children}</div>

            <Transition show={isModalOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="transition-all duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-all duration-200"
                    leaveTo="opacity-0"
                    leaveFrom="opacity-100"
                >
                    <div style={{ zIndex: "50" }} onClick={() => handleChange()} className="w-full h-full left-0 top-0 bg-black/50 backdrop-blur-sm fixed" />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="transition-all duration-200"
                    enterFrom="opacity-0 scale-75"
                    enterTo="opacity-100 scale-100"
                    leave="transition-all duration-200"
                    leaveTo="opacity-0 scale-75"
                    leaveFrom="opacity-100 scale-100"
                >
                    <div style={{ zIndex: "50" }} className="flex justify-center items-center h-full w-full fixed">
                        <div className={`max-w-[32rem] sm:w-full w-11/12 ${classes ? classes : "p-4 bg-white dark:bg-dark-100 rounded-lg"}`}>
                            <div className="w-full flex justify-end items-center">
                                <div
                                    onClick={() => closeModal()}
                                    className="w-8 h-8 flex justify-center items-center rounded-lg transition-all duration-200 cursor-pointer hover:bg-zinc-500/20 "
                                >
                                    {/* <svg
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 36 36"
                                        version="1.1"
                                        preserveAspectRatio="xMidYMid meet"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <path
                                            className="clr-i-outline clr-i-outline-path-1"
                                            d="M19.41,18l8.29-8.29a1,1,0,0,0-1.41-1.41L18,16.59,9.71,8.29A1,1,0,0,0,8.29,9.71L16.59,18,8.29,26.29a1,1,0,1,0,1.41,1.41L18,19.41l8.29,8.29a1,1,0,0,0,1.41-1.41Z"
                                        />
                                        <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
                                    </svg> */}
                                    <i className="fa-solid fa-xmark"></i>
                                </div>
                            </div>
                            <div className="w-full flex flex-col justify-between items-center mb-4">
                                {image}
                                <div className="font-medium text-xl">{title}</div>
                            </div>
                            <div className="text-sm py-6 px-8 text-center">{content}</div>
                            <div className="mt-6 flex justify-end items-center gap-2">
                                {buttons.map((button, index) => (
                                    <button
                                        onClick={() => {
                                            if (button.role === "discard") {
                                                onDiscard();
                                            }
                                            if (button.role === "confirm") {
                                                onConfirm();
                                            }
                                            if (button.role === "custom") {
                                                button.onClick();
                                            }
                                            if (button.toClose) {
                                                setIsModalOpen(false);
                                            }
                                        }}
                                        key={index}
                                        className={button.classes}
                                    >
                                        {button.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </Transition.Child>
            </Transition>
        </>
    );
};
