import "./Color.css";

export default function ColorDeletion({ id, onDeleteColor, onSetMode }) {
  function handleCancelButton() {
    onSetMode("default");
  }

  return (
    <>
      <p className="color-card-hightlight">Really delete?</p>
      <button
        type="button"
        className="color-card-button"
        onClick={handleCancelButton}
      >
        Cancel
      </button>
      <button
        type="button"
        className="color-card-button"
        onClick={() => onDeleteColor(id)}
      >
        Delete
      </button>
    </>
  );
}
