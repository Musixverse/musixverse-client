import styles from "../../../styles/ToggleButton/ToggleButton.module.css";

export default function ToggleButton({ toggleState, setToggleState, toggleType }) {
    return (
        <label className={styles.switch}>
            <input type="checkbox" checked={toggleState} onChange={(e) => {
                if(toggleType){
                    setToggleState({type: toggleType, selectedChoice: e.target.checked});
                    return;
                }
                setToggleState(e.target.checked);
                }} 
            />
            <span className={`${styles.round} ${styles.slider}`}></span>
        </label>
    );
}
