import React from "react";

import "../assets/css/structure.css";

const Structure = () => {
  return (
    <>
      <div className="section structure-section structure">
        <div className="container page-headline">
          <h3 className="about-headline sc-tl">Our Approach</h3>
          <div className="row">
            <div className="col-md-6">
              <h3 className="str-hd">Our Organizational Strategy</h3>
              <div className="str-cont-item">
                <h5>Diversity.</h5>
                <p>
                  We recruit staff, seek both internal and external partnership,
                  and engage local, national and international stakeholders in
                  the Nuba Mountains to represent the diversity within
                  communities.
                </p>
              </div>
              <div className="str-cont-item">
                <h5>
                  Our Life Cycle at Mountains’ <span> Path for Peace.</span>
                </h5>
                <p>
                  We collaborate with and consult both internal and external
                  stakeholders at all levels and stages of the proposals,
                  projects and programs.
                </p>
              </div>
              <div className="str-cont-item">
                <h5>Our Wholistic Approach.</h5>
                <p>
                  We believe in and prioritize wholistic approach that
                  incorporate local communities, governments and nongovernmental
                  organization, civil societies and for sustainable culture of
                  peace.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <h3 className="str-hd">Core Values</h3>
              <div className="str-cont-item str-cont-item-cv">
                <p className="vl-cont">
                  <i class="fa-solid fa-check"></i> Diversity
                </p>
                <p className="vl-cont">
                  <i class="fa-solid fa-check"></i> Integrity
                </p>
                <p className="vl-cont">
                  <i class="fa-solid fa-check"></i> Humanity
                </p>
                <p className="vl-cont">
                  <i class="fa-solid fa-check"></i> Teamwork and leadership
                </p>
                <p className="vl-cont">
                  <i class="fa-solid fa-check"></i>Accountability
                </p>
                <p className="vl-cont">
                  <i class="fa-solid fa-check"></i>Mutual Respect
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Structure;
