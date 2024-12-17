import './Recipe.css';
import React, { useState, useEffect } from "react";

export default function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false); // Updated to handle search
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCard, setExpandedCard] = useState(null); // Track which card is expanded

  const fetchRecipes = async (query = "") => {
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
      const data = await response.json();
      setRecipes(data.recipes || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes(); // Initial fetch for all recipes
  }, []);

  const handleSearch = () => {
    fetchRecipes(searchQuery); // Fetch recipes based on search query
  };

  const handleButtonClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index); // Toggle only the clicked card
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="recipe-container">
      <h1>Recipes</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
    
      {recipes.length === 0 ? (
        <p>no data found</p>      
      ) : (
        <div className="recipe-grid">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className={`recipe-card ${expandedCard === index ? 'expanded' : ''}`}
            >
              {recipe.image && <img src={recipe.image} alt={recipe.title} className="recipe-image" />}
              <h2 className="recipe-name">{recipe.name}</h2>
              <p className="recipe-description">{recipe.description}</p>
              
              {/* Check Product Button */}
              <button
                className="recipe-button"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent event bubbling
                  handleButtonClick(index); // Toggle the clicked card
                }}
              >
                Check Product
              </button>
              
              {expandedCard === index && (
                <div className="expanded-content">
                  <div className="recipe-details">
                    <p><strong>Cooking Time:</strong> {recipe.cookingTime} mins</p>
                    <p><strong>Servings:</strong> {recipe.servings}</p>
                    <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
                    <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
                    <p><strong>Calories per Serving:</strong> {recipe.caloriesPerServing}</p>
                  </div>
                  <p><strong>Ingredients:</strong></p>
                  <ul className="recipe-ingredients">
                    {recipe.ingredients.map((ingredient, idx) => (
                      <li key={idx}>{ingredient}</li>
                    ))}
                  </ul>
                  <p><strong>Instructions:</strong> {recipe.instructions}</p>
                </div>
              )}
              <div className="recipe-footer">
                <p>Rating: {recipe.rating} / 5</p>
                <p>Reviews: {recipe.reviewCount}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
