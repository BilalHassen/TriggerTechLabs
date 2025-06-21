import React from "react";
import "./ContactForm.scss";
import { useState, useEffect } from "react";
import { useFormValidation } from "../../../../hooks/useFormValidation";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaPaperPlane } from "react-icons/fa";

/**
 * ContactForm Component
 * Renders a contact form with validation, accessibility features, and Formspree integration
 */
export default function ContactForm() {
  // Custom hook for form validation and submission handling
  const { formData, errors, handleChange, handleFormSubmit, isSubmitted, state } = useFormValidation();

  /**
   * Show success toast when form is successfully submitted
   * Triggers when isSubmitted state changes to true
   */
  useEffect(() => {
    if (isSubmitted) {
      toast.success("Inquiry sent successfully", {
        icon: <FaPaperPlane color="#fff" size={20}/>,
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, [isSubmitted]);

  /**
   * Show error toast when Formspree submission fails
   * Handles server-side errors from Formspree
   */
  useEffect(() => {
    if (state.errors && state.errors.length > 0) {
      toast.error("Failed to send message. Please try again.", {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, [state.errors]);

  return (
    <form className="contact__form" onSubmit={handleFormSubmit} noValidate>
      <h5 className="contact__form-title">Leave a message</h5>
      
      {/* Name and Email fields group */}
      <div className="contact__form-group">
        {/* Name field with accessibility features */}
        <div className="contact__form-field">
          <label htmlFor="name" className="sr-only">Name</label>
          <input 
            id="name"
            type="text" 
            name="name" 
            placeholder="Name" 
            value={formData.name} 
            onChange={handleChange}
            disabled={state.submitting}
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && <p className="contact__form-error" id="name-error">{errors.name}</p>}
        </div>

        {/* Email field with accessibility features */}
        <div className="contact__form-field">
          <label htmlFor="email" className="sr-only">Email</label>
          <input 
            id="email"
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange}
            disabled={state.submitting}
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <p className="contact__form-error" id="email-error">{errors.email}</p>}
        </div>
      </div>

      {/* Subject field */}
      <div className="contact__subject-container">
        <label htmlFor="subject" className="sr-only">Subject</label>
        <input 
          id="subject"
          type="text" 
          name="subject" 
          placeholder="Subject" 
          value={formData.subject} 
          onChange={handleChange}
          disabled={state.submitting}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          aria-invalid={errors.subject ? "true" : "false"}
        />
        {errors.subject && <p className="contact__form-error" id="subject-error">{errors.subject}</p>}
      </div>

      {/* Message textarea */}
      <div className="contact__message-container">
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea 
          id="message"
          name="message" 
          placeholder="Message" 
          value={formData.message} 
          onChange={handleChange}
          disabled={state.submitting}
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && <p className="contact__form-error" id="message-error">{errors.message}</p>}
      </div>

      {/* Submit button with loading state */}
      <button 
        className="contact__form-button" 
        type="submit"
        disabled={state.submitting}
        aria-describedby={state.submitting ? "submitting-status" : undefined}
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
      
      {/* Screen reader status for form submission */}
      {state.submitting && <p id="submitting-status" className="sr-only">Form is being submitted</p>}
    </form>
  );
}
