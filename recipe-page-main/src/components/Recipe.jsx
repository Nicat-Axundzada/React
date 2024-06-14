import RecipeImage from "./RecipeImage";
import image from "../assets/images/image-omelette.png";
import PreparationTime from "./PreparationTime";

function Recipe({
  name,
  description,
  preparation,
  ingredients,
  instructions,
  nutrition,
}) {
  return (
    <div className="container">
      <RecipeImage imageUrl={image} />
      <h1 className="recipe-name">{name}</h1>
      <p className="recipe-description">{description}</p>
      <PreparationTime preparation={preparation} />
      <div className="ingredients-container">
        <h2>Ingredients</h2>
        <ul>
          {ingredients.map((ingredient, i) => (
            <li key={i}>
              <p>{ingredient}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="instructions-container">
        <h2>Instructions</h2>
        <ol>
          {instructions.map((instruction, i) => (
            <li key={i}>
              <p>{instruction}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="nutrition-container">
        <h2>Nutrition</h2>
        <p>
          The table below shows nutritional values per serving without the
          additional filings.
        </p>
        <div className="nutrition-type">
          <p>Calories</p>
          <p>{nutrition.Calories}</p>
        </div>
        <div className="nutrition-type">
          <p>Carbs</p>
          <p>{nutrition.Carbs}</p>
        </div>
        <div className="nutrition-type">
          <p>Protein</p>
          <p>{nutrition.Protein}</p>
        </div>
        <div className="nutrition-type">
          <p>Fat</p>
          <p>{nutrition.Fat}</p>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
