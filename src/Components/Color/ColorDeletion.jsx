import "./Color.css";

export default function ColorDeletion({ id, onDeleteColor, onSetMode }) {
  function handleCancel() {
    onSetMode("default");
  }

  return (
    <>
      <p className="color-card-hightlight">Really delete?</p>
      <button
        type="button"
        className="color-card-button"
        onClick={handleCancel}
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
