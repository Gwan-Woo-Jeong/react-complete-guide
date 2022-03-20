import React, { useCallback, useMemo, useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoList from "./components/Demo/DemoList";

function App() {
  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  /* 
    props가 배열(참조 자료형)이기 때문에 그대로 DemoList에 넘겨줄 경우,
    새로운 배열로 인식하여 DemoList가 매번 재실행된다.
    useMemo를 사용하면 배열, 객체를 저장할 수 있다.
  */
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
