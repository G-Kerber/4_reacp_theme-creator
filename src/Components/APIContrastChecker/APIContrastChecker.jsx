import { useState, useEffect } from "react";

export default function APIContrastChecker({ color }) {
  const [overallScore, setOverallScore] = useState();

  useEffect(() => {
    async function postFetch() {
      try {
        const response = await fetch(
          "https://www.aremycolorsaccessible.com/api/are-they",
          {
            method: "POST",
            body: JSON.stringify({ colors: [color.hex, color.contrastText] }),
          }
        );
        const data = await response.json();
        setOverallScore(data.overall);
      } catch (error) {
        console.log(error.message);
      }
    }
    postFetch();
  }, [color.hex, color.contrastText]);

  function backgroundColor() {
    let background = "#ffffff";
    switch (overallScore) {
      case "Nope":
        background = "#e60000";
        break;
      case "Kinda":
        background = "#c8e600";
        break;
      case "Yup":
        background = "#00e600";
        break;
      default:
      // Codeblock, wenn keine der vorherigen Bedingungen erfüllt ist
    }
    return background;
  }

  return (
    <>
      <p
        style={{
          background: backgroundColor(),
          width: "50%",
        }}
      >
        Overall Contrast Score: {overallScore}
      </p>
    </>
  );
}

/* 
Der Weg von Philipp. Sein State-hook liegt in der aufrufenden Funktion Color.jsx und er verarbeitet das Ergebnis auch dort.
Im Gegensatz dazu, verarbeitet ich alles in der API-Komponente.


export default function APIContrastChecker({ color, onResult }) {
  useEffect(() => {
    async function postFetch() {
      try {
        const response = await fetch(
          "https://www.aremycolorsaccessible.com/api/are-they",
          {
            method: "POST",
            mode: "cors",
            body: JSON.stringify({ colors: [color.hex, color.contrastText] }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const overallScore = data.overall;
        onResult({ score: `${overallScore}` });
      } catch (error) {
        console.error("Error:", error.message);
        onResult({ score: "Error checking contrast" });
      }
    }

    postFetch();
  }, [color, onResult]);

  return null;
} */
