import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = ({ username, setUsername }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState("");

  const toggleOpen = () => setIsOpen((currOpen) => !currOpen);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    setUsername(user);
  };

  return (
    <div>
      <button className={styles.newCat} onClick={toggleOpen}>
        {isOpen ? "Cancel" : " Login"}
      </button>

      {isOpen ? (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              value={user}
              onChange={(event) => setUser(event.target.value)}
            />
          </label>

          <button type="submit">Login</button>
        </form>
      ) : null}
    </div>
  );
};

export default Login;
