import React from "react";

function RecipeView({ recipe, deleteRecipe }) {
  return (
    <>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td><img src={recipe.photo} height="100px"/></td>
      <td className="content_td">{recipe.ingredients}</td> {/* Apply class to this td */}
      <td className="content_td">{recipe.preparation}</td> {/* Apply class to this td */}
      <td>
        <button type="delete" name="delete" onClick={deleteRecipe}>
          Delete
        </button>
      </td>
    </>
  );
}

export default RecipeView;
