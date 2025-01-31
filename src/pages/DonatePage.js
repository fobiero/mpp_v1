import React from "react";
import { Link } from "react-router-dom";

import "../assets/css/smallScreen.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DonatePage = () => {
  return (
    <div>
      <Navbar />
      <div className="section section-contact contact" id="contact">
        <div className="section-pages-header">
          <div className="container">
            <div className="page-header-desc">
              <Link className="home-section-link pg-sc-link" to="/">
                home
              </Link>
              <Link className="current-section-link pg-sc-link" to="/whatwedo">
                Donate
              </Link>
            </div>
          </div>
          <div className="page-header-tle">Donate</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DonatePage;
