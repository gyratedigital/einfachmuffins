import React, { useState } from "react";

const RecipeRating = () => {
  // Separate states for each section
  const [checkedIngredients, setCheckedIngredients] = useState({});
  const [checkedSlaw, setCheckedSlaw] = useState({});
  const [checkedMintSauce, setCheckedMintSauce] = useState({});

  // Handlers for each section
  const handleIngredientChange = (id) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle checkbox state
    }));
  };

  const handleSlawChange = (id) => {
    setCheckedSlaw((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle checkbox state
    }));
  };

  const handleMintSauceChange = (id) => {
    setCheckedMintSauce((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle checkbox state
    }));
  };

  // Ingredients data
  const ingredients = [
    { id: 1, text: "4 pieces of crispy breaded chicken (homemade option, or store-bought)" },
    { id: 2, text: "1/2 cup tikka masala sauce (homemade option, or store-bought)" },
    { id: 3, text: "3 cups cooked quinoa" },
    { id: 4, text: "1 cucumber, sliced or diced" },
    { id: 5, text: "pickled red onion" },
  ];

  const slaw = [
    { id: 1, text: "2 cups shredded coleslaw" },
    { id: 2, text: "3 tablespoons mayo" },
    { id: 3, text: "2 tablespoons vinegar" },
    { id: 4, text: "3/4 teaspoon salt" },
  ];

  const mintsauce = [
    { id: 1, text: "1/4 cup mint leaves" },
    { id: 2, text: "1/4 cup cilantro leaves" },
    { id: 3, text: "1/2 cup mayo or plain Greek yogurt" },
    { id: 4, text: "1/2 teaspoon salt" },
    { id: 5, text: "juice of a lime" },
    { id: 6, text: "1 clove garlic" },
    { id: 7, text: "1 hunk of jalapeño" },
    { id: 8, text: "water to thin the sauce as needed" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 mt-8">
      {/* Grid Layout for Left and Right Sections */}
<<<<<<< HEAD
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">        {/* Left Side - Recipe Info */}
=======
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Side - Recipe Info */}
>>>>>>> f4ebc5195dbe16e8d4d55e18c2a340288630de61
        <div className="md:col-span-2">
          <div className="bg-customPurple text-white p-6 relative">
            {/* Recipe Image */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
    <img
      src="/assets/images/ratingimg.jpg"
      alt="Crispy Chicken Tikka Bowl"
      className="w-32 h-32 rounded-full object-cover border-4 border-customPurple shadow-lg"
    />
  </div>

            {/* Recipe Title */}
            <h2 className="mt-20 text-3xl font-bold text-white text-center">
              Crispy Chicken Tikka Bowls With Mint Sauce
            </h2>

            {/* Rating Stars */}
            <div className="flex flex-col items-center justify-center mt-2">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="ml-2 text-gray-300 text-sm">(4.9 from 44 reviews)</p>
            </div>

            {/* Time and Yield */}
            <div className="flex justify-center items-center gap-4 mt-4 text-gray-300 text-sm">
              <p>⏱️ <span className="font-semibold text-white">Total Time:</span> 30 minutes</p>
              <p>🍽️ <span className="font-semibold text-white">Yield:</span> 4 bowls</p>
            </div>
          </div>

          {/* Print & Pin Buttons */}
          <div className="bg-customPurple p-2">
            <div className="bg-white p-4">
              <div className="flex justify-center gap-4 mt-6">
                <button className="w-full px-6 py-2 bg-[rgb(242,242,242)] text-customPurple font-semibold hover:bg-gray-300">
                  🖨️ Print
                </button>
                <button className="w-full px-6 py-2 bg-[rgb(242,242,242)] text-customPurple font-semibold hover:bg-gray-300">
                  📌 Pin
                </button>
              </div>

              {/* Recipe Description */}
              <p className="mt-4 text-gray-700">
                Bringing you these addicting Chicken Tikka Bowls! Crispy bits of chicken tenders,
                crispy cucumbers, and briny pickled onions, all on a bed of fluffy quinoa with a
                swoop of cool mint sauce on top. You absolutely cannot go wrong with these bowls.
              </p>

              <hr className="mt-6 mb-6" />

              {/* Scale Selection */}
              <div className="flex justify-between items-center space-x-4 text-gray-700 text-sm mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-400 uppercase">Ingredients</h3>
                </div>
<<<<<<< HEAD
                <div className="flex flex-wrap justify-between items-center gap-5">
=======
                <div className="flex justify-between items-center gap-5">
>>>>>>> f4ebc5195dbe16e8d4d55e18c2a340288630de61
                  <div className="flex justify-between items-center gap-1">
                    <span>UNITS</span>
                    <button className="px-2 py-1 border rounded bg-black text-white">US</button>
                    <button className="px-2 py-1 border rounded">M</button>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <span>SCALE</span>
                    <button className="px-2 py-1 border rounded">1/2x</button>
                    <button className="px-2 py-1 border rounded bg-black text-white">1x</button>
                    <button className="px-2 py-1 border rounded">2x</button>
                  </div>
                </div>
              </div>

              {/* Ingredients Section */}
              <div className="mt-6">
                <h4 className="text-lg font-bold mb-6">Crispy Chicken Tikka Bowls</h4>
                <ul className="space-y-2">
                  {ingredients.map((item) => (
                    <li key={item.id} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        className="w-5 h-5 accent-black"
                        checked={checkedIngredients[item.id] || false}
                        onChange={() => handleIngredientChange(item.id)}
                      />
                      <span className={`text-gray-700 ${checkedIngredients[item.id] ? "line-through text-gray-500" : ""}`}>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Slaw Section */}
              <div className="mt-6">
                <h4 className="text-lg font-bold mb-6">Slaw</h4>
                <ul className="space-y-2">
                  {slaw.map((item) => (
                    <li key={item.id} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        className="w-5 h-5 accent-black"
                        checked={checkedSlaw[item.id] || false}
                        onChange={() => handleSlawChange(item.id)}
                      />
                      <span className={`text-gray-700 ${checkedSlaw[item.id] ? "line-through text-gray-500" : ""}`}>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mint Sauce Section */}
              <div className="mt-6">
                <h4 className="text-lg font-bold mb-6">Mint Sauce</h4>
                <ul className="space-y-2">
                  {mintsauce.map((item) => (
                    <li key={item.id} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        className="w-5 h-5 accent-black"
                        checked={checkedMintSauce[item.id] || false}
                        onChange={() => handleMintSauceChange(item.id)}
                      />
                      <span className={`text-gray-700 ${checkedMintSauce[item.id] ? "line-through text-gray-500" : ""}`}>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructions Section */}
              <div className="mt-8 text-gray-700">
                <h2 className="text-2xl font-bold text-gray-400">Instructions</h2>
                <div className="mt-6">
                  <ol className="space-y-6">
                    <li className="flex items-center gap-4">
                      <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-[rgb(115,64,96)] text-white font-bold text-lg">
                        1
                      </span>
                      <p className="text-gray-700">
                        Cook the chicken according to package directions. Brush with sauce and return to oven for an additional 5 minutes.
                      </p>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-[rgb(115,64,96)] text-white font-bold text-lg">
                        2
                      </span>
                      <p className="text-gray-700">
                        While the chicken is cooking, prep all your other elements (mix your slaw together, slice your cucumbers, etc.).
                      </p>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-[rgb(115,64,96)] text-white font-bold text-lg">
                        3
                      </span>
                      <p className="text-gray-700">
                        For the mint sauce, blend or pulse the ingredients through a food processor to make a smooth-ish sauce.
                      </p>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-[rgb(115,64,96)] text-white font-bold text-lg">
                        4
                      </span>
                      <p className="text-gray-700">
                        Serve bowls with quinoa, slaw, cucumbers, pickled red onions, and sauce over the top. It’s crispy, salty, spicy, briney, cool, and creamy. DROOL.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Footer Section */}
            <div className="flex flex-wrap justify-center items-center bg-[rgb(242,242,242)] pt-2 pb-2 px-8 gap-5 text-gray-600 text-sm font-medium">
              <div className="flex items-center space-x-1">
                <span>⏳</span>
                <span className="font-bold">PREP TIME:</span>
                <span>10 minutes</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>⏳</span>
                <span className="font-bold">COOK TIME:</span>
                <span>20 minutes</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>📂</span>
                <span className="font-bold">CATEGORY:</span>
                <span>Bowl</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>📖</span>
                <span className="font-bold">METHOD:</span>
                <span>Bake</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>🏳️</span>
                <span className="font-bold">CUISINE:</span>
                <span>Indian-Inspired</span>
              </div>
            </div>

            {/* Nutrition Facts Section */}
            <div className="bg-customPurple text-white">
              <div className="pl-4 mt-4">
                <h2 className="text-xl font-bold uppercase">Nutrition Facts</h2>
                <p className="italic text-sm mt-1">Serves 3</p>
                <p className="text-lg font-bold mt-1">
                  Calories Per Serving: <span className="text-xl">574</span>
                </p>
              </div>
              <div className="bg-white text-gray-700 mt-4 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-right">
                      <th className="text-left py-2 pl-4"> </th>
                      <th className="py-2 pr-4">% Daily Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Total Fat", "31.9g", "41%"],
                      ["Cholesterol", "56.6mg", "19%"],
                      ["Sodium", "972.2mg", "42%"],
                      ["Total Carbohydrate", "43.6g", "16%"],
                      ["Dietary Fiber", "5.7g", "20%"],
                      ["Sugars", "2.9g", ""],
                      ["Protein", "25.9g", "52%"],
                      ["Vitamin A", "24.1μg", "3%"],
                      ["Vitamin C", "25.9mg", "29%"],
                      ["Iron", "3.5mg", "19%"],
                      ["Potassium", "461.6mg", "10%"],
                      ["Phosphorus", "287.9mg", "23%"],
                    ].map(([label, value, dailyValue], index) => (
                      <tr
                        key={index}
                        className={`border-b text-right ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                      >
                        <td className="py-2 pl-4 text-left font-semibold">{label} <span className="text-gray-500 font-normal">{value}</span></td>
                        <td className="py-2 pr-4 font-bold text-[#72305E]">{dailyValue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Keywords Section */}
              <div className="bg-gray-200 text-gray-600 text-sm p-6 mt-4 text-center">
                <strong className="uppercase">Keywords:</strong> chicken tikka bowls, chicken tikka, easy chicken tikka recipe
              </div>

              {/* Footer Section */}
              <div className="text-white p-4 flex items-center">
                <span className="text-2xl">📸</span>
                <p className="ml-3">
                  <strong>Did you make this recipe?</strong> <br />
                  Tag <span className="font-bold text-yellow-300">@pinchofyum</span> on Instagram so we can admire your masterpiece! 🌟
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeRating;