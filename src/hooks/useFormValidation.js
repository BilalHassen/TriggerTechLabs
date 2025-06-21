import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "@formspree/react";

/**
 * Custom hook for form validation and submission handling
 * Handles contact form validation, Formspree integration, and form state management
 */
export function useFormValidation() {
  // Formspree hook for handling form submissions
  const [state, handleSubmit] = useForm("xldnwdqy");
  
  // Track if form was successfully submitted (for toast notifications)
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Validation errors state
  const [errors, setErrors] = useState({});

  /**
   * Handle input field changes
   * Updates form data when user types in form fields
   */
  const handleChange = (e) => {
    const name = e.target.name;
    setFormData({ ...formData, [name]: e.target.value });
  };

  /**
   * Handle form submission with validation
   * Validates all fields before submitting to Formspree
   */
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Email validation regex pattern
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errorsCollector = {};
    const { name, email, subject, message } = formData;

    // Name validation: required, minimum length, no numbers
    if (!name) {
      errorsCollector.name = "Name is required";
    } else if (name.length < 3) {
      errorsCollector.name = "Name must be at least 3 characters long";
    } else if (/\d/.test(name)) {
      errorsCollector.name = "Name cannot contain numbers";
    }

    // Email validation: required, valid format
    if (!email) {
      errorsCollector.email = "Email is required";
    } else if (!regex.test(email)) {
      errorsCollector.email = "Invalid email address";
    }

    // Subject validation: required, minimum length
    // FIXED: Previously checked length even when subject was empty
    if (!subject) {
      errorsCollector.subject = "Subject is required";
    } else if (subject.length < 3) {
      errorsCollector.subject = "Subject must be at least 3 characters long";
    }

    // Message validation: required
    if (!message) {
      errorsCollector.message = "Message is required";
    }

    // Set validation errors
    setErrors(errorsCollector);

    // If no validation errors, submit the form
    if (Object.keys(errorsCollector).length === 0) {
      handleSubmit(formData);
    }
  };

  /**
   * Handle successful form submission
   * Reset form data and show success state when Formspree succeeds
   */
  useEffect(() => {
    if (state.succeeded) {
      // Clear form data after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      // Clear any existing errors
      setErrors({});
      // Set submitted state for toast notification
      setIsSubmitted(true);
    }
  }, [state.succeeded]);

  /**
   * Reset isSubmitted state after showing toast
   * Prevents multiple toast notifications and resets state for future submissions
   */
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000); // Reset after 3 seconds (matches toast autoClose)
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return { formData, errors, handleChange, handleFormSubmit, isSubmitted, state };
}