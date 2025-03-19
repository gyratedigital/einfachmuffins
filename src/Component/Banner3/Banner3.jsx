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
                    <FaStar key={i} className="star-icon text-yellow-400" />
                ))}
                {halfStar && <FaStarHalfAlt className="star-icon text-yellow-400" />}
            </>
        );
    };

    return (
        <div className="banner3 bg-green-500 bg-opacity-40 flex flex-col items-center py-12 text-center text-black relative overflow-visible clip-path-custom">
            <div className="absolute top-5 left-5">
                <GiKnifeFork className="text-6xl text-black rotate-12 hover:rotate-45 transition-all duration-300" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold">Our Delicious Recipes</h1>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 max-w-6xl">
                {recipes.map((recipe, index) => (
                    <div key={index} className="relative rounded-lg  ">
                        <img className="object-cover rounded-md shadow-sm h-40 w-full" src={recipe.image} alt={recipe.title} />
                        <button className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">Simple</button>
                        <button className="absolute top-2 right-2" onClick={() => toggleFavorite(index)}>
                            {favorites[index] ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-500" />}
                        </button>
                        <div className="mt-2 font-semibold text-lg">{recipe.title}</div>
                        <div className="flex justify-between items-center text-sm text-gray-600 mt-1">
                            <span className="flex items-center gap-1"><FaClock /> {recipe.time}</span>
                            <div className="flex items-center gap-1">{renderStars(recipe.rating)}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-5 right-5">
                <GiForkKnifeSpoon className="text-6xl text-black rotate-12 hover:rotate-45 transition-all duration-300" />
            </div>
        </div>
    );
};

export default Banner3;
