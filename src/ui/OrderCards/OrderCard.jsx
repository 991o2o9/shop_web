import styles from "./OrderCard.module.scss";
export const OrderCard = ({ item }) => {
  return (
    <div className={styles.card}>
      <img src={item.orders[0].img} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <div className={styles.cardDetails}>
          {item.orders.map((item, index) => (
            <div key={index} className={styles.cardInside}>
              <p>
                <strong>{`Подукт №${index + 1}`}:</strong> {item.title}
              </p>
              <p>
                <strong>Информация о товаре:</strong> {item.description}
              </p>
              <p>
                <strong>Стоимость:</strong> {item.price} сом
              </p>
              <p>
                <strong>Количество:</strong> {item.quantity}
              </p>
            </div>
          ))}
        </div>
        <p className={styles.cardPhone}>
          <strong>Телефон:</strong> {item.phone}
        </p>
        <p className={styles.cardPhone}>
          <strong>Общая цена:</strong> {item.totalPrice} сом
        </p>
        <p className={styles.cardPhone}>
          <strong>Время заказа: </strong>
          {item.orderTime}
        </p>
      </div>
    </div>
  );
};
