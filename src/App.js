import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  // React re-evalutes its components only if there are changes in state, props or context.
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP RUNNING");

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };
  
  // Real DOM re-renders if there is a change detected by React DOM

  /* 
  Even if props does not change, DemoOut re-executed.
  App return statement itself is a function.
  So, whenever App function is called, those child components are re-executed.
  The prop value does not even matter for this component to be executed again.
   */

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
