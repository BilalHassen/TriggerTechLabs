import React from "react";
import "./BurgerBtn.scss";

/**
 * Burger Button Component
 * Accessible hamburger menu button for mobile navigation
 * Includes proper ARIA attributes, keyboard support, and screen reader announcements
 */
function BurgerBtn({ isOpen, onClick, buttonClass, barClass }) {
  const handleKeyDown = (event) => {
    // Support for Enter and Space key activation
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <button
      className={`${buttonClass} ${isOpen ? `${buttonClass}-open` : ""}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation-menu"
      aria-haspopup="true"
      type="button"
    >
      {/* Screen reader text for better accessibility */}
      <span className="sr-only">
        {isOpen ? "Close menu" : "Open menu"}
      </span>
      
      {/* Visual hamburger bars */}
      <span
        className={`${barClass} ${isOpen ? `${barClass}-open-bar-1` : ""}`}
        aria-hidden="true"
      ></span>
      <span
        className={`${barClass} ${isOpen ? `${barClass}-open-bar-2` : ""}`}
        aria-hidden="true"
      ></span>
    </button>
  );
}

export default BurgerBtn;
