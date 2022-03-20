import React, { memo, useMemo } from "react";

const DemoList = ({ items, title }) => {
  console.log("DemoList RUNNING");
  /*
    DemoList가 실행될 때마다 sorting 작업을 실행하면 비효율적이므로,
    sort하는 배열이 바뀌지 않는 이상 같은 값을 저장하여 재사용한다.
  */
  const sortedList = useMemo(() => {
    console.log("items sorted");
    return items.sort((a, b) => a - b);
  }, [items]);

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default memo(DemoList);
