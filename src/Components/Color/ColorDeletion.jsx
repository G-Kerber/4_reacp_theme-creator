import { useState } from "react";
import "./Color.css";

export default function ColorDeletion({ id, onDeleteColor }) {
  const [showDeleteButton, setShowDeleteButton] = useState(true);

  if (showDeleteButton) {
    return (
      <button
        type="button"
        className="color-card-button"
        onClick={() => setShowDeleteButton(false)}
      >
        Delete
      </button>
    );
  }

  return (
    <>
      <p className="color-card-hightlight">Really delete?</p>
      <button
        type="button"
        className="color-card-button"
        onClick={() => setShowDeleteButton(true)}
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
