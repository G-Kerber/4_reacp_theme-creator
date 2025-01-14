import "./Color.css";
import ColorDeletion from "./ColorDeletion";

export default function Color({ color, onDeleteColor }) {
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
      <ColorDeletion
        key={color.id}
        id={color.id}
        onDeleteColor={onDeleteColor}
      />
    </div>
  );
}
