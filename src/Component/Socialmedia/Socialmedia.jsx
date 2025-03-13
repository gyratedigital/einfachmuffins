import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import icons from react-icons
import "./Socialmedia.css"; // Import your CSS file for styling

const SocialMedia = () => {
  return (
    <div className="social-media-section flex flex-col items-center gap-[10px] p-[20px] rounded-[12px]">
      {/* Company Logo */}
      <div className="company-logo ">
        <img className="w-[150px] h-auto md:w-[120px]" src="/navlogo.PNG" alt="Company Logo" />
      </div>

      {/* Social Media Logos */}
      <div className="social-media-logos flex gap-[15px]">
        <a className="flex items-center justify-center w-[40px] h-[40px] md:w-[35px] md:h-[35px] bg-[#070e33e8] rounded-full text-decoration-none transition-all duration-300 ease-in-out hover:bg-[#ff6f61] hover:scale-110" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="social-icon text-white text-[20px]" />
        </a>
        <a  className="flex items-center justify-center w-[40px] h-[40px] md:w-[35px] md:h-[35px] bg-[#070e33e8] rounded-full text-decoration-none transition-all duration-300 ease-in-out hover:bg-[#ff6f61] hover:scale-110"  href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon text-white text-[20px]" />
        </a>
        <a  className="flex items-center justify-center w-[40px] h-[40px] md:w-[35px] md:h-[35px] bg-[#070e33e8] rounded-full text-decoration-none transition-all duration-300 ease-in-out hover:bg-[#ff6f61] hover:scale-110"  href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon text-white text-[20px]" />
        </a>
        <a  className="flex items-center justify-center w-[40px] h-[40px] md:w-[35px] md:h-[35px] bg-[#070e33e8] rounded-full text-decoration-none transition-all duration-300 ease-in-out hover:bg-[#ff6f61] hover:scale-110"  href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon text-white text-[20px]" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;