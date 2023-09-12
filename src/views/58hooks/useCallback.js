import React, { useCallback, useState } from "react";

function App(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("aa");
  var handleClick = useCallback(
    (e) => {
      console.log("chuangjian");
      setCount(count + 1);
    },
    [count,name]
  );
  return (
    <div>
      {count}
      <button
        onClick={handleClick}
      >
        加1
      </button>
      {name}
      <button
        onClick={() => {
          setName("bb");
        }}
      >改名字</button>
    </div>
  );
}

export default App;
