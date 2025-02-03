import "./App.css";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import Slide from "./Component/Slide/Slide";
import About from "./Component/About/About";
import Services from "./Component/Services/Services";
import Resume from "./Component/Resume/Resume";
import Contact from "./Component/Contact/Contact";
import Work from "./Component/Work/Work";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return null;
};

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const jobRef = useRef(null);
  const resumeRef = useRef(null);
  const portRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    home:homeRef,
    about: aboutRef,
    job: jobRef,
    resume: resumeRef,
    port: portRef,
    contact: contactRef,
  };


  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Navbar
      sectionRefs = {sectionRefs}
        scrollToHome={() => {
          handleScroll(homeRef);
        }}
        scrollToAbout={() => {
          handleScroll(aboutRef);
        }}
        scrollToJob={() => {
          handleScroll(jobRef);
        }}
        scrollToResume={() => {
          handleScroll(resumeRef);
        }}
        scrollToPort={() => {
          handleScroll(portRef);
        }}
        scrollToContact={() => {
          handleScroll(contactRef);
        }}
      />
      <div ref={homeRef} id='home'>
        <Slide />
      </div>
      <div ref={aboutRef} id='about'>
        <About />
      </div>
      <div ref={jobRef} id='job'>
        <Services/>
      </div>
      <div ref={resumeRef} id="resume">
        <Resume/>
      </div>
      <div ref={portRef}>
        <Work/>
      </div>
      <div ref={contactRef} id='contact'>
        <Contact/>
      </div>
    </>
  );
}

export default App;
