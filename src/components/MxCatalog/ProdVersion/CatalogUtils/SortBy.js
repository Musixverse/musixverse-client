import HorizontalRuler from "../../../../layout/HorizontalRuler";

export default function SortBy(){
    return(
        <div className="flex w-[657px] flex-col mt-8 max-h-[425px] overflow-y-scroll">
            <h5 className="text-lg font-bold font-secondary">Sort by</h5>
            <p className="font-secondary text-[#7F7F7F] text-[15px]">Sort NFTs in terms of Price & Date </p>
			<HorizontalRuler/>
            <p className="mt-3 font-secondary">Price</p>
        </div>
    );
}