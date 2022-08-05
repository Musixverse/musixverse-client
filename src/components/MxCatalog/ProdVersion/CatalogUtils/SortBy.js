import HorizontalRuler from "../../../../layout/HorizontalRuler";
import RadioButton from "../../../../layout/RadioButton";

export default function SortBy(){
    return(
        <div className="flex w-[657px] flex-col mt-8 max-h-[425px] overflow-y-scroll">
            <h5 className="text-lg font-bold font-secondary">Sort by</h5>
            <p className="font-secondary text-[#7F7F7F] text-[15px]">Sort NFTs in terms of Price & Date </p>
			<HorizontalRuler/>
            <p className="mt-4 font-secondary">Price</p>
            <div className="flex mt-2 mb-4 space-x-7">
                <RadioButton radioId={'priceHigh'} radioLabel={'MATIC [Min] to [Max]'}/>
                <RadioButton radioId={'priceLow'} radioLabel={'MATIC [Max] to [Min]'}/>
            </div>
            <HorizontalRuler/>
            <p className="mt-4 font-secondary">Date</p>
            <div className="flex mt-2 space-x-7">
                <RadioButton radioId={'dateNew'} radioLabel={'Latest First'}/>
                <RadioButton radioId={'dateOld'} radioLabel={'Oldest First'}/>
            </div>
        </div>
    );
}