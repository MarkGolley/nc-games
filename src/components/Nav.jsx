import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} to="/">
        HOME
      </Link>
      <Link className={styles.link} to="/categories">
        CATEGORIES
      </Link>
      <Link className={styles.link} to="/reviews">
        REVIEWS
      </Link>
      <Link className={styles.link} to="/users">
        USERS
      </Link>
    </nav>
  );
};

export default Nav;
