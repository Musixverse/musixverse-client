import { useTheme } from "next-themes";
import styles from "../../../../styles/Registration/Artist.module.css";

export default function RightSection(props) {
    const { theme } = useTheme();
    return <div className={styles[theme==="light"? "register__container--right-section_W":"register__container--right-section_B"]}>{props.children}</div>;
}
