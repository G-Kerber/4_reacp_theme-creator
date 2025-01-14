import { useState } from "react";
import ColorForm from "../ColorForm/ColorForm";

export default function ColorEditing({ color, onEditColor, onHandleMode }) {
  const [showEditButton, setShowEditButton] = useState(true);

  function handleEditButton() {
    setShowEditButton(false);
    onHandleMode({ isEditing: true, isDeleting: false });
  }

  function handleCancelButton() {
    setShowEditButton(true);
    onHandleMode({ isEditing: true, isDeleting: true });
  }

  if (showEditButton) {
    return (
      <button
        type="button"
        className="color-card-button"
        onClick={handleEditButton}
      >
        Edit
      </button>
    );
  }
  return (
    <>
      <ColorForm
        buttonLabel="update Color"
        colorData={{
          id: color.id,
          role: color.role,
          hex: color.hex,
          contrastText: color.contrastText,
        }}
        isEditMode={true}
        onEditColor={onEditColor}
      />
      <button onClick={handleCancelButton}>Cancel</button>
    </>
  );
}
