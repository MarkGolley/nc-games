import axios from "axios";

const myApi = axios.create({
  baseURL: "https://nc-games-mg2.herokuapp.com/api",
});

export const fetchCategories = () => {
  return myApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const fetchReviews = () => {
  return myApi.get("/reviews").then((res) => {
    return res.data.reviews;
  });
};

export const fetchUsers = () => {
  return myApi.get("/users").then((res) => {
    return res.data.users;
  });
};
