import React from "react";
import contactData from "../../contactData";
import ContactCard from "../ContactCard";
import "./ContactsContainer.scss"
function ContactsContainer() {
  return (
    <div className="contact__container">
      {" "}
      {contactData.map((card) => {
        console.log(card);
        return (
          <ContactCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            color={card.color}
            details={card.details}
          />
        );
      })}
    </div>
  );
}

export default ContactsContainer;
