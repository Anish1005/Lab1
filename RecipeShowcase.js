import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeShowcase = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('/api/recipes').then(res => setRecipes(res.data));
  }, []);

  return (
    <div>
      <h1>Recipe Showcase Platform</h1>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeShowcase;
