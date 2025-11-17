import React from "react";
import "./SideMenuFooter.scss";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
function SideMenuFooter() {
  return (
    <footer className="nav__side-menu-footer">
      <a
        href="https://github.com/BilalHassen"
        className="icons-container__link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my GitHub profile"
      >
        <FaGithub className="nav__side-menu-icon" />
      </a>

      <a
        href="https://www.linkedin.com/in/bilal-hassen/"
        className="icons-container__link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my LinkedIn profile"
      >
        <FaLinkedin className="nav__side-menu-icon" />
      </a>
      <a
        href="https://www.instagram.com/triggertechlabs/"
        className="icons-container__link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my Instagram profile"
      >
        <FaInstagram className="nav__side-menu-icon" />
      </a>
      <Link
        to="/contact"
        className="icons-container__link"
        aria-label="Send me an email"
      >
        <FaEnvelope className="nav__side-menu-icon" />
      </Link>
    </footer>
  );
}

export default SideMenuFooter;
