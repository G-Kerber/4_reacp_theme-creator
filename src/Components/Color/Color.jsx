import { useState } from "react";
import "./Color.css";
import ColorDeletion from "./ColorDeletion";
import ColorEditing from "./ColorEditing";

export default function Color({ color, onDeleteColor, onEditColor }) {
  //const [mode, setMode] = useState({ isEditing: true, isDeleting: true });
  const [mode, setMode] = useState("default");

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
      {mode === "default" && (
        <>
          <button type="button" onClick={() => setMode("delete")}>
            Delete
          </button>
          <button type="button" onClick={() => setMode("edit")}>
            Edit
          </button>
        </>
      )}
      {mode === "delete" && (
        <ColorDeletion
          key={color.id}
          id={color.id}
          onDeleteColor={onDeleteColor}
          onSetMode={onHandleMode}
        />
      )}
      {mode === "edit" && (
        <ColorEditing
          key={color.id}
          color={color}
          onEditColor={onEditColor}
          onSetMode={onHandleMode}
        />
      )}
    </div>
  );
}
