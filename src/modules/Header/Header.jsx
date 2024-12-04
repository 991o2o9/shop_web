import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import { navigation, path } from "../../utils/constants/constants";
import { Logo } from "../../assets/icons/Logo";
import { scrollToTop } from "../../utils/helpers/helpers";
import { useState } from "react";

export const Header = () => {
  const location = useLocation();

  const [balance] = useState(() => {
    return parseInt(localStorage.getItem("balance"), 10) || 0;
  });

  const getActiveLink = (pathName) => {
    const currentPathSegment = location.pathname.split("/")[1];
    const targetPathSegment = pathName.split("/")[1];
    return currentPathSegment === targetPathSegment ? styles.active : "";
  };

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <nav className={styles.nav}>
          <Link to={path.home}>
            <Logo />
          </Link>
          {navigation.map((item, index) => (
            <Link
              className={getActiveLink(item.path)}
              key={index}
              to={item.path}
              onClick={scrollToTop()}
            >
              <span>{item.label}</span>
            </Link>
          ))}
          <Link style={{ color: "#f7f7fc" }} to={path.admin}>
            Админ
          </Link>
          <div className={styles.balance}>
            <span>Текущий баланс: {balance} сом</span>
          </div>
        </nav>
      </div>
    </header>
  );
};
