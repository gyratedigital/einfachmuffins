import React from "react"
import Navbar from "../Component/Navbar/Navbar"
import Banner from "../Component/Banner/Banner";
import Banner2 from "../Component/Banner2/Banner2";

import Slider from "../Component/Slider/Slider";
import Card from "../Component/Card/Card";
import chefimg from "../Zitronentorte_62.jpg"
import LeftText from "../Component/LeftText/LeftText";
import RightText from "../Component/RightText/RightText";
import Banner3 from "../Component/Banner3/Banner3";
import Slider2 from "../Component/Slider2/Slider";
import SocialMedia from "../Component/Socialmedia/Socialmedia";
import Footer from "../Component/Footer/Footer";

const Home = (props) => {
    const chef = {
        image: chefimg,
        name: "Leckerer Bauerneintopf (Bauerntopf)",
        rating: 4.5, // Rating out of 5
        reviews: 120, // Number of reviews
        description: "Heute haben wir den leckeren Bauerntopf mit Hackfleisch (für einige ist es auch ein Bauerneintopf) für dich. Der einfach nach gutem Essen duftet und auch genauso schmeckt. Das einfache Rezept bringt saftiges Hackfleisch mit knackigem…",
        cuisine: "Italian",
        cookTime: 50,
        likes: 350,
      };
    const images = [
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Pizza 1
        "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Pizza 2
        "https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Pizza 3
        "https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Pizza 4
        "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Pizza 5
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Pizza 6
        "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Pizza 7
        "https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Pizza 8
        "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Pizza 9
        "https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Pizza 10
        "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Pizza 11
        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Pizza 12
      ];
      const items = [
        {
          image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
          title: "Delicious Pizza",
      time: 30, // Cooking time in minutes
      rating: 4.0, // Average rating
      totalReviews: 120, // Total number of reviews
      description: "Hot, fresh, and loaded with premium ingredients—experience the perfect slice!"
        },
        
        {
          image: "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734",
          title: "Tasty Burger",
          time: 15,
          rating: 5,
          totalReviews: 55, // Total number of reviews
          description: "Juicy grilled burger with fresh veggies and special sauce.",
        },
        {
          image: "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734",
          title: "Spaghetti Bolognese",
          time: 45,
          rating: 4,
          totalReviews: 40, // Total number of reviews
          description: "Classic Italian pasta with rich tomato and meat sauce.",
        },
        {
          image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
          title: "Sushi Platter",
          time: 20,
          rating: 5,
          totalReviews: 45, // Total number of reviews
          description: "Freshly made sushi rolls with a variety of fillings.",
        },
        {
          image: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9",
          title: "Grilled Steak",
          time: 40,
          rating: 5,
          totalReviews: 87, // Total number of reviews
          description: "Juicy steak grilled to perfection with a side of vegetables.",
        },
        {
          image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
          title: "Chocolate Cake",
          time: 50,
          rating: 4,
          totalReviews: 32, // Total number of reviews
          description: "Rich and moist chocolate cake with creamy frosting.",
        },
        {
          image: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a",
          title: "Caesar Salad",
          time: 10,
          rating: 4,
          totalReviews: 29, // Total number of reviews
          description: "Healthy and fresh salad with crispy lettuce and dressing.",
        },
        {
          image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
          title: "Fruit Smoothie",
          time: 5,
          rating: 5,
          totalReviews: 78, // Total number of reviews
          description: "Refreshing fruit smoothie made with natural ingredients.",
        },
        {
          image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94",
          title: "Pancakes with Honey",
          time: 20,
          rating: 4,
          totalReviews: 67, // Total number of reviews
          description: "Fluffy pancakes drizzled with pure honey and berries.",
        },
        {
          image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
          title: "Shrimp Tacos",
          time: 25,
          rating: 5,
          totalReviews: 23, // Total number of reviews
          description: "Delicious tacos with seasoned shrimp and fresh toppings.",
        },
        {
          image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c",
          title: "Grilled Salmon",
          time: 35,
          rating: 5,
          totalReviews: 13, // Total number of reviews
          description: "Healthy grilled salmon served with lemon and herbs.",
        },
        {
          image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
          title: "Ice Cream Sundae",
          time: 5,
          rating: 4,
          totalReviews: 78, // Total number of reviews
          description: "Creamy vanilla ice cream topped with chocolate and nuts.",
        },
      ];
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Slider items={items} />
      <Card chef={chef} />
      <Banner2/>
      <LeftText
      heading="Delicious Recipes"
      description="Discover the Best Dishes"
      paragraph="Explore a wide variety of recipes from around the world. Whether you're a beginner or a seasoned chef, we have something for everyone.Explore a wide variety of recipes from around the world. Whether you're a beginner or a seasoned chef, we have something for everyone.Explore a wide variety of recipes from around the world. Whether you're a beginner or a seasoned chef, we have something for everyone.Explore a wide variety of recipes from around the world. Whether you're a beginner or a seasoned chef, we have something for everyone."
      buttonText="Explore Recipes"
      imageUrl="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    />
     <RightText
      heading="Delicious Recipes"
      description="Discover the Best Dishes"
      paragraph="Explore a wide variety of recipes from around the world. Whether you're a beginner or a seasoned chef, we have something for everyone.Explore a wide variety of recipes from around the world. Whether you're a beginner or a seasoned chef, we have something for everyone.Explore a wide variety of recipes from around the world. Whether you're a beginner or a seasoned chef, we have something for everyone.Explore a wide variety of recipes from around the world. Whether you're a beginner or a seasoned chef, we have something for everyone."
      buttonText="Explore Recipes"
      imageUrl="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    />
  
    <Banner3/>
    <Slider2 items={items} />
    <SocialMedia/>
    <Footer/>
    </div>
  )
};

export default Home;
