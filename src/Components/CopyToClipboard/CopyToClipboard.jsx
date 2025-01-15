import { useState, useEffect } from "react";

export default function CopyToClopboard(copyText) {
  const [showConfirmationMessage, setShowConfirmationMessage] = useState(false);

  function handleButtonCopy(copyText) {
    writeClipboardText(copyText);
    handleConfirmationMessage(true);
  }
  function handleConfirmationMessage(value) {
    setShowConfirmationMessage(value);
  }

  async function writeClipboardText(copyText) {
    try {
      await navigator.clipboard.writeText(copyText.copyText);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    const intervalId = setInterval(
      () => handleConfirmationMessage(false),
      3000
    );
    return () => clearInterval(intervalId);
  }, []);

  if (showConfirmationMessage === true) {
    return (
      <>
        <button>successfully copied!</button>
      </>
    );
  }

  return (
    <>
      <button onClick={() => handleButtonCopy(copyText)}>Copy</button>
    </>
  );
}
