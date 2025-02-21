import axios from "axios";
import styles from "./ProductCard.module.scss";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useState } from "react";
import { ChangeModal } from "../../modules/AdminModule/ChangeModal/ChangeModal";
import { useBalance } from "../../modules/OrderModule/context/BalanceProvider/BalanceProvider";

export const ProductCard = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useBalance();

  const isAdminPage = window.location.pathname === "/admin";

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const truncate = (text, length) => {
    if (text.length <= length) {
      return text;
    }
    return text.slice(0, length) + "...";
  };

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={item.img} alt={item.title} />
      </div>
      <div className={styles.info}>
        <div className={styles.description}>
          <span className={styles.title}>{item.title}</span>
          <span className={styles.desc}>{truncate(item.desc, 70)}</span>
        </div>
        <div className={styles.priceArea}>
          <p>{item.price} сом</p>
          <div className={styles.rulePlace}>
            {isAdminPage && (
              <>
                <CiEdit className={styles.icon} onClick={toggleModal} />
                <MdDelete
                  className={styles.icon}
                  onClick={() => deleteItem(item._id)}
                />
              </>
            )}

            {!isAdminPage && (
              <button onClick={() => addToCart(item)}>Купить</button>
            )}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ChangeModal currentProduct={item} toggleModal={toggleModal} />
      )}
    </div>
  );
};
