import React from "react";
import { FiSearch } from "react-icons/fi";
import "./Banner.css"

const Banner = () => {
  return (
    <div className="banner">
      {/* Small Welcome Banner */}
      <div className="small-banner">HERZLICH WILLKOMMEN</div>

      {/* Subscribe Form Styled to Match Reference */}
      <div className="overlay">
        <h2>WAS MÖCHTEST DU KOCHEN?</h2>
        <form className="subscribe-form">
          {/* Search Icon */}
          <div className="icon">
            <FiSearch size={18} color="#555" />
          </div>
          <input type="email" placeholder="Rezepte, Zutaten, Trends..." required />
        </form>
      </div>
    </div>
  );
};

export default Banner;
