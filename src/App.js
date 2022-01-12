import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import Categories from "./components/Categories.jsx";
import Reviews from "./components/Reviews.jsx";
import Users from "./components/Users.jsx";
import Nav from "./components/Nav.jsx";
import User from "./components/User";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reviews/:category" element={<Reviews />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:username" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
