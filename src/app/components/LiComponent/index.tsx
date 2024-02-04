import styles from "./LiComponent.module.scss";
import Image from "next/image";


export default function LiComponent(props: {
  children: string;
  imageName?: string;
  descriptrion?: string;
  text?: string;
}) {
  return (
    <li className={styles.li}>
      {/* <div className={styles.decoration></div> */}
      <div className={styles.left_side}>
        {props.imageName && (
          <div className={styles.img_container}>
            <Image
            quality={100}
            alt="listImg"
            fill
            src={require('../../../../public/'+props.imageName)}
            placeholder="blur"
            />
          </div>
        )}
        <div className={styles.label_container}>
          <div className={styles.description}>{props.descriptrion}</div>
          <div className={styles.label}>{props.children}</div>
        </div>
      </div>
      <p className={styles.text}>{props.text}</p>

    </li>
  );
}
