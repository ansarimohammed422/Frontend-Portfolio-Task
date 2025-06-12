import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutHome from "./Components/AboutHome";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutHome />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
