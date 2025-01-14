import { useState } from "react";
import "./Color.css";

export default function ColorDeletion({ id, onDeleteColor, onHandleMode }) {
  const [showDeleteButton, setShowDeleteButton] = useState(true);

  function handleShowDeleteButton() {
    setShowDeleteButton(false);
    onHandleMode({ isEditing: false, isDeleting: true });
  }

  function handleCancel() {
    setShowDeleteButton(true);
    onHandleMode({ isEditing: true, isDeleting: true });
  }

  if (showDeleteButton) {
    return (
      <button
        type="button"
        className="color-card-button"
        onClick={handleShowDeleteButton}
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
