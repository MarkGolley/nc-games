import React from "react";
import { useState } from "react/cjs/react.development";
import { postComment } from "../../utils/api";
import styles from "./AddComment.module.css";

const AddComment = ({ review_id, setCommented }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [body, setBody] = useState("");

  const toggleOpen = () => setIsOpen((currOpen) => !currOpen);

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(review_id, username, body)
      .then((res) => {
        console.log(res);
        setCommented(true);
      })
      .catch((err) => {
        console.log(err);
        setCommented(false);
      });
  };

  return (
    <div>
      <button className={styles.newCat} onClick={toggleOpen}>
        {isOpen ? "Cancel" : "Add new comment?"}
      </button>

      {isOpen ? (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <p></p>
          <label>
            Comment:
            <input
              value={body}
              onChange={(event) => setBody(event.target.value)}
            />
          </label>
          <p></p>
          <button type="submit">Sumbit comment</button>
        </form>
      ) : null}
    </div>
  );
};

export default AddComment;
