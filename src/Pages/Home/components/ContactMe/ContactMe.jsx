import React from "react";
import "./ContactMe.scss";

function ContactMe() {
  return (
    <section aria-labelledby="contact-heading" className="contact-me">
      <h2 className="contact-me__title" id="contact-heading">
        Let’s Build a Digital Weapon,
        <br />
        <span className="contact-me__subtitle">Not a Pretty Widget.</span>
      </h2>
      <button className="contact-me__button">Contact Me</button>
    </section>
  );
}

export default ContactMe;
