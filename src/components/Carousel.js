import React from "react";

import "../assets/css/carousel.css";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        {/* <div className="carousel-indicators cr-ind-btn">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
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
        </div> */}
        <div className="carousel-inner crs-main-content">
          <div className="carousel-item cr-thumb-img active">
            <img
              src={require("../assets/images/local/wrap-2.webp")}
              className="d-block w-100"
              alt="education"
            />
            <div className="carousel-caption d-inline d-md-block">
              <h5 className="cr-main-header crs-header">
                Capacity building Training
              </h5>
              <div className="cr-main-info crs-desc">
                MPP staff participating in Monitoring and emulation training in
                Kauda.
              </div>
              {/* <Link className="cr-main-info-dt-link" to="/about">
                read more
              </Link> */}
            </div>
          </div>
          <div className="carousel-item cr-thumb-img">
            <img
              src={require("../assets/images/local/track.webp")}
              className="d-block w-100"
              alt="education"
            />
            <div className="carousel-caption d-inline d-md-block">
              <h5 className="cr-main-header crs-header">featured Projects</h5>
              <div className="cr-main-info crs-desc">
                we supported over 800 candidates with transport services to sit
                for their 2024 National Examination
              </div>
              {/* <Link className="cr-main-info-dt-link" to="/about">
                read more
              </Link> */}
            </div>
          </div>
          <div className="carousel-item cr-thumb-img">
            <img
              src={require("../assets/images/local/image-drum.webp")}
              className="d-block w-100"
              alt="education"
            />
            <div className="carousel-caption d-inline d-md-block">
              <h5 className="cr-main-header crs-header ">Our Mision</h5>
              <div className="cr-main-info crs-desc">
                Mountains’ Path for Peace registration team traveling through
                muddy roads in the
              </div>
              {/* <Link className="cr-main-info-dt-link" to="/about">
                read more
              </Link> */}
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
