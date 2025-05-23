import React from "react";
import { useState, useEffect } from "react";

import SideMenu from "../SideMenu/SideMenu";
import BurgerBtn from "../BurgerBtn/BurgerBtn";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSideMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BurgerBtn
        isOpen={isOpen}
        onClick={handleSideMenu}
        buttonClass={"nav__burger-btn"}
        barClass={"nav__burger-bar"}
      />

      <SideMenu handleSideMenu={handleSideMenu} isOpen={isOpen} />

      <div
        className={`nav__overlay ${isOpen ? "nav__overlay-open" : ""}`}
      ></div>
    </>
  );
};
