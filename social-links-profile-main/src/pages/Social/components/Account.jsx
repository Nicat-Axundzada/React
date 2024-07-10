export default function Account({ media, link }) {
  return (
    <button className="account-container">
      <a href={link}>{media}</a>
    </button>
  );
}
