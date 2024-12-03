import { Container } from "../../../ui/Container/Container";
import { Textpart } from "./components/textPart/Textpart";
import styles from "./HeroBlock.module.scss";
export const HeroBlock = () => {
  return (
    <>
      <Container>
        <section className={styles.hero}>
          <div className={styles.content}>
            <h1>УНИВЕРСАЛЬНАЯ КЛАВИАТУРА K380 BLUETOOTH</h1>
            <span>
              Доставка по всему Кыргызстану Бесплатно Успей заказать прямо
              сейчас.
            </span>
            <button>Посмотреть</button>
          </div>
        </section>
      </Container>
      <Textpart />
    </>
  );
};
