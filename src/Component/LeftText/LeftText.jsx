import React from "react";
import "./LeftText.css";

const LeftText = ({ heading, description, paragraph, buttonText, imageUrl }) => {
  return (
    <div className="container mx-auto">
      <div className="flex">
        {/* Left Side: Content */}
        <div className="content">
          <div className="text-content">
            <h3>{description}</h3>
            <p>{paragraph}</p>
          </div>
          <div>
            <button>{buttonText}</button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="image-container2">
          <img src={imageUrl} alt="Content Image" />
        </div>
      </div>
    </div>
  );
};

export default LeftText;