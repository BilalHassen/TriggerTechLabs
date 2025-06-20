import React from "react";
import "./Contact.scss";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import LayOut from "../../LayOut/LayOut";
import contactData from "./contactData";
import ContactCard from "./components/ContactCard";
import ContactsContainer from "./components/ContactsContainer/ContactsContainer";
import ContactForm from "./components/ContactForm/ContactForm";
function Contact() {
  return (
    <LayOut>
        
      <section className="contact">
      <SectionHeading TitleText={"Contact Me"} />
       <ContactsContainer/>
       <ContactForm/>
      </section>

    </LayOut>
  );
}

export default Contact;
