// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Products from "./pages/Products";
import UserProfile from "./pages/Profile";
import Register from "./pages/Register";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              MyShop
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/register">
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/profile">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/products">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/cart">
                    Cart
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-5">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<h1>Welcome to MyShop</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
