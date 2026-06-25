import React from "react";
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning shadow-sm">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand fw-bold fs-3" href="#">
          🍛 Biryani House
        </a>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/Menu">
                Menu
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/Special">
                Special
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/AboutUs">
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/ContactUs">
                Contact Us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/CustomerReviews">
                Customer Reviews
              </Link>
            </li>

          </ul>

          {/* Order Button */}
          <button className="btn btn-light text-warning fw-bold rounded-pill px-4">
            Order Now
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;