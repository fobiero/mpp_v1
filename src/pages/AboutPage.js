import React from "react";
import { Link } from "react-router-dom";

import "../assets/css/custom.css";
import "../assets/css/smallScreen.css";

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Structure from "../components/Structure.js";
import Wrapper from "../components/Wrapper.js";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div
        className="section about-section about-us-page about-page"
        id="about"
      >
        <div className="section-pages-header">
          <div className="container">
            <div className="page-header-desc">
              <Link className="home-section-link pg-sc-link" to="/">
                home
              </Link>
              <Link className="current-section-link pg-sc-link" to="/whatwedo">
                About Us
              </Link>
            </div>
          </div>
          <div className="page-header-tle">About Us</div>
        </div>

        <div className="container container-content">
          <div className="page-headline">
            <h3 className="about-headline">About Us</h3>
          </div>
          <div className="abt-cont-info about-info">
            Mountains’ Path for Peace (MPP) is non-profit, non-governmental and
            local humanitarian organization working towards peacebuilding and
            non-violent actions in the Nuba Mountains, Sudan. We redirect young
            people’s energy from conflict to societal sustainable development
            through creativity and forward-thinking. Our thematic area is
            peacebuilding and nonviolent actions. We build peace and transform
            local communities through education, health & wellbeing (trauma
            healing and rehabilitation), and environment conservation. These
            areas of focus are aligned to Sustainable Development Goals (SDGs).{" "}
            <br /> <br />
            We believe these projects address one of the major root causes of
            conflicts (illiteracy) in the Nuba Mountains. As a grassroots-led
            solution, we advocate for peaceful conflict resolution to address
            disagreements among the local communities in Nuba Mountain. Our
            major targets are children, women, and youth. This is because these
            groups are the most affected groups. Children lack quality and
            sufficient education, high rate of unemployment among the youths,
            and women’s economic activities are disrupted.
          </div>
        </div>
        {/* end summary  */}
        <Structure />
        {/* structure component  */}
      </div>
      <Wrapper />
      <Footer />
    </>
  );
};

export default AboutPage;
