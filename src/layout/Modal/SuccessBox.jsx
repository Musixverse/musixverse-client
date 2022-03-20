const SuccessBox = ({ success, setSuccess }) => {
    const handleClose = () => {
        setSuccess((prevState) => ({
            ...prevState,
            showSuccessBox: false,
        }));
    };

    return (
        success.showSuccessBox && (
            <div
                className="bg-green-100 w-5/12 border border-green-400 text-green-700 px-4 py-3 rounded fixed right-0 bottom-0 -translate-x-4 -translate-y-4 z-50"
                role="alert"
            >
                <strong className="font-bold">{success.title}</strong>
                <br />
                <br />
                <span className="block sm:inline">{success.message}</span>
                <div className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={handleClose}>
                    <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <title>Close</title>
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                    </svg>
                </div>
            </div>
        )
    );
};

export default SuccessBox;