import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { fetchUser } from "../utils/api";
import styles from "./User.module.css";

const User = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser(username)
      .then((res) => {
        console.log(res);
        setUser(res[0]);
        setLoading(false);
      })
      .catch((err) => setError(true));
  }, []);

  if (isError) return <p>Error</p>;

  return (
    <div className={styles.section}>
      <img src={user.avatar_url} alt=""></img>
      <h2>USER</h2>
      {isLoading ? <p>Loading...</p> : null}
      <p>{user.username}</p>
      <p>{user.name}</p>
    </div>
  );
};

export default User;
