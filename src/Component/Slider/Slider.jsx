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
    <div className="container mx-auto p-[2%]">
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
            <div className="slider-item w-full rounded-[10px] overflow-hidden shadow-sm bg-white relative pb-[10px]">
              {/* Options Button (Top-Left) */}
              <button className="tag-button absolute top-[10px] left-[10px] px-[10px] py-[5px] bg-[#ff6f61] text-white border-none rounded-[5px] text-[12px] cursor-pointer">Simple</button> {/* Tag button */}

              {/* Favorite (Heart) Icon */}
              <button
                className="favorite-button absolute top-[10px] right-[10px] bg-transparent border-none text-[18px] cursor-pointer z-[9]"
                onClick={() => toggleFavorite(index)}
              >
                {favorites[index] ? <FaHeart /> : <FaRegHeart />} {/* Dynamic heart icon */}
              </button>

              {/* Image */}
              <div className="image-container w-full">
                <img
                  src={item.image}
                  alt={`Item ${index + 1}`}
                  className="item-image w-full object-cover h-[250px]"
                />
              </div>

              {/* Rating & Timer Row */}
              <div className="rating-timer flex justify-between items-center px-[15px] py-[10px] text-[14px] text-[#666] font-bold">
                {/* Timer */}
                <span className="timer flex items-center gap-[5px]">
                  <FaClock /> {item.time} min
                </span>

                {/* Rating */}
                <span className="rating flex items-center gap-[5px]">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar key={i} color={i < item.rating ? "#FFD700" : "#bbb"} />
                  ))}
                  <span>({item.rating})</span>
                </span>
              </div>

              {/* Title */}
              <h3 className="item-title text-center text-[18px] text-[#333] my-[5px]">{item.title}</h3>

              {/* Description */}
              <p className="item-description text-center text-[14px] text-[#666] px-[10px]">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;