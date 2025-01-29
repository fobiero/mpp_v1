import React from "react";
import { Link } from "react-router-dom";

import "../assets/css/custom.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="section section-contact contact" id="contact">
        <div className="section-pages-header">
          <div className="container">
            <div className="page-header-desc">
              <Link className="home-section-link pg-sc-link" to="/">
                home
              </Link>
              <Link className="current-section-link pg-sc-link" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="page-header-tle">Contact Us</div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-items">
                <h3 className="contact-header">Get in touch</h3>
              </div>
              <div className="contact-body">
                <h3 className="contact-icon">
                  <span className="sp-cnt-ic">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>{" "}
                  Nuba Mountains/South Kurdufan, Sudan. <br /> Temporary Office
                  of Operations: OCAM Headquarters
                </h3>
                <h3 className="contact-icon">
                  <span className="sp-cnt-ic">
                    <i class="fa-solid fa-envelope"></i>
                  </span>{" "}
                  info@mountainspp.org | alfull@mountainspp.org
                </h3>
                <h3 className="contact-icon">
                  <span className="sp-cnt-ic">
                    <i class="fa-solid fa-phone"></i>
                  </span>{" "}
                  (+254) 797 036 677
                </h3>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-items">
                <h3 className="contact-header">Message us</h3>
              </div>
              <div className="contact-body">
                <form className="form-content">
                  <div className="form-names">
                    <div className="f-name">
                      <input
                        placeholder="first name"
                        type="text"
                        className="fname form-input-field"
                        id="fname"
                        required
                      />
                    </div>
                    <div className="s-name">
                      <input
                        placeholder="last name"
                        type="text"
                        className="lname form-input-field"
                        id="lname"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-email">
                    <input
                      className="f-email form-input-field"
                      id="f-email"
                      placeholder="email"
                      required
                    />
                  </div>
                  <div className="form-text-area">
                    <textarea
                      className="f-textarea form-input-field"
                      placeholder="message"
                      id="f-textarea"
                      required
                    ></textarea>
                  </div>
                  <button className="frm-button" type="submit">
                    submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
