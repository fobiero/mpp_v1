import React from "react";

import "../assets/css/project.css";

const Projects = () => {
  return (
    <>
      <div className="section section-programs  programs" id="programs">
        <div className="container sect-rle">
          <div className="row">
            <div className="col-md-6">
              <div className="proj-info">
                <h2 className="about-header-tle-main">
                  <span>where we work</span>
                </h2>
                <p className="about-info proj-info-item">
                  We are at the war frontline in Sudan, we work in Nuba
                  Mountains also known as South Kurdufan. Marginalized,
                  underdeveloped, and war-torn: these three words describe the
                  Nuba Mountains perfectly. It is one of the regions currently
                  going through violent conflicts in Sudan. South Kurdufan has
                  been experiencing violent conflicts and humanitarian crises
                  since the second civil war that broke out in 2011 between the
                  Sudanese government and the Sudan People Liberation
                  Army/Movement North (SPLA/M-N). <br /> <br /> This region is
                  also home to persistent poverty, which aggravates internal
                  divisions and always results in violent conflicts among the
                  individuals and local communities. We are a frontline
                  humanitarian local organization based in Um-dorein County in
                  the Nuba Mountains, Sudan.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="proj-thumb">
                <img src={require("../assets/images/we-do/vivion.png")} />
              </div>
            </div>
          </div>
        </div>
        <div className="container sect-rle"></div>
      </div>
    </>
  );
};

export default Projects;
