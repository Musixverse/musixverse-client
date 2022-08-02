export default function RadioButton({radioId, radioLabel}){
    return(
        <div className="flex items-center">
            <input
                id={radioId}
                type="radio"
                name="cover-art-artist-radio"
                className="hidden"
                onClick={(e) => toggleCoverArtArtistRadio(e)}
                checked={creditCoverArtArtist}
                onChange={(e) => {}}
            />
            <label htmlFor={radioId} className="flex items-center text-sm font-normal cursor-pointer font-secondary">
                <span className="inline-block w-6 h-6 mr-1 border-2 rounded-full border-[#363636] flex-no-shrink"></span>
                {radioLabel}
            </label>
        </div>
    );
}