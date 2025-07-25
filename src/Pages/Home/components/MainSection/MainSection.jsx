import React, { useEffect, useRef } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaDownload } from "react-icons/fa";
import Carousel from "../Carousel/Carousel";
import "./MainSection.scss";
import Card from "@components/Card/Card";
import IconsContainer from "@components/IconsContainer/IconsContainer";
import MySkills from "../MySkills/MySkills";
import Typed from "typed.js";
import TechStack from "../TechStack/TechStack";
import DevProcess from "../DevProcess/DevProcess";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "@components/Footer/Footer";
import { JOB_TITLES, BIOGRAPHY } from "./MainData";

/**
 * Main Section Component
 * Hero section with animated text, personal information, and call-to-action
 * Enhanced with accessibility features including ARIA labels and semantic HTML
 */
function MainSection() {
  const animatedTextEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(animatedTextEl.current, {
      strings: JOB_TITLES,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: false,
    });
    return () => typed.destroy();
  }, []);

  return (
    <>
      <main className="home-main" id="main-content" role="main">
        {/* Hero card with personal information */}
        <Card className="home-main__card">
          <div className="home-main__text-box">
            <h1 className="home-main__title">Hi, I'm Bilal,</h1>
            {/* Animated text with accessibility support */}
            <p 
              ref={animatedTextEl} 
              className="home-main__animated-text"
              aria-label="I am a Full Stack Developer, specializing in React and Node.js"
              role="status"
              aria-live="polite"
            />
          </div>
          
          {/* Social media links section */}
          <div className="home-main__icon-flex">
            <p className="home-main__socials-text">I'm on</p>
            <IconsContainer
              className="home-main__icons-container"
              iconClass="home-main__icons"
              aria-label="Social media profiles"
            />
          </div>
          
          {/* Biography section */}
          <div className="home-main__biography-box">
            <p className="home-main__biography">{BIOGRAPHY}</p>
          </div>
          
          {/* Contact and location information */}
          <div className="home-main__footer">
            <div className="home-main__flex-wrapper">
              {/* Location information */}
              <div className="home-main__location-box">
                <FaMapMarkerAlt 
                  className="home-main__marker-icon" 
                  aria-hidden="true"
                />
                <p className="home-main__icon-text">
                  Lives in Toronto Ontario, Canada
                </p>
              </div>
              
              {/* Email contact */}
              <div className="home-main__mail-box">
                <FaEnvelope 
                  className="home-main__mail-icon" 
                  aria-hidden="true"
                />
                <a 
                  href="mailto:bilalhass977@gmail.com"
                  className="home-main__icon-text home-main__email-link"
                  aria-label="Send email to bilalhass977@gmail.com"
                >
                  bilalhass977@gmail.com
                </a>
              </div>
              
              {/* Resume download */}
              <div className="home-main__resume-box">
                <a
                  href="/assets/resume.pdf"
                  download
                  className="home-main__icon-text home-main__resume-link"
                  aria-label="Download Bilal Hassan's resume (PDF)"
                >
                  <span>Download Resume</span>
                  <FaDownload 
                    className="home-main__download-icon" 
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </Card>

        {/* Skills section */}
        <MySkills />
      </main>
      
      {/* Additional sections */}
      <Carousel />
      <TechStack />
      <DevProcess />
      <ContactMe />
    </>
  );
}

export default MainSection;
