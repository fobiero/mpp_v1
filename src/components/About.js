import React from "react";
import { Link } from "react-router-dom";

import "../assets/css/custom.css";
import LandingPage from "../pages/LandingPage";
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
            <h3 className="about-header">
              young people’s energy from conflict to societal sustainable
              development through creativity and forward-thinking
            </h3>
            <p className="about-info">
              Mountains’ Path for Peace (MPP) is a Youth-led Non-profit and
              Nongovernmental Organization working towards Peacebuilding and
              Nonviolent action in the Nuba Mountains, Sudan. It redirects young
              people’s energy from conflict to societal sustainable development
              through creativity and forward-thinking. The major thematic area
              for this organization is peacebuilding and nonviolent actions
              through education, trauma healing and rehabilitation,{" "}
              <span className="smdv-hd">
                {" "}
                natural resources conservation, and climate change. These areas
                of focus are aligned to the United Nations Sustainable
                Development Goals (SDGs). These projects address the root causes
                of conflicts in the Nuba Mountains (low level of literacy,
                natural resources, and unemployment). As a grassroots-led
                solution, we advocate for peaceful conflict resolution,
                non-violent action, and addressing the destructive consequences
                among the local communities in Nuba Mountain, Sudan.{" "}
              </span>
            </p>
            <div className="about-ft">
              <Link className="about-more abt-ft-item">
                explore more <i class="fa-solid fa-arrow-right-long"></i>{" "}
              </Link>
              <Link className="about-contact abt-ft-item">
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
