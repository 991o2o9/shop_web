import { Container } from "../../../ui/Container/Container";
import styles from "./ProductBlock.module.scss";
import { ProductCard } from "../../../ui/ProductCard/ProductCard";

export const ProductBlock = () => {
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
    <Container>
      <div className={styles.productBlockItself}>
        <h3>Новый ассортимент товара</h3>
        <div className={styles.productList}>
          {data.slice(0, 8).map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
};
