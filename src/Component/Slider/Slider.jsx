import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaHeart, FaClock, FaStar, FaEllipsisV, FaRegHeart } from "react-icons/fa"; // Importing Icons
import "swiper/css";
import "swiper/css/pagination";

const Slider = ({ items }) => {
  const [favorites, setFavorites] = useState({}); // State to track favorite status

  const toggleFavorite = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle favorite status for the card
    }));
  };
  return (
    <div style={{ position: "relative", margin: "2% 10%" }}>
      <Swiper
        slidesPerView={4}
        loop={true}
        spaceBetween={6}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
        }}
        modules={[Pagination, Autoplay]}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                width: "100%",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                background: "#fff",
                position: "relative",
                paddingBottom: "10px",
              }}
            >
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
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.image}
                  alt={`Item ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Rating & Timer Row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 15px",
                  fontSize: "14px",
                  color: "#666",
                  fontWeight: "bold",
                }}
              >
                {/* Timer */}
                <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <FaClock /> {item.time} min
                </span>

                {/* Rating */}
                <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar key={i} color={i < item.rating ? "#FFD700" : "#bbb"} />
                  ))}
                  <span>({item.rating})</span>
                </span>
              </div>

              {/* Title */}
              <h3 style={{ textAlign: "center", fontSize: "18px", color: "#333", margin: "5px 0" }}>
                {item.title}
              </h3>

              {/* Description */}
              <p style={{ textAlign: "center", fontSize: "14px", color: "#666", padding: "0 10px" }}>
                {item.description}
              </p>


            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
