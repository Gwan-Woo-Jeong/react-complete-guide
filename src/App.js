import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";

function App() {
  // React re-evalutes its components only if there are changes in state, props or context.
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP RUNNING");

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };
  // Real DOM re-renders if there is a change detected by React DOM
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
