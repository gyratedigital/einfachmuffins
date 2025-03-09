import React, { useState } from "react";
import { FaAppleAlt, FaClock, FaChild, FaExchangeAlt, FaHeart, FaRegHeart, FaStar } from "react-icons/fa"; // Import icons from react-icons
import "./FoodCard.css"; // Import your CSS file for styling

const FoodCard = ({ data }) => {
  const [favorites, setFavorites] = useState({}); // State to track favorite status
  const [filter, setFilter] = useState("all"); // State to track the current filter

  const toggleFavorite = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle favorite status for the card
    }));
  };

  // Filter the data based on the selected filter
  const filteredData = data.filter((item, index) => {
    if (filter === "all") return true; // Show all cards
    if (filter === "favorites") return favorites[index]; // Show only favorited cards
    if (filter === "simple") return item.tags?.includes("simple"); // Show cards with the "simple" tag
    return true;
  });

  return (
    <div>
      {/* Filter Bar */}
      <div className="filter-bar">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "favorites" ? "active" : ""}
          onClick={() => setFilter("favorites")}
        >
          Favorites
        </button>
        <button
          className={filter === "simple" ? "active" : ""}
          onClick={() => setFilter("simple")}
        >
          Simple
        </button>
      </div>

      {/* Food Cards */}
      <div className="food-cards-container">
        {filteredData.map((item, index) => (
          <div className="food-card" key={index}>
            <div className="image-container">
              <img src={item.image} alt={item.recipeTitle} className="recipe-image" />
              <button className="tag-button">Simple</button> {/* Tag button */}
              <button
                className="favorite-button"
                onClick={() => toggleFavorite(index)}
              >
                {favorites[index] ? <FaHeart /> : <FaRegHeart />} {/* Dynamic heart icon */}
              </button>
            </div>
            <div className="card-content">
              <div className="recipe-description">
                <h4>{item.recipeTitle}</h4>
                <ul className="first-row">
                  <li>
                  <FaClock /> {item.time} min
                  </li>
                  <li>
                    <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                     {Array.from({ length: 5 }, (_, i) => (
                                       <FaStar key={i} color={i < item.rating ? "#FFD700" : "#bbb"} />
                                     ))}
                                     <span>({item.rating})</span>
                                   </span>
                  </li>
               
                </ul>
              </div>
              <div className="additional-info">
                <p>{item.additionalInfo}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCard;