import styles from "./page.module.scss";
import GitSvg from "@/svgComponents/GitSvg";
import TgSvg from "@/svgComponents/TgSvg";
import SectionComponent from "./components/SectionComponent";
import ListComponent from "./components/ListComponent";
import LiComponent from "./components/LiComponent";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.preview}>
        <div className={styles.background_decor}></div>
        <div className={styles.test_circle}></div>
        <div>
          <div className={styles.firstName}>Никита</div>
          <div className={styles.secondName}>Чернецов</div>
          <div className={styles.job}>Веб-разработчик</div>
        </div>

        <div className={styles.social}>
          {/* <Image className="img" src={img2}alt="" width={100} height={100}  /> */}
          <GitSvg />
          <TgSvg />
        </div>

        <div className={styles.contacts}>
          {/* <hr /> */}
          <div className={styles.contact_block}>
            <div className={styles.title}>Mail</div>
            <div className={styles.info}>forbl1zzard@mail.ru</div>
          </div>
          <div className={styles.contact_block}>
            <div className={styles.title}>Phone</div>
            <div className={styles.info}>+7(924)139-70-62</div>
          </div>
        </div>
      </div>
      <SectionComponent sectionName="Обо мне">
        <p>
          Привет! Я опытный веб-разработчик с небольшим, но ценным опытом
          коммерческой разработки. Моя страсть к программированию началась еще
          во время учебы, и теперь спустя несколько лет обучения и участвования
          в чемпионатах, я изучил большое количество библиотек, фреймворков,
          подходов и других технологий. За время своей карьеры я участвовал в
          реализации как больших бизнес веб-проектов, так и небольших профильных
          утилит. Моя цель - дальнейшее совершенствование навыков и развитие в
          сфере веб-разработки, чтобы создавать уникальные и качественные
          приложения.
        </p>
      </SectionComponent>

      <SectionComponent sectionName="Мои навыки">
        <ListComponent>
          <LiComponent text="Html, Css, Scss, Php, JavaScript, TypeScript, React.js, Next.js, GraphQL, MySql.">
            Основные
          </LiComponent>
          <LiComponent text="Angular.js, Vue.js, Laravel, Java, WebSocket.">
            Имел опыт
          </LiComponent>
        </ListComponent>
      </SectionComponent>
      <SectionComponent sectionName="Опыт работы">
        <ListComponent>
          <LiComponent
            text="Разрабатывал утилиты для решения внутринних задач компании."
            descriptrion="03.2022 - 05.2022"
            imageName="vladlink-logo.png"
          >
            Владлинк
          </LiComponent>
          <LiComponent
            text="Участвовал в разработке сайта для администрирования клиентской базы. Работал как с клиентской частью сайта, так и с серверной."
            descriptrion="07.2021 - 12.2021"
            imageName="yagoda-logo.png"
          >
            Ягода
          </LiComponent>
        </ListComponent>
      </SectionComponent>
      <SectionComponent sectionName="Достижения">
        <ListComponent>
          {/* <LiComponent>
            Фриланс
          </LiComponent> */}
          <LiComponent
            descriptrion="2021"
            text='Занял 1-е место в региональном чемпионате по компетенции "Разработка мобильных приложений"'
            imageName="worldskills-logo.png"
          >
            WorldSkills Russia
          </LiComponent>
          <LiComponent
            descriptrion="2020"
            text='Занял 4-е место в региональном чемпионате по компетенции "Разработка мобильных приложений"'
            imageName="worldskills-logo.png"
          >
            WorldSkills Russia
          </LiComponent>
        </ListComponent>
      </SectionComponent>
      <SectionComponent sectionName="Образование">
        <ListComponent>
          <LiComponent
            descriptrion="2018-2022"
            text='Специальность - "Информационные системы и программирование"'
            imageName="college-logo.png"
          >
            КГА ПОУ ВСК
          </LiComponent>
        </ListComponent>
      </SectionComponent>

      <div className={styles.test2}></div>
    </div>
  );
}
