import React from "react";
import { Link } from "react-router-dom";

import "../assets/css/testimonials.css";

const Testiminials = () => {
  return (
    <>
      <div
        className="section section-testimonials testimonials"
        id="testimonials"
      >
        <div class=" container">
          <h2 className="about-header-tle-main testimonials-header">
            <span>Our Stories</span>
          </h2>
          <h3 className="ft-pr-header">what people say</h3>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <div className="test-item">
                <div className="test-item-content">
                  <i class="fa-solid fa-quote-left"></i>
                  <p className="text-review">
                    Our work is about Peace-building, healing and transformation
                  </p>
                </div>
                <span className="text-item-divide"></span>
                <div className="text-item-footer">
                  <h3>
                    Alfull<span></span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="test-item lst-item">
                <div className="test-item-content">
                  <i class="fa-solid fa-quote-left"></i>
                  <p className="text-review">
                    May our gneration be remembered as one that healed Sudan
                    from evil deed.
                  </p>
                </div>
                <span className="text-item-divide"></span>
                <div className="text-item-footer">
                  <h3>
                    Alfull<span></span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
            <Link className="load-more-stories" to="/">
              <span>
                view more stories <i class="fa-solid fa-arrow-right-long"></i>{" "}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testiminials;
