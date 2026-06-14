import { useState } from "react";

const RecipeCard = ({ recipe, onClick }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="card" onClick={() => onClick(recipe)}>
      <img
        src={
          imgError
            ? "https://via.placeholder.com/300x200?text=No+Image"
            : recipe.image
        }
        alt={recipe.name}
        className="card-image"
        onError={() => setImgError(true)}
      />
      <div className="card-content">
        <h3>{recipe.name}</h3>
        <p>🍽️ Cuisine: {recipe.cuisine}</p>
        <p>⭐ Rating: {recipe.rating}</p>
        <p>
          ⏱️ {recipe.prepTimeMinutes} min prep | 🍳 {recipe.cookTimeMinutes} min
          cook
        </p>
        <p>🔥 {recipe.caloriesPerServing} cal/serving</p>
        <p>🔪 Difficulty: {recipe.difficulty}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
