import React from "react";
import "./BurgerMenu.scss";
import { useState, useEffect } from "react";

import SideMenu from "@components/Nav/SideMenu/SideMenu";
import BurgerBtn from "@components/Nav/BurgerBtn/BurgerBtn";

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
