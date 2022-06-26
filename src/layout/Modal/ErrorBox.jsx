import { useContext } from "react";
import StatusContext from "../../../store/status-context";

const ErrorBox = () => {
    const [error, , , setError] = useContext(StatusContext);

    if (error.message == "Cannot execute Moralis.enableWeb3(), as Moralis Moralis.enableWeb3() already has been called, but is not finished yet ") {
        window.location.reload();
    }

    const handleClose = () => {
        setError((prevState) => ({
            ...prevState,
            showErrorBox: false,
        }));

        if (error.message == "Cannot execute Moralis.enableWeb3(), as Moralis Moralis.enableWeb3() already has been called, but is not finished yet ") {
            window.location.reload();
        }
    };

    return (
        error.showErrorBox && (
            <div
                className="fixed bottom-0 right-0 z-50 w-5/12 px-5 py-4 text-light-200 -translate-x-4 -translate-y-4 bg-error-200 border border-none rounded shadow-2xl"
                role="alert"
            >
                <strong className="font-semibold">{error.title}</strong>
                <br />
                <br />
                <span className="block sm:inline">{error.message}</span>
                <div className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={handleClose}>
                    <svg className="w-6 h-6 text-light-200 fill-current" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <title>Close</title>
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                    </svg>
                </div>
            </div>
        )
    );
};

export default ErrorBox;
