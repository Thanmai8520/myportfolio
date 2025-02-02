import React from "react";
import "./Contact.css";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

function Contact({ selectedColor }) {
  return (
    <div className="contact-container">
      <h1 className="contact-title" style={{ color: selectedColor }}>
        Get in Touch
      </h1>
      <p className="contact-subtitle">
        Feel free to reach out to me for collaborations, opportunities, or just a friendly hello!
      </p>
      <div className="contact-details">
        {/* Gmail 1 */}
        <a
          href="mailto:thanmaikora@gmail.com"
          className="contact-item"
          style={{ textDecoration: "none" }}
        >
          <FaEnvelope size={30} className="contact-icon" />
          <div className="contact-info">
            <p className="contact-label" style={{ color: selectedColor }}>
              Primary Email
            </p>
            <p className="contact-link" style={{ color: "white" }}>
              thanmaikora@gmail.com
            </p>
          </div>
        </a>

        {/* Gmail 2 */}
        <a
          href="mailto:2100031107cseh@gmail.com"
          className="contact-item"
          style={{ textDecoration: "none" }}
        >
          <FaEnvelope size={30} className="contact-icon" />
          <div className="contact-info">
            <p className="contact-label" style={{ color: selectedColor }}>
              Secondary Email
            </p>
            <p className="contact-link" style={{ color: "white" }}>
              2100031107cseh@gmail.com
            </p>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sri-santhoshi-thanmai-kora-348b60225/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
          style={{ textDecoration: "none" }}
        >
          <FaLinkedin size={30} className="contact-icon" />
          <div className="contact-info">
            <p className="contact-label" style={{ color: selectedColor }}>
              LinkedIn
            </p>
            <p className="contact-link" style={{ color: "white" }}>
              Thanmai Kora
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;
