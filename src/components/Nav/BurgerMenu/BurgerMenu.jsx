import React from "react";
import "./BurgerMenu.scss";
import { useState, useEffect, useRef } from "react";

import SideMenu from "@components/Nav/SideMenu/SideMenu";
import BurgerBtn from "@components/Nav/BurgerBtn/BurgerBtn";

/**
 * Burger Menu Component
 * Mobile navigation menu with enhanced accessibility features
 * Includes focus management, keyboard navigation, and ARIA attributes
 */
export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const previousFocusRef = useRef(null);

  const handleSideMenu = () => {
    setIsOpen(!isOpen);
  };

  // Focus management for accessibility
  useEffect(() => {
    if (isOpen) {
      // Store the currently focused element
      previousFocusRef.current = document.activeElement;
      
      // Focus the menu when it opens
      if (menuRef.current) {
        const firstFocusableElement = menuRef.current.querySelector(
          'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        if (firstFocusableElement) {
          firstFocusableElement.focus();
        }
      }
    } else {
      // Restore focus when menu closes
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    }
  }, [isOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <BurgerBtn
        isOpen={isOpen}
        onClick={handleSideMenu}
        buttonClass={"nav__burger-btn"}
        barClass={"nav__burger-bar"}
      />

      <SideMenu 
        ref={menuRef}
        handleSideMenu={handleSideMenu} 
        isOpen={isOpen} 
      />

      {/* Overlay for closing menu when clicking outside */}
      <div
        className={`nav__overlay ${isOpen ? "nav__overlay-open" : ""}`}
        onClick={handleSideMenu}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleSideMenu();
          }
        }}
        role="button"
        tabIndex={isOpen ? 0 : -1}
        aria-label="Close navigation menu"
        aria-hidden={!isOpen}
      ></div>
    </>
  );
};
