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
    fetchCategories(3)
      .then((res) => {
        setCategories(res);
        setLoading(false);
      })
      .catch((err) => setError(true));
  }, []);

  useEffect(() => {
    fetchReviews(3)
      .then((res) => {
        setReviews(res);
        setLoading(false);
      })
      .catch((err) => setError(true));
  }, []);

  useEffect(() => {
    fetchUsers(3)
      .then((res) => {
        setUsers(res);
        setLoading(false);
      })
      .catch((err) => setError(true));
  }, []);

  if (isError) return <p>Error</p>;

  return (
    <div className={styles.panes}>
      <Link to="/categories" className={styles.categories}>
        <h2>CATEGORIES</h2>
        <p>
          Some of the categories that you can choose from are below, click to
          see more:
        </p>
        {isLoading ? <p className={styles.loader}></p> : null}
        <ul className={styles.area}>
          {categories.map((category) => {
            return (
              <li className={styles.item} key={category.category_id}>
                {category.category_id}
              </li>
            );
          })}
        </ul>
      </Link>
      <Link to="/reviews" className={styles.reviews}>
        <h2>REVIEWS</h2>
        <p>
          Some of the reviews that you can view are shown below, click to see
          more:
        </p>
        {isLoading ? <p className={styles.loader}></p> : null}
        <ul className={styles.area}>
          {reviews.map((review) => {
            return (
              <li className={styles.item} key={review.review_id}>
                {review.owner}
              </li>
            );
          })}
        </ul>
      </Link>
      <Link to="/users" className={styles.users}>
        <h2>USERS</h2>
        <p>
          Some of the users that you can view are shown below, click to see
          more:
        </p>
        {isLoading ? <p className={styles.loader}></p> : null}
        <ul className={styles.area}>
          {users.map((user) => {
            return (
              <li className={styles.item} key={user.username}>
                {user.username}
              </li>
            );
          })}
        </ul>
      </Link>
    </div>
  );
};

export default Home;
