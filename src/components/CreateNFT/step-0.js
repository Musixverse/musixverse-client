import styles from "../../../styles/CreateNFT/createNFT.module.css";

const CreateNFTIntro = ({ nextStep }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-200">
            <div className="overflow-x-hidden w-full max-w-[1920px] pt-24 px-16 xl:px-20 2xl:px-36">
                <div className={styles["createNFT__container"]}>
                    {/* Background div */}
                    <div className={styles["background-img__container"]}>
                        {/* Blur background div */}
                        <div className={styles["background-blur__container"]}>
                            <p className="font-tertiary text-3xl">CREATE NFT</p>
                            <p className="font-secondary font-bold max-w-sm">
                                Creating NFT is easier than ever! By creating NFT you can also unlock and enjoy several benefits and rewards!
                            </p>
                            <div className="flex items-center space-x-4 font-secondary font-bold mt-10">
                                <input type="checkbox" name="Terms and Conditions" id="T&C" />
                                <label htmlFor="T&C">
                                    I have read and agree to the{" "}
                                    <a href="#" target="_blank">
                                        Terms & Conditions
                                    </a>
                                </label>
                            </div>
                            <p className="font-secondary text-sm font-medium mt-4 max-w-[340px]">
                                Confirm that you have read and you agree to our terms and conditions for creating this NFT.
                            </p>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    nextStep();
                                }}
                                className="flex items-center mt-4 px-4 py-3 text-sm font-bold rounded-md hover:bg-primary-200 bg-primary-100 text-light-100 font-primary"
                            >
                                Continue
                                <span className="ml-2 font-semibold material-symbols-outlined">arrow_right_alt</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateNFTIntro;
