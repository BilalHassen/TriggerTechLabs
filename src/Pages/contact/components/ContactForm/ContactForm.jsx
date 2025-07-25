import React from "react";
import "./ContactForm.scss";
import { useEffect } from "react";
import { useFormValidation } from "@hooks/useFormValidation";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaPaperPlane } from "react-icons/fa";

/**
 * ContactForm Component
 * Renders a contact form with validation, accessibility features, and Formspree integration
 * Enhanced with comprehensive accessibility features including proper labels, error handling, and ARIA attributes
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
    <form 
      className="contact__form" 
      onSubmit={handleFormSubmit} 
      noValidate
      aria-label="Contact form"
      role="form"
    >
      <h5 className="contact__form-title">Leave a message</h5>
      
      {/* Form status announcements for screen readers */}
      {state.submitting && (
        <div className="sr-only" aria-live="polite">
          Form is being submitted, please wait
        </div>
      )}
      
      {isSubmitted && (
        <div className="sr-only" aria-live="assertive">
          Form submitted successfully
        </div>
      )}
      
      {/* Name and Email fields group */}
      <div className="contact__form-group" role="group" aria-labelledby="personal-info-label">
        <div id="personal-info-label" className="sr-only">Personal Information</div>
        
        {/* Name field with accessibility features */}
        <div className="contact__form-field">
          <label htmlFor="name" className="contact__form-label">
            Name <span className="required" aria-label="required">*</span>
          </label>
          <input 
            id="name"
            type="text" 
            name="name" 
            placeholder="Enter your name" 
            value={formData.name} 
            onChange={handleChange}
            disabled={state.submitting}
            aria-describedby={errors.name ? "name-error" : "name-help"}
            aria-invalid={errors.name ? "true" : "false"}
            aria-required="true"
            required
          />
          {errors.name && (
            <p className="contact__form-error" id="name-error" role="alert">
              {errors.name}
            </p>
          )}
          <p id="name-help" className="sr-only">Please enter your full name</p>
        </div>

        {/* Email field with accessibility features */}
        <div className="contact__form-field">
          <label htmlFor="email" className="contact__form-label">
            Email <span className="required" aria-label="required">*</span>
          </label>
          <input 
            id="email"
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            value={formData.email} 
            onChange={handleChange}
            disabled={state.submitting}
            aria-describedby={errors.email ? "email-error" : "email-help"}
            aria-invalid={errors.email ? "true" : "false"}
            aria-required="true"
            required
          />
          {errors.email && (
            <p className="contact__form-error" id="email-error" role="alert">
              {errors.email}
            </p>
          )}
          <p id="email-help" className="sr-only">Please enter a valid email address</p>
        </div>
      </div>

      {/* Subject field */}
      <div className="contact__subject-container">
        <label htmlFor="subject" className="contact__form-label">
          Subject <span className="required" aria-label="required">*</span>
        </label>
        <input 
          id="subject"
          type="text" 
          name="subject" 
          placeholder="Enter subject" 
          value={formData.subject} 
          onChange={handleChange}
          disabled={state.submitting}
          aria-describedby={errors.subject ? "subject-error" : "subject-help"}
          aria-invalid={errors.subject ? "true" : "false"}
          aria-required="true"
          required
        />
        {errors.subject && (
          <p className="contact__form-error" id="subject-error" role="alert">
            {errors.subject}
          </p>
        )}
        <p id="subject-help" className="sr-only">Please enter a subject for your message</p>
      </div>

      {/* Message textarea */}
      <div className="contact__message-container">
        <label htmlFor="message" className="contact__form-label">
          Message <span className="required" aria-label="required">*</span>
        </label>
        <textarea 
          id="message"
          name="message" 
          placeholder="Enter your message" 
          value={formData.message} 
          onChange={handleChange}
          disabled={state.submitting}
          aria-describedby={errors.message ? "message-error" : "message-help"}
          aria-invalid={errors.message ? "true" : "false"}
          aria-required="true"
          required
          rows="5"
        />
        {errors.message && (
          <p className="contact__form-error" id="message-error" role="alert">
            {errors.message}
          </p>
        )}
        <p id="message-help" className="sr-only">Please enter your message</p>
      </div>

      {/* Submit button with loading state */}
      <button 
        className={`contact__form-button ${state.submitting ? 'loading' : ''}`}
        type="submit"
        disabled={state.submitting}
        aria-describedby={state.submitting ? "submitting-status" : undefined}
        aria-busy={state.submitting}
      >
        {state.submitting ? (
          <>
            <span className="sr-only">Sending message</span>
            Sending...
          </>
        ) : (
          <>
            <FaPaperPlane aria-hidden="true" />
            <span>Send Message</span>
          </>
        )}
      </button>
      
      {/* Screen reader status for form submission */}
      {state.submitting && (
        <p id="submitting-status" className="sr-only" aria-live="polite">
          Form is being submitted, please wait
        </p>
      )}
    </form>
  );
}
