import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import Categories from "./components/Categories.jsx";
import Reviews from "./components/Reviews.jsx";
import Users from "./components/Users.jsx";
import Nav from "./components/Nav.jsx";
import styles from "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">
          <h1>NC-Games</h1>
        </Link>

        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reviews/:category" element={<Reviews />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
