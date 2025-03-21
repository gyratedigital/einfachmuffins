import { useState } from "react";
import { FaHeart, FaRegHeart, FaClock, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

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

  const filteredData = data.filter((item) => {
    if (filters.search && !item.recipeTitle.toLowerCase().includes(filters.search.toLowerCase())) return false;
    if (filters.category && item.category !== filters.category) return false;
    if (filters.type && item.type !== filters.type) return false;
    if (filters.difficulty && item.difficulty !== filters.difficulty) return false;
    if (filters.bakingForm.length > 0 && !filters.bakingForm.some((tag) => item.bakingForm.includes(tag))) return false;
    return true;
  });

  return (
    <div className="container mx-auto p-4">
      {/* 🔍 Filter Bar */}
      <div className="flex flex-wrap justify-center gap-4 mb-6 bg-gray-100 p-4 rounded-lg shadow-sm">
        <input
          type="text"
          name="search"
          value={filters.search}
          onChange={handleFilterChange}
          placeholder="Search recipes..."
          className="border p-2 rounded-lg w-full md:w-1/4 shadow-sm"
        />

        <select name="category" value={filters.category} onChange={handleFilterChange} className="border p-2 rounded-lg w-full md:w-1/6 shadow-sm">
          <option value="">Category</option>
          <option value="Obstkuchen">Obstkuchen</option>
          <option value="Schokolade">Schokolade</option>
        </select>

        <select name="type" value={filters.type} onChange={handleFilterChange} className="border p-2 rounded-lg w-full md:w-1/6 shadow-sm">
          <option value="">Type</option>
          <option value="Mürbeteig">Mürbeteig</option>
          <option value="Hefeteig">Hefeteig</option>
        </select>

        <select name="difficulty" value={filters.difficulty} onChange={handleFilterChange} className="border p-2 rounded-lg w-full md:w-1/6 shadow-sm">
          <option value="">Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Advanced">Advanced</option>
        </select>
        <button onClick={resetFilters} className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-red-600">Reset</button>
      </div>

      {/* 🏷️ Tag-Based Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {["Springform", "Kastenkuchen", "Gugelhupf", "Blechkuchen"].map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagFilter(tag)}
            className={`border px-3 py-1 rounded-lg shadow-sm transition ${filters.bakingForm.includes(tag) ? "bg-red-500 text-white" : "bg-white text-red-500 border-red-500 hover:bg-red-500 hover:text-white"}`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 🍰 Food Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredData.map((item, index) => (
    <div
      key={index}
      className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all h-80 flex flex-col"
    >
      <Link to="/details" className="flex flex-col h-full">
        <div className="relative">
          <img
            src={item.image}
            alt={item.recipeTitle}
            className="w-full h-48 object-cover"
          />
          <button
            className="absolute top-3 right-3 text-red-500 text-2xl bg-white rounded-full p-2 shadow-md hover:bg-red-500 hover:text-white transition"
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(index);
            }}
          >
            {favorites[index] ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
        <div className="p-4 flex flex-col justify-between flex-grow">
          <h3 className="text-lg font-bold text-gray-800">{item.recipeTitle}</h3>
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
          <p className="text-sm text-gray-700 mt-2">
            Recipe
          </p>
        </div>
      </Link>
    </div>
  ))}
</div>


      {/* 📝 No Results */}
      {filteredData.length === 0 && <p className="text-gray-500 mt-4">No recipes found.</p>}
    </div>
  );
};

export default FoodCard;
