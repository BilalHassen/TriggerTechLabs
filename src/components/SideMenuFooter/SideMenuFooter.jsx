import React from "react";
import "./SideMenuFooter.scss";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
function SideMenuFooter() {
  return (
    <footer className="nav__side-menu-footer">
      <FaGithub className="nav__side-menu-icon" />
      <FaLinkedin className="nav__side-menu-icon" />
      <FaInstagram className="nav__side-menu-icon" />
    </footer>
  );
}

export default SideMenuFooter;
