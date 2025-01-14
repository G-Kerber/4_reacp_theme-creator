import "./ColorForm.css";
import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({
  onAddColor,
  buttonLabel,
  colorData,
  isEditMode,
  onEditColor,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    {
      isEditMode === true
        ? onEditColor({ id: colorData.id, ...data })
        : onAddColor(data);
    }
    //event.target.reset();
    event.target.elements.role.focus();
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
          defaultValue={colorData.role}
          required
        ></input>
        <label htmlFor="hex" className="form__label">
          Hex
        </label>
        <ColorInput id="hex" defaultValue={colorData.hex} />

        <label htmlFor="contrast-text" className="form__label">
          Contrast Text
          <ColorInput id="contrastText" defaultValue={colorData.contrastText} />
        </label>

        <button type="submit" className="form__button">
          {buttonLabel}
        </button>
      </div>
    </form>
  );
}
