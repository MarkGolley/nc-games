import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import Categories from "./components/category/Categories";
import Reviews from "./components/reviews/Reviews.jsx";
import Review from "./components/reviews/Review";
import Users from "./components/users/Users.jsx";
import Nav from "./components/nav/Nav";
import User from "./components/users/User";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  console.log(username);

  return (
    <BrowserRouter>
      <div className="App">
        {username ? `${username} is logged in` : null}
        <Nav username={username} setUsername={setUsername} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reviews/category/:category" element={<Reviews />} />
          <Route path="/review/:review_id" element={<Review />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:username" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
