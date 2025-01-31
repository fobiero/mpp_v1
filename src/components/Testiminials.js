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
            <div className="col-md-4">
              <div className="test-item">
                <div className="test-item-content">
                  <i class="fa-solid fa-quote-left"></i>
                  <p className="text-review">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English
                  </p>
                </div>
                <span className="text-item-divide"></span>
                <div className="text-item-footer">
                  <h3>
                    John Doe - <span>volunteer</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="test-item">
                <div className="test-item-content">
                  <i class="fa-solid fa-quote-left"></i>
                  <p className="text-review">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English
                  </p>
                </div>
                <span className="text-item-divide"></span>
                <div className="text-item-footer">
                  <h3>
                    michelle ranks - <span>board member</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="test-item lst-item">
                <div className="test-item-content">
                  <i class="fa-solid fa-quote-left"></i>
                  <p className="text-review">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English
                  </p>
                </div>
                <span className="text-item-divide"></span>
                <div className="text-item-footer">
                  <h3>
                    Martin Jones - <span>Donor</span>
                  </h3>
                </div>
              </div>
            </div>
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
