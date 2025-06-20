import React from "react";
import { useForm } from "@formspree/react";
import "./ContactForm.scss";
import { useState, useEffect } from "react";
import { useFormValidation } from "../../../../hooks/useFormValidation";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {


const { formData, errors, handleChange, handleFormSubmit, isSubmitted } = useFormValidation();

useEffect(() => {
    if(isSubmitted){
        toast.success("Inquiry sent successfully",{
            icon: <FaPaperPlane color="#fff" size={20}/>,
            position: "top-right",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    }
}, [isSubmitted]);


  return (
    <form className="contact__form" onSubmit={handleFormSubmit}>
      <h5 className="contact__form-title">Leave a message</h5>
      <div className="contact__form-group">
        <div className="contact__form-field">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange}/>
          {errors.name && <p className="contact__form-error">{errors.name}</p>}
        </div>

        <div className="contact__form-field">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
          {errors.email && <p className="contact__form-error">{errors.email}</p>}
        </div>
      </div>
      <div className="contact__subject-container">
        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange}/>
        {errors.subject && <p className="contact__form-error">{errors.subject}</p>}
      </div>
      <div className="contact__message-container">
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}/>
        {errors.message && <p className="contact__form-error">{errors.message}</p>}
    </div>
      <button className="contact__form-button" type="submit">
        Send Message
      </button>
    </form>
  );
}
