import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { nanoid } from "nanoid";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(newColor) {
    setColors([{ id: nanoid(), ...newColor }, ...colors]);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm key={nanoid()} onAddColor={handleAddColor} />
      {colors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
