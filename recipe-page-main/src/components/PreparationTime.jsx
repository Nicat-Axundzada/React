export default function PreparationTime({ preparation }) {
  return (
    <div className="preparation-container">
      <h3>Preparation Time</h3>
      <ul>
        <li>
          <strong>Total: </strong>
          {preparation.Total}
        </li>
        <li>
          <strong>Preparation: </strong>
          {preparation.Preparation}
        </li>
        <li>
          <strong>Cooking: </strong>
          {preparation.Cooking}
        </li>
      </ul>
    </div>
  );
}
