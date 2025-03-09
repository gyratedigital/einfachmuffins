import React from "react";
import { FaStar, FaUtensils, FaClock, FaHeart } from "react-icons/fa"; // Icons for rating, cuisine, time, and likes
import "./Card.css"; // Optional CSS for styling

const Card = ({ chef }) => {
  return (
    <div className="card">
      {/* Left Side: Chef Image */}
      <div className="card-image">
        <img src={chef.image} alt={chef.name} />
      </div>

      {/* Right Side: Content */}
      <div className="card-content">
        {/* Rating Stars */}
     

        {/* Chef Name */}
        <h2 className="chef-name">{chef.name}</h2>

        {/* Description */}
        <p className="description">{chef.description}</p>

        {/* Additional Details */}
        <div className="details">
          <div className="detail-item">
            <FaUtensils />
            <span>{chef.cuisine}</span>
          </div>
          <div className="detail-item">
            <FaClock />
            <span>{chef.experience} years experience</span>
          </div>
          <div className="detail-item">
            <FaHeart />
            <span>{chef.likes} likes</span>
          </div>
        
        </div>
        <div className="rating">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              color={index < chef.rating ? "#FFD700" : "#C0C0C0"}
            />
          ))}
          <span>({chef.reviews} reviews)</span>
        </div>
        {/* Call to Action Button */}
        <button className="cta-button">View Profile</button>
      </div>
    </div>
  );
};

export default Card;