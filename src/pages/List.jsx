import React from "react"
import FoodCard from "../Component/FoodCard/FoodCard";
import NavBar from "../Component/Navbar/Navbar";
import SocialMedia from "../Component/Socialmedia/Socialmedia";
import Footer from "../Component/Footer/Footer";

const List = (props) => {
  const foodData = [
    {
      "title": "Einfach",
      "subtitle": "Ohne Aufwand",
      "recipeName": "STREUSELTEIG",
      "servings": "5 (7)",
      "recipeTitle": "Apple Crumble – schnell und einfach",
      "time": 30,
      "rating": 4,
      "image": "/assets/images/Ameisenkuchen-mit-Eierlikoer.jpg",
      "additionalInfo": "Perfect for a quick dessert",
      "category": "Obstkuchen",
      "type": "Mürbeteig",
      "difficulty": "Einfach",
      "bakingForm": ["Springform"],
      "description": "Ein köstliches, knuspriges Dessert mit süßen "
    },
    {
      "title": "Schnell",
      "subtitle": "Mit wenig Aufwand",
      "recipeName": "SCHOKOKUCHEN",
      "servings": "8",
      "recipeTitle": "Schokoladenkuchen – einfach und lecker",
      "time": 30,
      "rating": 4,
      "image": "/assets/images/Applecrumble.jpg",
      "additionalInfo": "Ideal for chocolate lovers!",
      "category": "Schokolade",
      "type": "Mürbeteig",
      "difficulty": "Fortgeschritten",
      "bakingForm": ["Kastenkuchen"],
      "description": "Saftiger Schokoladenkuchen mit einer feinen Kakaonote "
    },
    {
      "title": "Schnell",
      "subtitle": "Mit wenig Aufwand",
      "recipeName": "SCHOKOKUCHEN",
      "servings": "8",
      "recipeTitle": "Schokoladenkuchen – einfach und lecker",
      "time": 30,
      "rating": 4,
      "image": "/assets/images/Carrot-Cake-mit-Frosting-8.jpg",
      "additionalInfo": "Perfect for cake lovers!",
      "category": "Schokolade",
      "type": "Hefeteig",
      "difficulty": "Einfach",
      "bakingForm": ["Blechkuchen"],
      "description": "Ein weicher und fluffiger Schokoladenkuchen "
    },
    {
      "title": "Einfach",
      "subtitle": "Ohne Aufwand",
      "recipeName": "STREUSELTEIG",
      "servings": "5 (7)",
      "recipeTitle": "Apple Crumble – schnell und einfach",
      "time": 30,
      "rating": 4,
      "image": "/assets/images/Ameisenkuchen-mit-Eierlikoer.jpg",
      "additionalInfo": "Perfect for a quick dessert",
      "category": "Obstkuchen",
      "type": "Mürbeteig",
      "difficulty": "Einfach",
      "bakingForm": ["Springform"],
      "description": "Knusprige Streusel treffen auf saftige Äpfel "
    },
    {
      "title": "Einfach",
      "subtitle": "Ohne Aufwand",
      "recipeName": "STREUSELTEIG",
      "servings": "5 (7)",
      "recipeTitle": "Apple Crumble – schnell und einfach",
      "time": 30,
      "rating": 4,
      "image": "/assets/images/Ameisenkuchen-mit-Eierlikoer.jpg",
      "additionalInfo": "Perfect for a quick dessert",
      "category": "Obstkuchen",
      "type": "Mürbeteig",
      "difficulty": "Einfach",
      "bakingForm": ["Springform"],
      "description": "Der perfekte Crumble für spontane Dessertgelüste !"
    },
    {
      "title": "Einfach",
      "subtitle": "Ohne Aufwand",
      "recipeName": "STREUSELTEIG",
      "servings": "5 (7)",
      "recipeTitle": "Apple Crumble – schnell und einfach",
      "time": 30,
      "rating": 4,
      "image": "/assets/images/Ameisenkuchen-mit-Eierlikoer.jpg",
      "additionalInfo": "Perfect for a quick dessert",
      "category": "Obstkuchen",
      "type": "Mürbeteig",
      "difficulty": "Einfach",
      "bakingForm": ["Springform"],
      "description": "Schnell gebacken und unwiderstehlich lecker "
    },
    {
      "title": "Einfach",
      "subtitle": "Ohne Aufwand",
      "recipeName": "STREUSELTEIG",
      "servings": "5 (7)",
      "recipeTitle": "Apple Crumble – schnell und einfach",
      "time": 30,
      "rating": 4,
      "image": "/assets/images/Ameisenkuchen-mit-Eierlikoer.jpg",
      "additionalInfo": "Perfect for a quick dessert",
      "category": "Obstkuchen",
      "type": "Mürbeteig",
      "difficulty": "Einfach",
      "bakingForm": ["Springform"],
      "description": "Süß, knusprig und voller Geschmack – dieser "
    },
    {
      "title": "Schnell",
      "subtitle": "Mit wenig Aufwand",
      "recipeName": "SCHOKOKUCHEN",
      "servings": "8",
      "recipeTitle": "Schokoladenkuchen – einfach und lecker",
      "time": 30,
      "rating": 4,
      "image": "/assets/images/Applecrumble.jpg",
      "additionalInfo": "Ideal for chocolate lovers!",
      "category": "Schokolade",
      "type": "Mürbeteig",
      "difficulty": "Fortgeschritten",
      "bakingForm": ["Gugelhupf"],
      "description": "Dieser Schokokuchen begeistert mit einer saftigen "
    },
  ];
  
  return (
    <div>
        <NavBar/>

 <FoodCard data={foodData} /> 
 <SocialMedia/>
 <Footer/>  
  </div>
  )
};

export default List;
