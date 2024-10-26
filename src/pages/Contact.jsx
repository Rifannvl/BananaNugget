import React from "react";
import ContactForm from "../component/ContactForm"; // Ensure the path is correct

export default function Contact() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 text-center mb-4">
        We would love to hear from you! Please fill out the form below to get in
        touch.
      </p>
      <ContactForm />
    </div>
  );
}
