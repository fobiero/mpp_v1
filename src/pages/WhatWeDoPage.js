import React from "react";

import "../assets/css/custom.css";
import "../assets/css/smallScreen.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";

const WhatWeDoPage = () => {
  return (
    <div>
      <Navbar />
      <div className="section service-section service" id="service">
        <div className="section-pages-header">
          <div className="container">
            <div className="page-header-desc">
              <Link className="home-section-link pg-sc-link" to="/">
                home
              </Link>
              <Link className="current-section-link pg-sc-link" to="/whatwedo">
                what we do
              </Link>
            </div>
          </div>

          <div className="page-header-tle">What we do</div>
        </div>
        <div className="container">
          <h3 className="pg-hd-tle-item">Goals & Objectives of our Projects</h3>
          <div className="service-item">
            <div className="row">
              <div className="col-md-6">
                <div className="service-item-thumb">
                  <img
                    alt="education-thumb"
                    src={require("../assets/images/projects/edu-kib.jpg")}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="service-item-thumb-info">
                  <h3 className="service-item-thum-info-tle">Education</h3>
                  <p className="service-item-thum-info-tle-desc about-info">
                    The goal of this project is to mainstream peace and ensure
                    quality and sufficient peace and conflict studies in primary
                    and secondary schools to build peace in the Nuba Mountains.
                    This is through training, preparing, creating public
                    awareness, and networking among the youth about nonviolent
                    actions and a culture of peace in the Nuba Mountains. It
                    aims to strengthen the technical and social capacity of
                    Nubian youth in mainstreaming nonviolent actions and peace
                    concerns into the regional sectoral and regional sustainable
                    development. It aims to promote youthcentered development
                    through empowerment of self-help employment and knowledge of
                    nonviolent actions and peace in the Nuba Mountains. This
                    will be done through training on peacebuilding and
                    nonviolent actions (formal and informal) education, artisan
                    skill development, and alternative livelihood or startup
                    employment support. The organization aims to supplement the
                    Peace and Conflict Studies curriculum and provide other
                    material support to both primary and secondary schools in
                    the region.
                  </p>
                  <p className="service-item-thum-info-tle-desc about-info">
                    <span>Objective 1</span>
                    Formal Education: To introduce basic Peace and Conflict
                    Studies subject for formal learning in Primary and secondary
                    schools in the Nuba Mountains.
                  </p>
                  <p className="service-item-thum-info-tle-desc about-info">
                    <span>Objective 2</span>
                    Informal Education: 1. To train, prepare, and create public
                    awareness among the youths about nonviolent actions and
                    culture of peace in the Nuba Mountains. 2. To strengthen the
                    technical and social capacity of Nubian youths in pursuit of
                    nonviolent actions and peace concerns through artisan skill
                    development and self-help employment for the region’s
                    sustainable development.
                  </p>
                </div>
              </div>
              {/* <div className="col-md-3 offset"></div> */}
            </div>
          </div>
        </div>
        {/* end education section  */}
        <div className="container">
          <div className="service-item">
            <div className="row">
              <div className="col-md-6">
                <div className="service-item-thumb">
                  <img
                    alt="education-thumb"
                    src={require("../assets/images/projects/health.jpeg")}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="service-item-thumb-info">
                  <h3 className="service-item-thum-info-tle">
                    Trauma Healing and Rehabilitation
                  </h3>
                  <p className="service-item-thum-info-tle-desc about-info">
                    The primary goal of this project is to address the mental
                    and emotional consequences of traumatic experiences among
                    young people, women, children, and Internal Displace Persons
                    (IDPs) in the Nuba Mountains. This is to restore a sense of
                    normalcy among the local communities in the Nuba Mountains.
                    This is to build trust between the local communities and
                    IDPs for peaceful coexistence. On the other hand,
                    rehabilitation aims to restore the physical health,
                    wellbeing, and functionality of an individual. The civil
                    wars and conflicts in the Nuba Mountains have passed on
                    generational trauma, where generations inherit behaviors
                    from the society and communities and pass it on to the next
                    generation due to long wars, oppression, and poverty.
                  </p>
                  <p className="service-item-thum-info-tle-desc about-info">
                    <span>Objective 1</span>
                    To create awareness of generational trauma among young
                    people, including the local communities, through dialogue
                    and other community outreach activities.
                  </p>
                  <p className="service-item-thum-info-tle-desc about-info">
                    <span>Objective 2</span>
                    Objective 2: To train young people on how to deal with
                    trauma through activities that foster the overall well-being
                    of an individual (intentional self-care).
                  </p>
                </div>
              </div>

              {/* <div className="col-md-2 offset"></div> */}
            </div>
          </div>
        </div>
        {/* end health  */}
        <div className="container">
          <div className="service-item">
            <div className="row">
              <div className="col-md-6">
                <div className="service-item-thumb">
                  <img
                    alt="education-thumb"
                    src={require("../assets/images/we-do/env.png")}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="service-item-thumb-info">
                  <h3 className="service-item-thum-info-tle">
                    Environment Conservation and Climate Change
                  </h3>
                  <p className="service-item-thum-info-tle-desc about-info">
                    In the Nuba Mountains, communal violence has been partly
                    caused by natural resources. The goal of this project is to
                    build peace by engaging and educating youths and local
                    communities about equitable resource sharing among
                    communities and the importance of afforestation through
                    community workshops. Mountains' Path for Peace aims to build
                    peace by educating and raising awareness on the need to
                    conserve natural resources through conversation programs,
                    workshops, and trainings to prevent negative effects of
                    natural resources like the resource curse. The organization
                    believes that conservation, afforestation, and
                    reafforestation support resilience and build peace because
                    they transform relationships between humans and the
                    environment. The project also aims to supplement farmers and
                    community members with seedlings to plant trees to improve
                    food security by increasing their farms productivity in the
                    Nuba mountains, Sudan.
                  </p>
                  <p className="service-item-thum-info-tle-desc about-info">
                    <span>Objective 1</span>
                    To create awareness and educate young people about food
                    security, food safety, food production and on how to combat
                    desertification and build resilience to droughts from
                    sprawling suburbs in the Nuba Mountains through supporting
                    agriculture by distributing seedlings and tree nurses.
                  </p>
                  <p className="service-item-thum-info-tle-desc about-info">
                    <span>Objective 1</span>
                    To educate and enhance the economic capacity of youths for
                    economic growth within the local communities in the Nuba
                    Mountains through village savings and loan associations
                    (VSLA), incomegenerating activities (IGAs), and another
                    alternative livelihood in the Nuba Mountains.
                  </p>
                </div>
              </div>
              {/* <div className="col-md-3 offset"></div> */}
            </div>
          </div>
        </div>
        {/* environment conservation & climate change  */}
      </div>
      <Wrapper />
      <Footer />
    </div>
  );
};

export default WhatWeDoPage;
