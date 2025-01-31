import React from "react";
import { Link } from "react-router-dom";

import "../assets/css/custom.css";

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Structure from "../components/Structure.js";

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
            <h3 className="about-headline">Who we are</h3>
          </div>
          <div className="abt-cont-info">
            Mountains’ <span> Path for Peace </span> (MPP) is a Youth-led
            Non-profit and Nongovernmental Organization working towards
            Peacebuilding and Nonviolent action in the Nuba Mountains, Sudan. It
            redirects young people’s energy from conflict to societal
            sustainable development through creativity and forward-thinking. The
            major thematic area for this organization is peacebuilding and
            nonviolent actions through education, trauma healing and
            rehabilitation, natural resources conservation, and climate change.
            These areas of focus are aligned to the United Nations Sustainable
            Development Goals (SDGs). These projects address the root causes of
            conflicts in the Nuba Mountains (low level of literacy, natural
            resources, and unemployment). As a grassroots-led solution, we
            advocate for peaceful conflict resolution, non-violent action, and
            addressing the destructive consequences among the local communities
            in Nuba Mountain, Sudan. Women, and children including both male and
            female youth are the major targets of this project. This is because
            these groups are the most affected groups. Children lack quality and
            sufficient education, high rate of unemployment among the youths,
            women’s economic activities are disrupted.
          </div>
        </div>
        {/* end summary  */}
        <Structure />
        {/* structure component  */}
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
