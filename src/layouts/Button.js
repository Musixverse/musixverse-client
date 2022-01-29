import styles from "../../styles/Button/Button.module.css";

export default function Button(props){
    return(
        <button className={props.green? styles['button__green']: styles['button__white']}>
            {props.children}
        </button>
    );
}