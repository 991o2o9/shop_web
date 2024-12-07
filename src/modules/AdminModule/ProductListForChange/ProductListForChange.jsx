import { useEffect, useState } from "react";
import styles from "./ProductListForChange.module.scss";
import axios from "axios";
import { ProductCard } from "../../../ui/ProductCard/ProductCard";
export const ProductListForChange = () => {
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products`);
        setOriginalData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.productList}>
      {originalData.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );
};
