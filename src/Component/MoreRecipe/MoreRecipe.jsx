import React from "react"

const MoreRecipe = (props) => {
    return (
        <div>
            <div className="max-w-6xl mx-auto p-6 mt-8">
                {/* Grid Layout with Left and Right Sections */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Left Side - Content */}
                    <div className="md:col-span-2">
                        {/* Section: Looking for More Foods */}
                        <div className="border-b pb-4">
                            <h2 className="text-xl font-bold text-gray-800">
                                LOOKING FOR MORE FOODS WITH BIG FLAVORS?
                            </h2>
                            <div className="mt-6 border-l-4 border-[rgb(242,242,242)] pl-4">
                                <ul className="mt-3 space-y-2 text-customPurple font-semibold list-disc list-inside [&>li]: [&>li::marker]:text-[rgb(115,64,96)]">
                                    <li><a href="#" className="hover:underline">Chicken Tikka Masala</a> <span className="text-gray-600 font-normal">(so delicious and made with a homemade masala sauce)</span></li>
                                    <li><a href="#" className="hover:underline">Thai Yellow Chicken with Potatoes</a> <span className="text-gray-600 font-normal">(over 160 glowing reviews, so you know it's a good one!)</span></li>
                                    <li> <a href="#" className="hover:underline">Chopped Thai-Inspired Chicken Salad</a> <span className="text-gray-600 font-normal">(healthy, fresh, and full of crunchiness)</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Tags Section */}
                        <div className="flex flex-wrap gap-2 mt-4 text-sm text-white">
                            {["ALL RECIPES", "BOWLS", "DAIRY-FREE", "DINNER", "GLUTEN-FREE", "LIME", "MEAT AND CHICKEN", "QUICK AND EASY", "QUINOA", "RECIPES", "SPRING", "SUMMER"].map((tag) => (
                                <span key={tag} className="bg-customPurple px-3 py-1 text-white">{tag}</span>
                            ))}
                        </div>

                        {/* Date */}
                        <p className="text-gray-500 text-center mt-6 mb-6 text-sm">APRIL 11, 2022</p>

                        {/* Navigation Section */}
                        <hr />
                        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-stretch p-4 mt-2 mb-2 gap-6 sm:gap-10">
    {/* Previous Recipe */}
    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-1/2">
        <img src="/assets/images/recipe1.jpg" alt="Prev Recipe" className="w-20 h-20 sm:w-24 sm:h-24 object-cover" />
        <div className="flex flex-col justify-between w-full text-center sm:text-left">
            <p className="font-bold text-sm sm:text-base">
                Baked Coconut Shrimp with Springy Rice and Honey Butter Sauce
            </p>
            <button className="bg-nextbackbtn text-white px-4 py-1 mt-2 w-fit mx-auto sm:mx-0">PREV</button>
        </div>
    </div>

    {/* Next Recipe */}
    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-1/2">
        <div className="flex flex-col justify-between w-full text-center sm:text-left">
            <p className="font-bold text-sm sm:text-base">
                Garlic Cream Bucatini with Peas and Asparagus
            </p>
            <button className="bg-nextbackbtn text-white px-4 py-1 mt-2 w-fit mx-auto sm:mx-0">NEXT</button>
        </div>
        <img src="/assets/images/recipe2.jpg" alt="Next Recipe" className="w-20 h-20 sm:w-24 sm:h-24 object-cover" />
    </div>
</div>



                        <hr />

                   {/* Created By Section */}
                   <div className="text-center mt-8">
    <h3 className="text-lg font-bold text-customPurple">❤️ CREATED BY THE FBL TEAM</h3>
    <div className="grid grid-cols-2 gap-6 justify-center mt-4">
        {[
            { name: "Katharina_Schneider", role: "Recipe Developer", img: "/assets/images/Katharina_Schneider.jpeg" },
            // { name: "Eman Kemp", role: "Editorial", img: "/assets/images/" },
            // { name: "Rita Boersma", role: "Writer", img: "/assets/images/" },
            // { name: "Emily Caruso", role: "Videographer", img: "/assets/images/" }
        ].map((member) => (
            <div key={member.name} className="flex flex-col sm:flex-row items-center gap-4">
                <img src={member.img} alt={member.name} className="w-20 h-20 object-cover rounded-full" />
                <div className="text-center sm:text-start">
                    <p className="font-bold text-gray-800">{member.name}</p>
                    <p className="text-sm text-gray-500">{member.role}</p>
                </div>
            </div>
        ))}
    </div>
</div>

                    </div>

                    {/* Right Side - Empty */}
                    <div className="hidden md:block"></div>
                </div>
            </div>
        </div>
    )
};

export default MoreRecipe;
