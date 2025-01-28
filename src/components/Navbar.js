import React from "react";
import { Link } from "react-router-dom";

import "../assets/js/navbar.js";
import "../assets/css/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" href="#">
            <img
              to="/"
              className="logo-item"
              src={require("../assets/images/logo.png")}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  who we are
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/whatwedo">
                  what we do
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  contact us
                </Link>
              </li>
            </ul>
            <div className="d-flex ">
              <Link className="donate-btn" to="/donate">
                Donate
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
