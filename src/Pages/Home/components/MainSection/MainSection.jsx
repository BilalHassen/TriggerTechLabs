import React, { useEffect, useRef } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaDownload } from "react-icons/fa";
import Carousel from "../Carousel/Carousel";
import "./MainSection.scss";
import Card from "../../../../components/Card/Card";
import IconsContainer from "@components/IconsContainer/IconsContainer";
import MySkills from "../MySkills/MySkills";
import Typed from "typed.js";
import TechStack from "../TechStack/TechStack";
import DevProcess from "../DevProcess/DevProcess";
import ContactMe from "../ContactMe/ContactMe";

const JOB_TITLES = [
  "Full-stack Developer",
  "Front-end Developer",
  "Web Developer",
];

const BIOGRAPHY = `I'm a passionate Full-stack Developer with a strong foundation in
building modern, scalable web applications. I specialize in both
front-end and back-end development, creating seamless digital
experiences from concept to deployment. With a focus on clean code,
performance, and user-centered design, I bring ideas to life through
technology.`;

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
    <main className="home-main">
      {/*move card to its own component */}
      <Card className="home-main__card">
        <div className="home-main__text-box">
          <h1 className="home-main__title">Hi, I'm Bilal,</h1>
          <p ref={animatedTextEl} className="home-main__animated-text" />
        </div>
        <div className="home-main__icon-flex">
          <p className="home-main__socials-text">I'm on</p>
          <IconsContainer
            className="home-main__icons-container"
            iconClass="home-main__icons"
          />
        </div>
        <div className="home-main__biography-box">
          <p className="home-main__biography">{BIOGRAPHY}</p>
        </div>
        <div className="home-main__footer">
          <div className="home-main__flex-wrapper">
            <div className="home-main__location-box">
              <FaMapMarkerAlt className="home-main__marker-icon" />
              <p className="home-main__icon-text">
                Lives in Toronto Ontario, Canada
              </p>
            </div>
            <div className="home-main__mail-box">
              <FaEnvelope className="home-main__mail-icon" />
              <p className="home-main__icon-text">bilalhass977@gmail.com</p>
            </div>
            <div className="home-main__resume-box">
              <p className="home-main__icon-text">Download Resume</p>
              <FaDownload className="home-main__download-icon" />
            </div>
          </div>
        </div>
      </Card>

    <MySkills/>
    </main>
    <Carousel/>
    <TechStack/>
    <DevProcess/>
    <ContactMe/>
    </>
  );
}

export default MainSection;