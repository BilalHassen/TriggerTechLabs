import React from "react";
import "./Contact.scss";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import LayOut from "../../LayOut/LayOut";
import contactData from "./contactData";
import ContactCard from "./components/ContactCard";
import ContactsContainer from "./components/ContactsContainer/ContactsContainer";
function Contact() {
  return (
    <LayOut>
        
      <section className="contact">
      <SectionHeading TitleText={"Contact Me"} />
       <ContactsContainer/>
      </section>
    </LayOut>
  );
}

export default Contact;
