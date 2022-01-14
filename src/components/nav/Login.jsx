import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = ({ username, setUsername }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleOpen = () => setIsLoggedIn((currOpen) => !currOpen);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setUsername(event.target.value);
    setIsLoggedIn(true);
  };

  return (
    <div>
      <button className={styles.newCat} onClick={toggleOpen}>
        {isLoggedIn ? null : "Login"}
      </button>

      {isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input value={username} />
          </label>

          <button type="submit">Submit</button>
        </form>
      ) : null}
    </div>
  );
};

export default Login;
