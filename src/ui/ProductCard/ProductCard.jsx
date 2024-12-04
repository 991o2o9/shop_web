import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";
export const ProductCard = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img
          src="https://s3-alpha-sig.figma.com/img/b0f3/cba3/65be2870bbd1255a2c6ebc204eedeb6a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bluee0Zp22WvgUpjshU47oGSkRlRuuWHH~eU7-4~s2nXn0T~sjoy9p~uVhmfIWZ5gn0UI0Kb0DYu4S4YJMm766gnKzS4QUeqfkOpW4FLBm0RvyEghhGxiw8QuKxLiEG1YG4ePrcHHA6QeMTZEl4M9~Ag3IMDb4lFH90lIZvgt7qIiLiswwqkmyQ0goyWTFTZqsigJ7nM1shsCR2ewUM1JXKCyJV5qUaR5l88prqqbGvL-SK2e3xPpJNKrqMn4WnoRVqAIaKB7zt6R0gnsuVlzu57~EkLlZ1jcnV8cR08P8F08EgdVrC3DEGMxcncJVPQgMqKoKpyi1D-NIjPDAHzlQ__"
          alt=""
        />
      </div>
      <div className={styles.info}>
        <div className={styles.description}>
          <span className={styles.title}>{item.title}</span>
          <span className={styles.desc}>{item.desc}</span>
        </div>
        <div className={styles.priceArea}>
          <p>{item.price}сом</p>
          <Link>Купить</Link>
        </div>
      </div>
    </div>
  );
};
