import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./IconsContainer.scss";

function IconsContainer({ className, iconClass }) {
  return (
    <div className={`icons-container ${className}`}>
      <a
        href="https://github.com/BilalHassen"
        className="icons-container__link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my GitHub profile"
      >
        <FaGithub className="icons-container__icon" />
      </a>

      <a
        href="https://www.linkedin.com/in/bilal-hassen/"
        className="icons-container__link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my LinkedIn profile"
      >
        <FaLinkedin className="icons-container__icon" />
      </a>

      <a
        href="https://instagram.com/your-username"
        className="icons-container__link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my Instagram profile"
      >
        <FaInstagram className="icons-container__icon" />
      </a>

      <a
        href="mailto:bilalhass977@gmail.com"
        className="icons-container__link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send me an email"
      >
        <FaEnvelope className="icons-container__icon" />
      </a>
    </div>
  );
}

export default IconsContainer;
