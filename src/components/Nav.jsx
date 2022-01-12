import React from "react";
import { Link } from "react-router-dom";
import LightMode from "./LightMode";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} to="/">
        HOME
      </Link>
      <Link className={styles.linkcat} to="/categories">
        CATEGORIES
      </Link>
      <Link className={styles.linkrev} to="/reviews">
        REVIEWS
      </Link>
      <Link className={styles.linkuse} to="/users">
        USERS
      </Link>
      <LightMode />
    </nav>
  );
};

export default Nav;
