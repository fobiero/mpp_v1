import React from "react";

import "../assets/css/custom.css";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div>
      <div className=" potfolio-section potfolio" id="potfolio">
        <div className="container">
          <h3 className="ft-pr-header">featured projects</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="pt-items">
                <img
                  src={require("../assets/images/projects/two-drums.png")}
                  alt="Drums Image"
                />
                <div className="pt-item-info">
                  <div className="pt-desc">
                    <p>Featured Projects</p>
                  </div>
                  <div className="pt-rd-mre">
                    <Link className="about-more abt-ft-item" to="/whatwedo">
                      explore more <i class="fa-solid fa-arrow-right-long"></i>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* two-drums of fuel  */}
            <div className="col-md-4">
              <div className="pt-items">
                <img
                  src={require("../assets/images/projects/track.png")}
                  alt="Track fueling"
                />
                <div className="pt-item-info">
                  <div className="pt-desc">
                    <p>Featured Projects</p>
                  </div>
                  <div className="pt-rd-mre">
                    <Link className="about-more abt-ft-item" to="/whatwedo">
                      explore more <i class="fa-solid fa-arrow-right-long"></i>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* fueling tracktor  */}
            <div className="col-md-4">
              <div className="pt-items">
                <img
                  src={require("../assets/images/projects/lady-greeting.png")}
                  alt="Happiness"
                />
                <div className="pt-item-info">
                  <div className="pt-desc">
                    <p>Featured Projects</p>
                  </div>
                  <div className="pt-rd-mre">
                    <Link className="about-more abt-ft-item" to="/whatwedo">
                      explore more <i class="fa-solid fa-arrow-right-long"></i>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* tgreeting son  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
