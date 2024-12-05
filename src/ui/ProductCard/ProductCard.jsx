import axios from "axios";
import styles from "./ProductCard.module.scss";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useState } from "react";
import { ChangeModal } from "../../modules/AdminModule/ChangeModal/ChangeModal";

export const ProductCard = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
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
          <div className={styles.rulePlace}>
            <CiEdit className={styles.icon} onClick={toggleModal} />
            <MdDelete
              className={styles.icon}
              onClick={() => deleteItem(item._id)}
            />
            <button onClick={handleAddToCart}>Купить</button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ChangeModal currentProduct={item} toggleModal={toggleModal} />
      )}
    </div>
  );
};
