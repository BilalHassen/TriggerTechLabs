import React from "react";
import contactData from "../../contactData";
import ContactCard from "../ContactCard";
import "./ContactsContainer.scss";

/**
 * ContactsContainer Component
 * Renders a grid/list of contact information cards
 * Maps through contact data and renders individual ContactCard components
 */
function ContactsContainer() {
  return (
    <div className="contact__container">
      {/* Maps through contact data to render contact cards */}
      {contactData.map((card) => (
        <ContactCard
          key={card.id}
          icon={card.icon}
          title={card.title}
          color={card.color}
          details={card.details}
        />
      ))}
    </div>
  );
}

export default ContactsContainer;
