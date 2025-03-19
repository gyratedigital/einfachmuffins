import React from "react";
import FAQSection from "../FAQS/FaqsSection";

const FeaturedComment = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-8">
      {/* Grid Layout for Left and Right Sides */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Side - Comment and Recipe Description (2/3 width) */}
        <div className="md:col-span-2 ">
          <h2 className="text-gray-500 uppercase text-sm font-bold">
            Featured Comment
          </h2>
          <p className="mt-2 text-xl font-bold text-gray-900">
            “This meal was incredible! We used jasmine rice instead of quinoa
            because it’s what we had and paired really well with this. Both my
            husband and I went back for seconds. The combination of flavors is
            unique and amazing. And the mint sauce totally elevates it. Will
            definitely be making again!”
          </p>
          <div className="flex justify-between items-center">
            <p className="mt-2 text-gray-600 font-bold text-sm">— Natalie</p>
            <p className="mt-4 text-purple-700 text-sm font-semibold cursor-pointer">
              82 More Comments
            </p>
          </div>
          <hr className="mt-6" />
          <div className="mt-6 text-gray-700">
            <p>
              Please make way in your tums and hearts for this terribly addicting,
              incredibly delicious chicken tikka bowl. Crispy chicken tenders
              brushed with your favorite tikka masala sauce and roasted to a perfect
              crisp, fresh cucumber crunch alongside a creamy slaw and some quick
              pickled onions, all piled on a bed of light, nutty quinoa with a
              fresh-made drinkable mint sauce that might make you{" "}
              <span className="">CRY REAL HUMAN TEARS.</span>
            </p>
            <p className="mt-4">
              It’s here. It’s a go-to lunch/dinner/bedtime snack. It couldn’t be
              easier and we simply cannot stop eating it. It’s also absolutely
              flexible and super easy to throw together, so it is very ready to be
              your new best friend.
            </p>
            <p className="mt-4">
              This isn’t chicken tikka in the traditional Indian cuisine sense where pieces of marinated chicken are grilled or baked on skewers in a tandoor oven. And it isn’t even full chicken tikka masala, which is a curried version where that chicken tikka then gets simmered in a creamy spiced tomato sauce and served over rice. Instead, we’re borrowing that delicious deeply spiced flavor using our favorite jarred version of masala sauce and giving some easy crispy chicken tenders a little brush and bake. It’s definitely a bit outside the norm, but we are absolutely here for it.
            </p>
            <p className="mt-4 text-xl font-bold text-gray-900">
              Ingredients You’ll Need To Make These Bowls Happen
            </p>
            <p className="mt-4">
              The ingredient list is plentiful here, but it’s all bits to add to the flavor parade! And though we’re definitely mixing up that drool-worthy mint sauce from scratch, we’re relying on a lot of pre-made and store-bought for the rest and whoo-boy, you can too!
            </p>
            <p className="mt-6">
              For the bowl-build:
            </p>
            <div className="mt-6 border-l-4 border-[rgb(242,242,242)] pl-4">
              <ul className="list-disc list-inside [&>li]: [&>li::marker]:text-[rgb(115,64,96)]">
                <li>crispy breaded chicken (store-bought)</li>
                <li>tikka masala sauce (also store-bought)</li>
                <li>cooked quinoa</li>
                <li>sliced or diced cucumbers</li>
                <li>pickled red onion</li>
                <li>slaw (hi, you guessed it…store-bought mix!)</li>
              </ul>
            </div>
            <p className="mt-6">
              For the bowl-build:
            </p>
            <div className="mt-6 border-l-4 border-[rgb(242,242,242)] pl-4">
              <ul className="list-disc list-inside [&>li]: [&>li::marker]:text-[rgb(115,64,96)]">
                <li>fresh mint & cilantro</li>
                <li>mayo or plain Greek yogurt</li>
                <li>salt</li>
                <li>juice of a lime</li>
                <li>garlic</li>
                <li>jalapeño</li>
              </ul>
            </div>
            <p className="mt-6">
              There are definitely some homemade options for you on the crispy chicken front, the tikka masala sauce, or the slaw, but if you want to get at your lunch/dinner all fast and furious? Well then, grab those chicken tendies from the freezer, crack that sauce jar, rip open that bag of slaw mix, and let’s get to it, ya?
            </p>
            <p className="mt-6">
              You could even buy a packet of pre-made quinoa and we wouldn’t be mad!           </p>
          </div>
          <p className="mt-6 text-xl font-bold text-gray-900">
            Prefer To Watch Instead Of Read?
          </p>
          <div className="mt-6">
            <iframe
              className="w-full  "
              height="315"
              src="https://www.youtube.com/embed/BDiBQUN_89I"
              title="Recipe Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <img
            src="/assets/images/Chicken-Tikka-Masala-Bowls-3.jpg"
            alt="Chicken Tikka Bowl"
            className="w-full mt-6"
          />
          {/* Styled Ordered List */}
          <div className="mt-8 text-gray-700">
            <h2 className="text-2xl font-bold text-gray-900">
              LET’S MAKE CHICKEN TIKKA BOWLS
            </h2>
            <p className="mt-4 text-gray-700">
              We’re gonna keep this version, our favorite version, reeeeeeaaaaaal easy.
              Some slicing and dicing to maximize your bowl chompiness, a quick sauce zip
              in the blender, but other than that, this is all pretty much a breeze.
            </p>

            {/* Styled Ordered List with Numbered Circles */}
            <div className="mt-6 border-l-4 border-[rgb(242,242,242)] pl-4">
              <ol className="space-y-6">
                <li className="flex items-center gap-4">
                  {/* Circle Number */}
                  <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-[rgb(115,64,96)] text-white font-bold text-lg">
                    1
                  </span>
                  {/* Text */}
                  <p>
                    <span className="font-bold text-gray-900">Crispy Chicken.</span> Cook according to package directions
                    and then brush with the tikka masala sauce and return to oven for an additional 5 minutes.
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  {/* Circle Number */}
                  <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-[rgb(115,64,96)] text-white font-bold text-lg">
                    2
                  </span>
                  {/* Text */}
                  <p>
                    <span className="font-bold text-gray-900">Mint Sauce.</span> Throw all the sauce ingredients in the
                    blender/food processor and zip until smooth-ish. I could put this sauce on anything and everything (see:
                    <a href="#" className="text-[rgb(115,64,96)] underline"> these butter cauli and chickpeas too!</a>).
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  {/* Circle Number */}
                  <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-[rgb(115,64,96)] text-white font-bold text-lg">
                    3
                  </span>
                  {/* Text */}
                  <p>
                    <span className="font-bold text-gray-900">Bowl Assembly.</span> Layer your quinoa, crispy chicken,
                    slaw, cucumbers, pickled red onions, and then don’t be shy with that mint sauce over the top!
                  </p>
                </li>
              </ol>
            </div>

            <p className="mt-6">
              It’s all going to be so beautiful and colorful when you get it together that
              for just a teeny tiny second you might want to just admire it for a bit but
              please, we urge you, do not waste any time staring. GET. AT. IT.
            </p>
          </div>
          <div className="mt-8 text-gray-700">
            <h2 className="text-2xl font-bold text-gray-900">
              Just Can’t Stop Swooning Over These              </h2>
            <p className="mt-4 text-gray-700">
              Like we said, these bowls are super flexible, so if you don’t want to get on the crispy chicken tender train, that’s totally fine! But we can’t be friends. (Just kidding! Maybe.) Regular skillet-seared chicken breasts totally work, too! We’ve also made it with tofu and sweet potato which were also delicious, so you can swap what you love best. Those crispy little frozen chicken fingies tho…cannot recommend enough.
            </p>
            <p className="mt-6">
              It’s also so wonderful how easy they can be. Lots of pre-made and store-bought options if you’re short on time and patience (us, always), and everything still feels so fresh and flavorful. But there are also ways to really take your time with it and make it your own. Bread and crisp your own chicken? Get at it. Wanna make your own tikka masala sauce? We’ve got a great one here. If you don’t already have some pickled red onions in your fridge, don’t worry. You can super quick toss them in a jar and get them pickling in no time. Then they’re just ready for the other hundred times you’ll inevitably make these bowls this week.
            </p>
            <img
              src="/assets/images/Chicken-Tikka-Masala-Bowls-2.jpg"
              alt="Chicken Tikka Bowl"
              className="w-full mt-6"
            />
            <p className="mt-6">
              It’s just all our favorite food adjectives in one! It’s crispy, salty, spicy, briny, cool, and creamy. How could you go wrong?! You truly can’t.              </p>
          </div>
          <FAQSection />
        </div>





        {/* Right Side - Card Design (1/3 width) */}
        <div>
          <div className="bg-gray-100 p-6  text-center flex flex-col items-center">
            {/* Title */}
            <h3 className="text-[rgb(115,64,96)] font-bold text-lg uppercase">
              FOLLOW OUR 10 YEAR
            </h3>
            {/* Name */}
            <p className="mt-2 text-[rgb(115,64,96)] font-bold text-xl">journey</p>
            {/* Tagline */}
            <p className="mt-2 text-gray-600 italic">TO BLOGGING FULL-TIME</p>
            {/* Image */}
            <img
<<<<<<< HEAD
              src="/assets/images/lindsay-bjork.jpg"
=======
              src="/assets/images/lindsay-bjork.jpeg"
>>>>>>> f4ebc5195dbe16e8d4d55e18c2a340288630de61
              alt="Lindsay and Bjork"
              className="mt-4 "
            />
            {/* Learn More Button */}
            <button className="mt-6 text-[rgb(115,64,96)] font-bold uppercase hover:underline">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedComment;