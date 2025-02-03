import React from "react";
import { Link } from "react-router-dom";

import "../assets/css/custom.css";
import Carousel from "./Carousel";

const About = () => {
  return (
    <section className="section section-content about-section about" id="about">
      <div className="container about-content">
        <div className="row">
          <div className="col-md-6">
            <div className="abt-thb-img">
              <Carousel />
            </div>
          </div>
          <div className="col-md-6 thumb-info-dt">
            <h2 className="about-header-tle-main">
              <span>about us</span>
            </h2>
            <p className="about-info">
              Mountains’ <i>Path for Peace (MPP) </i> is non-profit,
              non-governmental and local humanitarian organization working
              towards peacebuilding and non-violent actions in the Nuba
              Mountains, Sudan. We redirect young people’s energy from conflict
              to societal sustainable development through creativity and
              forward-thinking. Our thematic area is peacebuilding and
              nonviolent actions. We build peace and transform local communities
              through education, health & wellbeing (trauma healing and
              rehabilitation), and environment conservation. These areas of
              focus are aligned to Sustainable Development Goals (SDGs). <br />{" "}
              <br />
              We believe these projects address one of the major root causes of
              conflicts (illiteracy) in the Nuba Mountains. As a grassroots-led
              solution, we advocate for peaceful conflict resolution to address
              disagreements among the local communities in Nuba Mountain. Our
              major targets are children, women, and youth. This is because
              these groups are the most affected groups. Children lack quality
              and sufficient education, high rate of unemployment among the
              youths, and women’s economic activities are disrupted.
            </p>
            <div className="about-ft">
              <Link className="about-more abt-ft-item" to="/about">
                explore more <i class="fa-solid fa-arrow-right-long"></i>{" "}
              </Link>
              <Link className="about-contact abt-ft-item" to="/contact">
                Contact us <i class="fa-solid fa-arrow-right-long"></i>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* end wrap  */}
    </section>
  );
};

export default About;
