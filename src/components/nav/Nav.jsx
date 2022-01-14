import React from "react";
import { Link } from "react-router-dom";
import LightMode from "./LightMode";
import Login from "./Login";
import styles from "./Nav.module.css";

const Nav = ({ username, setUsername }) => {
  return (
    <nav className={styles.nav}>
      <h1>NC-Games</h1>

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
      <Login username={username} setUsername={setUsername} />
    </nav>
  );
};

export default Nav;
