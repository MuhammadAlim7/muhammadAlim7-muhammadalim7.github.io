import React, { useRef, useEffect, useState } from "react";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import About from "./components/About";

import FPSStats from "react-fps-stats";
import "./App.css";

const sections = [
  { id: "Home", page: Home },
  { id: "Skills", page: Skills },
  { id: "Projects", page: Projects },
  { id: "Contact", page: Contact },
  // { id: "About", page: About },
];

const App = () => {
  const highLightsLink = useRef([]);

  return (
    <div className="overflow-hidden" id="base">
      {/* <FPSStats /> */}

      <Background />
      <Navbar highLightsLink={highLightsLink} />

      {sections.map((section, key) => (
        <section
          key={key}
          ref={(el) => (highLightsLink.current[section.id] = el)}
          id={section.id}
        >
          <section.page />
        </section>
      ))}
      <Footer />
    </div>
  );
};

export default App;
