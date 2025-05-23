import React from "react";
import "./BurgerBtn.scss";
function BurgerBtn({ isOpen, onClick, buttonClass, barClass }) {
  return (
    <button
      className={`${buttonClass} ${isOpen ? `${buttonClass}-open` : ""}`}
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <span
        className={`${barClass} ${isOpen ? `${barClass}-open-bar-1` : ""}`}
      ></span>
      <span
        className={`${barClass} ${isOpen ? `${barClass}-open-bar-2` : ""}`}
      ></span>
    </button>
  );
}

export default BurgerBtn;
