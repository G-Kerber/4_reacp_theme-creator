import { useEffect, useState } from "react";

export default function ColorInput({ id, defaultValue }) {
  const [inputValue, setInputValue] = useState(defaultValue);

  function handleChangeInput(event) {
    setInputValue(event.target.value);
  }

  useEffect(() => {
    setInputValue(defaultValue);
  }, [defaultValue]);

  return (
    <>
      <input
        id={id}
        type="text"
        name={id}
        className="form__input"
        value={inputValue}
        onChange={handleChangeInput}
      ></input>
      <input
        type="color"
        className="form__input"
        value={inputValue}
        onChange={handleChangeInput}
      ></input>
    </>
  );
}
