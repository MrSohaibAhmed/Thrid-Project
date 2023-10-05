/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error message when user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.telephone) {
      newErrors.telephone = "Telephone is required";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, you can submit the data here
      console.log("Form submitted:", formData);
    } else {
      setErrors(newErrors);
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation regex, you can use a more complex one
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };
  return (
    <>
      <div className="contact-form-container">
        <h4 className="heading-text">Leave a message</h4>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <input
            type="tel"
            name="telephone"
            placeholder="Telephone"
            value={formData.telephone}
            onChange={handleChange}
          />
          {errors.telephone && <p className="error">{errors.telephone}</p>}
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
          />
          {errors.message && <p className="error">{errors.message}</p>}
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
};

export default Form;
