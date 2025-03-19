import React from 'react';

const FAQSection = () => {
  return (
    <div className="max-w-3xl mx-auto bg-gray-100 p-6 mt-8 rounded-lg shadow">
<h2 className="text-[1.563em] font-bold uppercase tracking-[.1em] leading-[1.25] text-gray-600 mb-0 ">
  CHICKEN TIKKA BOWLS: FREQUENTLY ASKED QUESTIONS
</h2>

    {/* FAQ 1 */}
    <div className="mt-6">
      <p className="font-bold text-gray-900">
        I have extra time and would like to make my own of some of these
        ingredients rather than purchase store-bought items. How can I do that?
      </p>
      <p className="mt-4 text-gray-700">Yay! Awesome!</p>
      <p className="mt-4 text-gray-700">
        For the chicken, bread chicken breasts in flour and pan-fry them until
        they get a golden and crispy exterior.
      </p>
      <p className="mt-4 text-gray-700">
        For the slaw, toss a few cups of shredded cabbage and carrots with mayo,
        vinegar, and salt.
      </p>
      <p className="mt-4 text-gray-700">
        For the tikka masala sauce, check out{" "}
        <a href="#" className="text-[rgb(191,89,89)] underline">
          this recipe
        </a>{" "}
        for a homemade option.
      </p>
    </div>

    {/* FAQ 2 */}
    <div className="mt-6">
      <p className="font-bold text-gray-900">How do I pickle red onions?</p>
      <p className="mt-2 text-gray-700">
        Instructions can be found in the recipe card{" "}
        <a href="#" className="text-[rgb(191,89,89)] underline">here!</a> Besides these Chicken
        Tikka Bowls, other delicious uses for pickled red onions can be on{" "}
        <a href="#" className="text-[rgb(191,89,89)] underline">
          Brussels Sprouts Tacos
        </a>
        ,{" "}
        <a href="#" className="text-[rgb(191,89,89)] underline">
          Chipotle Quinoa Burgers
        </a>
        , or on{" "}
        <a href="#" className="text-[rgb(191,89,89)] underline">
          Arugula Salad with Grapes and Black Pepper Vinaigrette
        </a>
        .
      </p>
    </div>

    {/* FAQ 3 */}
    <div className="mt-6">
      <p className="font-bold text-gray-900">
        How long will my mint sauce stay good for in the fridge?
      </p>
      <p className="mt-4 text-gray-700">
        If you make your mint sauce with yogurt, leftovers should be good for 3-4 days.
      </p>
      <p className="mt-4 text-gray-700">
        If you make the sauce with mayo, leftovers should be good for about 1 week.
        Either way, store leftovers in the fridge in a sealed container or jar.
      </p>
    </div>
  </div>
  
  );
};

export default FAQSection;