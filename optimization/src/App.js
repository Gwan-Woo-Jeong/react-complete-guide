import React, { useCallback, useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("APP RUNNING");

  /*
    useCallback : save function to reuse

    useCallback의 denpedencies 
    빈 배열 : App이 처음 계산될 때의 그 상태에서 변하지 않음
    dependecies가 있을 경우 : dependencies가 변하면, 함수를 새로 업데이트하여 저장한다.
  */

  const toggleParagraphHandler = useCallback(() => {
    /*
      클로저에 의해 allowToggle은 함수가 선언되었을 때 상태로 저장되어 다시 사용된다.
      하지만, app이 allowToggle의 state 변화로 다시 실행될 때 react는 이 함수를 업데이트 시키지 않는다. (dependencies가 없기 때문)
      이럴 경우, dependencies에 allowToggle을 추가한다.
    */
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Toggle Paragraph!</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
