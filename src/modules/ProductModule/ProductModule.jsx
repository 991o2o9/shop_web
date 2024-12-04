import { ProductCard } from "../../ui/ProductCard/ProductCard";
import { Search } from "../../ui/Search/Search";
import styles from "./ProductModule.module.scss";

export const ProductModule = () => {
  const data = [
    {
      title: "Ноутбук MSI GF63 8RC 8гб ОЗУ - 512гб SSD 1TB HDD",
      desc: "Игровой ноутбук",
      price: "65.000",
    },
    {
      title: "Ноутбук MSI GF63 8RC 8гб ОЗУ - 512гб SSD 1TB HDD",
      desc: "Игровой ноутбук",
      price: "65.000",
    },
    {
      title: "Ноутбук MSI GF63 8RC 8гб ОЗУ - 512гб SSD 1TB HDD",
      desc: "Игровой ноутбук",
      price: "65.000",
    },
    {
      title: "Ноутбук MSI GF63 8RC 8гб ОЗУ - 512гб SSD 1TB HDD",
      desc: "Игровой ноутбук",
      price: "65.000",
    },
    {
      title: "Ноутбук MSI GF63 8RC 8гб ОЗУ - 512гб SSD 1TB HDD",
      desc: "Игровой ноутбук",
      price: "65.000",
    },
  ];
  return (
    <div className="container">
      <div className={styles.searchSortArea}>
        <div className={styles.sorter}>
          <span className={styles.title}>Сортировка:</span>
          <div className={styles.btnArea}>
            <button>По умолчанию</button>
            <button>По убыванию</button>
            <button>По возростанию</button>
          </div>
          <div className={styles.byPrice}>
            <span className={styles.title}>По цене:</span>
            <div className={styles.inpArea}>
              <input type="text" name="" id="" placeholder="Цена от" />
              <input type="text" name="" id="" placeholder="Цена до" />
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <Search />
          <div className={styles.productList}>
            {data.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
