import styles from "../../styles/Button/Button.module.css";

export default function Button(props){
    return(
        <button className={props.green? styles['button--green']: styles['button--white']}>
            {props.children}
        </button>
    );
}