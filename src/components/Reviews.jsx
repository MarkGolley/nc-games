import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchReviews } from "../utils/api";
import styles from "./Reviews.module.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    fetchReviews(10, category)
      .then((res) => {
        setReviews(res);
        setLoading(false);
      })
      .catch((err) => setError(true));
  }, [category]);

  if (isError)
    return (
      <div className={styles.section}>
        <p>Sorry, there are no reviews for the category of {category}.</p>
        <Link to="/categories">Try another category</Link>
      </div>
    );

  return (
    <div className={styles.section}>
      {category ? (
        <h2>{category.toUpperCase()} REVIEWS</h2>
      ) : (
        <h2>ALL REVIEWS</h2>
      )}
      {isLoading ? <p>Loading...</p> : null}
      <ul className={styles.area}>
        {reviews.map((review) => {
          return (
            <li className={styles.item} key={review.title}>
              Title: {review.title}
              <br />
              <div className={styles.category}>
                Category: {review.category.replace(/-/g, " ")}
              </div>
              <img src={review.review_img_url} alt="test"></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
