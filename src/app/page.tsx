import Image from "next/image";
import styles from "./page.module.scss";
import GitSvg from "@/svgComponents/GitSvg";
import TgSvg from "@/svgComponents/TgSvg";
import SectionComponent from "./components/SectionComponent";

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
      <SectionComponent sectionName="Обо мне">
    
      Привет! Я опытный веб-разработчик с более чем годом коммерческого опыта.
      Моя страсть к программированию началась еще во время учебы, и теперь спустя несколько лет обучения и учавствования в чемпионатах, я изучил большое количество библиотек, фреймворков, подходов и других технологий. 
      За время своей карьеры я учавствовал в реализации как больших бизнес веб-проектов, так и небольших профильных утилит.
      Моя цель - дальнейшее совершенствование навыков и развитие в сфере веб-разработки, чтобы создавать уникальные и качественные приложения. 
      
      </SectionComponent>
   
      
      
      <div className={styles.test2}></div>
    </div>
  );
}
