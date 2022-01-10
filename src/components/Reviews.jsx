import React, { useEffect, useState } from "react";
import { fetchReviews } from "../utils/api";
import styles from "./Reviews.module.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews()
      .then((res) => {
        setReviews(res);
        setLoading(false);
      })
      .catch((err) => setError(true));
  }, []);

  if (isError) return <p>Error</p>;

  return (
    <div className={styles.section}>
      <h2>REVIEWS</h2>
      {isLoading ? <p>Loading...</p> : null}
      <ul className={styles.area}>
        {reviews.map((review) => {
          return (
            <li className={styles.item} key={review.review_id}>
              {review.owner}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
