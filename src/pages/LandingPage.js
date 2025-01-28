import React from "react";

import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Footer from "../components/Footer";
import About from "../components/About";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Wrapper from "../components/Wrapper";

const LandingPage = () => {
  return (
    <>
      <div className="page-setup">
        <Navbar />
        <Home />
        <About />
        <Services />
        <Wrapper />
        <Projects />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
