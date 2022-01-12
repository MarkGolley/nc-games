import React, { useState, useEffect } from "react";
import styles from "./Categories.module.css";
import { fetchCategories } from "../utils/api";
import { Link } from "react-router-dom";
import NewCategory from "./NewCategory";

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
  }, [categories]);

  if (isError) return <p>Error</p>;

  return (
    <div className={styles.section}>
      <h2>CATEGORIES</h2>
      <NewCategory />

      <p>Here are the available categories...</p>
      {isLoading ? <p>Loading...</p> : null}
      <ul className={styles.area}>
        {categories.map((category) => {
          return (
            <Link to={`/reviews/${category.slug}`}>
              <li className={styles.item} key={category.slug}>
                <h3>{category.slug.replace(/-/g, " ")}</h3>
                <p>{category.description}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
