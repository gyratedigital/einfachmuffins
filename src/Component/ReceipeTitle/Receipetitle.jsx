import React from "react";
import { FaInstagram, FaPinterest, FaFacebook, FaTwitter } from "react-icons/fa";

const RecipeCard = () => {
  return (
    <div>
      <nav className="w-full bg-gray-100">
        <div className="max-w-6xl mx-auto p-4">
          <span className="font-bold text-gray-600">PINCH OF YUM</span> &gt;
          <span className="mx-2 font-bold text-gray-600">RECIPES</span> &gt;
          <span className="mx-2 font-bold text-gray-600">BOWLS</span> &gt;
          <span className="mx-2 font-bold text-gray-600">CRISPY CHICKEN TIKKA BOWLS WITH MINT SAUCE</span>
        </div>
      </nav>
      <div className="max-w-6xl mx-auto p-6">
        {/* Breadcrumb Navigation */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {/* Recipe Details */}
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900">
              Crispy Chicken Tikka Bowls with Mint Sauce
            </h1>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-gray-600 text-sm">44 REVIEWS / 4.9 AVERAGE</span>
            </div>
            <p className="mt-4 text-gray-700">
              Bringing you these addicting Chicken Tikka Bowls! Crispy bits of chicken
              tenders, crispy cucumbers, and briny pickled onions, all on a bed of fluffy
              quinoa with a swoop of cool mint sauce on top. You absolutely cannot go wrong
              with these bowls.
            </p>
            <button className="mt-4 w-full bg-gray-100 text-[rgb(115,64,96)] px-4 py-2 rounded font-semibold hover:bg-gray-200   transition duration-300">
              ⬇️ JUMP TO RECIPE
            </button>
            {/* Recipe Image */}
            <img
              src="/assets/images/Chicken-Tikka-Masala-Bowls-3.jpg"
              alt="Chicken Tikka Bowl"
              className="w-full mt-6"
            />
          </div>
          {/* Right Column: Author Card and Follow & Signup Form */}
          <div className="flex flex-col space-y-80">
            {/* Author Card */}
            <div className="bg-gray-100 p-6 pt-16 text-center relative">
              {/* Image Container */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <img
                  src="/assets/images/sidebar-lindsay.jpeg"
                  alt="Lindsay"
                  className="w-25 h-25 rounded-full"
                />
              </div>
              {/* Content */}
              <h2 className="mt-20 text-lg font-bold text-gray-900">HI! I'M LINDSAY.</h2>
              <p className="italic text-gray-600">nice to meet you!</p>
              <p className="mt-2 text-gray-700 text-sm">
                I'm a former 4th grade teacher, now full-time blogger. My husband Bjork and I
                live in Minnesota. Favorite things include my camera, lake days, and dark
                chocolate.
              </p>
              <button className="mt-4 text-customPurple font-bold hover:underline">
                LEARN MORE
              </button>
            </div>
            {/* Follow & Signup Form */}
            <div className="bg-[rgb(77,77,77)] text-white p-10 ">
              <h3 className="text-lg font-bold text-center">FOLLOW US</h3>
              <div className="flex justify-between space-x-4 mt-6">
                <FaInstagram className="text-4xl" />
                <FaPinterest className="text-4xl" />
                <FaFacebook className="text-4xl" />
                <FaTwitter className="text-4xl" />
              </div>
              <h3 className="mt-4 font-bold text-lg ">SIGN UP FOR EMAIL UPDATES</h3>
              <p className="text-sm italic text-gray-300 mb-10">Get a Free eCookbook with our top 25 recipes.</p>
              <input
                type="text"
                placeholder="First Name"
                className="mt-2 w-full p-2 text-gray-900  mb-1"
              />
              <div className="flex mt-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 text-gray-900 "
                />
                <button className="bg-yellow-500 px-4 py-2 text-white font-bold ">GO</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;