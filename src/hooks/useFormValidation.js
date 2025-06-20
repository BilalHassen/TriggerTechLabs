import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "@formspree/react";
export  function useFormValidation() {
    const [state, handleSubmit] = useForm("xldnwdqy");
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    
    const name = e.target.name; 
    setFormData({...formData, [name]: e.target.value})
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errorsCollector = {};
    console.log(formData);
    const { name, email, subject, message } = formData;

    if(!name){
        errorsCollector.name = "Name is required";
    } else if(name.length < 3){
       errorsCollector.name = "Name must be at least 3 characters long";
    } else if(/\d/.test(name)) {
        errorsCollector.name = "Name cannot contain numbers";
    }

    if(email && !regex.test(email)){
        errorsCollector.email = "Invalid email address";
    } else if(!email){
        errorsCollector.email = "Email is required";
    }
    if(!subject){
        errorsCollector.subject = "Subject is required";
    }
    if(subject.length < 3){
        errorsCollector.subject = "Subject must be at least 3 characters long";
    }
    if(!message){
        errorsCollector.message = "Message is required";
    }

    setErrors(errorsCollector);

   if(Object.keys(errorsCollector).length === 0){
       setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
       });

       handleSubmit(formData);
       setIsSubmitted(true);
   }
  }

  return { formData, errors, handleChange, handleFormSubmit, isSubmitted };
}