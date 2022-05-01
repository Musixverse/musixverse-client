import ToggleButton from "../../../layout/ToggleButton/ToggleButton";

export default function Notification({heading, description, toggleSwitch}){
    return(
        <>
            <div className="flex items-center justify-between w-full mt-8 mb-7">
                <div>
                    <h3 className="mb-1 text-lg font-semibold font-secondary">{heading}</h3>
                    <p className="font-secondary text-[15px]">{description}</p>
                </div>
                {toggleSwitch? <ToggleButton/>:null}
            </div>
            <div className="flex-grow border-t-[3px] border-[#9a9a9a]"></div>
        </>
    );
}