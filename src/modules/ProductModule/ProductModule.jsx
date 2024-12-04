import { useState, useEffect } from "react";
import { ProductCard } from "../../ui/ProductCard/ProductCard";
import { Search } from "../../ui/Search/Search";
import styles from "./ProductModule.module.scss";
import axios from "axios";

export const ProductModule = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [searchValue, setSearchValue] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const querySearch = params.get("search") || "";
    const querySort = params.get("sort") || "default";
    const queryMinPrice = params.get("minPrice") || "";
    const queryMaxPrice = params.get("maxPrice") || "";

    setSearchValue(querySearch);
    setSortOrder(querySort);
    setPriceRange({ min: queryMinPrice, max: queryMaxPrice });

    filterData(querySearch, querySort, queryMinPrice, queryMaxPrice);
  }, []);

  const filterData = (search, sort, minPrice, maxPrice) => {
    let filteredData = data;

    if (search) {
      filteredData = filteredData.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setNoResults(filteredData.length === 0);
    }

    if (minPrice) {
      filteredData = filteredData.filter(
        (item) => item.price >= parseFloat(minPrice)
      );
    }
    if (maxPrice) {
      filteredData = filteredData.filter(
        (item) => item.price <= parseFloat(maxPrice)
      );
    }

    switch (sort) {
      case "asc":
        filteredData = filteredData.sort((a, b) => a.price - b.price);
        break;
      case "desc":
        filteredData = filteredData.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setData(filteredData);
  };

  const handleSearch = (searchTerm) => {
    setSearchValue(searchTerm);
    if (searchTerm.trim() !== "") {
      filterData(searchTerm, sortOrder, priceRange.min, priceRange.max);
    } else {
      setData(data);
      setNoResults(false);
    }
  };

  const handleSort = (order) => {
    setSortOrder(order);
    filterData(searchValue, order, priceRange.min, priceRange.max);
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({ ...prev, [name]: value }));
    filterData(
      searchValue,
      sortOrder,
      name === "min" ? value : priceRange.min,
      name === "max" ? value : priceRange.max
    );
  };

  return (
    <div className="container">
      <div className={styles.searchSortArea}>
        <div className={styles.sorter}>
          <span className={styles.title}>Сортировка:</span>
          <div className={styles.btnArea}>
            <button
              style={{
                transform: sortOrder === "default" ? "scale(1.05)" : "",
              }}
              onClick={() => handleSort("default")}
            >
              По умолчанию
            </button>
            <button
              style={{
                transform: sortOrder === "desc" ? "scale(1.05)" : "",
              }}
              onClick={() => handleSort("desc")}
            >
              По убыванию
            </button>
            <button
              style={{
                transform: sortOrder === "asc" ? "scale(1.05)" : "",
              }}
              onClick={() => handleSort("asc")}
            >
              По возрастанию
            </button>
          </div>
          <div className={styles.byPrice}>
            <span className={styles.title}>По цене:</span>
            <div className={styles.inpArea}>
              <input
                type="number"
                name="min"
                value={priceRange.min}
                onChange={handlePriceChange}
                placeholder="Цена от"
              />
              <input
                type="number"
                name="max"
                value={priceRange.max}
                onChange={handlePriceChange}
                placeholder="Цена до"
              />
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <Search onSearch={handleSearch} initialValue={searchValue} />
          {noResults ? (
            <div className={styles.noResults}>Результаты не найдены</div>
          ) : (
            <div className={styles.productList}>
              {data.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
