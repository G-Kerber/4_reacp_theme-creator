import { useState } from "react";
import "./Color.css";
import ColorDeletion from "./ColorDeletion";
import ColorEditing from "./ColorEditing";

export default function Color({ color, onDeleteColor, onEditColor }) {
  const [mode, setMode] = useState({ isEditing: true, isDeleting: true });

  function onHandleMode(mode) {
    setMode(mode);
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-hightlight">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {mode.isDeleting && (
        <ColorDeletion
          key={color.id}
          id={color.id}
          onDeleteColor={onDeleteColor}
          onHandleMode={onHandleMode}
        />
      )}
      {mode.isEditing && (
        <ColorEditing
          color={color}
          onEditColor={onEditColor}
          onHandleMode={onHandleMode}
        />
      )}
    </div>
  );
}
