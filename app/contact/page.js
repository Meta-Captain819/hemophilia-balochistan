"use client"
import React from "react";
import { useState } from "react";

const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      if (res.ok) {
        alert("Message sent successfully");
        setFormData({
          name: "",
          email: "",
          message: "",
          number: ""
        });

      }
    } catch (error) {
      console.error("Error sending message:", error);

    }


  };


  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl">
            Get in touch with Hemophilia Welfare Society Balochistan for any inquiries or support.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-100 shadow-md rounded-lg p-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="number" className="block text-sm font-semibold mb-2">
                Your Phone Number
              </label>
              <input
                type="text"
                id="number"
                value={formData.number}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Your message
              </label>
              <textarea
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Type your message here...."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Aamir Khan</h3>
              <p>Email: <a href="mailto:aamirkhanbaluch33@gmail.com" className="text-red-600 hover:underline">aamirkhanbaluch33@gmail.com</a></p>
              <p>Phone: +92-3133999813
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Muhammad Ashraf</h3>
              <p>Email: <a href="mailto:malikashraflehri145@gmail.com" className="text-red-600 hover:underline">malikashraflehri145@gmail.com
              </a></p>
              <p>Phone: +92-3022602109
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Find Us</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.715497496973!2d67.0074173!3d30.18812000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed2de225646311b%3A0x89b4d3cd46f213e8!2sBalochistan%20Institute%20Of%20Child%20Health%20Service%20BICHQ!5e0!3m2!1sen!2s!4v1738061533357!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
