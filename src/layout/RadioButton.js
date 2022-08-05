export default function RadioButton({radioState, setRadioState, radioType, radioId1, radioLabel1, radioId2, radioLabel2, groupName}){
    return(
        <div className="flex items-center my-2 space-x-5">
            <div className="flex items-center">
                <input
                    id={radioId1}
                    type="radio"
                    name={groupName}
                    className="hidden"
                    onClick={() => {setRadioState({type: radioType, selectedChoice: true})}}
                    checked={radioState}
                    onChange={(e)=>{}}
                />
                <label htmlFor={radioId1} className="flex items-center text-sm font-normal cursor-pointer font-secondary">
                    <span className="inline-block w-6 h-6 mr-1 border-2 rounded-full border-[#363636] flex-no-shrink"></span>
                    {radioLabel1}
                </label>
            </div>
            <div className="flex items-center">
                <input
                    id={radioId2}
                    type="radio"
                    name={groupName}
                    className="hidden"
                    onClick={() => {setRadioState({type: radioType, selectedChoice: false})}}
                    checked={!radioState}
                    onChange={(e)=>{}}
                />
                <label htmlFor={radioId2} className="flex items-center text-sm font-normal cursor-pointer font-secondary">
                    <span className="inline-block w-6 h-6 mr-1 border-2 rounded-full border-[#363636] flex-no-shrink"></span>
                    {radioLabel2}
                </label>
            </div>
        </div>
    );
}