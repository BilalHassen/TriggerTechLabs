import React from "react";
import "./Contact.scss";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import LayOut from "../../LayOut/LayOut";
import contactData from "./contactData";
import ContactCard from "./components/ContactCard";
function Contact() {
  return (
    <LayOut>
        <SectionHeading TitleText={"Contact Me"} />
      <section className="contact">
        
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
      </section>
    </LayOut>
  );
}

export default Contact;
