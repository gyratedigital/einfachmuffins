import React from "react"
import FoodCard from "../Component/FoodCard/FoodCard";
import NavBar from "../Component/Navbar/Navbar";
import SocialMedia from "../Component/Socialmedia/Socialmedia";
import Footer from "../Component/Footer/Footer";


const List = (props) => {

    const foodData = [
        {
          title: "Einfach",
          subtitle: "Ohne Aufwand",
          recipeName: "STREUSELTEIG",
          servings: "5 (7)",
          recipeTitle: "Apple Crumble – schnell und einfach",
          time: 30, // in minutes
          rating: 4, // 1 to 5
          image: "/assets/images/Ameisenkuchen-mit-Eierlikoer.jpg",
          additionalInfo: "Perfect for a quick dessert ",
        },
        {
          title: "Schnell",
          subtitle: "Mit wenig Aufwand",
          recipeName: "SCHOKOKUCHEN",
          servings: "8",
          recipeTitle: "Schokoladenkuchen – einfach und lecker",
          time: 30, // in minutes
          rating: 4, // 1 to 5
          image: "/assets/images/Applecrumble.jpg",
          additionalInfo: "Ideal for chocolate lovers!",
        },
        {
            title: "Schnell",
            subtitle: "Mit wenig Aufwand",
            recipeName: "SCHOKOKUCHEN",
            servings: "8",
            recipeTitle: "Schokoladenkuchen – einfach und lecker",
            time: 30, // in minutes
            rating: 4, // 1 to 5
            image: "/assets/images/Applecrumble.jpg",
            additionalInfo: "Ideal for chocolate lovers!",
          },
          {
            title: "Schnell",
            subtitle: "Mit wenig Aufwand",
            recipeName: "SCHOKOKUCHEN",
            servings: "8",
            recipeTitle: "Schokoladenkuchen – einfach und lecker",
            time: 30, // in minutes
            rating: 4, // 1 to 5
            image: "/assets/images/Carrot-Cake-mit-Frosting-8.jpg",
            additionalInfo: "Ideal for chocolate lovers!",
          },
          {
            title: "Einfach",
            subtitle: "Ohne Aufwand",
            recipeName: "STREUSELTEIG",
            servings: "5 (7)",
            recipeTitle: "Apple Crumble – schnell und einfach",
            time: 30, // in minutes
            rating: 4, // 1 to 5
            image: "/assets/images/Ameisenkuchen-mit-Eierlikoer.jpg",
            additionalInfo: "Perfect for a quick dessert ",
          },  {
            title: "Schnell",
            subtitle: "Mit wenig Aufwand",
            recipeName: "SCHOKOKUCHEN",
            servings: "8",
            recipeTitle: "Schokoladenkuchen – einfach und lecker",
            time: 30, // in minutes
          rating: 4, // 1 to 5
            image: "/assets/images/Applecrumble.jpg",
            additionalInfo: "Ideal for chocolate lovers!",
          }, {
            title: "Einfach",
            subtitle: "Ohne Aufwand",
            recipeName: "STREUSELTEIG",
            servings: "5 (7)",
            recipeTitle: "Apple Crumble – schnell und einfach",
            time: 30, // in minutes
          rating: 4, // 1 to 5
            image: "/assets/images/Ameisenkuchen-mit-Eierlikoer.jpg",
            additionalInfo: "Perfect for a quick dessert ",
          },
          {
            title: "Schnell",
            subtitle: "Mit wenig Aufwand",
            recipeName: "SCHOKOKUCHEN",
            servings: "8",
            recipeTitle: "Schokoladenkuchen – einfach und lecker",
            time: 30, // in minutes
          rating: 4, // 1 to 5
            image: "/assets/images/Applecrumble.jpg",
            additionalInfo: "Ideal for chocolate lovers!",
          },
          {
            title: "Einfach",
            subtitle: "Ohne Aufwand",
            recipeName: "STREUSELTEIG",
            servings: "5 (7)",
            recipeTitle: "Apple Crumble – schnell und einfach",
            time: 30, // in minutes
          rating: 4, // 1 to 5
            image: "/assets/images/Ameisenkuchen-mit-Eierlikoer.jpg",
            additionalInfo: "Perfect for a quick dessert ",
          },      ];
  return (
    <div>
        <NavBar/>

 <FoodCard data={foodData} /> 
 <SocialMedia/>
 <Footer/>   </div>
  )
};

export default List;
