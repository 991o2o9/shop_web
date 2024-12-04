import styles from "./ProductCard.module.scss";

export const ProductCard = ({ item }) => {
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = cart.findIndex(
      (product) => product.id === item.id
    );

    if (existingProductIndex >= 0) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Товар добавлен в корзину!");
  };

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={item.img} alt={item.title} />
      </div>
      <div className={styles.info}>
        <div className={styles.description}>
          <span className={styles.title}>{item.title}</span>
          <span className={styles.desc}>{item.desc}</span>
        </div>
        <div className={styles.priceArea}>
          <p>{item.price} сом</p>
          <button onClick={handleAddToCart}>Купить</button>
        </div>
      </div>
    </div>
  );
};
