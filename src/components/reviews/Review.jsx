import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchReview } from "../../utils/api";
import styles from "./Review.module.css";
import Comments from "../comments/Comments";
import ReviewVote from "../ReviewVote";
import AddComment from "../comments/AddComment";

const Review = () => {
  const [review, setReview] = useState({});
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [voted, setVoted] = useState(false);
  const [commented, setCommented] = useState(false);
  const { review_id } = useParams();

  useEffect(() => {
    fetchReview(review_id)
      .then((res) => {
        setReview(res);
        setLoading(false);
      })
      .catch((err) => setError(true));
  }, [review_id, voted, commented]);

  if (isError)
    return (
      <div className={styles.section}>
        <p>Sorry, there is no for review_id: {review.review_id}.</p>
        <Link to="/reviews">Try another review</Link>
      </div>
    );

  console.log(commented);

  return (
    <div>
      <div className={styles.section}>
        <h2>REVIEW for id: {review.review_id}</h2>
        {isLoading ? <p>Loading...</p> : null}
        <img src={review.review_img_url} alt="test"></img>
        <ul className={styles.area}>
          <li>Title: {review.title}</li>
          <br />
          <li>Owner: {review.owner}</li>
          <br />
          <li>Designer: {review.designer}</li>
          <br />
          <br />
          <li>Review: {review.review_body}</li>
          <br />
          <br />
          <li>Category: {review.category}</li>
          <br />
          <li>Dated: {review.created_at}</li>
          <br />
          <li>Votes: {review.votes}</li>
        </ul>
      </div>
      <ReviewVote
        currVotes={review.votes}
        review_id={review.review_id}
        setVoted={setVoted}
      />
      <AddComment review_id={review.review_id} setCommented={setCommented} />
      <Comments review_id={review_id} commented={commented} />
    </div>
  );
};

export default Review;
