import React from "react";
import { Link } from "react-router-dom";

import "./NavLargeMenu.scss";

function NavLargeMenu() {
  return (
    <div className="nav__links">
      <ul className="nav__links-container">
        <Link to="/projects">
          <li className="nav__links-item">Projects</li>
        </Link>
        <Link to="/plans">
          <li className="nav__links-item">Plans</li>
        </Link>
        <Link to="/contact">
          <li className="nav__links-item">Contact</li>
        </Link>
        <Link to="">
          <li className="nav__links-item">Case Study</li>
        </Link>
      </ul>
    </div>
  );
}

export default NavLargeMenu;
