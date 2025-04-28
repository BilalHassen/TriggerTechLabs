import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./IconsContainer.scss";

function IconsContainer({ className, iconClass }) {
  return (
    <div className={`icons-container ${className}`}>
      <a
        href="https://github.com/BilalHassen"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className={`${iconClass} icons-container__github`} />
      </a>
      <a
        href="https://www.linkedin.com/in/bilal-hassen/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className={`${iconClass} icons-container__linkedin`} />
      </a>
      <a
        href="https://instagram.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className={`${iconClass} icons-container__instagram`} />
      </a>
      <a
        href="mailto:your-email@example.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope className={`${iconClass} icons-container__email`} />
      </a>
    </div>
  );
}

export default IconsContainer;
