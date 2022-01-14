import React, { useState } from "react";
import styles from "./NewCategory.module.css";
import { postCategories } from "../../utils/api";

const NewCategory = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [category_id, setCategory_id] = useState("");
  const [description, setDescription] = useState("");

  const toggleOpen = () => setIsOpen((currOpen) => !currOpen);

  const handleSubmit = (event) => {
    event.preventDefault();
    postCategories(category_id, description)
      .then((res) => {
        setCategory_id("");
        setDescription("");
        console.log(res);
        return <p>{res}</p>;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button className={styles.newCat} onClick={toggleOpen}>
        {isOpen ? "Cancel" : "Add new category?"}
      </button>

      {isOpen ? (
        <form onSubmit={handleSubmit}>
          <label>
            Category id:
            <input
              value={category_id}
              onChange={(event) => setCategory_id(event.target.value)}
            />
          </label>
          <p></p>
          <label>
            Category description:
            <input
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
          <p></p>
          <button type="submit">Add category</button>
        </form>
      ) : null}
    </div>
  );
};

export default NewCategory;
