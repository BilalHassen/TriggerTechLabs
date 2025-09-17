import React from "react";
import "./ContactMe.scss";
import {useNavigate} from "react-router-dom"

function ContactMe() {

  const navigate = useNavigate()

  return (
    <section aria-labelledby="contact-heading" className="contact-me">
      <h2 className="contact-me__title" id="contact-heading">
        Let’s Build a Digital Weapon,
        <br />
        <span className="contact-me__subtitle">Not a Pretty Widget.</span>
      </h2>
      {/* fixx css styling for the button */}
      
      <button 
      className="contact-me__button" 
      type="button"
      onClick={()=>navigate("/contact")}
      >Contact Me</button>
     
    </section>
  );
}

export default ContactMe;
