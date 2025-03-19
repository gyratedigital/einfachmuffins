import React from "react"
import RecipeTitle from "../Component/ReceipeTitle/Receipetitle";
import NavBar from "../Component/Navbar/Navbar";
import SocialMedia from "../Component/Socialmedia/Socialmedia";
import Footer from "../Component/Footer/Footer";
import FeaturedComment from "../Component/FeaturedComent/FeaturedComent";
import FAQSection from "../Component/FAQS/FaqsSection";
import RecipeRating from "../Component/RecipeRating/RecipeRating";
import MoreRecipe from "../Component/MoreRecipe/MoreRecipe";
import CommentSection from "../Component/ComentSection/ComentSection";

const ReceipeDetails = (props) => {
    return (
        <div>
            <NavBar />

            <RecipeTitle />
            <FeaturedComment />
            <RecipeRating />
            <MoreRecipe/>
            <CommentSection/>
            <SocialMedia />
            <Footer />
        </div>
    )
};

export default ReceipeDetails;
