import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchReviews } from "../../utils/api";
import styles from "./Reviews.module.css";
import ReviewVote from "../ReviewVote";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [voted, setVoted] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    fetchReviews(10, category)
      .then((res) => {
        setReviews(res);
        setLoading(false);
      })
      .catch((err) => setError(true));
  }, [category, voted]);

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
            <div>
              <Link to={`/review/${review.review_id}`}>
                <li className={styles.item} key={review.review_id}>
                  Title: {review.title}
                  <br />
                  <div className={styles.category}>
                    Category: {review.category.replace(/-/g, " ")}
                  </div>
                  Owner: {review.owner}
                  <img src={review.review_img_url} alt="test"></img>
                  <br />
                  Votes: {review.votes}
                </li>
              </Link>
              <ReviewVote
                currVotes={review.votes}
                review_id={review.review_id}
                voted={voted}
                setVoted={setVoted}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;

// item.title,
//           item.designer,
//           item.owner,
//           item.review_img_url,
//           item.review_body,
//           item.category,
//           item.created_at,
//           item.votes,
