import { ReactComponentElement } from "react";
import styles from "./SectionComponent.module.scss";

export default function SectionComponent(props: {
  sectionName: string;
  children: any;
}) {
  return (
    <div className={styles.container}>
      <hr />
      <div className={styles.section_container}>
        <div className={styles.section}>
          <div className={styles.section_name}>{props.sectionName}</div>
        </div>
        <div className={styles.section_content}>{props.children}</div>
      </div>
    </div>
  );
}
