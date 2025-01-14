import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { nanoid } from "nanoid";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(initialColors);

  const initialData = {
    role: "some color",
    hex: "#E66e66",
    contrastText: "#1F1F1F",
  };

  function handleAddColor(newColor) {
    setColors([{ id: nanoid(), ...newColor }, ...colors]);
  }

  function handleDeleteColor(colorIdToDelete) {
    setColors(colors.filter((color) => color.id !== colorIdToDelete));
  }
  function handleEditColor(colorToEdit) {
    setColors(
      colors.map((color) =>
        color.id === colorToEdit.id
          ? {
              ...color,
              role: colorToEdit.role,
              hex: colorToEdit.hex,
              contrastText: colorToEdit.contrastText,
            }
          : color
      )
    );
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm
        key={nanoid()}
        onAddColor={handleAddColor}
        buttonLabel="Add Color"
        colorData={initialData}
      />
      {colors.length > 0 ? (
        colors.map((color) => {
          return (
            <>
              <Color
                key={color.id}
                color={color}
                onDeleteColor={handleDeleteColor}
                onEditColor={handleEditColor}
              />
            </>
          );
        })
      ) : (
        <p>No Colors.. start by adding one!</p>
      )}
    </>
  );
}

export default App;
