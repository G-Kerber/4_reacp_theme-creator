import "./ColorForm.css";
import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({ onAddColor }) {
  const initialData = {
    role: "some color",
    hex: "#E66e66",
    contrastText: "#1F1F1F",
  };
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddColor(data);

    //event.target.reset();
    event.target.elements.role.focus();
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__field">
        <label htmlFor="role" className="form__label">
          Role
        </label>
        <input
          id="role"
          type="text"
          name="role"
          className="form__input"
          defaultValue={initialData.role}
          required
        ></input>
        <label htmlFor="hex" className="form__label">
          Hex
        </label>
        <ColorInput id="hex" defaultValue={initialData.hex} />

        <label htmlFor="contrast-text" className="form__label">
          Contrast Text
          <ColorInput
            id="contrastText"
            defaultValue={initialData.contrastText}
          />
        </label>

        <button type="submit" className="form__button">
          Add Color
        </button>
      </div>
    </form>
  );
}
