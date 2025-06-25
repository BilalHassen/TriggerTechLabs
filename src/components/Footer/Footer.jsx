import React from "react";
import "./Footer.scss";
import IconsContainer from "@components/IconsContainer/IconsContainer";
function Footer() {
  return (
    <footer className="footer">
      <IconsContainer className="footer__icons" />
      <p className="footer__text">
        &copy; 2025 TriggerTechLabs. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
