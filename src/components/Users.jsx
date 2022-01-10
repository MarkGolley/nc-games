import React, { useEffect, useState } from "react";
import { fetchUsers } from "../utils/api";
import styles from "./Users.module.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then((res) => {
        setUsers(res);
        setLoading(false);
      })
      .catch((err) => setError(true));
  }, []);

  if (isError) return <p>Error</p>;

  return (
    <div className={styles.section}>
      <h2>USERS</h2>
      {isLoading ? <p>Loading...</p> : null}
      <ul className={styles.area}>
        {users.map((user) => {
          return (
            <li className={styles.item} key={user.username}>
              {user.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
