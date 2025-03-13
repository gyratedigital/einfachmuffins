import React from "react";
import "./Footer.css"; // Import your CSS file for styling
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          &copy; {currentYear} Einfachmuffins. All rights reserved.
        </p>
        <p className="additional-text">
          by <Link to="https://foodblogliebe.de/" onClick={(e) => { window.open("https://foodblogliebe.de/", "_blank", "noopener,noreferrer"); e.preventDefault(); }} className="text-[#f38c90] hover:underline">Foodblogliebe</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;