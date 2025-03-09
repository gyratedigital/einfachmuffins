import React from "react";
import "./Footer.css"; // Import your CSS file for styling

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          &copy; {currentYear} Your Company Name. All rights reserved.
        </p>
        <p className="additional-text">
          Designed with by Your Name
        </p>
      </div>
    </footer>
  );
};

export default Footer;