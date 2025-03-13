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
        <div className="banner3 bg-[rgba(51,149,57,0.4)] flex flex-col items-center py-[50px] text-center text-black relative overflow-visible 
clip-path-[polygon(0%_0.75%,16.66%_0.5%,41.04%_1.75%,61.03%_0.5%,81.7%_1.5%,100%_2%,99.93%_99.28%,80.37%_99.65%,60.07%_97.95%,40.15%_100.09%,17.56%_98.12%,0.01%_100.54%)]">
            <div className="kicthen-icons absolute bottom-[7%] left-[90%] flex z-10">
                {/* <GiChickenOven className="food-icon" /> */}
                <GiForkKnifeSpoon className="spoon-icon text-[75px] text-black transition-all duration-300 ease-in-out rotate-[7deg] hover:rotate-[30deg] hover:scale-[1.1]" />

            </div>
            <h1 className="heading text-[36px] m-0  sm:text-[24px] md:text-[28px]">Our Delicious Recipes</h1>

            <div className="banner3-image-container flex flex-wrap gap-[10px] justify-center py-[2%] mx-[10%]">
                {recipes.map((recipe, index) => (
                    <div key={index} className="banner3-image-item relative">
                        <img className="object-cover rounded-[10px] shadow-md h-[150px] w-full" src={recipe.image} alt={recipe.title} />
                        <button className="tag-button">Simple</button> {/* Tag button */}
                        <button
                            className="favorite-button"
                            onClick={() => toggleFavorite(index)}
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
                        <div style={{marginTop:'5%'}}>This is demo text of recipe {index + 1}</div> {/* Placed outside image but inside image-item */}

                    </div>
                ))}
            </div>
            <div className="kicthen-icons-bottom absolute left-[2%] top-[20%] flex z-[1]">
                {/* <GiChickenOven className="food-icon" /> */}
                <GiKnifeFork className="spoon-icon text-[75px] text-black transition-all duration-300 ease-in-out rotate-[7deg] hover:rotate-[30deg] hover:scale-[1.1]" />
            </div>
        </div>
    );
};

export default Banner3;
