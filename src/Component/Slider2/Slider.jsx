import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { FaClock, FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Slider2 = ({ items }) => {
  const initialSlide = Math.floor(items.length / 2);
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="container mx-auto p-8">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2.8} // Adjust this value to control the number of slides visible
        initialSlide={initialSlide}
        loop={true}
        coverflowEffect={{
          rotate: 0,    
          depth: 150,   // Maintain depth effect
          modifier: 0.5,  // Keep effect intensity
          slideShadows: false, 
        }}
        breakpoints={{
          320: { slidesPerView: 1 },  // 1 slide for mobile screens
          640: { slidesPerView: 1.5 }, // 1.5 slides for small tablets
          1024: { slidesPerView: 2.8 }, // 2.8 slides for larger screens
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full bg-white rounded-lg overflow-hidden shadow-lg relative"> {/* Adjust the width here */}
              {/* Top Icons */}
              <div className="absolute top-2 left-2 flex gap-2">
                <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md text-sm font-medium">
                  Simple
                </button>
              </div>
              <button
                className="absolute top-2 right-2 text-red-500 text-xl"
                onClick={() => toggleFavorite(index)}
              >
                {favorites[index] ? <FaHeart /> : <FaRegHeart />}
              </button>
              {/* Image */}
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Card Content */}
              <div className="p-4 bg-red-500/70 text-white text-center">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <div className="flex justify-between items-center text-sm mb-2">
                  <span className="flex items-center gap-1">
                    <FaClock /> {item.time} min
                  </span>
                  <span className="flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FaStar key={i} color={i < item.rating ? "#FFD700" : "#bbb"} />
                    ))}
                    <span className="ml-1">({item.rating})</span>
                  </span>
                </div>
                <p className="text-sm mb-3">{item.description}</p>
                <button className="bg-white text-red-500 px-4 py-2 rounded-md font-bold text-sm">
                  View Details
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider2;