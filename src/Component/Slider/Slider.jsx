import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaHeart, FaClock, FaStar, FaRegHeart } from "react-icons/fa"; // Importing Icons
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css"; // Import the CSS file

const Slider = ({ items }) => {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="container mx-auto px-4 py-6 min-h-[500px] flex items-center">
      <Swiper
        className="mb-4 w-full" // Added margin-bottom to the Swiper wrapper
        slidesPerView={4}
        loop={true}
        spaceBetween={20}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 }, // Smallest screens
          480: { slidesPerView: 2, spaceBetween: 15 }, // Mobile
          768: { slidesPerView: 3, spaceBetween: 20 }, // Tablets
          1024: { slidesPerView: 4, spaceBetween: 20 }, // Desktops
        }}
        modules={[Pagination, Autoplay]}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slider-item w-full rounded-lg overflow-hidden shadow-xl bg-white relative mb-4 pb-4">
              
              {/* Image Wrapper */}
              <div className="relative w-full">
                <img
                  src={item.image}
                  alt={`Item ${index + 1}`}
                  className="w-full h-[240px] md:h-[220px] sm:h-[200px] object-cover rounded-t-lg transition-transform duration-300 ease-in-out hover:scale-105"
                />

                {/* Heart Icon (Favorite) */}
                <button
                  className={`absolute top-3 right-3 p-2 rounded-full transition-all transform ${
                    favorites[index]
                      ? "bg-red-500 text-white scale-110 shadow-lg"
                      : "bg-white text-gray-500 shadow-md"
                  } hover:bg-red-500 hover:text-white`}
                  onClick={() => toggleFavorite(index)}
                >
                  {favorites[index] ? <FaHeart /> : <FaRegHeart />}
                </button>
              </div>

              {/* Content Section */}
              <div className="px-4 py-3">
                <h3 className="text-center font-bold text-gray-900 text-lg">{item.title}</h3>

                <div className="flex justify-between items-center text-md text-gray-600 font-bold mt-2 mb-3">
                  {/* Cooking Time */}
                  <span className="flex items-center gap-1">
                    <FaClock className="text-[#ff6f61]" /> {item.time} min
                  </span>

                  {/* Rating System */}
                  <span className="flex items-center gap-1">
                    <FaStar className="text-[#FFD700]" /> {/* Always show 1 filled star */}
                    <span>{item.rating.toFixed(1)}</span> {/* Show average rating */}
                    <span className="text-gray-700">({item.totalReviews})</span> {/* Show total reviews */}
                  </span>
                </div>

                <p className="text-center text-sm text-gray-700">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
