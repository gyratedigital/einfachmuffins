import React, { useState } from "react";
import "./Banner3.css";
import { GiForkKnifeSpoon, GiKnifeFork } from "react-icons/gi";
import { FaClock, FaHeart, FaRegHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Banner3 = () => {
    const [favorites, setFavorites] = useState({});

    const toggleFavorite = (index) => {
        setFavorites((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const recipes = [
        { image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", title: "Grilled Chicken", time: "30 min", rating: 4.5 },
        { image: "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", title: "Chocolate Cake", time: "45 min", rating: 5 },
        { image: "https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", title: "Cheese Sandwich", time: "15 min", rating: 4 },
        { image: "https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", title: "Pasta Delight", time: "35 min", rating: 4.8 },
    ];

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        return (
            <>
                {[...Array(fullStars)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                ))}
                {halfStar && <FaStarHalfAlt className="text-yellow-400" />}
            </>
        );
    };

    return (
        <div className="banner3 bg-green-500 bg-opacity-40 flex flex-col items-center py-12 text-center text-black relative overflow-visible clip-path-custom">
            {/* Top Left Icon */}
            <div className="absolute top-5 left-5 text-black">
                <GiKnifeFork className="text-4xl md:text-6xl rotate-12 hover:rotate-45 transition-all duration-300" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold">Our Delicious Recipes</h1>

            {/* Recipe Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 max-w-6xl w-full">
                {recipes.map((recipe, index) => (
                    <div 
                        key={index} 
                        className="relative rounded-lg bg-transparent shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        {/* Image */}
                        <div className="w-full h-44 overflow-hidden">
                            <img 
                                className="object-cover w-full h-full rounded-md transition-transform duration-300 hover:scale-110" 
                                src={recipe.image} 
                                alt={recipe.title} 
                            />
                        </div>

                        {/* Simple Tag */}
                        <button className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 text-xs rounded-md shadow-md">
                            Simple
                        </button>

                        {/* Favorite Button (With White Background) */}
                        <button
                            className={`absolute top-2 right-2 p-2  rounded-full shadow-md transition-all duration-300
                            ${favorites[index] ? "bg-white text-red-500 scale-110" : "bg-white text-gray-400 hover:text-red-500 hover:scale-110"}`}
                            onClick={() => toggleFavorite(index)}
                        >
                            {favorites[index] ? <FaHeart /> : <FaRegHeart />}
                        </button>

                        {/* Content */}
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-bold mb-2">{recipe.title}</h3>

                            {/* Time & Rating */}
                            <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                                <span className="flex items-center gap-1 text-lg">
                                    <FaClock /> {recipe.time}
                                </span>
                                <span className="flex items-center gap-1">
                                    {renderStars(recipe.rating)}
                                </span>
                            </div>

                            
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Right Icon */}
            <div className="absolute bottom-5 right-5 text-black">
                <GiForkKnifeSpoon className="text-4xl md:text-6xl rotate-12 hover:rotate-45 transition-all duration-300" />
            </div>
        </div>
    );
};

export default Banner3;
