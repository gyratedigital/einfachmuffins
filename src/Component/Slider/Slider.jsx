import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaHeart, FaClock, FaStar, FaRegHeart } from "react-icons/fa"; // Importing Icons
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css"; // Import the CSS file

const Slider = ({ items }) => {
  const [favorites, setFavorites] = useState({}); // State to track favorite status

  const toggleFavorite = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle favorite status for the card
    }));
  };

  return (
    <div className="container mx-auto">
      <Swiper
        slidesPerView={4}
        loop={true}
        spaceBetween={6}
        autoplay={false}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
        }}
        modules={[Pagination, Autoplay]}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slider-item">
              {/* Options Button (Top-Left) */}
              <button className="tag-button">Simple</button> {/* Tag button */}

              {/* Favorite (Heart) Icon */}
              <button
                className="favorite-button"
                onClick={() => toggleFavorite(index)}
              >
                {favorites[index] ? <FaHeart /> : <FaRegHeart />} {/* Dynamic heart icon */}
              </button>

              {/* Image */}
              <div className="image-container">
                <img
                  src={item.image}
                  alt={`Item ${index + 1}`}
                  className="item-image"
                />
              </div>

              {/* Rating & Timer Row */}
              <div className="rating-timer">
                {/* Timer */}
                <span className="timer">
                  <FaClock /> {item.time} min
                </span>

                {/* Rating */}
                <span className="rating">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar key={i} color={i < item.rating ? "#FFD700" : "#bbb"} />
                  ))}
                  <span>({item.rating})</span>
                </span>
              </div>

              {/* Title */}
              <h3 className="item-title">{item.title}</h3>

              {/* Description */}
              <p className="item-description">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;