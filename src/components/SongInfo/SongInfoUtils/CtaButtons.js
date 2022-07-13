export default function CtaButtons() {
    return (
        <div className="bg-light-100 w-full rounded-lg p-2 flex justify-between items-center dark:bg-dark-200 ">
            <div>
                <button className="rounded-lg px-8 py-2 mr-3 bg-primary-100 font-primary font-semibold text-lg text-light-100 hover:bg-primary-200">
                    Buy Now
                </button>
                {/* <button className="py-2 rounded-lg px-8 bg-light-200 font-primary font-semibold text-lg text-dark-100 dark:bg-dark-100 dark:text-light-100 hover:bg-[#dedede] ">Make Offer</button> */}
            </div>
            <button className="w-[38px] h-[38px] text-center rounded-full bg-light-200 hover:bg-[#dedede]">
                <i className="fas fa-ellipsis-v text-dark-100 text-sm"></i>
            </button>
        </div>
    );
}
