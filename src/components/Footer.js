import React from "react";

import { Link } from "react-router-dom";

import LandingPage from "../components/Home";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <>
      <section
        className="section section-footer footer-content footer"
        id="footer"
      >
        <div className="top-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="footer-item ft-item-sm-dv">
                  <div className="footer-header"></div>
                  <div className="footer-body">
                    <div className="ft-thumb">
                      <img src={require("../assets/images/logo-bw.png")} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-12">
                <div className="footer-item ft-item-sm-dv">
                  <div className="footer-header">
                    <h3 className="ft-lk-hd-itm">contact info</h3>
                  </div>
                  <div className="footer-body">
                    <div className="ft-body ft-bd-smdv-link">
                      <p className="ft-body-item">
                        Location : Nuba Mountains/South Kurdufan, Sudan.
                      </p>
                      <p className="ft-body-item">
                        <Link href="" className="ft-it-lk">
                          Email: info@mountainspp.org | alfull@mountainspp.org
                        </Link>
                      </p>
                      <p className="ft-body-item">
                        <Link href="" className="ft-it-lk">
                          Phone : +254797036677
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-12">
                <div className="footer-item ft-item-sm-dv">
                  <div className="footer-header">
                    <h3 className="ft-lk-hd-itm">Quick Links</h3>
                  </div>
                  <div className="footer-body ft-bd-smdv-link">
                    <Link
                      className="ft-link-item"
                      to="/"
                      element={<LandingPage />}
                    >
                      home
                    </Link>
                    <Link className="ft-link-item" to="/whatwedo">
                      about us
                    </Link>
                    <Link className="ft-link-item" to="/about">
                      projects
                    </Link>
                    <Link className="ft-link-item" to="/about">
                      testimonials
                    </Link>
                    <Link className="ft-link-item" to="/contact">
                      contact us
                    </Link>
                    <Link className="ft-link-item" to="/">
                      donate
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-12">
                <div className="footer-item ft-item-sm-dv lst-itm">
                  <div className="footer-header">
                    <h3 className="ft-lk-hd-itm">Newsletter</h3>
                  </div>
                  <div className="footer-body">
                    <div className="ft-body">
                      <p className="ft-body-item ft-bd-sb">
                        Be the first on our mailing list for latest updates and
                        news.
                      </p>
                      <form className="ft-inp">
                        <input type="text" placeholder="Enter Email" required />
                        <button className="btn-submit" type="submit">
                          subscribe
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="below-footer">
          <div className="container">
            <div className="blw-ft">
              <div className="blw-ft-link">
                <img src={require("../assets/images/logo-bw.png")} />{" "}
                <span>Mountains' Path For Peace</span>
              </div>
              <div className="blw-ft-info">All Rights reserved | @2025.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
