import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
// import DonatePage from "./pages/DonatePage";
import WhatWeDoPage from "./pages/WhatWeDoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        {/* <Route path="/donate" element={<DonatePage />} /> */}
        <Route path="whatwedo" element={<WhatWeDoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
