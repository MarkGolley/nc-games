import axios from "axios";

const myApi = axios.create({
  baseURL: "https://nc-games-mg2.herokuapp.com/api",
});

export const fetchCategories = (limit) => {
  return myApi.get("/categories", { params: { limit: limit } }).then((res) => {
    return res.data.categories;
  });
};
export const postCategories = (category_id, description) => {
  console.log(category_id, description);
  return myApi
    .post("/categories", { slug: category_id, description: description })
    .then((res) => {
      console.log(res);
      return res.data.category;
    })
    .catch((err) => {
      console.dir(err);
    });
};

export const fetchReviews = (limit) => {
  return myApi.get("/reviews", { params: { limit: limit } }).then((res) => {
    return res.data.reviews;
  });
};

export const fetchUsers = (limit) => {
  return myApi.get("/users", { params: { limit: limit } }).then((res) => {
    return res.data.users;
  });
};
