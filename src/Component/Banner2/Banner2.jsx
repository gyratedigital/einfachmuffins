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
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            title: "Chocolate Cake",
            time: "45 min",
            rating: 5
        },
        {
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            title: "Cheese Sandwich",
            time: "15 min",
            rating: 4
        },
        {
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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
                    <FaStar key={i} className="star-icon text-gold " />
                ))}
                {halfStar && <FaStarHalfAlt className="star-icon " />}
            </>
        );
    };

    return (
        <div className="bg-[rgba(238,97,97,0.7)] my-[4%] relative">
            <div className="container py-[5%] mx-auto">
                <div className="food-icons absolute top-[-25px] left-[74%] flex z-10 text-[30px] md:text-[40px] sm:text-[30px]">
                    <GiSandwich className="food-icon" />
                </div>
                <h1 className="text-center heading sm:text-[24px] text-[36px] mb-[20px] relative z-[2]  md:text-[28px]">Our Delicious Recipes</h1>
                <div className="image-container flex flex-wrap gap-[10px] justify-between py-[2%]">
                    {recipes.map((recipe, index) => (
                        <div key={index} className="image-item flex flex-col items-center relative">
                            <img className="w-full h-[200px] object-cover rounded-[10px] shadow-md" src={recipe.image} alt={recipe.title} />
                            <button className="tag-button absolute top-[10px] left-[10px] bg-[#ff6f61] text-white border-none px-[10px] py-[5px] rounded-[10px] text-[12px] font-bold cursor-pointer">Simple</button> {/* Tag button */}
                            <button
                                className=" favorite-button absolute top-[10px] right-[10px] bg-none border-none cursor-pointer "
                                onClick={()=> toggleFavorite(index)}
                            >
                                {favorites[index] ? <FaHeart /> : <FaRegHeart />} {/* Dynamic heart icon */}
                            </button>
                            <div className="image-text mt-[8px] text-white text-[16px] font-bold">{recipe.title}</div>
                            <div className="recipe-info flex items-center justify-between text-[14px] text-white mt-[8px] font-bold gap-[10px]">
                            <span className="flex items-center gap-[5px]">

                                    <FaClock className="clock-icon" /> {recipe.time}
                                </span>
                                <div className="stars flex items-center gap-[3px]">{renderStars(recipe.rating)}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="image-container flex flex-wrap gap-[10px] justify-between py-[2%]">
                    {recipes.map((recipe, index) => (
                        <div key={index} className="image-item flex flex-col items-center relative">
                            <img className="w-full h-[200px] object-cover rounded-[10px] shadow-md" src={recipe.image} alt={recipe.title} />
                            <button className="tag-button absolute top-[10px] left-[10px] bg-[#ff6f61] text-white border-none px-[10px] py-[5px] rounded-[10px] text-[12px] font-bold cursor-pointer">Simple</button> {/* Tag button */}
                            <button
                                className=" favorite-button absolute top-[10px] right-[10px] bg-none border-none cursor-pointer "
                                onClick={()=> toggleFavorite(index)}
                            >
                                {favorites[index] ? <FaHeart /> : <FaRegHeart />} {/* Dynamic heart icon */}
                            </button>
                            <div className="image-text mt-[8px] text-white text-[16px] font-bold">{recipe.title}</div>
                            <div className="recipe-info flex items-center justify-between text-[14px] text-white mt-[8px] font-bold gap-[10px]">
                            <span className="flex items-center gap-[5px]">

                                    <FaClock className="clock-icon" /> {recipe.time}
                                </span>
                                <div className="stars flex items-center gap-[3px]">{renderStars(recipe.rating)}</div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="explore-btn px-[25px] w-[170px] text-center mx-auto py-[10px] my-[2%] border-none bg-white rounded-[20px] text-black">
                    <button>Explore More</button>
                </div>

                <div className="food-icons-bottom absolute bottom-[-25px] left-[20%] flex z-[1] text-[30px] ">
                    <GiChickenOven className="food-icon text-[80px] text-black" />
                </div>
            </div>
        </div>
     );
 };

export default Banner2;
