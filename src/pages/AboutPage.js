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
            <h3 className="about-headline">Who we are</h3>
          </div>
          <div className="abt-cont-info about-info">
            Mountains’ <i>Path for Peace (MPP) </i> is non-profit,
            non-governmental and local humanitarian organization working towards
            peacebuilding and non-violent actions in the Nuba Mountains, Sudan.
            We redirect young people’s energy from conflict to societal
            sustainable development through creativity and forward-thinking. Our
            thematic area is peacebuilding and nonviolent actions. We build
            peace and transform local communities through education, health &
            wellbeing (trauma healing and rehabilitation), and environment
            conservation. These areas of focus are aligned to Sustainable
            Development Goals (SDGs). <br /> <br />
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

        <div className="container container-content">
          <div className="page-headline">
            <h3 className="about-headline">Where we work</h3>
          </div>
          <div className="abt-cont-info about-info">
            We are at the war frontline in Sudan, we work in Nuba Mountains also
            known as South Kurdufan. Marginalized, underdeveloped, and war-torn:
            these three words describe the Nuba Mountains perfectly. It is one
            of the regions currently going through violent conflicts in Sudan.
            South Kurdufan has been experiencing violent conflicts and
            humanitarian crises since the second civil war that broke out in
            2011 between the Sudanese government and the Sudan People Liberation
            Army/Movement North (SPLA/M-N). <br /> <br /> This region is also
            home to persistent poverty, which aggravates internal divisions and
            always results in violent conflicts among the individuals and local
            communities. We are a frontline humanitarian local organization
            based in Um-dorein County in the Nuba Mountains, Sudan.
          </div>
        </div>

        <div className="container container-content">
          <div className="page-headline">
            <h3 className="about-headline">What we do</h3>
          </div>
          <div className="abt-cont-info about-info">
            Our thematic focus is peacebuilding and nonviolent actions. We also
            response to humanitrian and emergancy crisis in the Nuba Mountains,
            particularly in IDPs camps. We build peace and transform communities
            through education, health & well-being (trauma healing and
            rehabilitation), and environment conversation. We believe low level
            of literacy in the region contributes to conflicts and undermine
            economic, social, and political development in Sudan. We support and
            supplement both primary and secondary schools with curricula and
            materials support for peace and conflict studies to mainstream
            peace. Furthermore, to ensure quality and sufficient peace and
            conflict studies in the Nuba Mountains.
            <br /> <br /> We also seek to address the mental and emotional
            consequences of generational traumatic experiences among children,
            young people and women in the Nuba Mountains. This is to restore a
            sense of normalcy among the local communities in the Nuba Mountains.
            We carry out these activities and programs through formal and
            informal learning, workshops and community outreach.
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
