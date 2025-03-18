import React from "react";
import { Link } from "react-router-dom";

const LeftImageRightContent = ({ heading, description, paragraph, buttonText, imageUrl }) => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 p-6 md:p-12">
      {/* Right Side: Content */}
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <h2 className="text-3xl font-bold mb-4">{heading}</h2>
        <h3 className="text-xl text-gray-600 mb-2">{description}</h3>
        <p className="text-gray-700 mb-6">{paragraph}</p>
        <Link to='/list'>
        <button className="bg-[#d14b62] text-white px-6 py-2 rounded-lg shadow hover:bg-[#b94055] transition-allbg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-pink-700 transition-all">
          {buttonText}
        </button>
        </Link>
      </div>
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2">
        <img src={imageUrl} alt="Content" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default LeftImageRightContent;