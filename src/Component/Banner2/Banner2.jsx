import React, { useState } from "react";
import { GiChickenOven, GiSandwich } from "react-icons/gi"; // Food icons from react-icons
import { FaClock, FaHeart, FaRegHeart, FaStar, FaStarHalfAlt } from "react-icons/fa"; // Rating & Time icons
import "./Banner2.css";

const Banner2 = () => {
     const [favorites, setFavorites] = useState({}); // State to track favorite status
    
      const toggleFavorite = (index) => {
        setFavorites((prev) => ({
          ...prev,
          [index]: !prev[index], // Toggle favorite status for the card
        }));
      };
    const recipes = [
        {
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            title: "Grilled Chicken",
            time: "30 min",
            rating: 4.5
        },
        {
            image: "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            title: "Chocolate Cake",
            time: "45 min",
            rating: 5
        },
        {
            image: "https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            title: "Cheese Sandwich",
            time: "15 min",
            rating: 4
        },
        {
            image: "https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            title: "Pasta Delight",
            time: "35 min",
            rating: 4.8
        },
    ];

    // Function to render star rating
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        return (
            <>
                {[...Array(fullStars)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                ))}
                {halfStar && <FaStarHalfAlt className="star-icon" />}
            </>
        );
    };

    return (
        <div className="banner2 bg-[rgba(238,97,97,0.7)] flex flex-col items-center p-[50px] text-center text-white relative overflow-visible">
            <div className="food-icons absolute top-[-25px] left-[74%] flex z-10">
                <GiSandwich className="food-icon" />
            </div>
            <h1 className="heading text-[36px] mb-[20px] relative z-[2]">Our Delicious Recipes</h1>

            <div className="image-container flex flex-wrap gap-[10px] justify-center mb-[2%]">
                {recipes.map((recipe, index) => (
                    <div key={index} className="image-item flex flex-col items-center relative w-[200px]">
                         <img className="w-[200px] h-[200px] object-cover rounded-[10px] shadow-md" src={recipe.image} alt={recipe.title} />
                        <button className="tag-button">Simple</button> {/* Tag button */}
                        <button
                            className="favorite-button"
                            onClick={() => toggleFavorite(index)}
                        >
                            {favorites[index] ? <FaHeart /> : <FaRegHeart />} {/* Dynamic heart icon */}
                        </button>
                        <div className="image-text">{recipe.title}</div>
                        <div className="recipe-info">
                            <span style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>

                                <FaClock className="clock-icon" /> {recipe.time}
                            </span>
                            <div className="stars">{renderStars(recipe.rating)}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="image-container flex flex-wrap gap-[10px] justify-center mb-[2%]">
                {recipes.map((recipe, index) => (
                    <div key={index} className="image-item flex flex-col items-center relative w-[200px]">
                        <img className="w-[200px] h-[200px] object-cover rounded-[10px] shadow-md" src={recipe.image} alt={recipe.title} />

                        {/* Tag button */}
                        <button className="tag-button">Simple</button>

                        {/* Favorite button (Heart Icon) */}
                        <button
                            className="favorite-button"
                            onClick={() => toggleFavorite(index)}
                        >
                            {favorites[index] ? <FaHeart className="heart-icon filled" /> : <FaRegHeart className="heart-icon" />}
                        </button>

                        <div className="image-text">{recipe.title}</div>

                        <div className="recipe-info">
                            <span className="time-info">
                                <FaClock className="clock-icon" /> {recipe.time}
                            </span>
                            <div className="stars">{renderStars(recipe.rating)}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="explore-btn">
                <button>Explore More</button>
            </div>

            <div className="food-icons-bottom absolute bottom-[-25px] left-[20%] flex z-[1]">
                <GiChickenOven className="food-icon text-[80px] text-black" />
            </div>
        </div>
    );
};

export default Banner2;
