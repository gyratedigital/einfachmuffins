import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import icons from react-icons
import "./Socialmedia.css"; // Import your CSS file for styling

const SocialMedia = () => {
  return (
    <div className="social-media-section">
      {/* Company Logo */}
      <div className="company-logo">
        <img src="/navlogo.PNG" alt="Company Logo" />
      </div>

      {/* Social Media Logos */}
      <div className="social-media-logos">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="social-icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;