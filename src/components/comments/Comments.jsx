import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchComments } from "../../utils/api";
import CommentVote from "./CommentVote";
import styles from "./Comments.module.css";

const Comments = ({ review_id, commented }) => {
  const [comments, setComments] = useState([]);
  const [voted, setVoted] = useState(false);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchComments(review_id)
      .then((res) => {
        setComments(res);
        setLoading(false);
      })
      .catch((err) => setError(true));
  }, [review_id, voted, commented]);

  if (isError)
    return (
      <div className={styles.section}>
        <p>Sorry, there are no comments for review_id: {review_id}.</p>
        <Link to="/reviews">Try another review</Link>
      </div>
    );

  return (
    <div className={styles.section}>
      <h2>Comments for id: {review_id}</h2>
      {isLoading ? <p>Loading...</p> : null}

      <ul className={styles.area}>
        {comments.map((comment) => {
          return (
            <div>
              <li className={styles.item} key={comment.comment_id}>
                Author: {comment.author}
                <br />
                Body: {comment.body}
                <br />
                Votes: {comment.votes}
                <br />
                ID: {comment.comment_id}
                <CommentVote
                  currVotes={comment.votes}
                  comment_id={comment.comment_id}
                  setVoted={setVoted}
                />
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
