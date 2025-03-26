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
        slidesPerView={2.8}
        initialSlide={initialSlide}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          depth: 150,
          modifier: 0.5,
          slideShadows: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2.8 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full bg-transparent rounded-lg overflow-hidden shadow-lg relative flex flex-col items-center text-center">
              
              {/* Top Left - Simple Tag */}
              <div className="absolute top-2 left-2">
                <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md text-sm font-medium">
                  Simple
                </button>
              </div>

              {/* Heart Icon (White Background, Turns Red on Click) */}
              <button
                className={`absolute top-2 right-2 p-2 rounded-full shadow-md transition-all duration-300
                ${favorites[index] ? "bg-white text-red-500 scale-110" : "bg-white text-gray-400 hover:text-red-500 hover:scale-110"}`}
                onClick={() => toggleFavorite(index)}
              >
                {favorites[index] ? <FaHeart /> : <FaRegHeart />}
              </button>

              {/* Image - Fixed Height, No Hover Effect */}
              <div className="w-full h-72 overflow-hidden flex justify-center items-center">
                <img
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content (Footer is now solid red, not transparent) */}
              <div className="p-4 bg-[#F39090] text-white w-full">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>

                {/* Time & Rating */}
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

                {/* View Details Button */}
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
