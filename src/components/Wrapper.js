import React from "react";
import { Link } from "react-router-dom";

import "../assets/css/custom.css";

const Wrapper = () => {
  return (
    <>
      <div className="container section">
        <div className="wrap-content">
          <span className="vs-sm-scr">Our Vision</span>
          <div className="wrap-cont">
            Transformed, Industrious and Prosperous Community Living{" "}
            <br className="br-sm-dv" /> in Culture of Peace for Sustainable
            Development.
          </div>
          <div className="wrap-btn">
            <Link
              className="about-more abt-ft-item wrap-link-item"
              to="/donate"
            >
              donate <i class="fa-solid fa-arrow-right-long"></i>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wrapper;
