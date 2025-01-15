import ColorForm from "../ColorForm/ColorForm";

export default function ColorEditing({ color, onEditColor, onSetMode }) {
  function handleCancelButton() {
    onSetMode("default");
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
