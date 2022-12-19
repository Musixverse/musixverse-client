import dynamic from "next/dynamic";
const ToggleOnSaleModal = dynamic(() => import("./ToggleOnSaleModal"));

const ToggleOnSaleButtons = ({ tokenId, toggleOnSale, toggleOnSaleModalOpen, setToggleOnSaleModalOpen, onSale }) => {
	return (
		<>
			{onSale || onSale === null ? (
				<button
					onClick={() => toggleOnSale()}
					className="rounded-lg px-8 py-2 mr-3 bg-light-200 font-primary font-semibold text-lg text-dark-600 dark:bg-dark-600 dark:text-light-100 hover:bg-[#dedede]"
				>
					Take Down from Sale
				</button>
			) : (
				<button
					onClick={() => toggleOnSale()}
					className="rounded-lg px-8 py-2 mr-3 bg-light-200 font-primary font-semibold text-lg text-dark-600 dark:bg-dark-600 dark:text-light-100 hover:bg-[#dedede]"
				>
					Put Up for Sale
				</button>
			)}

			<ToggleOnSaleModal isOpen={toggleOnSaleModalOpen} setToggleOnSaleModalOpen={setToggleOnSaleModalOpen} tokenId={tokenId} onSale={onSale} />
		</>
	);
};

export default ToggleOnSaleButtons;
