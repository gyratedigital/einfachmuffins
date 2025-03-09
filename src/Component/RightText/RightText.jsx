import React from "react";
import "./RightText.css";

const RightText = ({ heading, description, paragraph, buttonText, imageUrl }) => {
  return (
    <div className="container">
      {/* Left Side: Content */}
      <div className="image-container3">
        <img src={imageUrl} alt="Content Image" />
      </div>

      {/* Right Side: Image */}
   
      <div className="content">
        <div className="text-content">
        <h3>{description}</h3>
        <p>{paragraph}</p>

        </div>
    <div>

        <button>{buttonText}</button>
    </div>
      </div>
    </div>
  );
};

export default RightText;