import React, { useState } from "react";
import { FaClock, FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import "./FoodCard.css";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> f4ebc5195dbe16e8d4d55e18c2a340288630de61

const FoodCard = ({ data }) => {
  const [favorites, setFavorites] = useState({});
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    type: "",
    difficulty: "",
    bakingForm: [],
  });

  const toggleFavorite = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleTagFilter = (tag) => {
    setFilters((prev) => ({
      ...prev,
      bakingForm: prev.bakingForm.includes(tag)
        ? prev.bakingForm.filter((t) => t !== tag)
        : [...prev.bakingForm, tag],
    }));
  };

  const resetFilters = () => {
    setFilters({
      search: "",
      category: "",
      type: "",
      difficulty: "",
      bakingForm: [],
    });
  };

  const filteredData = data.filter((item, index) => {
    if (filters.search && !item.recipeTitle.toLowerCase().includes(filters.search.toLowerCase()))
      return false;
    if (filters.category && item.category !== filters.category) return false;
    if (filters.type && item.type !== filters.type) return false;
    if (filters.difficulty && item.difficulty !== filters.difficulty) return false;
    if (filters.bakingForm.length > 0 && !filters.bakingForm.some((tag) => item.bakingForm.includes(tag)))
      return false;
    return true;
  });

  return (
    <div className="container mx-auto p-4">
      {/* 🔍 Filter Bar */}
     {/* 🔍 Filter Bar */}
<div className="filter-bar flex flex-wrap gap-4 mb-4">
  <input
    type="text"
    name="search"
    value={filters.search}
    onChange={handleFilterChange}
    placeholder="Textsuche"
    className="border p-2 rounded w-full md:w-1/4"
  />

  <select name="category" value={filters.category} onChange={handleFilterChange} className="border p-2 rounded w-full md:w-1/6">
    <option value="">Kategorie</option>
    <option value="Obstkuchen">Obstkuchen</option>
    <option value="Schokolade">Schokolade</option>
  </select>

  <select name="type" value={filters.type} onChange={handleFilterChange} className="border p-2 rounded w-full md:w-1/6">
    <option value="">Teigarten</option>
    <option value="Mürbeteig">Mürbeteig</option>
    <option value="Hefeteig">Hefeteig</option>
  </select>

  <select name="difficulty" value={filters.difficulty} onChange={handleFilterChange} className="border p-2 rounded w-full md:w-1/6">
    <option value="">Eigenschaften</option>
    <option value="Einfach">Einfach</option>
    <option value="Fortgeschritten">Fortgeschritten</option>
  </select>
</div>


      {/* 🏷️ Tag-Based Filters */}
      <div className="tag-filters justify-center flex flex-wrap gap-2 mb-4">
        {["Springform", "Kastenkuchen", "Gugelhupf", "Blechkuchen"].map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagFilter(tag)}
            className={`border px-3 py-1 rounded ${filters.bakingForm.includes(tag) ? "bg-red-500 text-white" : "bg-white text-red-500"}`}
          >
            {tag}
          </button>
        ))}
         <button onClick={resetFilters} className="bg-red-500 text-white px-4 py-2 rounded">
          Reset
        </button>
      </div>
   

      {/* 🍰 Food Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {filteredData.map((item, index) => (
<<<<<<< HEAD
          
          <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
        >
          <Link to="/details">
=======
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
>>>>>>> f4ebc5195dbe16e8d4d55e18c2a340288630de61
            <div className="relative">
              <img src={item.image} alt={item.recipeTitle} className="w-full h-48 object-cover" />
              <button
                className="absolute top-2 right-2 text-red-500 text-xl"
                onClick={() => toggleFavorite(index)}
              >
                {favorites[index] ? <FaHeart /> : <FaRegHeart />}
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">{item.recipeTitle}</h3>
              <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
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
              <p className="text-sm mt-2">{item.additionalInfo}</p>
            </div>
          </Link>
        </div>
        
        ))}
      </div>

      {/* 📝 No Results */}
      {filteredData.length === 0 && <p className="text-gray-500 mt-4">Keine Rezepte gefunden.</p>}
    </div>
  );
};

export default FoodCard;
