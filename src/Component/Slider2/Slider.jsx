import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { FaClock, FaStar, FaHeart, FaEllipsisV, FaRegHeart } from "react-icons/fa"; // Importing Icons
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Slider2 = ({ items }) => {
  const initialSlide = Math.floor(items.length / 2);
   const [favorites, setFavorites] = useState({}); // State to track favorite status
  
    const toggleFavorite = (index) => {
      setFavorites((prev) => ({
        ...prev,
        [index]: !prev[index], // Toggle favorite status for the card
      }));
    };

  return (
    <div style={{ position: "relative", margin: "2% 20%" }}>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        initialSlide={initialSlide}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
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
                position: "relative", // To position icons inside
              }}
            >
              {/* Top Icons (Favorite & Options) */}
              <div
                style={{
              
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0 15px",
                  zIndex: 2,
                }}
              >
                {/* Options Button */}
                <button className="tag-button">Simple</button> {/* Tag button */}


                {/* Favorite (Heart) Icon */}
                  <button
                               className="favorite-button"
                               onClick={() => toggleFavorite(index)}
                             >
                               {favorites[index] ? <FaHeart /> : <FaRegHeart />} {/* Dynamic heart icon */}
                             </button>
              </div>

              {/* Image Section */}
              <div
                style={{
                  width: "100%",
                  height: "250px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Card Content */}
              <div
                style={{
                  padding: "15px",
                  textAlign: "center",
                  backgroundColor: "rgba(238, 97, 97, 0.7)",
                  color: "#fff",
                }}
              >
                {/* Title */}
                <h3 style={{ margin: "0 0 10px", fontSize: "20px" }}>
                  {item.title}
                </h3>

                {/* Timer & Rating (Same Row with Space Between) */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "14px",
                    marginBottom: "10px",
                  }}
                >
                  {/* Time Duration */}
                  <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <FaClock /> {item.time} min
                  </span>

                  {/* Rating */}
                  <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <FaStar key={i} color={i < item.rating ? "#FFD700" : "#bbb"} />
                    ))}
                    <span style={{ marginLeft: "5px" }}>({item.rating})</span>
                  </span>
                </div>

                {/* Description */}
                <p style={{ fontSize: "14px", marginBottom: "10px" }}>
                  {item.description}
                </p>

                {/* Button */}
                <button
                  style={{
                    background: "#fff",
                    color: "#e25b5b",
                    padding: "8px 12px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
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
