import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./IconsContainer.scss";
import { Link } from "react-router-dom";

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
        href="https://www.instagram.com/triggertechlabs/"
        className="icons-container__link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my Instagram profile"
      >
        <FaInstagram className="icons-container__icon" />
      </a>

      <Link
        to="/contact"
        className="icons-container__link"
        aria-label="Send me an email"
      >
        <FaEnvelope className="icons-container__icon" />
      </Link>
    </div>
  );
}

export default IconsContainer;
