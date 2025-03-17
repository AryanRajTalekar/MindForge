import React from "react";
import "./Contact.css"; // Import the CSS file

const contactpage = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">Contact Mind Forge</h1>
        <p className="contact-text">
          Have questions, feedback, or collaboration ideas? Feel free to reach out!
        </p>

        <div className="contact-info">
          <p>📍 <strong>Location:</strong> Ratnagiri, Maharashtra, India</p>
          <p>
            📧 <strong>Email:</strong> 
            <a href="mailto:aryanrajtalekar@gmail.com"> aryanrajtalekar@gmail.com</a>
          </p>
          <p>
            🔗 <strong>LinkedIn:</strong> 
            <a href="https://www.linkedin.com/in/aryanrajtalekar" target="_blank" rel="noopener noreferrer">linkedin.com/in/aryanrajtalekar</a>
          </p>
        </div>

        <button className="contact-button">Get in Touch</button>
      </div>
    </div>
  );
};

export default contactpage;
