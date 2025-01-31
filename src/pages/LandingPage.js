import React from "react";

import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Footer from "../components/Footer";
import About from "../components/About";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Video from "../components/Video";
import Testiminials from "../components/Testiminials";

const LandingPage = () => {
  return (
    <>
      <div className="page-setup">
        <Navbar />
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Projects />
        <Video />
        <Testiminials />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
