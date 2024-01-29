import { ReactElement } from "react";
import styles from "./ListComponent.module.scss";


export default function ListComponent(props: {
  children: ReactElement | ReactElement[],
}) {
 
  return <ul className={styles.ul}>{props.children}</ul>;
}
