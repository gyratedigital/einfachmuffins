import React, { useState } from "react";
import "./Banner3.css";
import { GiForkKnifeSpoon, GiKnifeFork, } from "react-icons/gi"; // Food icons from react-icons
import { FaClock, FaHeart, FaRegHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";


const Banner3 = () => {
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
        <div className="banner3">
            <div className="kicthen-icons">
                {/* <GiChickenOven className="food-icon" /> */}
                <GiForkKnifeSpoon className="spoon-icon" />

            </div>
            <h1 className="heading">Our Delicious Recipes</h1>

            <div className="banner3-image-container">
                {recipes.map((recipe, index) => (
                    <div key={index} className="banner3-image-item">
                        <img src={recipe.image} alt={recipe.title} />
                        <button className="tag-button">Simple</button> {/* Tag button */}
                        <button
                            className="favorite-button"
                            onClick={() => toggleFavorite(index)}
                        >
                            {favorites[index] ? <FaHeart /> : <FaRegHeart />} {/* Dynamic heart icon */}
                        </button>
                        <div className="banner3-image-text">Recipe {index + 1}</div> {/* Placed outside image but inside image-item */}
                        <div className="recipe-info">
                                                   <span style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                       
                                                       <FaClock className="clock-icon" /> {recipe.time}
                                                   </span>
                                                   <div className="stars">{renderStars(recipe.rating)}</div>
                                               </div>
                        <div style={{marginTop:'5%'}}>This is demo text of recipe {index + 1}</div> {/* Placed outside image but inside image-item */}

                    </div>
                ))}
            </div>
            <div className="kicthen-icons-bottom ">
                {/* <GiChickenOven className="food-icon" /> */}
                <GiKnifeFork className="spoon-icon" />

            </div>
        </div>
    );
};

export default Banner3;
