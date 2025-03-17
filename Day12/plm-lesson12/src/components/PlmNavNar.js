import React from "react";
import { Link } from "react-router-dom";

export default function PlmNavNar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          🌟 PLM System
        </Link>
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                🏠 Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                ℹ️ About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                📞 Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list-user">
                👥 List Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create-user">
                ➕ Create User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
    