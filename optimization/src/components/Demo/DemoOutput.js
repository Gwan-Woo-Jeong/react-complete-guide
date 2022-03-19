import React, { memo } from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = ({ show }) => {
  console.log("DemoOutput RUNNING");
  return <MyParagraph>{show ? "This is new" : ""}</MyParagraph>;
};

/*
memo는 컴포넌트가 재계산되기 전에 props의 변화를 감지하여 변화가 있는 경우에만 재계산을 실행.
재계산이 방지되면, 자식 컴포넌트의 재계산도 일어나지 않음.
*/

export default memo(DemoOutput);
