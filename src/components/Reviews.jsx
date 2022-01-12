import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../utils/api";
import styles from "./Reviews.module.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const { category } = useParams();

  console.log(category);

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
            <li className={styles.item} key={review.title}>
              {(review.owner, review.title)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
