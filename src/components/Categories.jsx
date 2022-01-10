import React, { useState, useEffect } from "react";
import styles from "./Categories.module.css";
import { fetchCategories } from "../utils/api";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories()
      .then((res) => {
        setCategories(res);
        setLoading(false);
      })
      .catch((err) => setError(true));
  }, []);

  if (isError) return <p>Error</p>;

  return (
    <div className={styles.section}>
      <h2>CATEGORIES</h2>
      {isLoading ? <p>Loading...</p> : null}
      <ul className={styles.area}>
        {categories.map((category) => {
          return (
            <li className={styles.item} key={category.category_id}>
              <h3>{category.category_id.replace(/-/g, " ")}</h3>
              <p>{category.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
