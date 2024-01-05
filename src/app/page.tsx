import Image from "next/image";
import styles from "./page.module.scss";
import GitSvg from "@/svgComponents/GitSvg";
import TgSvg from "@/svgComponents/TgSvg";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.preview}>
        <div className={styles.background_decor}></div>
        <div className={styles.test_circle}></div>
        <div>
          <div className={styles.firstName}>Никита</div>
          <div className={styles.secondName}>Чернецов</div>
          <div className={styles.job}>Front-end разработчик</div>
        </div>
        <div className={styles.social}>
          {/* <Image className="img" src={img2}alt="" width={100} height={100}  /> */}
          <GitSvg />
          <TgSvg />
        </div>
      </div>

      <div className={styles.test2}></div>
    </div>
  );
}
