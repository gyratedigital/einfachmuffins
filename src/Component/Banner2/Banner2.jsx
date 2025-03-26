import React, { useState } from "react";
import { GiChickenOven, GiFriedFish ,GiFullPizza} from "react-icons/gi"; // Food icons
import { FaClock, FaHeart, FaRegHeart, FaStar, FaStarHalfAlt } from "react-icons/fa"; // Rating & Time icons
import { Link } from "react-router-dom";
import "./Banner2.css";

const Banner2 = () => {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const recipes = [
    {
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Grilled Chicken",
      time: "30 min",
      rating: 4.5,
    },
    {
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Chocolate Cake",
      time: "45 min",
      rating: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Cheese Sandwich",
      time: "15 min",
      rating: 4,
    },
    {
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Pasta Delight",
      time: "35 min",
      rating: 4.8,
    },
    {
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title: "Grilled Chicken",
        time: "30 min",
        rating: 4.5,
      },
      {
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title: "Chocolate Cake",
        time: "45 min",
        rating: 5,
      },
      {
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title: "Cheese Sandwich",
        time: "15 min",
        rating: 4,
      },
      {
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title: "Pasta Delight",
        time: "35 min",
        rating: 4.8,
      },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return (
      <div className="flex text-yellow-400 text-lg">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} />
        ))}
        {halfStar && <FaStarHalfAlt />}
      </div>
    );
  };

  return (
    <div className="bg-[rgba(238,97,97,0.7)] my-8 relative mt-20">
      <div className="container py-6 mx-auto px-4">
        {/* Top Icon */}
        <div className="absolute top-[-40px] left-[72%] flex z-10 text-6xl md:text-7xl lg:text-8xl">
  <GiFullPizza className="food-icon text-black-400 drop-shadow-lg" />
</div>


        {/* Heading */}
        <h1 className="text-center text-white font-bold text-3xl sm:text-2xl md:text-3xl mb-6">
          Our Delicious Recipes
        </h1>

        {/* Recipe Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="relative rounded-lg shadow-lg p-3 transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="relative">
                <img
                  className="w-full h-[200px] object-cover rounded-md transition duration-300 hover:brightness-110"
                  src={recipe.image}
                  alt={recipe.title}
                />

                {/* Tag */}
                <button className="absolute top-3 left-3 bg-red-500 text-white text-sm px-3 py-1 rounded-md font-semibold">
                  Simple
                </button>

                {/* Favorite Button */}
                <button
                  className="absolute top-3 right-3 text-red-500 bg-white rounded-full p-2 shadow-md hover:bg-red-500 hover:text-white transition"
                  onClick={() => toggleFavorite(index)}
                >
                  {favorites[index] ? <FaHeart /> : <FaRegHeart />}
                </button>
              </div>

              {/* Recipe Title */}
              <h2 className="mt-3 text-lg font-bold text-gray-800 text-center">{recipe.title}</h2>

              {/* Time & Rating */}
              <div className="flex justify-between items-center mt-2 text-gray-600 text-sm font-semibold px-2">
                <span className="flex items-center gap-2">
                  <FaClock /> {recipe.time}
                </span>
                <div className="stars">{renderStars(recipe.rating)}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-6">
          <Link to="/list">
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200 transition">
              Explore More
            </button>
          </Link>
        </div>

        {/* Bottom Icon */}
        <div className="absolute bottom-[-40px] left-[18%] flex z-[1] text-6xl md:text-7xl lg:text-8xl text-black drop-shadow-lg">
  <GiChickenOven />
</div>

      </div>
    </div>
  );
};

export default Banner2;
