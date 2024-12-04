import styles from "./CreateProd.module.scss";
import { OrderList } from "./OrderList/OrderList";

export const CreateProd = () => {
  return (
    <div className={styles.adminP}>
      <div className={styles.create}>
        <h3>Создать товар</h3>
        <div className={styles.inpArea}>
          <input type="text" name="" id="" placeholder="Название" />
          <input type="text" name="" id="" placeholder="Цена" />
          <input type="text" name="" id="" placeholder="Описание" />
          <input
            type="text"
            name=""
            id=""
            placeholder="URL- путь на фотографию"
          />
        </div>
        <button>Создать</button>
      </div>
      <OrderList />
    </div>
  );
};

export default CreateProd;
