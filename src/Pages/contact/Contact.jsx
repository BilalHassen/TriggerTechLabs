import React from "react";
import "./Contact.scss";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import LayOut from "../../LayOut/LayOut";
import ContactsContainer from "./components/ContactsContainer/ContactsContainer";
import ContactForm from "./components/ContactForm/ContactForm";

/**
 * Contact Page Component
 * Main contact page that displays contact information and contact form
 * Uses Layout wrapper and includes section heading, contact cards, and form
 */
function Contact() {
  return (
    <LayOut>
      <section className="contact">
        {/* Page heading */}
        <SectionHeading TitleText={"Contact Me"} />
        
        {/* Contact information cards */}
        <ContactsContainer/>
        
        {/* Contact form for user inquiries */}
        <ContactForm/>
      </section>
    </LayOut>
  );
}

export default Contact;
