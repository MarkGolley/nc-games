import React from "react";
import { useState } from "react/cjs/react.development";
import { updateComment } from "../utils/api";

const CommentVote = ({ currVotes, comment_id, setVoted }) => {
  const [votes, setVotes] = useState(currVotes);
  const [isError, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleClick = () => {
    setVotes((currVotes) => {
      return currVotes + 1;
    });
    updateComment(comment_id, 1)
      .then((res) => {
        setError(false);
        setVoted(true);
        setSubmitted(true);
      })
      .catch((err) => {
        setError(true);
      });
    setVoted(false);
  };

  if (isError)
    return (
      <div>
        <p>Sorry, error</p>
      </div>
    );

  return (
    <div>
      <button value={votes} onClick={handleClick} disabled={submitted}>
        VOTE
      </button>
    </div>
  );
};

export default CommentVote;
