import { useState, useEffect } from "react";
import styles from "./Search.module.scss";
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

export const Search = ({ onSearch, initialValue = "" }) => {
  const [searchValue, setSearchValue] = useState(initialValue);

  useEffect(() => {
    setSearchValue(initialValue);
  }, [initialValue]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value.trim() === "") {
      onSearch("");
    }
  };

  const clearInput = () => {
    setSearchValue("");
    onSearch("");
  };

  const handleSearch = () => {
    onSearch(searchValue.trim());
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.search}>
      <CiSearch className={styles.icon} />
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Найти"
        className={styles.input}
      />
      {searchValue && (
        <button className={styles.clearButton} onClick={clearInput}>
          <IoIosClose />
        </button>
      )}
      <button className={styles.btn}>Поиск</button>
    </div>
  );
};
