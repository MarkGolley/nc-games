import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { fetchCategories, fetchReviews, fetchUsers } from "../utils/api";
import { Link } from "react-router-dom";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories()
      .then((res) => {
        setCategories(res);
        setLoading(false);
      })
      .catch((err) => setError(true));
  }, []);

  useEffect(() => {
    fetchReviews()
      .then((res) => {
        setReviews(res);
        setLoading(false);
      })
      .catch((err) => setError(true));
  }, []);

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
    <div className={styles.panes}>
      <section className={styles.section}>
        <h2>CATEGORIES</h2>
        {isLoading ? <p className={styles.loader}></p> : null}
        <Link to="/categories">
          <ul className={styles.area}>
            {categories.map((category) => {
              return (
                <li className={styles.item} key={category.category_id}>
                  {category.category_id}
                </li>
              );
            })}
            <li className={styles.item}>...</li>
          </ul>
        </Link>
      </section>
      <section className={styles.section}>
        <h2>REVIEWS</h2>
        {isLoading ? <p className={styles.loader}></p> : null}
        <Link to="/reviews">
          <ul className={styles.area}>
            {reviews.map((review) => {
              return (
                <li className={styles.item} key={review.review_id}>
                  {review.owner}
                </li>
              );
            })}
            <li className={styles.item}>...</li>
          </ul>
        </Link>
      </section>
      <section className={styles.section}>
        <h2>USERS</h2>
        {isLoading ? <p className={styles.loader}></p> : null}
        <Link to="/users">
          <ul className={styles.area}>
            {users.map((user) => {
              return (
                <li className={styles.item} key={user.username}>
                  {user.username}
                </li>
              );
            })}
            <li className={styles.item}>...</li>
          </ul>
        </Link>
      </section>
    </div>
  );
};

export default Home;
