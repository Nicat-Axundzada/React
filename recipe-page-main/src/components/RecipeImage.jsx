export default function RecipeImage({ imageUrl }) {
  return (
    <>
      <img src={imageUrl} alt="Recipe Image" className="recipe-img" />
    </>
  );
}
