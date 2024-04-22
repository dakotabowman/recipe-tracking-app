import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  const [tableBackground, setTableBackground] = useState("#ffeeca");

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  const deleteRecipe = (indexToDelete) => {
    setRecipes((prevRecipe) =>
      prevRecipe.filter((recipe, index) => index !== indexToDelete)
    );
    setTableBackground((prevColor) =>
      prevColor === "#ffeeca" ? "white" : "#ffeeca"
    );
  };

  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const createRecipe = (newRecipe) => {
    setRecipes((prevRecipe) => [...prevRecipe, newRecipe]);
  };

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate createRecipe={createRecipe} tableBackground={tableBackground}/>
    </div>
  );
}

export default App;
