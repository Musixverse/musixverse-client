import { useState } from "react";
import CategoryModal from "../components/Modal/CategoryModal";

export default function MailList() {
    const [showCategoryModal, setShowCategoryModal] = useState(false);
    const [enterPressed, setEnterPressed] = useState(false);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            setEnterPressed(true);
        }
    };

    return (
        <form
            action={enterPressed ? `javascript:void(0)` : "https://musixverse.us14.list-manage.com/subscribe/post"}
            method="POST"
            onKeyDown={handleKeyDown}
            id="mailchimp-mxv-mailing-list-form"
        >
            <input type="hidden" name="u" value="526b30ef38873ddc8b5b707b2" />
            <input type="hidden" name="id" value="895279b10e" />

            <div className="w-full sm:max-w-xl">
                <input
                    type="email"
                    name="MERGE0"
                    id="MERGE0"
                    spellCheck={false}
                    autoCapitalize="off"
                    autoCorrect="off"
                    className="relative w-full max-w-[480px] px-5 py-2 pl-4 pr-10 text-sm font-light border-gray-300 rounded-md lg:w-7/12 bg-light-300 font-primary focus:ring-primary-100 focus:border-primary-100 sm:text-sm"
                    placeholder="Your email address"
                    autoComplete="off"
                    required
                />
                <button
                    // type="button"
                    type="submit"
                    className="px-5 py-2 mt-3 font-semibold rounded lg:mt-0 lg:ml-2 bg-primary-100 text-light-100 font-primary hover:bg-primary-200 hover:text-light-200"
                    // onClick={() => {
                    //     setShowCategoryModal(true);
                    //     setEnterPressed(false);
                    // }}
                >
                    Subscribe Now
                </button>
            </div>
            <CategoryModal showCategoryModal={showCategoryModal} setShowCategoryModal={setShowCategoryModal} setEnterPressed={setEnterPressed} />
        </form>
    );
}
