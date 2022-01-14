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
  return myApi
    .post("/categories", { slug: category_id, description: description })
    .then((res) => {
      return res.data.category;
    });
};

export const fetchReviews = (limit, category_id) => {
  return myApi
    .get("/reviews", {
      params: { limit: limit, category: category_id },
    })
    .then((res) => {
      return res.data.reviews;
    });
};
export const fetchReview = (review_id) => {
  return myApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};
export const updateReview = (review_id, inc_votes) => {
  return myApi
    .patch(`/reviews/${review_id}`, { inc_votes: inc_votes })
    .then((res) => {
      return res.data.review;
    });
};

export const fetchUsers = (limit) => {
  return myApi.get("/users", { params: { limit: limit } }).then((res) => {
    return res.data.users;
  });
};
export const fetchUser = (username) => {
  return myApi.get(`/users/${username}`).then((res) => {
    return res.data.user;
  });
};

export const fetchComments = (review_id) => {
  return myApi.get(`/reviews/${review_id}/comments`).then((res) => {
    return res.data.comments;
  });
};
export const updateComment = (comment_id, inc_votes) => {
  return myApi
    .patch(`/comments/${comment_id}`, { inc_votes: inc_votes })
    .then((res) => {
      return res.data.comment;
    });
};
export const postComment = (review_id, username, body) => {
  return myApi
    .post(`/reviews/${review_id}/comments`, { username: username, body: body })
    .then((res) => {
      return res.data.comment;
    });
};
