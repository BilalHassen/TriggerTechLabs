import React from "react";
import { useNavigate } from "react-router-dom";
import "./ContactMe.scss";

/**
 * ContactMe Component
 * Hero section with call-to-action button that navigates to contact page
 * Enhanced with accessibility features and proper navigation
 */
function ContactMe() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section aria-labelledby="contact-heading" className="contact-me">
      <h2 className="contact-me__title" id="contact-heading">
        Let's Build a Digital Weapon,
        <br />
        <span className="contact-me__subtitle">Not a Pretty Widget.</span>
      </h2>
      <button 
        className="contact-me__button" 
        type="button"
        onClick={handleContactClick}
        aria-label="Navigate to contact page to get in touch"
      >
        Contact Me
      </button>
    </section>
  );
}

export default ContactMe;
