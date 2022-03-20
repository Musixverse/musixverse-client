import styles from "../../styles/CustomButton/CustomButton.module.css";

export default function CustomButton(props){
    return(
        <button className={props.green? styles['button--green']: styles['button--white']}>
            {props.children}
        </button>
    );
}