import React from "react";
import { Link } from "react-router-dom";

import "../assets/css/home.css";
import "../assets/css/smallScreen.css";

const Home = () => {
  return (
    <>
      <div className="section-home section">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators btn-ind">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item sm-dv-cr active">
              <img
                src={require("../assets/images/hero/dk-wrap-1.webp")}
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-inline d-md-block cr-ct-dt">
                <h5 className="cr-header-tle">Capacity building Training:</h5>
                <p className="cr-header-tle-desc">
                  MPP staff participating in Monitoring and emulation training
                  in Kauda.
                </p>
                <Link
                  className="about-more abt-ft-item home-btn-more"
                  to="/about"
                >
                  explore more <i class="fa-solid fa-arrow-right-long"></i>{" "}
                </Link>
              </div>
            </div>
            <div class="carousel-item sm-dv-cr">
              <img
                src={require("../assets/images/hero/dk-wrap-2.webp")}
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-inline d-md-block cr-ct-dt">
                <h5 className="cr-header-tle">Mision:</h5>
                <p className="cr-header-tle-desc">
                  Mountains’ Path for Peace registration team traveling through
                  muddy roads.
                </p>
                <Link className="about-more abt-ft-item home-btn-more" to="/">
                  donate <i class="fa-solid fa-arrow-right-long"></i>{" "}
                </Link>
              </div>
            </div>
            <div class="carousel-item sm-dv-cr">
              <img
                src={require("../assets/images/hero/dk-wrap-3.webp")}
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-inline d-md-block cr-ct-dt">
                <h5 className="cr-header-tle">Project:</h5>
                <p className="cr-header-tle-desc">
                  We supported candidates with transport services during their
                  exams.
                </p>
                <Link
                  className="about-more abt-ft-item home-btn-more"
                  to="/about"
                >
                  explore more <i class="fa-solid fa-arrow-right-long"></i>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
