import React from "react";
import { Link } from "react-router-dom";

import "../assets/css/custom.css";
import LandingPage from "../pages/LandingPage";
import Carousel from "./Carousel";

const Services = () => {
  return (
    <>
      <div className="about-sec">
        <div className="container">
          <h2 className="about-header-tle-main sp-main-pg ">
            <span className="sp-main-pg-tle">what we do</span>
          </h2>{" "}
          <br />
          <div className="row">
            <div className="sp-main-pg-desc-info">
              Our mission is to cultivate <br /> Peace among the local
              communities through <br /> Dialogue and Practical Reconciliation
            </div>
            <div className="col-md-4">
              <div className="about-sec-item">
                <div className="about-sec-thumb">
                  <img src={require("../assets/images/local/edu-icon.png")} />
                </div>
                <div className="about-sec-item-cont">
                  <div className="about-sec-item-cont-desc">
                    <span className="span-about-sec-pill">education</span>
                    {/* <h3 className="span-about-sec-tle">focus on education</h3> */}
                    <p className="span-about-sec-info">
                      The goal of this project is to mainstream peace and ensure
                      quality and sufficient peace and conflict studies in
                      primary and secondary schools to build peace in the Nuba
                      Mountains.
                    </p>
                    <Link className="span-about-sec-btn">
                      read more <i class="fa-solid fa-arrow-right-long"></i>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="about-sec-item">
                <div className="about-sec-thumb">
                  <img src={require("../assets/images/local/med-icon.png")} />
                </div>
                <div className="about-sec-item-cont">
                  <div className="about-sec-item-cont-desc">
                    <span className="span-about-sec-pill">health</span>
                    {/* <h3 className="span-about-sec-tle">focus on education</h3> */}
                    <p className="span-about-sec-info">
                      The primary goal of this project is to address the mental
                      and emotional consequences of traumatic experiences among
                      young people, women, children, and Internal Displace
                      Persons (IDPs) in the Nuba Mountains.
                    </p>
                    <Link className="span-about-sec-btn">
                      read more <i class="fa-solid fa-arrow-right-long"></i>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="about-sec-item">
                <div className="about-sec-thumb">
                  <img src={require("../assets/images/local/env-icon.png")} />
                </div>
                <div className="about-sec-item-cont">
                  <div className="about-sec-item-cont-desc">
                    <span className="span-about-sec-pill">environment</span>
                    {/* <h3 className="span-about-sec-tle">focus on education</h3> */}
                    <p className="span-about-sec-info">
                      The goal of this project is to build peace by engaging and
                      educating youths and local communities about equitable
                      resource sharing among communities and the importance of
                      afforestation through community workshops.
                    </p>
                    <Link className="span-about-sec-btn">
                      read more <i class="fa-solid fa-arrow-right-long"></i>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
