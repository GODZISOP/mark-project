"use client"; // This line ensures this component is rendered on the client side in Next.js
import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social icons from react-icons
import Navbar from "@/app/navbar";
import Footer from "@/app/Footer/page";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle form data change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Update the API URL to your deployed backend
      const response = await fetch("https://my-mark-neww.vercel.app/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setError(error.message);
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>Get in touch with us via the form below.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {isSent && (
          <div className="confirmation-message">
            <p>Thank you! Your message has been sent successfully.</p>
          </div>
        )}

        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://www.facebook.com/marko.reljin.12?mibextid=wwXIfr&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} />
          </a>
         
          <a href="  https://www.instagram.com/markrelic?igsh=ajh6M2VicHIwNG9o" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.linkedin.com/in/mark-relic-8731b62b4/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    
      <Footer />
    </div>
  );
}
